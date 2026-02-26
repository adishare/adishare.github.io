import { readdirSync, statSync, readFileSync } from "node:fs";
import path from "node:path";

const SRC_DIR = path.resolve("src");

// Folders to skip scanning entirely
const IGNORE_DIRS = [
	"node_modules",
	".next",
	"__tests__",
	"__mocks__",
	"public",
	"styles",
	"coverage",
];

// App Router special files that are used by Next.js framework
const NEXT_APP_SPECIAL_FILES = [
	"page",
	"layout",
	"template",
	"error",
	"loading",
	"not-found",
	"default",
	"route",
	"middleware",
	"proxy",
].map((name) => new RegExp(`^${name}\\.[tj]sx?$`));

function listFiles(dir: string): string[] {
	return readdirSync(dir).flatMap((file) => {
		if (IGNORE_DIRS.includes(file)) return [];
		const fullPath = path.join(dir, file);
		return statSync(fullPath).isDirectory() ? listFiles(fullPath) : [fullPath];
	});
}

const allFiles = listFiles(SRC_DIR).filter((f) => /\.(ts|tsx|js|jsx)$/.test(f));

// Normalize path for comparison (remove extension and src/ prefix)
const normalizePath = (p: string) =>
	p
		.replace(/\.[tj]sx?$/, "")
		.replace(/^src[\\/]/, "")
		.replace(/\\/g, "/");

// Build a map of all files
const fileMap = new Map<string, string>();
for (const file of allFiles) {
	const relative = path.relative(process.cwd(), file);
	const normalized = normalizePath(relative);
	fileMap.set(normalized, relative);
}

// Track which files are referenced
const referencedFiles = new Set<string>();

// Mark Next.js special files as used
for (const file of allFiles) {
	const relative = path.relative(process.cwd(), file);
	// Check for special files in src/app/ or at src/ root (like middleware.ts, proxy.ts)
	if (
		(relative.startsWith("src/app/") || relative.startsWith("src/")) &&
		NEXT_APP_SPECIAL_FILES.some((rx) => rx.test(path.basename(file)))
	) {
		referencedFiles.add(normalizePath(relative));
	}
}

// Process each file to find imports
for (const file of allFiles) {
	const content = readFileSync(file, "utf-8");
	const fileDir = path.dirname(file);

	// Match all import statements (including type imports)
	const importRegex =
		/(?:import|export)(?:\s+type)?\s+(?:{[^}]*}|\*\s+as\s+\w+|\w+)\s+from\s+['"]([^'"]+)['"]/g;
	const dynamicImportRegex = /import\s*\(\s*['"]([^'"]+)['"]\s*\)/g;

	let match;

	// Process static imports
	while ((match = importRegex.exec(content)) !== null) {
		const importPath = match[1];
		resolveAndMarkImport(importPath, fileDir);
	}

	// Process dynamic imports
	while ((match = dynamicImportRegex.exec(content)) !== null) {
		const importPath = match[1];
		resolveAndMarkImport(importPath, fileDir);
	}
}

function resolveAndMarkImport(importPath: string, fromDir: string) {
	if (importPath.startsWith("@/")) {
		// Handle "@/..." alias
		const normalized = importPath.replace(/^@\//, "");
		markFileAsUsed(normalized);

		// Check if it's an index file
		markFileAsUsed(`${normalized}/index`);
	} else if (importPath.startsWith(".")) {
		// Relative import
		const resolvedPath = path.resolve(fromDir, importPath);
		const normalized = normalizePath(
			path.relative(process.cwd(), resolvedPath),
		);
		markFileAsUsed(normalized);

		// Check if it's an index file
		markFileAsUsed(`${normalized}/index`);
	}
}

function markFileAsUsed(normalized: string) {
	// Try exact match
	if (fileMap.has(normalized)) {
		referencedFiles.add(normalized);

		// If this is an index file that re-exports, mark those exports as used too
		const filePath = fileMap.get(normalized);
		if (filePath && path.basename(filePath).match(/^index\.[tj]sx?$/)) {
			processReExports(filePath);
		}
		return;
	}

	// Try with different extensions
	for (const ext of [".ts", ".tsx", ".js", ".jsx"]) {
		const withExt = `${normalized}${ext}`;
		if (fileMap.has(withExt)) {
			referencedFiles.add(withExt);

			// If this is an index file that re-exports, mark those exports as used too
			const filePath = fileMap.get(withExt);
			if (filePath && path.basename(filePath).match(/^index\.[tj]sx?$/)) {
				processReExports(filePath);
			}
			return;
		}
	}
}

function processReExports(indexFilePath: string) {
	try {
		const content = readFileSync(indexFilePath, "utf-8");
		const exportPattern = /export\s+(?:\*|{[^}]+})\s+from\s+['"]([^'"]+)['"]/g;
		const fileDir = path.dirname(indexFilePath);

		let match;
		while ((match = exportPattern.exec(content)) !== null) {
			const exportPath = match[1];
			resolveAndMarkImport(exportPath, fileDir);
		}
	} catch (error) {
		// Ignore errors
	}
}

// Find unused files
const unused = allFiles.filter((file) => {
	const relative = path.relative(process.cwd(), file);
	const normalized = normalizePath(relative);
	return !referencedFiles.has(normalized);
});

console.log("Unused files:");
if (unused.length === 0) {
	console.log("✅ None found");
} else {
	console.log(unused.map((f) => path.relative(process.cwd(), f)).join("\n"));
	console.log(`\nTotal: ${unused.length} unused files`);
}

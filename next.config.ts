import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typescript: {
		// ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
		dangerouslyAllowLocalIP: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
				port: "",
				pathname: "/**",
			},
		],
	},
	devIndicators: false,
	output: "export",
	// distDir: "dist",
};

export default nextConfig;

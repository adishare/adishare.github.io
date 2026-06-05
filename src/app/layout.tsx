import "./globals.css";

import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import React from "react";
import StickyHeader from "@/components/sticky-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Fathul Qorib Alaudit | Senior Frontend Engineer",
	description:
		"Senior Frontend Engineer portfolio focused on React, Next.js, TypeScript, SaaS platforms, performance optimization, dashboards, and remote product engineering.",
	keywords: [
		"adishare",
		"Fathul Qorib Alaudit",
		"portfolio",
		"senior frontend engineer",
		"remote frontend developer",
		"web development",
		"frontend developer",
		"UI/UX",
		"mobile developer",
		"react developer",
		"nextjs developer",
		"tailwindcss developer",
		"typescript developer",
		"saas frontend engineer",
	],
	authors: [{ name: "Fathul Qorib Alaudit" }],
	creator: "adishare",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://adishare.github.io",
		title: "Fathul Qorib Alaudit | Senior Frontend Engineer",
		description:
			"React, Next.js, and TypeScript portfolio for SaaS, dashboards, performance optimization, and remote frontend product engineering.",
		siteName: "adishare",
		images: [
			{
				url: "https://adishare.github.io/og-image.jpg", // Add your OG image
				width: 1200,
				height: 630,
				alt: "Fathul Qorib Alaudit - Senior Frontend Engineer Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Fathul Qorib Alaudit | Senior Frontend Engineer",
		description:
			"React, Next.js, and TypeScript portfolio for SaaS, dashboards, performance optimization, and remote frontend product engineering.",
		creator: "@adishare",
		images: ["https://adishare.github.io/twitter-image.jpg"], // Add your Twitter image
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "https://adishare.github.io",
	},
	metadataBase: new URL("https://adishare.github.io"),
	applicationName: "adishare Portfolio",
	generator: "Next.js",
	referrer: "origin-when-cross-origin",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
	// verification: {
	// 	google: "your-google-site-verification", // Add your Google Search Console verification code
	// },
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f4f5f6" },
		{ media: "(prefers-color-scheme: dark)", color: "#101014" },
	],
};

// Add JSON-LD structured data
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Fathul Qorib Alaudit",
	url: "https://adishare.github.io",
	jobTitle: "Senior Frontend Engineer",
	sameAs: [
		"https://github.com/adishare",
		"https://twitter.com/adishare",
		"https://www.linkedin.com/in/fathulqo",
		"https://www.instagram.com/adishare",
		"https://www.facebook.com/adishare",
	],
	knowsAbout: [
		"Frontend Engineering",
		"React",
		"Next.js",
		"TypeScript",
		"TailwindCSS",
		"SaaS Platforms",
		"Performance Optimization",
		"React Native",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://api.fontshare.com" />
				<link
					href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
					rel="stylesheet"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={`${inter.variable} antialiased bg-background text-foreground`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					<TooltipProvider>
						<Toaster />
						<StickyHeader />
						{children}
						<ContactSection />
						<Footer />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}

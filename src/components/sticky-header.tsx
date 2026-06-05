"use client";

import { Briefcase, Home, Mail, Moon, Sun, User } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function StickyHeader() {
	const { theme, setTheme } = useTheme();
	const pathname = usePathname();
	const [scrollY, setScrollY] = useState(0);
	const [mounted, setMounted] = useState(false);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollProgress = Math.min(scrollY / 100, 1);
	const navItems = [
		{ href: "/", label: "Home", icon: Home },
		{ href: "/about", label: "About", icon: User },
		{ href: "/projects", label: "Projects", icon: Briefcase },
		{ href: "/contact", label: "Contact", icon: Mail },
	];

	return (
		<header
			className={`sticky top-2 z-50 transition-all duration-500 ease-in-out mx-auto ${
				scrollY > 0
					? "backdrop-blur-md bg-white/50 dark:border dark:border-white/15 dark:bg-black/50 rounded-full shadow-xs max-w-xl mx-auto"
					: "bg-transparent dark:bg-transparent  mx-0 max-w-7xl"
			}`}
			style={{
				transform: `scale(${1 - scrollProgress * 0.05})`,
				opacity: 0.8 + scrollProgress * 0.2,
			}}
		>
			<nav
				className={cn(
					"mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center",
				)}
			>
				<div
					className={
						"flex justify-between items-center transition-all duration-500 ease-in-out w-full gap-4"
					}
				>
					{/* Logo */}
					<div className="shrink-0">
						<Link
							href="/"
							aria-label="Go to homepage"
							className="text-2xl font-thin font-clash text-accent"
						>
							aD
						</Link>
					</div>

					{/* Navigation Links */}
					<div className="flex items-center gap-4">
						{/* Desktop Navigation */}
						<div className="hidden md:flex items-baseline space-x-8">
							{navItems.map(({ href, label }) => (
								<Link
									key={href}
									href={href}
									aria-current={pathname === href ? "page" : undefined}
									className={`relative transition-colors ${
										pathname === href
											? "text-accent font-medium"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									{label}
									{pathname === href && (
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
									)}
								</Link>
							))}
						</div>

						{/* Mobile Navigation */}
						<div className="flex md:hidden items-center gap-2">
							{navItems.map(({ href, label, icon: Icon }) => (
								<Button
									key={href}
									asChild
									variant="ghost"
									size="icon"
									className={cn(
										"p-2 rounded-lg transition-colors",
										pathname === href
											? "bg-accent/10 text-accent"
											: "text-muted-foreground hover:text-foreground hover:bg-muted",
									)}
								>
									<Link
										href={href}
										aria-label={label}
										aria-current={pathname === href ? "page" : undefined}
									>
										<Icon className="h-5 w-5" />
									</Link>
								</Button>
							))}
						</div>

						{/* Dark Mode Toggle */}
					</div>
					<Button
						variant="ghost"
						size="icon"
						onClick={toggleTheme}
						aria-label="Toggle color theme"
						className="p-2 rounded-lg hover:bg-muted transition-colors"
					>
						{mounted ? (
							theme === "light" ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)
						) : (
							<Sun className="h-5 w-5" />
						)}
					</Button>
				</div>
			</nav>
		</header>
	);
}

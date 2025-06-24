"use client";

import { AtSign, Github, Instagram, Linkedin, Mail } from "lucide-react";

import { AnimatedSection } from "./ui/animated-section";

export default function Footer() {
	const socialLinks = [
		{
			icon: Linkedin,
			href: "https://www.linkedin.com/in/fathulqo",
			label: "LinkedIn",
		},
		{ icon: Github, href: "https://github.com/adishare", label: "GitHub" },
		{
			icon: Instagram,
			href: "https://www.instagram.com/adishare",
			label: "Instagram",
		},
		{ icon: Mail, href: "mailto:adie.share@gmail.com", label: "Email" },
		{
			icon: AtSign,
			href: "https://www.instagram.com/adishare",
			label: "Twitter",
		},
	];

	return (
		<AnimatedSection>
			<footer className="bg-background border-t border-border py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-muted-foreground text-sm mb-4 md:mb-0">
							© 2025 Fathul Qorib Alaudit. All rights reserved.
						</p>
						<div className="flex space-x-6">
							{socialLinks.map(({ icon: Icon, href, label }) => (
								<a
									key={label}
									href={href}
									className="text-muted-foreground hover:text-foreground transition-colors"
									aria-label={label}
								>
									<Icon className="h-5 w-5" />
								</a>
							))}
						</div>
					</div>
				</div>
			</footer>
		</AnimatedSection>
	);
}

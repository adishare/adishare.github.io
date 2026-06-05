"use client";

import {
	Award,
	ChartNoAxesCombined,
	Code2,
	Download,
	GitBranch,
	GraduationCap,
	Layers,
	MessageSquare,
	ShieldCheck,
	Smartphone,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import TechStacksSlide from "@/components/TechStacksSlide";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function About() {
	const { elementRef: heroRef, isIntersecting: heroVisible } =
		useIntersectionObserver();

	const { elementRef: experienceRef, isIntersecting: experienceVisible } =
		useIntersectionObserver();
	const { elementRef: processRef, isIntersecting: processVisible } =
		useIntersectionObserver();
	const { elementRef: awardsRef, isIntersecting: awardsVisible } =
		useIntersectionObserver();
	const { elementRef: communityRef, isIntersecting: communityVisible } =
		useIntersectionObserver();
	const resumeHref = "/Resume%20Fathul%20Qorib%20Alaudit%202026%20FE.pdf";

	const productSystems = [
		{
			title: "Enterprise dashboards",
			icon: ChartNoAxesCombined,
			description:
				"Data-heavy admin surfaces, reporting flows, and operational tools built for teams that need clarity under pressure.",
			metric: "5M+",
			metricLabel: "users supported",
		},
		{
			title: "Multi-tenant SaaS",
			icon: Layers,
			description:
				"Frontend foundations for tenant-aware products with configurable roles, reports, branding, and product behavior.",
			metric: "20+",
			metricLabel: "tenant setups",
		},
		{
			title: "Mobile delivery",
			icon: Smartphone,
			description:
				"React Native workflows, white-label UI systems, and release automation for teams shipping across platforms.",
			metric: "60%",
			metricLabel: "shorter release cycles",
		},
	];

	const careerNotes = [
		{
			label: "Current focus",
			value: "Senior frontend systems for SaaS, dashboards, and product teams",
		},
		{
			label: "Recent environment",
			value:
				"Telkom Group products, multi-tenant platforms, and mobile workflows",
		},
		{
			label: "Side practice",
			value:
				"MiCA Studio experiments around tooling, deployment, and product ideas",
		},
	];

	const processSteps = [
		{
			number: "01",
			title: "Product sense first",
			description:
				"I start by understanding what users need to do, what the business needs to learn, and what the interface must make obvious.",
			icon: MessageSquare,
		},
		{
			number: "02",
			title: "Shape the frontend system",
			description:
				"I turn unclear requirements into component boundaries, data contracts, state flow, and delivery slices the team can reason about.",
			icon: GitBranch,
		},
		{
			number: "03",
			title: "Ship with restraint",
			description:
				"I build typed, accessible, performance-aware UI without adding ceremony that slows the next iteration.",
			icon: Code2,
		},
		{
			number: "04",
			title: "Protect the release",
			description:
				"I use review, checks, performance attention, and follow-up polish so the feature holds up after launch.",
			icon: ShieldCheck,
		},
	];

	const awards = [
		{
			title: "Best Stunting Risk Management System",
			period: "Jun 2024",
			description:
				"Recognition for a healthtech platform supporting structured stunting risk management and reporting.",
			icon: Award,
		},
		{
			title: "Hacktiv8 Bootcamp Graduate",
			period: "Dec 2018",
			description:
				"Completed intensive fullstack JavaScript training before moving into product engineering roles.",
			icon: GraduationCap,
		},
	];

	const collaborationNotes = [
		{
			title: "Readable decisions",
			description: "Tradeoffs are written down, not hidden in chat history.",
		},
		{
			title: "Calm ownership",
			description: "I keep scope, risks, and follow-ups visible without drama.",
		},
		{
			title: "Good taste in details",
			description: "The UI should feel considered, not merely complete.",
		},
		{
			title: "Timezone-friendly flow",
			description:
				"Work should be easy to pick up, review, and continue async.",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
				<div
					ref={heroRef}
					className={`transition-all duration-800 ease-out ${
						heroVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
						<AnimatedSection
							animation="fade-left"
							delay={1}
							className="relative"
						>
							<img
								src="/adishare.JPG"
								alt="Fathul Qorib Alaudit"
								width={448}
								height={448}
								decoding="async"
								className="rounded-t-full w-full max-w-md mx-auto shadow-2xl"
							/>
							{/* <div className="absolute -bottom-4 -right-4 bg-white"> */}
						</AnimatedSection>

						<AnimatedSection
							animation="fade-right"
							className="relative lg:col-span-2"
						>
							<h1 className="font-clash text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
								A <span className="text-accent">Senior Frontend Engineer</span>
								<br />
								for scalable product teams
							</h1>
							<p className="text-lg text-muted-foreground leading-relaxed mb-8">
								I build frontend systems for SaaS platforms, dashboards, and
								mobile products, with a focus on performance, maintainability,
								and collaboration across product, design, and backend teams.
							</p>
							<Button
								asChild
								variant="outline"
								className="px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
							>
								<a href={resumeHref} target="_blank" rel="noreferrer">
									<Download className="h-4 w-4" />
									My Resume
								</a>
							</Button>
						</AnimatedSection>
					</div>
				</div>
			</div>

			{/* Technologies Section */}
			<div className="col-span-2 overflow-hidden">
				<TechStacksSlide />
			</div>

			{/* Product Systems Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div
					ref={experienceRef}
					className={`transition-all duration-800 ease-out ${
						experienceVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<AnimatedSection animation="fade-up">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
							<div className="lg:col-span-7">
								<p className="text-accent text-sm font-medium tracking-wider mb-5">
									PRODUCT SYSTEMS
								</p>
								<h2 className="font-clash text-4xl md:text-6xl font-medium leading-tight">
									I build the interface layer where complex products become
									usable.
								</h2>
							</div>
							<p className="lg:col-span-5 text-muted-foreground leading-relaxed text-lg">
								Instead of repeating my resume here, this page highlights the
								product surfaces I have spent the most time shaping: dashboards,
								multi-tenant SaaS, and mobile delivery systems.
							</p>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-3 border-y border-border">
							{productSystems.map((system, index) => {
								const Icon = system.icon;

								return (
									<div
										key={system.title}
										className={`py-8 lg:p-8 ${
											index > 0 ? "lg:border-l lg:border-border" : ""
										}`}
									>
										<div className="flex items-center justify-between mb-10">
											<Icon className="h-6 w-6 text-accent" />
											<span className="font-clash text-5xl font-medium text-accent">
												{system.metric}
											</span>
										</div>
										<h3 className="font-clash text-3xl font-medium mb-4">
											{system.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed mb-8">
											{system.description}
										</p>
										<p className="text-sm uppercase tracking-wider text-muted-foreground">
											{system.metricLabel}
										</p>
									</div>
								);
							})}
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-border">
							{careerNotes.map((note) => (
								<div key={note.label} className="py-6 md:pr-8">
									<p className="text-sm uppercase tracking-wider text-accent mb-2">
										{note.label}
									</p>
									<p className="text-muted-foreground leading-relaxed">
										{note.value}
									</p>
								</div>
							))}
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Engineering Process Section */}
			<AnimatedSection
				animation="fade-up"
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
			>
				<div
					ref={processRef}
					className={`transition-all duration-800 ease-out ${
						processVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
						<div className="lg:col-span-4">
							<p className="text-accent text-sm font-medium tracking-wider mb-5">
								HOW I WORK
							</p>
							<h2 className="font-clash text-4xl md:text-5xl font-medium mb-6">
								A calm path from ambiguity to shipped UI.
							</h2>
						</div>

						<div className="lg:col-span-8">
							{processSteps.map((step) => {
								const Icon = step.icon;

								return (
									<div
										key={step.title}
										className="grid grid-cols-[auto_1fr] gap-6 border-t border-border py-8 first:border-t-0 first:pt-0"
									>
										<div className="flex flex-col items-center gap-4">
											<span className="font-clash text-sm text-accent">
												{step.number}
											</span>
											<Icon className="h-5 w-5 text-muted-foreground" />
										</div>
										<div>
											<h3 className="font-clash text-3xl font-medium mb-3">
												{step.title}
											</h3>
											<p className="text-muted-foreground leading-relaxed max-w-2xl">
												{step.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Recognition Section */}
			<AnimatedSection
				animation="fade-up"
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
			>
				<div
					ref={awardsRef}
					className={`transition-all duration-800 ease-out grid grid-cols-1 lg:grid-cols-3 gap-16 items-start ${
						awardsVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="lg:col-span-1">
						<p className="text-accent text-sm font-medium tracking-wider mb-5">
							SIGNALS
						</p>
						<h2 className="font-clash text-4xl md:text-5xl font-medium mb-6">
							Small proof, honestly framed.
						</h2>
					</div>

					<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
						{awards.map((award) => {
							const Icon = award.icon;

							return (
								<div
									key={award.title}
									className="relative border-l border-border pl-6 py-2"
								>
									<Icon className="absolute -left-3 top-2 h-6 w-6 bg-background p-1 text-accent" />
									<p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
										{award.period}
									</p>
									<h3 className="font-clash text-2xl font-medium mb-3">
										{award.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{award.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</AnimatedSection>

			{/* Remote Collaboration Section */}
			<AnimatedSection
				animation="fade-up"
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
			>
				<div
					ref={communityRef}
					className={`transition-all duration-800 ease-out ${
						communityVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}
				>
					<div className="border-y border-border py-12">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
							<div className="lg:col-span-5">
								<p className="text-accent text-sm font-medium tracking-wider mb-5">
									REMOTE STYLE
								</p>
								<h2 className="font-clash text-4xl md:text-6xl font-medium leading-tight">
									Clear enough for async, polished enough for users.
								</h2>
							</div>

							<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
								{collaborationNotes.map((note) => (
									<div key={note.title}>
										<h3 className="font-clash text-2xl font-medium mb-3">
											{note.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{note.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</AnimatedSection>
		</div>
	);
}

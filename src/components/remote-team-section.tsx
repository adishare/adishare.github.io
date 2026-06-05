import { AnimatedSection } from "./ui/animated-section";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function RemoteTeamSection() {
	const { elementRef, isIntersecting } = useIntersectionObserver();

	const proofPoints = [
		{
			value: "100k+",
			label: "Concurrent users supported during national LMS releases",
		},
		{
			value: "55%",
			label: "Faster PDF and Excel exports through queueing and caching",
		},
		{
			value: "20+",
			label: "White-label mobile tenants maintained from one codebase",
		},
	];

	const principles = [
		{
			title: "Async-friendly communication",
			description:
				"I keep decisions, tradeoffs, and implementation details clear so distributed teams can move without waiting on meetings.",
		},
		{
			title: "Product-minded ownership",
			description:
				"I care about user outcomes, technical debt, performance budgets, and whether the shipped feature is actually useful.",
		},
		{
			title: "Maintainable delivery",
			description:
				"I prefer typed interfaces, reviewable changes, reusable components, and release habits that make the next iteration easier.",
		},
	];

	return (
		<AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
			<div
				ref={elementRef}
				className={`transition-all duration-800 ease-out ${
					isIntersecting
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-8"
				}`}
			>
				<div className="flex items-center mb-6">
					<span className="text-accent text-sm font-medium tracking-wider">
						REMOTE TEAM FIT
					</span>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
					<div>
						<h2 className="font-clash text-4xl md:text-5xl font-medium mb-8">
							Proof over praise
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							I do not have public testimonials to share yet, so I would rather
							show measurable work and the habits I bring to a remote product
							team.
						</p>
					</div>

					<div className="lg:col-span-2 space-y-8">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							{proofPoints.map((point) => (
								<div
									key={point.label}
									className="border border-border rounded-lg p-5 bg-card"
								>
									<div className="font-clash text-3xl font-medium text-accent mb-2">
										{point.value}
									</div>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{point.label}
									</p>
								</div>
							))}
						</div>
						<div className="space-y-5">
							{principles.map((principle) => (
								<div
									key={principle.title}
									className="border-b border-border pb-5 last:border-b-0"
								>
									<h3 className="text-lg font-semibold mb-2">
										{principle.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{principle.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</AnimatedSection>
	);
}

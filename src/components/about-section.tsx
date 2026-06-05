"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
	const { elementRef, isIntersecting } = useIntersectionObserver();

	return (
		<section
			id="about"
			className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24"
		>
			<div
				ref={elementRef}
				className={`transition-all duration-700 ease-out ${
					isIntersecting
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-6"
				}`}
			>
				<div className="flex items-center justify-center mb-6">
					<span className="text-accent text-sm font-medium tracking-wider">
						ABOUT ME
					</span>
				</div>
				<div className="max-w-5xl mx-auto text-center">
					<p className="font-clash text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed">
						I'm Fathul Qorib Alaudit, a Frontend Engineer with 7 years of
						experience in design & development with strong focus on producing
						high quality & impactful digital experiences.
					</p>
				</div>
			</div>
		</section>
	);
}

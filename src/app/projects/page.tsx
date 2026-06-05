import type { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
	title: "Projects | Fathul Qorib Alaudit",
	description:
		"Selected frontend engineering projects by Fathul Qorib Alaudit across SaaS platforms, dashboards, mobile apps, and internal tools.",
	alternates: {
		canonical: "/projects",
	},
	openGraph: {
		title: "Projects | Fathul Qorib Alaudit",
		description:
			"Selected frontend engineering projects across SaaS platforms, dashboards, mobile apps, and internal tools.",
		url: "/projects",
	},
};

export default function Projects() {
	return <ProjectsClient />;
}

import AboutClient from "./about-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | Fathul Qorib Alaudit",
	description:
		"Learn how Fathul Qorib Alaudit builds frontend systems for SaaS, dashboards, mobile delivery, and distributed product teams.",
	alternates: {
		canonical: "/about",
	},
	openGraph: {
		title: "About | Fathul Qorib Alaudit",
		description:
			"Frontend engineering profile focused on SaaS, dashboards, mobile delivery, and remote collaboration.",
		url: "/about",
	},
};

export default function About() {
	return <AboutClient />;
}

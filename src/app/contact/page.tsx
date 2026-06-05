import ContactClient from "./contact-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact | Fathul Qorib Alaudit",
	description:
		"Contact Fathul Qorib Alaudit for remote frontend engineering roles focused on React, Next.js, TypeScript, SaaS, and dashboards.",
	alternates: {
		canonical: "/contact",
	},
	openGraph: {
		title: "Contact | Fathul Qorib Alaudit",
		description:
			"Reach out for remote frontend engineering roles focused on React, Next.js, TypeScript, SaaS, and dashboards.",
		url: "/contact",
	},
};

export default function Contact() {
	return <ContactClient />;
}

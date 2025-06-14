"use client";
import { useState, useEffect } from "react";

export function useTheme() {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
		const initialTheme = savedTheme || "light";
		setTheme(initialTheme);
		document.documentElement.classList.toggle("dark", initialTheme === "dark");
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
		localStorage.setItem("theme", newTheme);
	};

	return { theme, toggleTheme };
}

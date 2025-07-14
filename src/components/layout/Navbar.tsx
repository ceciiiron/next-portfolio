"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathName = usePathname();

	useEffect(() => {
		if (window.scrollY > 60) {
			setIsScrolled(true);
		}

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 60);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		// nav: dark:border-gruvbox-light/30 dark:bg-gruvbox-dark/50

		// <motion.nav
		// 	initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
		// 	animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
		// 	transition={{ duration: 0.5 }}
		<nav
			className={cn(
				`px-4 py-5  lg:px-0  md:py-5 flex justify-between  md:rounded-md  fixed w-full mx-auto inset-x-0 top-0  z-50 transition-all duration-300  lg:max-w-5xl`,
				isScrolled && "lg:max-w-4xl shadow-md lg:px-8 backdrop-blur-md bg-white/70 lg:top-8"
			)}>
			<h1 className="font-extrabold text-base">
				<Link
					href={"/"}
					className="bg-gradient-to-br  border-[#111] from-[#111] via-[#444] to-[#777] bg-[length:200%_auto] bg-clip-text text-transparent [animation:gradient-shine_3s_ease_infinite] ">
					CECI
				</Link>
			</h1>

			{/* hidden md:flex */}
			<ul className="flex items-center gap-6 text-xs md:text-sm font-semibold cursor-pointer dark:text-gruvbox-light/80 transition-all text-gray-500 *:hover:text-black">
				<li>
					<Link href={"/"} className={cn(pathName === "/skills" && "text-black  underline underline-offset-8")}>
						Skills
					</Link>
				</li>
				<li>
					<Link href={"/projects"} className={cn(pathName === "/projects" && "text-black  underline underline-offset-8")}>
						Projects
					</Link>
				</li>

				<li>
					<Link href={"/"} className={cn(pathName === "/experiences" && "text-black  underline underline-offset-8")}>
						Experiences
					</Link>
				</li>

				<li>
					<Link href={"/"} className={cn(pathName === "/contact" && "text-black  underline underline-offset-8")}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

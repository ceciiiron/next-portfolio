"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

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
				`px-5 py-5 md:px-5 lg:px-0  md:py-5 flex justify-between  md:rounded-md  fixed w-full mx-auto inset-x-0 top-0 md:top-8  z-50 transition-all duration-300 md:max-w-2xl lg:max-w-5xl`,
				isScrolled && " shadow-md lg:px-8 backdrop-blur-md bg-white/70 "
			)}>
			<div className=" ">
				<h1 className="font-extrabold text-lg">
					<Link
						href={"/"}
						className="bg-gradient-to-br  border-[#111] from-[#111] via-[#444] to-[#777] bg-[length:200%_auto] bg-clip-text text-transparent [animation:gradient-shine_3s_ease_infinite] ">
						CC
					</Link>
				</h1>
			</div>

			{/* hidden md:flex */}
			<ul className="flex items-center gap-8 text-sm font-semibold cursor-pointer dark:text-gruvbox-light/80 transition-all">
				<li className="hover:text-gruvbox-light transition-all">
					<Link href={"/projects"}>Projects</Link>
				</li>
				{/* <li className="hover:text-gruvbox-light transition-all">
					<a href="#projects">Work</a>{" "}
				</li> */}

				<li className="hover:text-gruvbox-light transition-all">
					<a href="#projects">Contact</a>{" "}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

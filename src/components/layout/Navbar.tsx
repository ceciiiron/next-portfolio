"use client";

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
			className={`py-5 flex justify-between  rounded-md  fixed w-full mx-auto inset-x-0 top-8  z-50 transition-all duration-300 ${
				isScrolled ? "max-w-5xl shadow-md px-8 backdrop-blur-md bg-white/70 " : "max-w-5xl "
			}`}>
			<div className=" ">
				<h1 className="font-extrabold text-lg">
					<Link
						href={"/"}
						className="bg-gradient-to-br  border-[#111] from-[#111] via-[#444] to-[#777] bg-[length:200%_auto] bg-clip-text text-transparent [animation:gradient-shine_3s_ease_infinite] ">
						CC
					</Link>
				</h1>
			</div>

			<ul className="hidden md:flex items-center gap-8 text-sm font-semibold cursor-pointer dark:text-gruvbox-light/80 transition-all">
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

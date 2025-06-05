"use client";

import React, { useEffect, useState } from "react";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		// nav: dark:border-gruvbox-light/30 dark:bg-gruvbox-dark/50
		<nav
			className={`py-5 flex justify-between   rounded-xl fixed w-full mx-auto inset-x-0 top-8   backdrop-blur-lg bg-white/70 z-50 transition-all duration-300 ${
				isScrolled ? "max-w-4xl shadow-xs px-8" : "max-w-5xl "
			}`}>
			<h1 className=" font-bold text-2xl text-shadow">Ceciron</h1>

			<ul className="hidden md:flex items-center gap-8 text-sm font-semibold cursor-pointer dark:text-gruvbox-light/80 transition-all">
				<li className="hover:text-gruvbox-light transition-all">
					<a href="#projects">Projects</a>{" "}
				</li>
				{/* <li className="hover:text-gruvbox-light transition-all">
					<a href="#projects">Work</a>{" "}
				</li> */}

				<li className="hover:text-gruvbox-light transition-all">
					<a href="#projects">Contact</a>{" "}
				</li>
			</ul>

			{/* <h2 className="hidden lg:flex">Contact Me</h2> */}
		</nav>
	);
};

export default Navbar;

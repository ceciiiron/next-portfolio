import React from "react";

const Navbar = () => {
	return (
		<nav className="p-5 flex justify-between border border-gruvbox-light/30 bg-gruvbox-dark/50 rounded-full fixed w-full mx-auto inset-x-0 top-8  max-w-4xl backdrop-blur-lg z-50">
			<h1 className=" font-extrabold text-2xl text-gruvbox-light">CECIRON ALEJO III</h1>

			<ul className="hidden md:flex items-center gap-8 text-sm font-semibold cursor-pointer text-gruvbox-light/80 transition-all">
				<li className="hover:text-gruvbox-light transition-all">
					<a href="#projects">Projects</a>{" "}
				</li>
				<li className="hover:text-gruvbox-light transition-all">
					<a href="#projects">Work</a>{" "}
				</li>
				<li className="hover:text-gruvbox-light transition-all">
					<a href="#projects">Education</a>{" "}
				</li>
				<li className="hover:text-gruvbox-light transition-all">
					<a href="#projects">Contact</a>{" "}
				</li>
			</ul>

			{/* <h2 className="hidden lg:flex">Contact Me</h2> */}
		</nav>
	);
};

export default Navbar;

"use client";
import Link from "next/link";
import Image from "next/image";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import React, { useRef, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import { TechStackGroup } from "@/components/tech-stack/TechStackGroup";

import createGlobe from "cobe";

const Globe = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		let phi = 0;

		if (!canvasRef.current) return;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: 500 * 2,
			height: 500 * 2,
			phi: 0,
			theta: 0,
			dark: 0,
			diffuse: 1.2,
			mapSamples: 32000,
			mapBrightness: 4,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [0.1, 0.8, 1],
			glowColor: [1, 1, 1],
			markers: [{ location: [13.1129, 123.7629], size: 0.06 }],
			onRender: (state) => {
				// Called on every animation frame.
				// `state` will be an empty object, return updated params.
				// state.phi = 13.1129;
				state.phi = phi;
				phi += 0.005;
			},
		});

		return () => {
			globe.destroy();
		};
	}, []);

	return <canvas ref={canvasRef} style={{ width: "500px", height: "500px", scale: 1 }} />;
};

// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { cn } from "@/lib/utils";

// interface LandingPageProjectCardProps {
// 	title: string;
// 	description?: string;
// 	imageSrc: string;
// 	imageAlt?: string;
// 	className?: string;
// }

// const LandingPageProjectCard: React.FC<LandingPageProjectCardProps> = ({ title, description, imageSrc, imageAlt = "Project thumbnail", className = "" }) => {
// 	return (
// 		<motion.div initial={{ opacity: 0, y: 15, filter: "blur(10px)" }} whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5 }}>
// 			<Card className={` p-0  gap-0  h-52 lg:h-72  ${className} overflow-hidden group cursor-pointer bg-none border rounded-md`}>
// 				<div className=" overflow-hidden group relative w-full">
// 					<Image
// 						src={imageSrc}
// 						width={500}
// 						height={500}
// 						className={` h-52 lg:h-72 object-fit  object-center w-full  transition-transform   lg:scale-105 `}
// 						alt={imageAlt}
// 					/>
// 				</div>
// 			</Card>
// 			<div className=" py-6">
// 				<p className="text-lg ">{title}</p>
// 				{description && <CardDescription>{description}</CardDescription>}
// 			</div>
// 		</motion.div>
// 	);
// };

// const projects: {
// 	title: string;
// 	description: string;
// 	imageSrc: string;
// }[] = [
// 	{
// 		title: "BRHMC Queuing System",
// 		description: "Hospital Electronic Queuing System",
// 		imageSrc: "/assets/images/projects/qs/mockup.png",
// 	},
// 	{
// 		title: "HIS-RIS Integration",
// 		description: "Radiology Information System",
// 		imageSrc: "/assets/images/projects/brhmc-ris/mockup.png",
// 	},
// 	{
// 		title: "BUCS-RDMS",
// 		description: "School Research Document and Management System",
// 		imageSrc: "/assets/images/projects/bucsrdms/mockup.png",
// 	},
// 	{
// 		title: "Ellis Ecotel",
// 		description: "Hotel Content Management System",
// 		imageSrc: "/assets/images/projects/ellis-ecotel/mockup.png",
// 	},
// 	{
// 		title: "One Banwaan",
// 		description: "Interconnected Barangay Information System",
// 		imageSrc: "/assets/images/projects/ellis-ecotel/mockup.png",
// 	},
// ];

export default function Home() {
	return (
		// <div className="max-w-6xl mx-auto relative mt-[9rem]">

		<div className="">
			<Section className="">
				<motion.div
					initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
					whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
					transition={{ duration: 0.5 }}
					className="flex flex-col">
					<div className="text-center">
						<p className="text-sm md:text-base inline-block px-6 py-2 shadow-sm bg-white border rounded-md mb-6">Ceciron is available for work &nbsp; 👋</p>
						<h2 className="text-3xl md:text-6xl  font-bold  md:leading-18 mb-6">
							A Fullstack Developer <br /> building clean, scalable, <br /> & intuitive software
						</h2>
						{/* <h2 className="md:text-7xl  font-extrabold  ">
								<span className="bg-[linear-gradient(90deg,_#11998e,_#31c487,_#4be38a,_#38ef7d)] bg-clip-text text-transparent animate-[gradientShift_2s_ease-in-out_infinite] bg-[length:400%_400%]">
									clean,
								</span>
								<span className="">clean,</span>
								&nbsp;
								<span className="bg-[linear-gradient(90deg,_#8e2de2,_#7a42f4,_#643eea,_#4a00e0)] bg-clip-text text-transparent animate-[gradientShift_2s_ease-in-out_infinite] bg-[length:400%_400%]">
									scalable,
								</span>
								<span>
									&nbsp;and <br />
								</span>
								<span className="bg-[linear-gradient(90deg,_#ff512f,_#ff5e7e,_#ec4899,_#dd2476)] bg-clip-text text-transparent animate-[gradientShift_2s_ease-in-out_infinite] bg-[length:400%_400%]">
									intuituve software
								</span>
							</h2> */}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
					whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className=" flex flex-row gap-5  justify-center">
					<Button size={"2xl"}>More about Ceciron</Button>

					<Button size={"2xl"} variant={"secondary"} asChild>
						<Link href="https://github.com/ceciiiron" target="_blank">
							<IconBrandGithub size={20} />
							<span className="hidden md:flex">GitHub</span>
						</Link>
					</Button>
					<Button size={"2xl"} variant={"secondary"} asChild>
						<Link href="https://github.com/ceciiiron" target="_blank">
							<IconBrandLinkedin size={25} />

							<span className="hidden md:flex">LinkedIn</span>
						</Link>
					</Button>
				</motion.div>
			</Section>

			<Section>
				<div
					className="grid  grid-cols-1 grid-rows-6 *:col-span-1 lg:grid-cols-4 lg:grid-rows-3 \
				 *:border *:rounded-sm *:px-6 *:py-5 gap-6 *:bg-white *:shadow-sm *:overflow-hidden *:h-56  *:sm:h-auto ">
					{/* 1 Skills */}
					<div className=" lg:col-span-3 lg:row-start-1 lg:row-span-1  overflow-hidden relative flex flex-row gap-4  ">
						{/* <div className="absolute bottom-0 left-0 w-full   h-36  bg-gradient-to-t from-white hover:via-white to-transparent pointer-events-none" /> */}
						<div className="w-full">
							<h3 className=" text-2xl md:text-4xl font-bold mb-2">Skills</h3>
							<p className=" text-sm lg:text-base text-gray-500 mb-4">Applied Expertise</p>
							<Button variant={"default"}>View all</Button>
						</div>

						<div className="relative  flex flex-col justify-center text-gray-400">
							<TechStackGroup
								size="md"
								withLabel={true}
								badges={[
									"Bootstrap",
									"MaterialUI",
									"MySQL",
									"PostgreSQL",
									"TailwindCSS",
									"MantineUI",
									"PHP",
									"Laravel",
									"React.js",
									"Next.js",
									"JavaScript",
									"TypeScript",
									"Codeigniter",
									"Node.js",
									"Express.js",
									"HTML",
									"CSS",
									"jQuery",
									"Alpine.js",
								]}
								className=""
							/>
							<div
								className="absolute inset-0 pointer-events-none"
								style={{
									background: "radial-gradient(ellipse at center, transparent 10%, white 95%)",
								}}
							/>
						</div>
					</div>
					{/* 2 Experiences */}
					<div className=" lg:row-span-2  lg:col-span-1 overflow-hidden ">
						<h3 className="text-2xl font-semibold mb-2 ">
							{/* text-gray-400 */}
							{/* 							
							Always focused on creating meaningful impact through code. */}
							Experiences
						</h3>

						<p className=" text-gray-500 mb-4">Professional Journey</p>

						<div className="relative flex flex-col gap-8 pl-4">
							<div className="absolute left-0 top-4 transform -translate-x-1/2 h-full w-0.5 bg-gray-100 overflow-hidden z-0" />

							<div className="absolute w-3xl -left-10 h-72 -bottom-10 inset-x-0  bg-gradient-to-t from-white to-transparent z-10"></div>

							<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30">
								<Button variant={"default"}>See more</Button>
							</div>

							<div>
								<div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300  border-2 border-gray-200 animate-pulse shadow-lg" />
								<p className="text-gray-700 text-xs">2025 Present</p>
								<p className="text-sm">Computer Programmer III</p>

								<p className="text-gray-400 text-sm">Bicol Regional Hospital and Medical Center</p>
							</div>

							<div>
								<div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-2 border-gray-200 shadow-lg" />
								<p className="text-gray-700 text-xs">2024 August</p>
								<p className="text-sm">Computer Programmer II</p>

								<p className="text-gray-400 text-sm">Bicol Regional Hospital and Medical Center</p>
							</div>

							<div>
								<div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-2 border-gray-200 shadow-lg" />
								<p className="text-gray-700 text-xs">2023 February</p>
								<p className="text-sm">Computer Programmer </p>

								<p className="text-gray-400 text-sm">Bicol University College of Science (Computer Science and Information Technology Department)</p>
							</div>

							<div>
								<div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-2 border-gray-200 shadow-lg  " />
								<p className="text-gray-700 text-xs">2018 - 2023 </p>
								<p className="text-sm">Freelance Programmer </p>

								<p className="text-gray-400 text-sm"></p>
							</div>
						</div>

						{/* <div className="absolute top-24 left-0">
							<Globe />
						</div> */}
					</div>
					{/* 3 Turning complex probs */}
					<div className="text-right lg:col-span-1 lg:row-start-2" style={{ backgroundImage: "radial-gradient(#999 5%, transparent 0)", backgroundSize: "20px 20px" }}>
						<h3 className="text-2xl font-semibold mb-2 text-gray-400">Turning complex problems into practical solutions that serve real people.</h3>
					</div>
					{/* 4 Projects */}
					<div className="lg:col-span-2 lg:row-start-2 lg:row-span-2 relative  flex flex-col overflow-hidden">
						<div>
							<h3 className="text-4xl font-bold mb-2"> Projects</h3>
							<p className=" text-gray-500 mb-4">Built with love and passion</p>

							<Button variant={"default"} asChild>
								<Link href={"/projects"}>Browse all</Link>
							</Button>
						</div>

						<div className="relative -right-42 top-6  h-full">
							<div className="absolute w-full  -right-28  -top-20 scale-120 z-10">
								<Image
									src={"/assets/images/projects/brhmc-ris/mockup_laptop.png"}
									width={500}
									height={500}
									className={` h-64  object-contain object-center w-full  transition-transform   `}
									alt={"Project Mockup"}
								/>
							</div>

							<div className="absolute w-full  -right-14 right -top-4 scale-120  z-20 ">
								<Image
									src={"/assets/images/projects/bucsrdms/mockup_laptop.png"}
									width={500}
									height={500}
									className={` h-64  object-contain object-center w-full  transition-transform   `}
									alt={"Project Mockup"}
								/>
							</div>

							<div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-120 z-20 ">
								<Image
									src={"/assets/images/projects/qs/mockup_laptop.png"}
									width={500}
									height={500}
									className={` h-64 object-contain object-center w-full  transition-transform   `}
									alt={"Project Mockup"}
								/>
							</div>
						</div>
					</div>
					{/* 5 */}
					<div className="relative">
						<p className=" text-gray-500 mb-4">🇵🇭 PH (GMT+8)</p>

						<div className="absolute ">
							<Globe />
						</div>
					</div>

					{/* 6 */}
					<div className="col-span-1">06</div>
				</div>
			</Section>

			{/* <Section className="">
				<div className=" flex flex-col relative">

					<div>
						<p className=" inline-block mb-6">Built with love and passion ✨</p>
					</div>

					<h2 className="text-5xl font-extrabold mb-8 dark:text-gruvbox-light text-gruvbox-dark font-(family-name:--font-cormorant-garamond)">
						Turning complex problems <br /> into practical solutions <br /> that serve real people.
					</h2>
					<div>
						<Button size={"2xl"}>View Projects</Button>
					</div>
				</div>

				<div className=" grid sm:grid-cols-1  xl:grid-cols-2 sm:gap-10 xl:gap-20 ">
					{projects.map((project, index) => (
						<LandingPageProjectCard key={index} title={project.title} description={project.description} imageSrc={project.imageSrc} />
					))}

					<div className="flex justify-center col-span-2 ">
						<Button size={"2xl"} asChild>
							<Link href={"/projects"}>Show more projects</Link>
						</Button>
					</div>
				</div>
			</Section> */}

			{/* <Carousel>
				<CarouselContent className="">
					{projects.map((project, index) => (
						<CarouselItem key={index} className={cn(" basis-[46%] lg:basis-[26%]", index == 0 && "ml-4 lg:ml-52")}>
							<div className="p-1">
								<LandingPageProjectCard title={project.title} description={project.description} imageSrc={project.imageSrc} />
							</div>
						</CarouselItem>
					))}
					<CarouselItem className="basis-[46%] lg:basis-[26%] mr-52">
						<motion.div
							initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
							whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
							transition={{ duration: 0.5 }}
							className="p-1">
							<div className=" h-52 lg:h-72 overflow-hidden group relative  flex justify-center items-center text-lg border rounded-md bg-white">
								Browse more projects
							</div>
						</motion.div>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious className="top-1/2 left-12 translate-y-1/2" />
				<CarouselNext className=" top-1/2 right-12 translate-y-1/2" />
			</Carousel> */}

			{/* <Section>
				<div className="grid grid-cols-3 gap-20">
					<Card className="col-span-2">
						<CardContent>
							<div className="flex flex-col gap-4">
								<TechStackGroup
									title="Backend"
									badges={["MySQL", "PostgreSQL", "MongoDB", "PHP", "Laravel", "Codeigniter", "Node.js", "Express.js", "Next.js"]}
									className="mb-4"
								/>

								<TechStackGroup
									title="Frontend"
									badges={["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "jQuery", "Alpine.js", "TailwindCSS", "Bootstrap", "MaterialUI", "MantineUI"]}
								/>
							</div>
						</CardContent>
					</Card>

					<div className=" col-span-1 ">
						<p className="inline-block mb-4  border px-6 py-2 rounded-md bg-white shadow-xs">Applied Expertise 🧑🏻‍💻</p>

						<h2 className="text-4xl font-bold  dark:text-gruvbox-light text-gruvbox-dark">Professional Skills</h2>

						<h2>
							<p className=" text-lg">Always learning, always building — and always focused on creating meaningful impact through code.</p>
							<h2 className="text-5xl font-extrabold mb-8 dark:text-gruvbox-light text-gruvbox-dark font-(family-name:--font-cormorant-garamond)">
								Always focused on creating meaningful impact through code
							</h2>
						</h2>
					</div>
				</div>
			</Section> */}
			{/* 
			<Section>
				<div className="">
					<p className="inline-block mb-4 border px-6 py-2 rounded-md bg-white shadow-xs">Professional Journey 💼</p>
					<h2 className="text-4xl font-bold dark:text-gruvbox-light text-gruvbox-dark ">Work Experience</h2>
				</div>

				<div className="relative mt-12">
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

					<div className="space-y-12">
						<div className="relative flex items-center">
							<div className="flex-1 pr-8 text-right">
								<Card className="ml-auto max-w-md">
									<CardHeader>
										<CardTitle>Computer Programmer III</CardTitle>
										<CardDescription>
											Bicol Regional Hospital and Medical Center
											<br />
											August 2023 - Present
										</CardDescription>
									</CardHeader>
									<CardContent>
										<Button variant={"secondary"}>Read more</Button>
									</CardContent>
								</Card>
							</div>
							<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-2 border-gray-300 shadow-lg" />
							<div className="flex-1 pl-8">
								<p className=" font-semibold">2025</p>
							</div>
						</div>

						<div className="relative flex items-center">
							<div className="flex-1 pr-8 text-right">
								<p className=" font-semibold">2023</p>
							</div>
							<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-2 border-gray-300 shadow-lg" />
							<div className="flex-1 pl-8">
								<Card className="max-w-md">
									<CardHeader>
										<CardTitle>Computer Programmer</CardTitle>
										<CardDescription>
											Bicol University College of Science CSIT Dept. - OJT
											<br />
											February 2023 - April 2023
										</CardDescription>
									</CardHeader>
									<CardContent>
										<Button variant={"secondary"}>Read more</Button>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</Section> */}
		</div>
	);
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import React from "react";
import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import { TechStackGroup } from "@/components/tech-stack/TechStackGroup";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface LandingPageProjectCardProps {
	title: string;
	description?: string;
	imageSrc: string;
	imageAlt?: string;
	className?: string;
}

const LandingPageProjectCard: React.FC<LandingPageProjectCardProps> = ({ title, description, imageSrc, imageAlt = "Project thumbnail", className = "" }) => {
	return (
		<motion.div initial={{ opacity: 0, y: 15, filter: "blur(10px)" }} whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5 }}>
			<Card className={` p-0  gap-0  h-52 lg:h-72  ${className} overflow-hidden group cursor-pointer bg-none border rounded-md`}>
				<div className=" overflow-hidden group relative w-full">
					<Image
						src={imageSrc}
						width={500}
						height={500}
						className={` h-52 lg:h-72 object-fit  object-center w-full  transition-transform   lg:scale-105 `}
						alt={imageAlt}
					/>
				</div>
			</Card>
			<div className=" py-6">
				<p className="text-lg ">{title}</p>
				{description && <CardDescription>{description}</CardDescription>}
			</div>
		</motion.div>
	);
};

const projects: {
	title: string;
	description: string;
	imageSrc: string;
}[] = [
	{
		title: "BRHMC Queuing System",
		description: "Hospital Electronic Queuing System",
		imageSrc: "/assets/images/projects/qs/mockup.png",
	},
	{
		title: "HIS-RIS Integration",
		description: "Radiology Information System",
		imageSrc: "/assets/images/projects/brhmc-ris/mockup.png",
	},
	{
		title: "BUCS-RDMS",
		description: "School Research Document and Management System",
		imageSrc: "/assets/images/projects/bucsrdms/mockup.png",
	},
	{
		title: "Ellis Ecotel",
		description: "Hotel Content Management System",
		imageSrc: "/assets/images/projects/ellis-ecotel/mockup.png",
	},
	{
		title: "One Banwaan",
		description: "Interconnected Barangay Information System",
		imageSrc: "/assets/images/projects/ellis-ecotel/mockup.png",
	},
];

export default function Home() {
	return (
		// <div className="max-w-6xl mx-auto relative mt-[9rem]">

		<div className="relative mt-[9rem]">
			<div className="mb-[12rem]  p-10  mx-10 lg:mx-0 bg-white">
				{/* <div className="grid grid-cols-3 gap-40 "> */}
				{/* <h2 className="text-6xl font-extrabold leading-tight">Let&apos;s Build Something</h2> */}
				<div className="text-left mb-10 font-(family-name:--font-cormorant-garamond)">
					<motion.div
						initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
						whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
						transition={{ duration: 0.5 }}
						className="flex flex-col space-y-10">
						<div>
							<p className="   border px-6 py-2 inline-block rounded-md bg-white shadow-xs">Ceciron is available for work &nbsp; 👋</p>
							<h2 className="md:text-7xl  font-semibold mb-4">
								<br />A Fullstack Developer building
							</h2>
							<h2 className="md:text-7xl  font-extrabold  ">
								{/* <span className="bg-[linear-gradient(90deg,_#11998e,_#31c487,_#4be38a,_#38ef7d)] bg-clip-text text-transparent animate-[gradientShift_2s_ease-in-out_infinite] bg-[length:400%_400%]">
									clean,
								</span> */}
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
							</h2>
						</div>

						{/* <h2 className="text-6xl/1 font-extrabold leading-tight flex overflow-hidden h-20">
								<ul className="running-text block p-0 m-0 *:block   ">
									<li>
										<span className="bg-[linear-gradient(90deg,_#FF6FD8,_#C26CFF,_#A44CFF,_#3813C2)] bg-clip-text text-transparent animate-[gradientShift_6s_ease-in-out_infinite] bg-[length:400%_400%] ">
											Extraordinary
										</span>
									</li>

									<li>
										<span className="bg-[linear-gradient(90deg,_#00F260,_#24D3B1,_#1CACE9,_#0575E6)] bg-clip-text text-transparent animate-[gradientShift_6s_ease-in-out_infinite] bg-[length:400%_400%]">
											Innovative
										</span>
									</li>

									<li>
										<span className="bg-[linear-gradient(90deg,_#8e2de2,_#7a42f4,_#643eea,_#4a00e0)] bg-clip-text text-transparent animate-[gradientShift_6s_ease-in-out_infinite] bg-[length:400%_400%]">
											Creative
										</span>
									</li>

									<li>
										<span className="bg-[linear-gradient(90deg,_#ff512f,_#ff5e7e,_#ec4899,_#dd2476)] bg-clip-text text-transparent animate-[gradientShift_6s_ease-in-out_infinite] bg-[length:400%_400%]">
											Impactful
										</span>
									</li>

									<li>
										<span className="bg-[linear-gradient(90deg,_#11998e,_#31c487,_#4be38a,_#38ef7d)] bg-clip-text text-transparent animate-[gradientShift_6s_ease-in-out_infinite] bg-[length:400%_400%] ">
											Sustainable
										</span>
									</li>
								</ul>
							</h2> */}

						<p className=" text-lg">
							{/* I&apos;m <span className="font-extrabold">Ceciron Alejo III</span>, a motivated and skilled <i>full-stack software developer</i> ✨ <br />  */}
							Always learning, always building — and always focused on creating meaningful impact through code.
						</p>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
					whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex flex-row  justify-center gap-5">
					<Button size={"2xl"}>More about Ceciron</Button>

					<Button size={"2xl"} variant={"secondary"} asChild>
						<Link href="https://github.com/ceciiiron" target="_blank">
							<IconBrandGithub size={20} /> GitHub
						</Link>
					</Button>
					<Button size={"2xl"} variant={"secondary"} asChild>
						<Link href="https://github.com/ceciiiron" target="_blank">
							<IconBrandLinkedin size={25} /> LinkedIn
						</Link>
					</Button>
				</motion.div>
				{/* 
					<div className="flex justify-end ">
						<div className="flex flex-col justify-center">
							<Image src={"/assets/images/ceciron.jpg"} width={300} height={300} className="rounded-full object-cover w-3xl h-3xl" alt="profile-picture" />
						</div>
					</div> */}
				{/* </div> */}
			</div>

			<Section>
				<div className="mx-4 lg:ml-52 flex flex-col relative">
					<div
						className="absolute inset-0 -z-10 -left-56 pointer-events-none"
						style={{
							backgroundImage: `
        radial-gradient(at 20% 30%, rgba(168, 85, 247, 0.3), transparent 50%),
        radial-gradient(at 80% 20%, rgba(236, 72, 153, 0.25), transparent 50%),
        radial-gradient(at 60% 80%, rgba(79, 70, 229, 0.2), transparent 50%)
      `,
							filter: "blur(60px)",
							backgroundBlendMode: "lighten",
						}}
					/>

					<div>
						<p className="inline-block mb-4">Built with love and passion ✨</p>
					</div>

					<h2 className="text-5xl font-extrabold mb-8 dark:text-gruvbox-light text-gruvbox-dark font-(family-name:--font-cormorant-garamond)">
						Turning complex problems <br /> into simple intuitive solutions <br /> that serve real people.
					</h2>
					<div>
						<Button size={"2xl"}>View Projects</Button>
					</div>
				</div>

				<Carousel>
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
				</Carousel>

				{/* <div className=" grid sm:grid-cols-1  xl:grid-cols-2 sm:gap-10 xl:gap-20 ">
					{projects.map((project, index) => (
						<LandingPageProjectCard key={index} title={project.title} description={project.description} imageSrc={project.imageSrc} />
					))}

					<div className="flex justify-center col-span-2 ">
						<Button size={"2xl"} asChild>
							<Link href={"/projects"}>Show more projects</Link>
						</Button>
					</div>
				</div> */}
			</Section>

			<Section>
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
					</div>
				</div>
			</Section>

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
			</Section>
		</div>
	);
}

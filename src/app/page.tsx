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
			<Card className={` p-0  gap-0   ${className} overflow-hidden  group cursor-pointer`}>
				<div className=" overflow-hidden group relative w-full ">
					<Image
						src={imageSrc}
						width={500}
						height={500}
						className={`  h-80 object-fit object-center w-full  transition-transform  group-hover:scale-110  scale-105 `}
						alt={imageAlt}
					/>
				</div>

				<CardHeader className="w-full py-6 z-10">
					<CardTitle className="text-lg">{title}</CardTitle>
					{description && <CardDescription>{description}</CardDescription>}
				</CardHeader>
			</Card>
		</motion.div>
	);
};

export default function Home() {
	return (
		<div className="max-w-6xl mx-auto relative mt-[9rem]">
			<div className="mb-[12rem] border p-10 rounded-lg shadow-lg mx-10 lg:mx-0 bg-white">
				{/* <div className="grid grid-cols-3 gap-40 "> */}
				{/* <h2 className="text-6xl font-extrabold leading-tight">Let&apos;s Build Something</h2> */}
				<div className="text-center mb-10 ">
					<motion.div
						initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
						whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
						transition={{ duration: 0.5 }}
						className="flex flex-col space-y-10">
						<div>
							<p className="   border px-6 py-2 inline-block rounded-md bg-white shadow-xs">Ceciron is available for work &nbsp; 👋</p>
							<h2 className="md:text-4xl text-5xl font-semibold mb-4">
								<br />A Fullstack Developer building
							</h2>
							<h2 className="md:text-7xl lg:text-8xl font-extrabold  ">
								<span className="bg-[linear-gradient(90deg,_#11998e,_#31c487,_#4be38a,_#38ef7d)] bg-clip-text text-transparent animate-[gradientShift_6s_ease-in-out_infinite] bg-[length:400%_400%]">
									clean,
								</span>
								&nbsp;
								<span className="bg-[linear-gradient(90deg,_#8e2de2,_#7a42f4,_#643eea,_#4a00e0)] bg-clip-text text-transparent animate-[gradientShift_6s_ease-in-out_infinite] bg-[length:400%_400%]">
									scalable,
								</span>
								<span>
									&nbsp;and <br />
								</span>
								<span className="bg-[linear-gradient(90deg,_#ff512f,_#ff5e7e,_#ec4899,_#dd2476)] bg-clip-text text-transparent animate-[gradientShift_6s_ease-in-out_infinite] bg-[length:400%_400%]">
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
				<div className="text-center">
					<p className="inline-block mb-4 border px-6 py-2 rounded-md bg-white shadow-xs">Built with love and passion ✨</p>

					<h2 className="text-4xl font-bold text-center dark:text-gruvbox-light text-gruvbox-dark">Latest Projects</h2>
				</div>

				<div className=" grid sm:grid-cols-1  xl:grid-cols-2 sm:gap-10 xl:gap-20 ">
					<LandingPageProjectCard title="BRHMC Queuing System" description="Hospital Electronic Queuing System" imageSrc="/assets/images/projects/qs/mockup.png" />

					<LandingPageProjectCard
						title="BUCS-RDMS"
						description="School Research Document and Management System"
						imageSrc="/assets/images/projects/bucsrdms/mockup.png"
						className=" "
					/>

					<LandingPageProjectCard
						title="HIS-RIS Integration"
						description="Radiology Information System"
						imageSrc="/assets/images/projects/brhmc-ris/mockup.png"
						className=" "
					/>

					<LandingPageProjectCard
						title="Ellis Ecotel"
						description="Hotel Content Management System"
						imageSrc="/assets/images/projects/ellis-ecotel/mockup.png"
						className=""
					/>

					<div className="flex justify-center col-span-2 ">
						<Button size={"2xl"} asChild>
							<Link href={"/projects"}>Show more projects</Link>
						</Button>
					</div>
				</div>
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

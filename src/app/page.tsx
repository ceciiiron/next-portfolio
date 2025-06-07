// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";
// import { Collapsible } from "@/components/ui/collapsible";
// import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import SVGTailwindCss from "@/components/svg/SVGTailwindCss";

import React from "react";
import SVGBootstrap from "@/components/svg/SVGBootstrap";
import SVGLaravel from "@/components/svg/SVGLaravel";
import SVGCodeigniter from "@/components/svg/SVGCodeigniter";
import SVGReact from "@/components/svg/SVGReact";
import SVGTypescript from "@/components/svg/SVGTypescript";
import SVGJquery from "@/components/svg/SVGJquery";
import SVGJavascript from "@/components/svg/SVGJavascript";
import SVGMySQL from "@/components/svg/SVGMySQL";
import SVGPHP from "@/components/svg/SVGPHP";
import SVGNodeJS from "@/components/svg/SVGNodeJS";
import SVGAlpineJS from "@/components/svg/SVGAlpineJS";
import SVGNextJS from "@/components/svg/SVGNextJS";
import SVGPostgresql from "@/components/svg/SVGPostgresql";
import SVGHTML from "@/components/svg/SVGHTML";
import SVGCSS from "@/components/svg/SVGCSS";
import SVGMaterialUI from "@/components/svg/SVGMaterialUI";
import SVGExpressJS from "@/components/svg/SVGExpressJS";
import SVGMantine from "@/components/svg/SVGMantine";
import SVGMongoDB from "@/components/svg/SVGMongoDB";
import { Section } from "@/components/ui/section";
// import { ProjectCard } from "@/components/cards/ProjectCard";

const StackBadge = ({ label, SVGIcon }: { label: string; SVGIcon: React.ReactElement }) => {
	return (
		<span className="flex items-center gap-2 text-xs px-3 py-1 border rounded-sm">
			{SVGIcon}
			<p className="text-sm">{label}</p>
		</span>
	);
};

interface LandingPageProjectCardProps {
	title: string;
	description?: string;
	imageSrc: string;
	imageAlt?: string;
	className?: string;
}

export const LandingPageProjectCard: React.FC<LandingPageProjectCardProps> = ({ title, description, imageSrc, imageAlt = "Project thumbnail", className = "" }) => {
	return (
		<Card className={`relative p-0 overflow-hidden gap-0 h-80  ${className}`}>
			<div className="px-0 overflow-hidden">
				<div className=" h-52 w-full overflow-hidden">
					<Image
						src={imageSrc}
						width={500}
						height={500}
						className="object-cover object-fit object-center w-full overflow-hidden  h-52 hover:scale-125 transition-all"
						alt={imageAlt}
					/>
				</div>
			</div>

			<CardHeader className="w-full py-6  bottom-0 z-10">
				<CardTitle className="text-2xl">{title}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
		</Card>
	);
};

export default function Home() {
	return (
		<div className="max-w-6xl mx-auto relative mt-[12rem]">
			<div className="mb-[12rem]">
				<div className="grid grid-cols-3 gap-40 ">
					<div className="flex flex-col justify-center gap-10 col-span-2 ">
						<div>
							<p className="  mb-5 border px-6 py-2 inline-block rounded-md bg-white shadow-xs">Available for work &nbsp; 👋</p>
							<h2 className="text-5xl font-extrabold leading-tight">Let&apos;s Build Something</h2>

							<h2 className="text-5xl font-extrabold leading-tight flex overflow-hidden h-16">
								<ul className="running-text block">
									<li className="block">
										<span className=" ">Extraordinary</span>
									</li>
									<li className="block">
										<span className=" ">Smart</span>
									</li>
									<li className="block">
										<span className=" ">Impactful</span>
									</li>
								</ul>
								&nbsp;Together
							</h2>

							{/* <h1 className="text-5xl font-extrabold leading-tight">
								Passionate & Skilled <br />
								<span className="bg-gradient-to-br from-[#020024] via-[#090979] to-[#00d4ff] bg-[length:200%_auto] bg-clip-text text-transparent [animation:gradient-shine_3s_ease_infinite] ">
									Full-Stack Software Developer
								</span>
							</h1> */}
						</div>

						<p className=" text-lg ">
							I&apos;m <span className="font-extrabold">Ceciron Alejo III</span>, a motivated and skilled <i>full-stack software developer</i> ✨ <br />
							seeking a dynamic role where I can leverage my expertise, continuously learn, and contribute high-quality software solutions
						</p>
						<div className="flex flex-row gap-5">
							<Button size={"2xl"}>More about me </Button>
							<Button size={"2xl"} variant={"secondary"} asChild>
								<Link href="https://github.com/ceciiiron" target="_blank">
									<IconBrandGithub size={20} /> GitHub
								</Link>
							</Button>
						</div>
					</div>

					<div className="flex justify-end ">
						<div className="flex flex-col justify-center">
							<Image src={"/assets/images/ceciron.jpg"} width={300} height={300} className="rounded-full object-cover w-3xl h-3xl" alt="profile-picture" />
						</div>
					</div>
				</div>
			</div>

			<Section>
				{/* <SectionTitle>📁 Projects</SectionTitle> */}
				<div className=" ">
					<p className="inline-block mb-4  border px-6 py-2 rounded-md bg-white shadow-xs">Built with love and passion ✨</p>

					<h2 className="text-4xl font-bold  dark:text-gruvbox-light text-gruvbox-dark">Latest Projects</h2>
				</div>

				<div className=" grid grid-cols-2 gap-20 ">
					<LandingPageProjectCard
						title="BRHMC Queuing System"
						description="Bicol Regional Hospital and Medical Center - Electronic Queuing System"
						imageSrc="/assets/images/projects/qs/header.png"
					/>

					<LandingPageProjectCard
						title="BUCS-RDMS"
						description="Bicol Univeristy College of Science - Research Document and Management System"
						imageSrc="/assets/images/projects/bucsrdms/header.png"
						className=" xl:-mt-35"
					/>

					<LandingPageProjectCard title="BUCSRDMS" imageSrc="/assets/images/projects/bucsrdms/2.jpeg" className="" />

					<LandingPageProjectCard
						title="One Banwaan"
						description="A Barangay-Centric Smart Community in Legazpi City"
						className=" xl:-mt-35"
						imageSrc="/assets/images/projects/bucsrdms/1.jpeg"
					/>

					<div className="hidden md:block lg:block xl:block"></div>

					<div className="flex justify-center md:-mt-35">
						<Button size={"2xl"} asChild>
							<Link href={"/projects"}>Show more projects</Link>
						</Button>
					</div>
				</div>
			</Section>

			{/* <Section>
				<SectionTitle>📁 Projects</SectionTitle>
				<div className="cards-container grid grid-cols-3 gap-10 ">
					<ProjectCard title="Hospital Queuing System" description="Electronic Queuing System" imageSrc="/assets/images/projects/qs/header.png" />

					<ProjectCard title="BUCSRDMS" imageSrc="/assets/images/projects/bucsrdms/header.png" />

					<ProjectCard title="One Banwaan: A Barangay-Centric Smart Community in Legazpi City" imageSrc="/assets/images/projects/bucsrdms/1.jpeg" />
				</div>
				<div className="flex justify-center">
					<Button size={"xl"} asChild>
						<Link href={"/projects"}>Show more projects</Link>
					</Button>
				</div>
			</Section> */}

			<Section>
				<div className="grid grid-cols-3 gap-20">
					<Card className="col-span-2">
						<CardContent>
							<div className="flex flex-col gap-4">
								{/* Backend */}
								<div className="flex flex-col gap-1">
									<p className="text-md">Backend</p>
									<div className="flex flex-row flex-wrap gap-2">
										{/* Databases */}
										<StackBadge label="MySQL" SVGIcon={<SVGMySQL />} />
										<StackBadge label="Postgresql" SVGIcon={<SVGPostgresql />} />
										<StackBadge label="MongoDB" SVGIcon={<SVGMongoDB />} />

										{/* Backend Languages & Frameworks */}
										<StackBadge label="PHP" SVGIcon={<SVGPHP />} />
										<StackBadge label="Laravel" SVGIcon={<SVGLaravel />} />
										<StackBadge label="Codeigniter" SVGIcon={<SVGCodeigniter />} />
										<StackBadge label="Node.js" SVGIcon={<SVGNodeJS />} />
										<StackBadge label="Express.js" SVGIcon={<SVGExpressJS />} />
										<StackBadge label="Next.js" SVGIcon={<SVGNextJS />} />
									</div>
								</div>

								{/* Frontend */}
								<div className="flex flex-col gap-1">
									<p className="text-md">Frontend</p>
									<div className="flex flex-row flex-wrap gap-2">
										{/* Core Languages */}
										<StackBadge label="HTML" SVGIcon={<SVGHTML />} />
										<StackBadge label="CSS" SVGIcon={<SVGCSS />} />
										<StackBadge label="Javascript" SVGIcon={<SVGJavascript />} />
										<StackBadge label="Typescript" SVGIcon={<SVGTypescript />} />

										{/* Frameworks & Libraries */}
										<StackBadge label="React.js" SVGIcon={<SVGReact />} />
										<StackBadge label="jQuery" SVGIcon={<SVGJquery />} />
										<StackBadge label="Alpine.js" SVGIcon={<SVGAlpineJS />} />

										{/* UI Frameworks */}
										<StackBadge label="TailwindCSS" SVGIcon={<SVGTailwindCss />} />
										<StackBadge label="Bootstrap" SVGIcon={<SVGBootstrap />} />
										<StackBadge label="MaterialUI" SVGIcon={<SVGMaterialUI />} />
										<StackBadge label="MantineUI" SVGIcon={<SVGMantine />} />
									</div>
								</div>
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
					{/* Timeline line */}
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

					{/* Timeline items */}
					<div className="space-y-12">
						{/* Current Role */}
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

						{/* Previous Role */}
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

			{/* <Section>
				<div className="">
					<h1 className=" text-3xl font-bold mb-8  text-gruvbox-light">~ / Education</h1>
					<div className=" border-l border-gruvbox-light relative">
						<div className="w-full ml-8 mb-8">
							<div className="absolute w-4 h-4 bg-gruvbox-light rounded-full mt-1 -left-2 "></div>
							<h2 className="font-bold text-gray-600">2019 - 2023</h2>
							<h2 className="font-bold text-lg">Bicol University College of Science</h2>
							<p>Bachelor of Science in Information Technology (BSIT)</p>
							<p>Cum Laude</p>
							<p>DOST SEI Undergraduate Scholar</p>
						</div>

						<div className="w-full ml-8">
							<div className="absolute w-4 h-4 bg-gruvbox-light rounded-full mt-1 -left-2 "></div>
							<h2 className="font-bold text-gray-600">2017 - 2019</h2>
							<h2 className="font-bold text-lg">STI College Legazpi</h2>
							<p>Information Technology in Mobile App and Web Development (ITMAWD)</p>
							<p>Academic Achiever</p>
						</div>
					</div>
				</div>
			</Section> */}
		</div>
	);
}

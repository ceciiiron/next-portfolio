// import Image from "next/image";
import Image from "next/image";
import Navbar from "./components/Navbar";
// import { Collapsible } from "@/components/ui/collapsible";
// import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import SVGTailwindCss from "@/components/svg/SVGTailwindCss";

const Section = ({ children }: { children: React.ReactNode }) => {
	return <div className=" my-16 flex flex-col gap-10">{children}</div>;
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
	return <h1 className="text-2xl font-bold  dark:text-gruvbox-light text-gruvbox-dark">{children}</h1>;
};

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

const StackBadge = ({ label, SVGIcon }: { label: string; SVGIcon: React.ReactElement }) => {
	return (
		<span className="flex items-center gap-2 text-xs px-3 py-1 border rounded-sm">
			{SVGIcon}
			<p className="text-sm">{label}</p>
		</span>
	);
};

export default function Home() {
	return (
		<div className="max-w-5xl mx-auto relative mt-36">
			<Navbar />

			<div className="my-16 py-16 rounded-md ">
				<div className="grid grid-cols-3 gap-40 ">
					<div className="flex flex-col justify-center gap-10 col-span-2 ">
						<h1 className="text-5xl font-extrabold leading-tight">
							Let&apos;s Build Something <br />
							<span className="bg-gradient-to-r from-black via-gray-600 to-white bg-[length:200%_auto] bg-clip-text text-transparent [animation:gradient-shine_3s_ease_infinite]">
								Extraordinary Together
							</span>
						</h1>
						<p className=" text-lg ">
							I&apos;m <span className="font-bold">Ceciron Alejo III</span>, a motivated and skilled full-stack software developer seeking a dynamic role where I can
							leverage my expertise, continuously learn, and contribute high-quality software solutions
						</p>
						<div className="flex flex-row gap-5">
							<Button size={"xl"}>More about me </Button>
							<Button size={"xl"} variant={"secondary"} asChild>
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
				<SectionTitle>📁 Projects</SectionTitle>
				<div className="cards-container grid grid-cols-3 gap-10 ">
					<Card className="relative py-0 overflow-hidden">
						<div className="px-0 overflow-hidden">
							<div className="  h-48 w-full overflow-hidden  ">
								<Image
									src={"/assets/images/projects/qs/header.png"}
									width={300}
									height={500}
									className="object-cover object-fit object-center w-full  overflow-hidden h-48 "
									alt="logo"
								/>
							</div>
						</div>

						<CardHeader className=" w-full">
							<CardTitle className="text-lg">Electronic Queuing System</CardTitle>
						</CardHeader>
					</Card>

					<Card className="relative py-0 overflow-hidden gap-0">
						<div className="px-0 overflow-hidden">
							<div className="h-48 w-full overflow-hidden  ">
								<Image
									src={"/assets/images/projects/bucsrdms/header.png"}
									width={300}
									height={500}
									className="object-cover object-fit object-center w-full  overflow-hidden h-48 "
									alt="logo"
								/>
							</div>
						</div>

						<CardHeader className=" w-full p-6">
							<CardTitle className="text-lg">Bicol University College of Science Research Document and Management System</CardTitle>
						</CardHeader>
					</Card>

					<Card className="relative py-0 overflow-hidden">
						<div className="px-0 overflow-hidden">
							<div className="  h-48 w-full overflow-hidden  ">
								<Image
									src={"/assets/images/projects/bucsrdms/1.jpeg"}
									width={300}
									height={500}
									className="object-cover object-fit object-center w-full  overflow-hidden h-48"
									alt="logo"
								/>
							</div>
						</div>

						<CardHeader className=" w-full">
							<CardTitle className="text-lg">One Banwaan: A Barangay-Centric Smart Community in Legazpi City</CardTitle>
						</CardHeader>
					</Card>
				</div>
				<div className="flex justify-center">
					<Button size={"xl"}> Show more projects</Button>
				</div>
			</Section>

			<Section>
				<SectionTitle>🧰 Stack</SectionTitle>

				<Card>
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
			</Section>

			<Section>
				<SectionTitle>🧑‍💼 Work Experience</SectionTitle>
				<div className="cards-container grid grid-cols-2 gap-10 mb-4">
					{/* <div className="w-full p-4  border rounded-lg border-gruvbox-light/30"> */}
					<Card className="">
						<CardHeader>
							<CardTitle>Bicol Regional Hospital and Medical Center - Computer Programmer III</CardTitle>
							<CardDescription>August 2023 - Present</CardDescription>
						</CardHeader>
						<CardContent>
							{/* <p>
									Developed iHOMIS-NX Web (Integrated Hospital Operations Management Information System ) and integrated to Radiology Information System Module.
									Main features:
								</p> */}
							<Button variant={"outline"}>Read more</Button>
						</CardContent>
						{/* <Collapsible>
									<CollapsibleTrigger></CollapsibleTrigger> */}
						{/* <h2 className="font-bold text-gray-600">August 2023 - Present</h2>
								<h2 className="font-bold ">Bicol Regional Hospital and Medical Center (Computer Programmer III)</h2>
								<div className="">
									<ul className="list-disc list-inside">
										<li>Developed a web-based centralized electronic queuing system across different departments. </li>
										<li>
											Developed iHOMIS-NX Web (Integrated Hospital Operations Management Information System ) and integrated to Radiology Information System
											Module. Main features:
											<ul className="list-disc list-inside ml-4">
												<li>Doctor's order requests for radiologic exams.</li>
												<li>Charging of radiologic procedures.</li>
												<li>
													Integrated to a third-party Picture Archiving and Communication Server (PACS) Provider using HL7 standard messages through Mirth
													software.
												</li>
												<li>Report generation for census.</li>
											</ul>
										</li>

										<li>
											Performed software administration and technical support related tasks under Integrated Hospital Operations and Management Program IT
											Unit (IHOMP-IT Unit).
										</li>
										<li>Aided in the development of PACS RIS - IT - use, roles, responsibilities, and policies.</li>
										<li>Provided documentation and performed end-user training for deployed systems.</li>
										<li>Monitored worklogs assigned through internal IT Helpdesk ticketing system.</li>
									</ul>
								</div> */}
						{/* </Collapsible> */}
					</Card>
					{/* </div> */}

					<Card>
						<CardHeader>
							<CardTitle>Bicol University College of Science CSIT Dept. - OJT Computer Programmer</CardTitle>
							<CardDescription>February 2023 - April 2023</CardDescription>
						</CardHeader>
						<CardContent>
							<Button variant={"outline"}>Read more</Button>
						</CardContent>
					</Card>
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

			<Section>
				<footer className=" dark:border-gruvbox-light/30 dark:bg-gruvbox-dark/50 rounded-xl  w-full mx-auto inset-x-0  max-w-4xl z-50 ">
					<p className="text-center">Made with ✨ and ❤️ by Ceciron.</p>
				</footer>
			</Section>
		</div>
	);
}

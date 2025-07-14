// import { ProjectCard } from "@/components/cards/ProjectCard";
"use client";

import React from "react";
import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import { motion } from "motion/react";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { TechStackGroup } from "@/components/tech-stack/TechStackGroup";
import SVGReact from "@/components/svg/SVGReact";
import SVGPHP from "@/components/svg/SVGPHP";
import SVGLaravel from "@/components/svg/SVGLaravel";
import SVGMantine from "@/components/svg/SVGMantine";
import SVGMySQL from "@/components/svg/SVGMySQL";
import SVGCodeigniter from "@/components/svg/SVGCodeigniter";
import SVGBootstrap from "@/components/svg/SVGBootstrap";
import SVGNextJS from "@/components/svg/SVGNextJS";
import SVGTailwindCss from "@/components/svg/SVGTailwindCss";
import SVGMaterialUI from "@/components/svg/SVGMaterialUI";
import SVGNodeJS from "@/components/svg/SVGNodeJS";
interface ProjectCardProps {
	title: string;
	description?: string;
	imageSrc: string;
	imageAlt?: string;
	className?: string;
	redirectTo?: string;
	badges: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, badges, imageSrc, imageAlt = "Project thumbnail", className = "", redirectTo = "" }) => {
	const router = useRouter();

	return (
		<div onClick={() => router.push(redirectTo)}>
			<motion.div initial={{ opacity: 0, y: 15, filter: "blur(10px)" }} whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5 }}>
				<Card className={` p-0  gap-0 h-42 lg:h-52 ${className} overflow-hidden group cursor-pointer border-none shadow-none`}>
					<div className=" overflow-hidden group relative w-full rounded-sm border">
						<Image
							src={imageSrc}
							width={500}
							height={500}
							className={` h-42 lg:h-52 border  object-cover lg:object-fit  object-center w-full  transition-transform   scale-100 lg:scale-120   `}
							alt={imageAlt}
						/>
					</div>
				</Card>
				<div className=" py-6">
					<div className="mb-2 flex flex-row gap-2 items-center h-5">{badges}</div>

					<p className="text-lg mb-2 font-semibold">{title}</p>

					{description && <CardDescription>{description}</CardDescription>}
				</div>
			</motion.div>
		</div>
	);
};

export default function page() {
	return (
		<Section className="mt-">
			<div className="">
				{/* <Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>Projects</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb> */}

				{/* <Section className=""> */}
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>Projects</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<motion.div
					initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
					whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
					transition={{ duration: 0.5 }}
					className="flex flex-col">
					<div className="text-center">
						<p className="text-sm md:text-base inline-block px-6 py-2 shadow-sm bg-white border rounded-md mb-6">Built with love and passion ✨</p>
						<h2 className="text-3xl md:text-5xl  font-bold  md:leading-18 mb-6">Featured Projects</h2>
					</div>
				</motion.div>
				{/* </Section> */}

				<div className="mt-[2rem] lg:mt-[4rem]">
					<div className="cards-container grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
						<ProjectCard
							redirectTo="/"
							title="Next.js Portfolio"
							description="Personal portfolio written in Next.js"
							imageSrc="/assets/images/projects/qs/1.png"
							badges={
								<>
									<SVGNextJS />
									<SVGTailwindCss />
								</>
							}
						/>

						<ProjectCard
							redirectTo="/"
							title="BRHMC Queuing System"
							description="Bicol Regional Hospital and Medical Center - Electronic Queuing System"
							imageSrc="/assets/images/projects/qs/mockup.png"
							badges={
								<>
									<SVGReact />
									<SVGMantine />
									<SVGTailwindCss />
									<SVGLaravel />
									<SVGPHP />
									<SVGMySQL />
								</>
							}
						/>

						<ProjectCard
							redirectTo="/"
							title="HIS-RIS Integration"
							description="Radiology Information System"
							imageSrc="/assets/images/projects/brhmc-ris/mockup.png"
							badges={
								<>
									<SVGBootstrap />
									<SVGLaravel />
									<SVGPHP />
								</>
							}
						/>

						<ProjectCard
							redirectTo="/"
							title="BUCS-RDMS"
							description="Bicol University College of Science - Research and Document Management System"
							imageSrc="/assets/images/projects/bucsrdms/mockup.png"
							badges={
								<>
									<SVGBootstrap />
									<SVGCodeigniter />
									<SVGPHP />
									<SVGMySQL />
								</>
							}
						/>

						<ProjectCard
							redirectTo="/"
							title="Watch Shop"
							description="Watch Content Management and Inventory System"
							imageSrc="/assets/images/projects/bucsrdms/1.jpeg"
							badges={
								<>
									<SVGReact />
									<SVGMantine />
									<SVGTailwindCss />
									<SVGLaravel />
									<SVGPHP />
									<SVGMySQL />
								</>
							}
						/>

						<ProjectCard
							redirectTo="/"
							title="One Banwaan: A Barangay-Centric Smart Community in Legazpi City"
							imageSrc="/assets/images/projects/bucsrdms/1.jpeg"
							description="Interconnected Barangay Information System"
							badges={
								<>
									<SVGReact />
									<SVGTailwindCss />
									<SVGMaterialUI />
									<SVGNodeJS />
									<SVGMySQL />
								</>
							}
						/>

						<ProjectCard
							title="Ellis Ecotel"
							redirectTo="/projects/the-courier-company"
							description="Hotel Content Management System"
							imageSrc="/assets/images/projects/ellis-ecotel/mockup.png"
							badges={
								<>
									<SVGBootstrap />
									<SVGCodeigniter />
									<SVGPHP />
									<SVGMySQL />
								</>
							}
						/>

						<ProjectCard
							redirectTo="/"
							title="TuroMoko"
							description="Online Tutor and Tutee Community Platform"
							imageSrc="/assets/images/projects/turomoko/mockup.png"
							badges={
								<>
									<SVGBootstrap />
									<SVGCodeigniter />
									<SVGPHP />
									<SVGMySQL />
								</>
							}
						/>

						{/* TUROMOKO BETA https://youtu.be/OGlJu5-mVQU */}

						<ProjectCard
							title="The Courier Company"
							redirectTo="/projects/the-courier-company"
							description="Courier Management System"
							imageSrc="/assets/images/projects/tcc/mockup.png"
							badges={
								<>
									<SVGBootstrap />
									<SVGCodeigniter />
									<SVGPHP />
									<SVGMySQL />
								</>
							}
						/>
					</div>
				</div>
			</div>
		</Section>
	);
}

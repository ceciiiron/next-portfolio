// import { ProjectCard } from "@/components/cards/ProjectCard";
"use client";

import React from "react";
import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import { motion } from "motion/react";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface ProjectCardProps {
	title: string;
	description?: string;
	imageSrc: string;
	imageAlt?: string;
	className?: string;
	redirectTo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, imageAlt = "Project thumbnail", className = "", redirectTo = "" }) => {
	const router = useRouter();

	return (
		<motion.div initial={{ opacity: 0, y: 15, filter: "blur(10px)" }} whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5 }}>
			<Card className={` p-0  gap-0  h-52 lg:h-72  ${className} overflow-hidden group cursor-pointer bg-none border rounded-md`} onClick={() => router.push(redirectTo)}>
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

export default function page() {
	return (
		<Section>
			<div className="">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>Projects</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<div className="mt-[4rem]">
					<div className="flex flex-col justify-center gap-2 col-span-2">
						<div>
							<p className="inline-block mb-4  border px-6 py-2 rounded-md bg-white shadow-xs">Built with love and passion ✨</p>
						</div>

						<h1 className="text-6xl font-extrabold leading-tight">
							{" "}
							<span className="">Projects</span>
						</h1>
					</div>

					<div className="cards-container grid grid-cols-3 gap-10">
						<ProjectCard
							redirectTo="/"
							title="BRHMC Queuing System"
							description="Bicol Regional Hospital and Medical Center - Electronic Queuing System"
							imageSrc="/assets/images/projects/qs/header.png"
						/>

						<ProjectCard
							redirectTo="/"
							title="BUCS-RDMS"
							description="Bicol University College of Science - Research and Document Management System"
							imageSrc="/assets/images/projects/bucsrdms/header.png"
						/>

						<ProjectCard redirectTo="/" title="One Banwaan: A Barangay-Centric Smart Community in Legazpi City" imageSrc="/assets/images/projects/bucsrdms/1.jpeg" />

						<ProjectCard
							title="The Courier Company"
							redirectTo="/projects/the-courier-company"
							description="Courier Management System"
							imageSrc="/assets/images/projects/bucsrdms/header.png"
						/>
					</div>
				</div>
			</div>
		</Section>
	);
}

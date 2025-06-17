import { ProjectCard } from "@/components/cards/ProjectCard";
import React from "react";
import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function page() {
	return (
		<>
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
						<p className="text-gray-400 text-4xl font-bold">
							Turning complex problems <br /> into simple intuitive solutions <br /> that serve real people.
						</p>
					</div>

					<Section>
						<div className="cards-container grid grid-cols-3 gap-10">
							<ProjectCard
								url="/"
								title="BRHMC Queuing System"
								description="Bicol Regional Hospital and Medical Center - Electronic Queuing System"
								imageSrc="/assets/images/projects/qs/header.png"
							/>

							<ProjectCard
								url="/"
								title="BUCS-RDMS"
								description="Bicol University College of Science - Research and Document Management System"
								imageSrc="/assets/images/projects/bucsrdms/header.png"
							/>

							<ProjectCard url="/" title="One Banwaan: A Barangay-Centric Smart Community in Legazpi City" imageSrc="/assets/images/projects/bucsrdms/1.jpeg" />

							<ProjectCard
								title="The Courier Company"
								url="/projects/the-courier-company"
								description={<p>Courier Management System</p>}
								imageSrc="/assets/images/projects/bucsrdms/header.png"
							/>
						</div>
					</Section>
				</div>
			</div>
		</>
	);
}

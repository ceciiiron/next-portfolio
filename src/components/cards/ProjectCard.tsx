import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface ProjectCardProps {
	title: string;
	description?: React.ReactNode;
	imageSrc: string;
	imageAlt?: string;
	className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, imageAlt = "Project thumbnail", className = "" }) => {
	return (
		<Card className={`relative p-0 overflow-hidden gap-0 ${className}`}>
			<div className="px-0 overflow-hidden ">
				<div className="h-48 w-full overflow-hidden">
					<Image src={imageSrc} width={300} height={500} className="object-cover object-fit object-center w-full overflow-hidden h-48" alt={imageAlt} />
				</div>
			</div>

			<CardHeader className="w-full py-6">
				<CardTitle className="text-lg">{title}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
		</Card>
	);
};

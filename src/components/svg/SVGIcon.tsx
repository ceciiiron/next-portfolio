import React, { SVGProps } from "react";
import { cn } from "@/lib/utils";

export interface SVGIconProps extends SVGProps<SVGSVGElement> {
	content: React.ReactNode;
	viewBox?: string;
	className?: string;
	height?: string | number;
	width?: string | number;
}

const SVGIcon: React.FC<SVGIconProps> = ({ content, viewBox = "0 0 24 24", className, height = "1em", width = "1em", ...props }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} height={height} width={width} className={cn(className)} {...props}>
			{content}
		</svg>
	);
};

export default SVGIcon;

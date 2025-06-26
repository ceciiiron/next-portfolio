import React from "react";
import { techIcons } from "./techIcons";
import { TechStackBadgeProps } from "./types";
import { cn } from "@/lib/utils";
import { getSizeStyles } from "./utils";

export const TechStackBadge: React.FC<TechStackBadgeProps> = ({ label, SVGIcon, className, size = "md" }) => {
	const icon = SVGIcon || techIcons[label];
	const styles = getSizeStyles(size);

	if (!icon) {
		console.warn(`No icon found for technology: ${label}`);
		return null;
	}

	return (
		<span
			className={cn(
				"flex items-center justify-center gap-2 border rounded-sm transition-colors bg-white hover:bg-gray-50 dark:hover:bg-gray-800",
				styles.container,
				className
			)}
			title={label}>
			<div className={cn(styles.icon)}>{icon}</div>
			<p className={cn("font-medium", styles.text)}>{label}</p>
		</span>
	);
};

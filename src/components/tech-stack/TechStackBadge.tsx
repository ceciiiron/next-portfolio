import React from "react";
import { TechStackBadgeProps } from "./types";
import { cn } from "@/lib/utils";
import { getSizeStyles } from "./utils";
import { getIconByName } from "./iconRegistry";
import { techIcons } from "./techIcons"; // Keep for backward compatibility during migration

export const TechStackBadge: React.FC<TechStackBadgeProps> = ({ label, SVGIcon, className, size = "md", withLabel = true, withIcon = true }) => {
	// Try to get icon from new registry first, then fall back to legacy techIcons
	const icon = SVGIcon || getIconByName(label) || techIcons[label];
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
			)}>
			{withIcon && <div className={cn(styles.icon, !withLabel && "p-0  w-1 justify-start align-start ")}>{icon}</div>}
			{withLabel && <p className={cn("font-medium", styles.text)}>{label}</p>}
		</span>
	);
};

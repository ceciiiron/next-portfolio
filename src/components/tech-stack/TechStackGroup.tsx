import React from "react";
import { TechStackBadge } from "./TechStackBadge";
import { TechStackGroupProps } from "./types";
import { cn } from "@/lib/utils";

export const TechStackGroup: React.FC<TechStackGroupProps> = ({
	badgesAlign = "justify-center",
	title,
	badges,
	className,
	size = "sm",
	withLabel = true,
	withIcon = true,
	techStackBadgeClassName,
}) => {
	if (!badges.length) {
		return null;
	}

	return (
		<div className={cn("flex flex-col gap-2", className)}>
			{title && <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">{title}</h3>}
			<div className={cn("flex flex-row flex-wrap", withLabel && "gap-2", badgesAlign)}>
				{badges.map((label) => (
					<TechStackBadge key={label} label={label} size={size} withLabel={withLabel} withIcon={withIcon} className={techStackBadgeClassName} />
				))}
			</div>
		</div>
	);
};

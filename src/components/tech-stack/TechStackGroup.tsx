import React from "react";
import { TechStackBadge } from "./TechStackBadge";
import { TechStackGroupProps } from "./types";
import { cn } from "@/lib/utils";

export const TechStackGroup: React.FC<TechStackGroupProps> = ({ title, badges, className, size = "sm", withLabel = true }) => {
	if (!badges.length) {
		return null;
	}

	return (
		<div className={cn("flex flex-col gap-2", className)}>
			{title && <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">{title}</h3>}
			<div className="flex flex-row flex-wrap  gap-2 justify-center">
				{badges.map((label) => (
					<TechStackBadge key={label} label={label} size={size} withLabel={withLabel} />
				))}
			</div>
		</div>
	);
};

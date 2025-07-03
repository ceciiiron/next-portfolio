import { techIcons } from "./techIcons";

export type TechnologyName = keyof typeof techIcons;

export type TechStackSize = "sm" | "md" | "lg";

export interface TechStackBadgeProps {
	label: TechnologyName;
	SVGIcon?: React.ReactElement;
	className?: string;
	size?: TechStackSize;
	withLabel?: boolean;
}

export interface TechStackGroupProps {
	title?: string;
	badges: TechnologyName[];
	className?: string;
	size?: TechStackSize;
	withLabel?: boolean;
}

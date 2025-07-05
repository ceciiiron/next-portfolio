import { techIcons } from "./techIcons";

export type TechnologyName = keyof typeof techIcons;

export type TechStackSize = "sm" | "md" | "lg";

export interface BaseTechStackBadgeProps {
	className?: string;
	size?: TechStackSize;
	withLabel?: boolean;
	withIcon?: boolean;
}

export interface TechStackBadgeProps extends BaseTechStackBadgeProps {
	label: TechnologyName;
	SVGIcon?: React.ReactElement;
}

export interface TechStackGroupProps extends BaseTechStackBadgeProps {
	title?: string;
	badges: TechnologyName[];
	badgesAlign?: string;
	techStackBadgeClassName?: string;
}

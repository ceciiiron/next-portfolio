import { TechStackSize } from "./types";

export const getSizeStyles = (size: TechStackSize = "md") => {
	const styles = {
		sm: {
			container: "text-xs px-2 py-0.5",
			icon: "w-3 h-3",
			text: "text-xs",
		},
		md: {
			container: "text-sm px-3 py-1",
			icon: "w-4 h-4",
			text: "text-sm",
		},
		lg: {
			container: "text-base px-4 py-1.5",
			icon: "w-5 h-5",
			text: "text-base",
		},
	};

	return styles[size];
};

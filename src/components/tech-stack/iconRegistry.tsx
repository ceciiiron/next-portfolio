import React from "react";
import SVGIcon from "@/components/svg/SVGIcon";
import { svgData } from "@/components/svg/svgData";

export const iconRegistry: Record<string, React.ReactElement> = {
	"React.js": <SVGIcon content={svgData.React.content} viewBox={svgData.React.viewBox} />,
	"Next.js": <SVGIcon content={svgData.NextJS.content} viewBox={svgData.NextJS.viewBox} />,
};

export function getIconByName(name: string): React.ReactElement | undefined {
	return iconRegistry[name];
}

export function registerIcon(name: string, icon: React.ReactElement): void {
	iconRegistry[name] = icon;
}

import { cn } from "@/lib/utils";

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={cn("max-w-5xl my-12 lg:my-24 mx-auto flex flex-col gap-4 px-4 lg:px-0  md:gap-10", className)}>{children}</div>;
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
	return <h2 className="text-2xl font-bold  dark:text-gruvbox-light text-gruvbox-dark">{children}</h2>;
};

export { Section, SectionTitle };

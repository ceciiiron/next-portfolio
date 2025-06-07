const Section = ({ children }: { children: React.ReactNode }) => {
	return <div className=" my-24 flex flex-col gap-10">{children}</div>;
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
	return <h2 className="text-2xl font-bold  dark:text-gruvbox-light text-gruvbox-dark">{children}</h2>;
};

export { Section, SectionTitle };

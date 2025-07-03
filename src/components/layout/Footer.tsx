const Footer = () => (
	<footer className="relative dark:border-gruvbox-light/30 dark:bg-gruvbox-dark/50 rounded-xl  w-full mx-auto  max-w-4xl  py-12">
		<div
			className="absolute inset-x-0 -bottom-0 -z-30 h-64 pointer-events-none"
			style={{
				backgroundImage: `
			    radial-gradient(at 20% 70%, rgba(168, 85, 247, 0.3), transparent 50%),
			    radial-gradient(at 80% 80%, rgba(236, 72, 153, 0.25), transparent 50%),
			    radial-gradient(at 60% 20%, rgba(79, 70, 229, 0.2), transparent 50%)
			  `,
				filter: "blur(100px)",
				backgroundBlendMode: "lighten",
			}}
		/>

		<p className="text-center">Made with ✨ and ❤️ by Ceciron.</p>
	</footer>
);

export { Footer };

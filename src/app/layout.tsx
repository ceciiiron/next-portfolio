import type { Metadata } from "next";
import { Figtree, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

// const inter = Inter({
// 	variable: "--font-inter",
// 	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

const figTree = Figtree({
	variable: "--font-fig-tree",
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
	variable: "--font-cormorant-garamond",
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ceciron Alejo III",
	description: "Ceciron Alejo III's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			{/* <body className={`antialiased ${figTree.variable} max-w-5xl mx-auto mt-[7rem]`}> */}

			<body className={`antialiased ${figTree.variable} ${cormorantGaramond.variable} `}>
				<div
					className="absolute inset-x-0 mx-auto -z-10  pointer-events-none max-w-4xl  h-56 top-0"
					style={{
						backgroundImage: `
        radial-gradient(at 20% 30%, rgba(168, 85, 247, 0.3), transparent 50%),
        radial-gradient(at 80% 20%, rgba(236, 72, 153, 0.25), transparent 50%),
        radial-gradient(at 60% 80%, rgba(79, 70, 229, 0.2), transparent 50%)
      `,
						filter: "blur(50px)",
						backgroundBlendMode: "lighten",
					}}
				/>

				<Navbar />
				<div className=" mt-[4rem] md:mt-[5rem] lg:mt-[8rem] ">{children}</div>
				<Footer />
			</body>
		</html>
	);
}

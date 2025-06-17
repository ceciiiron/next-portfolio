import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import { Section } from "@/components/ui/section";
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
			<body className={`antialiased ${figTree.variable} max-w-5xl mx-auto mt-[7rem]`}>
				<Navbar />
				{children}
				<Section>
					<Footer />
				</Section>
			</body>
		</html>
	);
}

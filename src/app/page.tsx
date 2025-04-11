// import Image from "next/image";
import Image from "next/image";
import Navbar from "./components/Navbar";

const Section = ({ children }: { children: React.ReactNode }) => {
	return <div className=" my-20">{children}</div>;
};

export default function Home() {
	return (
		// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
		//   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
		//     <Image
		//       className="dark:invert"
		//       src="/next.svg"
		//       alt="Next.js logo"
		//       width={180}
		//       height={38}
		//       priority
		//     />
		//     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
		//       <li className="mb-2 tracking-[-.01em]">
		//         Get started by editing{" "}
		//         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
		//           src/app/page.tsx
		//         </code>
		//         .
		//       </li>
		//       <li className="tracking-[-.01em]">
		//         Save and see your changes instantly.
		//       </li>
		//     </ol>

		//     <div className="flex gap-4 items-center flex-col sm:flex-row">
		//       <a
		//         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
		//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
		//         target="_blank"
		//         rel="noopener noreferrer"
		//       >
		//         <Image
		//           className="dark:invert"
		//           src="/vercel.svg"
		//           alt="Vercel logomark"
		//           width={20}
		//           height={20}
		//         />
		//         Deploy now
		//       </a>
		//       <a
		//         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
		//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
		//         target="_blank"
		//         rel="noopener noreferrer"
		//       >
		//         Read our docs
		//       </a>
		//     </div>
		//   </main>
		//   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
		//     <a
		//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
		//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       <Image
		//         aria-hidden
		//         src="/file.svg"
		//         alt="File icon"
		//         width={16}
		//         height={16}
		//       />
		//       Learn
		//     </a>
		//     <a
		//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
		//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       <Image
		//         aria-hidden
		//         src="/window.svg"
		//         alt="Window icon"
		//         width={16}
		//         height={16}
		//       />
		//       Examples
		//     </a>
		//     <a
		//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
		//       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       <Image
		//         aria-hidden
		//         src="/globe.svg"
		//         alt="Globe icon"
		//         width={16}
		//         height={16}
		//       />
		//       Go to nextjs.org →
		//     </a>
		//   </footer>
		// </div>
		<div className="mx-52 relative">
			<Navbar />

			<div className=" py-40 my-16">
				<div className="grid grid-cols-3 gap-40">
					<div className="flex flex-col justify-center gap-5 col-span-2 ">
						<h1 className="text-5xl font-bold mb-4">
							Let&apos;s Build Something <br />
							Extraordinary Together 🚀
							{/* <div className="flex gap-2"> */}
							{/* <span>Amazing</span> */}
							{/* <ol className="flex overflow-hidden h-30 bg-red-500 leading-30">
									<li>
										<span>Amazing</span>
									</li>
									<li>
										<span>Extraordinary</span>
									</li>
									<li>
										<span>Remarkable</span>
									</li>
									<li>
										<span>Fun</span>
									</li>
								</ol> */}
							{/* </div> */}
						</h1>
						<p className=" text-lg ">
							I&apos;m <span className="underline">Ceciron Alejo III</span>, a motivated and skilled full-stack software developer seeking a dynamic role where I can
							leverage my expertise, continuously learn, and contribute high-quality solutions
						</p>
					</div>

					<div className="flex justify-end  ">
						{/* <div className="rounded-full w-3xl h-3xl"> */}
						<div>
							<Image src={"/assets/images/ceciron.jpg"} width={300} height={300} className="rounded-full object-cover w-3xl h-3xl" alt="profile-picture" />
							{/* </div> */}
						</div>
					</div>
				</div>
			</div>

			<Section>
				<div className="">
					<h1 className=" text-3xl font-bold mb-8 text-gruvbox-light">~ / Projects</h1>
					<div className="cards-container grid grid-cols-3 gap-10">
						<div className="w-full min-h-84 p-4  border rounded-lg border-gruvbox-light/30">
							<h2 className="font-bold text-2xl">Electronic Queuing System</h2>
						</div>
						<div className="w-full min-h-84 p-4  border rounded-lg border-gruvbox-light/30">
							<h2 className="font-bold text-2xl">Online Watch Shop</h2>
						</div>
						<div className="w-full min-h-84 p-4  border rounded-lg border-gruvbox-light/30">
							<h2 className="font-bold text-2xl">School Research Document Management System</h2>
						</div>
					</div>
				</div>
			</Section>

			<Section>
				<div className="">
					<h1 className=" text-3xl font-bold mb-8 text-gruvbox-light">~ / Work</h1>
					<div className="cards-container flex flex-col gap-10">
						<div className="w-full p-4  border rounded-lg border-gruvbox-light/30">
							<h2 className="font-bold text-gray-600">August 2023 - Present</h2>
							<h2 className="font-bold ">Bicol Regional Hospital and Medical Center (Computer Programmer III)</h2>
							<div className="">
								<ul className="list-disc list-inside">
									<li>Developed a web-based centralized electronic queuing system across different departments. </li>
									<li>
										Developed iHOMIS-NX Web (Integrated Hospital Operations Management Information System ) and integrated to Radiology Information System
										Module. Main features:
										<ul className="list-disc list-inside ml-4">
											<li>Doctor’s order requests for radiologic exams.</li>
											<li>Charging of radiologic procedures.</li>
											<li>
												Integrated to a third-party Picture Archiving and Communication Server (PACS) Provider using HL7 standard messages through Mirth
												software.
											</li>
											<li>Report generation for census.</li>
										</ul>
									</li>

									<li>
										Performed software administration and technical support related tasks under Integrated Hospital Operations and Management Program IT Unit
										(IHOMP-IT Unit).
									</li>
									<li>Aided in the development of PACS RIS - IT - use, roles, responsibilities, and policies.</li>
									<li>Provided documentation and performed end-user training for deployed systems.</li>
									<li>Monitored worklogs assigned through internal IT Helpdesk ticketing system.</li>
								</ul>
							</div>
						</div>

						<div className="w-full p-4  border rounded-lg border-gruvbox-light/30">
							<h2 className="font-bold text-gray-600">February 2023 - April 2023</h2>
							<h2 className="font-bold ">Bicol University College of Science CSIT Dept. - OJT (Computer Programmer)</h2>
						</div>
					</div>
				</div>
			</Section>

			<Section>
				<div className="">
					<h1 className=" text-3xl font-bold mb-8  text-gruvbox-light">~ / Education</h1>
					<div className=" border-l border-gruvbox-light relative">
						<div className="w-full ml-8 mb-8">
							<div className="absolute w-4 h-4 bg-gruvbox-light rounded-full mt-1 -left-2 "></div>
							<h2 className="font-bold text-gray-600">2019 - 2023</h2>
							<h2 className="font-bold text-lg">Bicol University College of Science</h2>
							<p>Bachelor of Science in Information Technology (BSIT)</p>
							<p>Cum Laude</p>
							<p>DOST SEI Undergraduate Scholar</p>
						</div>

						<div className="w-full ml-8">
							<div className="absolute w-4 h-4 bg-gruvbox-light rounded-full mt-1 -left-2 "></div>
							<h2 className="font-bold text-gray-600">2017 - 2019</h2>
							<h2 className="font-bold text-lg">STI College Legazpi</h2>
							<p>Information Technology in Mobile App and Web Development (ITMAWD)</p>
							<p>Academic Achiever</p>
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
}

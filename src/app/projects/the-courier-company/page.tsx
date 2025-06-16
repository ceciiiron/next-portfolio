import React from "react";
import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function page() {
	return (
		<>
			<div className="max-w-6xl mx-auto relative mt-[7rem]">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>The Courier Company</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<div className="mt-[4rem]">
					<div className="flex flex-col justify-center gap-2 col-span-2">
						{/* <div>
							<p className="inline-block mb-4  border px-6 py-2 rounded-md bg-white shadow-xs">Built with love and passion ✨</p>
						</div> */}

						<h1 className="text-6xl font-extrabold leading-tight">
							{" "}
							<span className="">The Courier Company</span>
						</h1>
						<p className="text-gray-400 text-4xl font-bold">Courier management information system</p>
					</div>

					<Section>
						<Card>
							<CardContent>
								<div className="flex flex-col justify-center items-center align-center w-full rounded py-4 gap-4">
									<Image src={"/assets/images/projects/tcc/csr/1.png"} width={800} height={800} className="rounded shadow-sm" alt="csr-dashboard" />
									<p className="italic">The Courier Company - Customer Sales Representative Dashboard </p>
								</div>

								<div className="flex flex-col gap-4">
									<p>
										This system was developed during the final weeks of our Information Management 1 course while I was pursuing a Bachelor of Science in
										Information Technology at Bicol University. Our professor, Ma’am Mary Joy, randomly assigned topics using a spinning wheel, and our team
										landed on the Courier Information System. It was during the height of the COVID-19 pandemic, when face-to-face collaboration was limited.
										Many of my teammates were unable to contribute to the programming aspect due to hardware limitations, while others focused on documentation.
										We were given only a week of time for the development of the system. Given the circumstances, I took full ownership of the development
										process, as I had both the necessary equipment and the technical skills. With my prior experience in building information systems, I was
										confident—along with my team—that we could successfully excel in the course.
									</p>

									<p>The system is divided into three main user roles: Customer, Customer Sales Representative (CSR), and Administrator.</p>

									<p>The Customer has access to the following features:</p>
									<ul className="list-disc ml-4">
										<li>Customer dashboard</li>
										<li>Book a parcel delivery using a consignment form</li>
										<li>Track parcel status, assigned delivery rider, and travel history (Parcel Tracker)</li>
									</ul>

									<p>The Customer Sales Representative has access to the following features:</p>
									<ul className="list-disc ml-4">
										<li>CSR dashboard</li>
										<li>Verify incoming parcels for collection and delivery</li>
										<li>View Courier List</li>
										<li>Courier assignment to selected parcels</li>
										<li>Dispatch couriers for collection and delivery</li>
										<li>Track parcel status, assigned delivery rider, and travel history (Parcel Tracker)</li>
									</ul>

									<div className="flex flex-col justify-center items-center align-center w-full">
										<Carousel opts={{ loop: true }} className="max-w-4xl">
											<CarouselContent>
												<CarouselItem className="flex flex-col justify-center items-center align-center w-full rounded py-4 gap-4">
													<Image
														src={"/assets/images/projects/tcc/csr/2.png"}
														width={800}
														height={800}
														className="rounded shadow-sm"
														alt="csr-dashboard"
													/>
												</CarouselItem>
												<CarouselItem className="flex flex-col justify-center items-center align-center w-full rounded py-4 gap-4">
													<Image
														src={"/assets/images/projects/tcc/csr/3.png"}
														width={800}
														height={800}
														className="rounded shadow-sm"
														alt="csr-dashboard"
													/>
												</CarouselItem>
												<CarouselItem className="flex flex-col justify-center items-center align-center w-full rounded py-4 gap-4">
													<Image
														src={"/assets/images/projects/tcc/csr/1.png"}
														width={800}
														height={800}
														className="rounded shadow-sm"
														alt="csr-dashboard"
													/>
												</CarouselItem>
												<CarouselItem className="flex flex-col justify-center items-center align-center w-full rounded py-4 gap-4">
													<Image
														src={"/assets/images/projects/tcc/csr/4.png"}
														width={800}
														height={800}
														className="rounded shadow-sm"
														alt="csr-dashboard"
													/>
												</CarouselItem>
											</CarouselContent>
											<CarouselPrevious />
											<CarouselNext />
										</Carousel>
									</div>

									<p>The Administrator has access to the following features:</p>
									<ul className="list-disc ml-4">
										<li>Administrator dashboard</li>
										<li>View list of registered branches, employees, and couriers (including vehicle and rider information)</li>
										<li>View parcel list and detailed information</li>
									</ul>

									<p>
										My teammate delivered a strong presentation of the system overview during our scheduled presentation. I was glad to see that our professor
										appreciated the project and that it exceeded her expectations. She even described it as &quot;capstone-worthy&quot; because of the features
										we had included.
									</p>
								</div>
							</CardContent>
						</Card>
					</Section>
				</div>
			</div>
		</>
	);
}

"use client"
import IconCheck from "@/public/images/v6/icon5v6.png";
import Image from "next/image";
import Link from "next/link";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import webdevelopment from "./webdevelopment.json";
function AboutTwo() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2">
						<FadeInRight className="sofax-content-thumbv8 ml-70">
						<Lottie animationData={webdevelopment} loop={true} />{" "}
						</FadeInRight>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac contentv8">
							<div className="tg-heading-subheading animation-style3">
								<h2>Cutting-Edge Web Development Solutions</h2>
							</div>
							<p>
							Build dynamic, scalable, and modern web applications with expertise in React, Angular, Gatsby, Next.js, Express, and MongoDB.
							</p>
							<div className="sofax-list-icon-wrap extra-mt">
								<div className="sofax-list-icon-icon contentv8">
									<ul>
										<li>
											<Image src={IconCheck} alt="check icon" />
											Dynamic Frontends with React and Angular
										</li>
										<li>
											<Image src={IconCheck} alt="check icon" />
											Blazing-Fast Websites with Gatsby and Next.js
										</li>
									</ul>
								</div>
								<div className="sofax-list-icon-icon contentv8">
									<ul>
										<li>
											<Image src={IconCheck} alt="check icon" />
											Robust Backend with Express
										</li>
										<li>
											<Image src={IconCheck} alt="check icon" />
											Efficient Data Management with MongoDB
										</li>
									</ul>
								</div>
							</div>
							<FadeInUp className="sofax-title-btn extra-mt">
								<Link className="sofax-default-btn pill" data-text="Explore More" href="/services/web-development">
									<span className="button-wraper">Explore More</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutTwo;

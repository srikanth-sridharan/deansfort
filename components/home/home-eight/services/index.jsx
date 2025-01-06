import icon5 from "@/public/images/v8/icon10v8.png";
import icon6 from "@/public/images/v8/icon11v8.png";
import icon1 from "@/public/images/v8/icon6v8.png";
import icon2 from "@/public/images/v8/icon7v8.png";
import icon3 from "@/public/images/v8/icon8v8.png";
import icon4 from "@/public/images/v8/icon9v8.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
const servicesData = [
	{
		id: 1,
		icon: icon1,
		title: "Website Development",
		description:
			"Develop custom websites & web apps with WordPress or React.js, including seamless migrations for a smooth transition.",
	},
	{
		id: 2,
		icon: icon2,
		title: "AI development",
		description: "Develop custom AI applications, integrate AI into websites, and create intelligent chatbots for enhanced user experiences.",
	},
	{
		id: 3,
		icon: icon3,
		title: "IT services",
		description:
			"Comprehensive IT services: Planning, implementation, and management of IT infrastructure, resources, and colocation, along with IT product offerings.",
	},
	{
		id: 4,
		icon: icon4,
		title: "Digital Marketing",
		description:
			"Drive online visibility with expert content creation, SEO (on-page, off-page, backlinks), and keyword research for maximum impact.",
	},
	{
		id: 5,
		icon: icon5,
		title: "Ecommere Solutions",
		description:
			"Develop high-performing e-commerce stores on WordPress, Shopify, or custom frameworks like Next.js (MERN/PERN) for unique business needs.",
	},
	{
		id: 6,
		icon: icon6,
		title: "Mobile App Development",
		description: "Develop high-quality mobile apps across platforms using React Native, Flutter, and native languages (Kotlin/Swift) for optimal performance.",
	},
];
function Services() {
	return (
		<section className="sofax-section-padding2 bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>Proven Solutions & Expert Advice for your needs.</h2>
					</div>
				</div>

				<div className="sofax-features-wrapv8">
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="sofax-features-boxv8">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;

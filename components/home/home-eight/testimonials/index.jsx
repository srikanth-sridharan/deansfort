import image1 from "@/public/images/v8/image4v8.png";
import image2 from "@/public/images/v8/image5v8.png";
import image3 from "@/public/images/v8/image6v8.png";

import FadeInStagger from "../../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";
const testimonialsData = [
	{
		id: 1,
		image: image1,
		rating: 5,
		review: "This IT company has been an invaluable partner in our digital transformation journey. Their expertise in web development, coupled with innovative digital marketing strategies, has significantly boosted our online presence and driven tangible results. We're particularly impressed with their AI-powered solutions that have streamlined our operations and enhanced customer engagement.",
		author: {
			name: "David Miller",
			title: "CEO",
		},
	},
	{
		id: 2,
		image: image2,
		rating: 5,
		review: "We were seeking a reliable IT partner to help us modernize our website and expand our digital reach. This company exceeded our expectations in every way. Their team of skilled developers, marketers, and AI specialists delivered a high-quality website that is both user-friendly and visually appealing. Their ongoing digital marketing support has consistently generated valuable leads and increased brand awareness.",
		author: {
			name: "Sarah Jones",
			title: "Marketing Director",
		},
	},
	{
		id: 3,
		image: image3,
		rating: 5,
		review: "As a growing startup, we needed a comprehensive IT solution that could support our rapid growth. This company provided us with exceptional web development services, creating a robust and scalable online platform. Their digital marketing expertise has been instrumental in reaching our target audience and driving conversions. We're particularly excited about the potential of their AI solutions to further optimize our business processes and enhance customer satisfaction.",
		author: {
			name: "Rohan Sharma",
			title: "CTO",
		},
	},
];

function Testimonials() {
	return (
		<section className="sofax-section-padding bg-light" id="testimonial">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2>What Our Clients Are Saying</h2>
					</div>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger key={testimonial.id} index={index} className="col-xl-4 col-md-6">
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;

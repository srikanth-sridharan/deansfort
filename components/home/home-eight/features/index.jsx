import icon1 from "@/public/images/v8/artificial-intelligence.png";
import icon2 from "@/public/images/v8/information-technology.png";
import icon3 from "@/public/images/v8/social-media.png";

import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

const featuresData = [
	{
		id: 1,
		icon: icon1,
		title: "AI development",
		description: "Intelligent solutions for Developing custom AI models and applications for businesses.",
	},
	{
		id: 2,
		icon: icon2,
		title: "IT Services",
		description: "Comprehensive IT support, from infrastructure management to cybersecurity.",
	},
	{
		id: 3,
		icon: icon3,
		title: "Digital Marketing",
		description: "Boosting brand visibility and driving conversions through targeted campaigns.",
	},
];

function Features() {
	return (
		<section className="sofax-features-section-v8">
			<div className="container">
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger index={index} key={feature.id} className="col-lg-4">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;

import AutoSliderAI from "@/components/common/auto-sliderAI";
import BreadCrumb from "@/components/common/Breadcrumb";
import AISingleServiceDetails from "@/components/service-page/aiservices";

export const metadata = {
	title: "The AI and IT Web Development Company - DeansFort",
	description: "DeansFort: A leading AI web development agency offering comprehensive digital solutions including web development, mobile app creation, IT services, digital marketing, and innovative branding strategies.",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="AI Development" />
			<AISingleServiceDetails />
			<AutoSliderAI />
		</>
	);
}

export default SingleService;

import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import AISingleServiceDetails from "@/components/service-page/aiservices";
import ITSingleServiceDetails from "@/components/service-page/itservices";

export const metadata = {
	title: "The AI and IT Web Development Company - DeansFort",
	description: "DeansFort: A leading AI web development agency offering comprehensive digital solutions including web development, mobile app creation, IT services, digital marketing, and innovative branding strategies.",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="AI Development" />
			<AISingleServiceDetails />
			<AutoSlider />
		</>
	);
}

export default SingleService;

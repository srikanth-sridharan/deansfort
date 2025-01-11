import AutoSlider from "@/components/common/auto-slider";
import AutoSliderWeb from "@/components/common/auto-sliderweb";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleServiceDetails from "@/components/service-page/single";

export const metadata = {
	title: "The AI and IT Web Development Company - DeansFort",
	description: "DeansFort: A leading AI web development agency offering comprehensive digital solutions including web development, mobile app creation, IT services, digital marketing, and innovative branding strategies.",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="Website Development" />
			<SingleServiceDetails />
			<AutoSliderWeb />
		</>
	);
}

export default SingleService;

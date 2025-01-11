import AutoSliderMobile from "@/components/common/auto-slidermobile";
import BreadCrumb from "@/components/common/Breadcrumb";
import MobileSingleServiceDetails from "@/components/service-page/mobileservices";

export const metadata = {
	title: "The AI and IT Web Development Company - DeansFort",
	description: "DeansFort: A leading AI web development agency offering comprehensive digital solutions including web development, mobile app creation, IT services, digital marketing, and innovative branding strategies.",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="Mobile Development" />
			<MobileSingleServiceDetails />
			<AutoSliderMobile />
		</>
	);
}

export default SingleService;

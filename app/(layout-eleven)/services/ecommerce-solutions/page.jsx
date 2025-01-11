import AutoSliderecom from "@/components/common/auto-sliderecom";
import BreadCrumb from "@/components/common/Breadcrumb";
import EcomSingleServiceDetails from "@/components/service-page/ecomsolutions";

export const metadata = {
	title: "The AI and IT Web Development Company - DeansFort",
	description: "DeansFort: A leading AI web development agency offering comprehensive digital solutions including web development, mobile app creation, IT services, digital marketing, and innovative branding strategies.",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="Ecommerce Solutions" />
			<EcomSingleServiceDetails />
			<AutoSliderecom />
		</>
	);
}

export default SingleService;

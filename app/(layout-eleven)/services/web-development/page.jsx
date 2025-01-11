import AutoSliderWeb from "@/components/common/auto-sliderweb";
import BreadCrumb from "@/components/common/Breadcrumb";
import SingleServiceDetails from "@/components/service-page/single";

export const metadata = {
	title: "Website Development | The AI and IT Web Development Company - DeansFort",
	description: "Transform your online presence with custom web development services from DeansFort Technologies. We create stunning websites that drive results, increase conversions, and improve user experience.",
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

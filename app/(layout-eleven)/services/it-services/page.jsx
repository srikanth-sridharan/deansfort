import AutoSliderIT from "@/components/common/auto-sliderIT";
import BreadCrumb from "@/components/common/Breadcrumb";
import ITSingleServiceDetails from "@/components/service-page/itservices";

export const metadata = {
	title: "IT Services | The AI and IT Web Development Company - DeansFort",
	description: "DeansFort Technologies provides comprehensive IT services, including network deployment, cybersecurity, cloud migrations, and more. We work closely with clients to develop customized solutions that enhance efficiency, improve security, and drive business growth.",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="IT Services" />
			<ITSingleServiceDetails />
			<AutoSliderIT />
		</>
	);
}

export default SingleService;

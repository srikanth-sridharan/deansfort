import AutoSliderDM from "@/components/common/auto-sliderDM";
import BreadCrumb from "@/components/common/Breadcrumb";
import DMSingleServiceDetails from "@/components/service-page/dmservices";

export const metadata = {
	title: "Digital Marketing | The AI and IT Web Development Company - DeansFort",
	description: "DeansFort Technologies provides comprehensive digital marketing solutions, including SEO, PPC, social media marketing, content marketing, and more. We help businesses increase online visibility, drive traffic, and achieve their marketing goals.",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="Digital Marketing" />
			<DMSingleServiceDetails />
			<AutoSliderDM />
		</>
	);
}

export default SingleService;

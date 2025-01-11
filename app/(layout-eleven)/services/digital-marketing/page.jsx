import AutoSliderDM from "@/components/common/auto-sliderDM";
import BreadCrumb from "@/components/common/Breadcrumb";
import DMSingleServiceDetails from "@/components/service-page/dmservices";

export const metadata = {
	title: "Sofax || Responsive Next.js Template Single Service Page",
	description: "Sofax || Responsive Next.js Template",
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

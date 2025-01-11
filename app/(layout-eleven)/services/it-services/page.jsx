import AutoSliderIT from "@/components/common/auto-sliderIT";
import BreadCrumb from "@/components/common/Breadcrumb";
import ITSingleServiceDetails from "@/components/service-page/itservices";

export const metadata = {
	title: "Sofax || Responsive Next.js Template Single Service Page",
	description: "Sofax || Responsive Next.js Template",
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

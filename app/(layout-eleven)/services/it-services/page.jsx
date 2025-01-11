import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
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
			<AutoSlider />
		</>
	);
}

export default SingleService;

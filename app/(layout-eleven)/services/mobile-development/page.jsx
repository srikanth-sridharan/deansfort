import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleServiceDetails from "@/components/service-page/single";

export const metadata = {
	title: "Sofax || Responsive Next.js Template Single Service Page",
	description: "Sofax || Responsive Next.js Template",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="Website Development" />
			<SingleServiceDetails />
			<Faq />
			<AutoSlider />
		</>
	);
}

export default SingleService;

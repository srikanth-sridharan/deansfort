import AutoSliderecom from "@/components/common/auto-sliderecom";
import BreadCrumb from "@/components/common/Breadcrumb";
import EcomSingleServiceDetails from "@/components/service-page/ecomsolutions";

export const metadata = {
	title: "E-commerce Solutions | The AI and IT Web Development Company - DeansFort",
	description: "DeansFort Technologies provides comprehensive e-commerce solutions, including Shopify, WooCommerce, and custom development. We help businesses build high-performing online stores, increase sales, and drive customer engagement. Our expert team provides design, development, integrations, marketing, and ongoing support.",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="E-commerce Solutions" />
			<EcomSingleServiceDetails />
			<AutoSliderecom />
		</>
	);
}

export default SingleService;

import AutoSliderAI from "@/components/common/auto-sliderAI";
import BreadCrumb from "@/components/common/Breadcrumb";
import AISingleServiceDetails from "@/components/service-page/aiservices";

export const metadata = {
	title: "AI Development | The AI and IT Web Development Company - DeansFort",
	description: "DeansFort Technologies helps businesses leverage the power of AI. Our expert team provides a full range of AI/ML services, from strategic consulting and model development to deployment and support. We create custom solutions that drive tangible results, automate processes, and gain deeper insights from your data.",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="AI Development" />
			<AISingleServiceDetails />
			<AutoSliderAI />
		</>
	);
}

export default SingleService;

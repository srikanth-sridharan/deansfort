import AutoSliderMobile from "@/components/common/auto-slidermobile";
import BreadCrumb from "@/components/common/Breadcrumb";
import MobileSingleServiceDetails from "@/components/service-page/mobileservices";

export const metadata = {
	title: "Mobile Development | The AI and IT Web Development Company - DeansFort",
	description: "DeansFort Technologies develops high-quality mobile apps for iOS and Android using Swift, Kotlin, React Native, and more. We offer a full range of services, from concept to launch and beyond. Our user-centric approach ensures engaging experiences and our expertise guarantees reliable and secure apps.",
};
function SingleService() {
	return (
		<>
			<BreadCrumb title="Mobile Development" />
			<MobileSingleServiceDetails />
			<AutoSliderMobile />
		</>
	);
}

export default SingleService;

import BreadCrumb from "@/components/common/Breadcrumb";
import Contact from "@/components/contact-us-page";
import MyMap from "@/components/contact-us-page/MyMap";
export const metadata = {
	title: "Contact DeansFort Technologies - Get in touch | DeansFort",
	description: "Contact Us Today! We’re ready to assist you with any questions or concerns about Deansfort products. We are here to help you.",

};
function ContactUs() {
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<Contact />
			<MyMap />
		</>
	);
}

export default ContactUs;

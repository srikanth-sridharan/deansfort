import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/home/home-eight/header/multi-page";
export const metadata = {
	title: "DeansFort - AI-Powered Web & Mobile Development Solutions",
	description: "DeansFort: A leading AI web development agency offering comprehensive digital solutions including web development, mobile app creation, IT services, digital marketing, and innovative branding strategies.",
};
function LayoutEight({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEight;

import Header from "@/components/home/home-eight/header/multi-page";
import Footer from "@/components/home/home-eight/footer";

export const metadata = {
	title: "The AI and IT Web Development Company - DeansFort",
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

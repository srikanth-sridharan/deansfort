import ErrorImg from "@/public/images/contact/404.png";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
	title: "The AI and IT Web Development Company - DeansFort",
	description: "DeansFort: A leading AI web development agency offering comprehensive digital solutions including web development, mobile app creation, IT services, digital marketing, and innovative branding strategies.",
};
export default function ErrorPage() {
	return (
		<div className="sofax-section-padding4">
			<div className="container">
				<div className="sofax-error-content">
					<Image src={ErrorImg} alt="404 image" />
					<h2>Oops! Looks like you took a wrong turn</h2>
				</div>
				<div className="sofax-404-bottom-btn extra-mt">
					<Link className="sofax-default-btn pill" data-text="Back To Home" href="/">
						<span className="button-wraper">Back To Home</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

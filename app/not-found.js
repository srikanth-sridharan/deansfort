import ErrorImg from "@/public/images/contact/404.png";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Error Page",
	description: "Sofax || Responsive Next.js Template",
};
export default function ErrorPage() {
	return (
		<div className="sofax-section-padding4">
			<div className="container">
				<div className="sofax-error-content">
					<h2>🔍 “404 - The Digital Bermuda Triangle Strikes Again!”</h2>
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

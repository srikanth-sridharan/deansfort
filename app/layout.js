import { DMSans, clashGrotesk, inter } from "./fonts";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// React Toastify
import "react-toastify/dist/ReactToastify.css";

// Bootstrap js
import ImportBsJS from "../components/BootstrapClient";
import "../public/css/app.css";
import "../public/css/main.css";
import "../public/css/mobile-nav.css";
import WhatsAppButton from "@/components/whatsappbutton";

export const metadata = {
	title: "Sofaxe || Responsive Next.js Template",
	description: "Sofax || Responsive Next.js Template",
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className={`${inter.variable} ${DMSans.variable} ${clashGrotesk.variable}`}>
				<ImportBsJS />
				{children}
				<WhatsAppButton />
			</body>
		</html>
	);
}

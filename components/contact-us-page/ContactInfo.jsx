import Icon1 from "@/public/images/contact/icon1.png";
import Icon2 from "@/public/images/contact/icon2.png";
import Icon3 from "@/public/images/contact/icon3.png";
import Image from "next/image";
function ContactInfo() {
	return (
		<div className="contactus-authore-wrapper">
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon1} alt="Icon chat" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Quick Answers at Your Fingertips!</h4>
					<p>Connect with our team Monday-Friday, 9 AM to 5 PM IST, for instant assistance.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon2} alt="Call icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Your Voice Matters to Us!</h4>
					<p>Reach out at (+91 6383 849 069), and we'll gladly assist you Monday-Friday, 9 AM to 5 PM.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon3} alt="Email Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Got Questions? Drop Us a Line!</h4>
					<p>Send us an email at contact@deansfort.com, and we’ll respond within 24 hours.</p>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;

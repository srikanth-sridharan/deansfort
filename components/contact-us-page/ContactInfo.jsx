import Icon1 from "@/public/images/contact/response.png";
import Icon2 from "@/public/images/contact/customer-service.png";
import Icon3 from "@/public/images/contact/mail.png";
import Icon4 from "@/public/images/contact/map.png";

import Image from "next/image";
function ContactInfo() {
	return (
		<div className="contactus-authore-wrapper">
			
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon2} alt="Call icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Your Voice Matters to Us!</h4>
					<p>Reach out at (+91 99420 07771), and we'll gladly assist you Monday-Friday, 9 AM to 5 PM IST.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon3} alt="Email Icon" />
				</div>
				<div className="sofax-iconbox-data5">
					<h4>Got Questions? Drop Us a Line!</h4>
				<p>Send us an email at <a className="dark-bgcolor" href="mailto:contact@deansfort.com">contact@deansfort.com</a>, and we’ll respond within 24 hours.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon4} alt="Email Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>See Where the Magic Happens</h4>
					<p><strong>Deansfort Technologies Pvt. Ltd.</strong><br />
					Door No: 3/6, First Floor, Kondasamy Nagar,<br/> Veerapandi Road, Jothipuram,<br/> Coimbatore - 641047, Tamil Nadu, India</p>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;

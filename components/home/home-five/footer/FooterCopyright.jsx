function FooterCopyright() {

	const year = new Date().getFullYear();
	return (
		<div className="sofax-footer-bottom center">
			<p>{`© ${year} DeansFort Technologies Pvt. Ltd. All Rights Reserved.`}</p>
		</div>
	);
}

export default FooterCopyright;

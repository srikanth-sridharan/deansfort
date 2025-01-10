import Link from "next/link";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="sofax-default-btn pill sofax-header-btn" data-text="Speak with our experts" href="tel:+919942007771">
				<span className="button-wraper">Speak with our experts</span>
			</Link>
		</div>
	);
}

export default HeaderButton;

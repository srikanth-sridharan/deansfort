import Link from "next/link";
function Projects() {
	return (
		<div className="section sofax-section-padding bg-light" id="project">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>Our Products</h2>
					</div>
				</div>
				</div>
			<div className="px-5">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>MeetMyMart</h2>
							</div>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-title-btn wow fadeInUpX">
								<Link className="sofax-default-btn pill" data-text="Visit" href="https://meetmymart.com/">
									<span className="button-wraper">Visit</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-5">
				<div className="sofax-section-title ">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>Dialler App</h2>
							</div>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-title-btn wow fadeInUpX">
								<Link className="sofax-default-btn pill" disabled data-text="Coming Soon" href="#">
									<span className="button-wraper">Coming Soon</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div className="px-5">
				<div className="sofax-section-title ">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>Astrology App</h2>
							</div>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-title-btn wow fadeInUpX">
								<Link className="sofax-default-btn pill" data-text="Coming Soon" href="#">
									<span className="button-wraper">Coming Soon</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div className="px-5">
				<div className="sofax-section-title ">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>Home Services App</h2>
							</div>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-title-btn wow fadeInUpX">
								<Link className="sofax-default-btn pill" data-text="Coming Soon" href="">
									<span className="button-wraper">Coming Soon</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				</div>
		</div>
	);
}

export default Projects;

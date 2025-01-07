"use client";
import CountUp from "react-countup";
function Counter() {
	return (
		<section className="section sofax-section-padding2 dark-bg" id="fact">
			<div id="sofax-counter"></div>
			<div className="container">
				<div className="sofax-counter-wrap position-ralatiove counter-version8">
					<div className="sofax-counter-data counterv8">
						<div className="tg-heading-subheading animation-style3">
							<h2>Strategic Business Growth</h2>
						</div>
					</div>
					<div className="sofax-counter-data  counterv8">
						<h2>
							<CountUp className="sofax-counter" end={777} duration={3} redraw={true} enableScrollSpy />+
						</h2>
						<p>Satisfied Clients</p>
					</div>
					<div className="border-right3"></div>
					<div className="sofax-counter-data  counterv8">
						<h2>
							<CountUp className="sofax-counter" end={3000} duration={3} redraw={true} enableScrollSpy />+
						</h2>
						<p>Finished Projects</p>
					</div>
					<div className="border-right4"></div>
					<div className="sofax-counter-data  counterv8">
						<h2>
							<CountUp className="sofax-counter" end={30} duration={3} redraw={true} enableScrollSpy />+
						</h2>
						<p>Skilled Experts</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Counter;

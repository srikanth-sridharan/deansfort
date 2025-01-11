"use client";
import Icon1 from "@/public/images/service/icon1.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "AI Strategy & Consulting"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "AI Model Development & Training"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "AI-Powered Solutions"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "AI Data Services"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "AI Infrastructure & Deployment"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "AI Testing & Validation"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "AI Ethics & Governance"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "AI Research & Development"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "AI Training & Education"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "AI Support & Maintenance"
    }
];


const swiperSettings = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	centeredSlides: true,
	spaceBetween: 30,
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: "auto",
};

function AutoSliderAI() {
	return (
		<section className="sofax-service-slider">
			<div className="sofax-slider-service-section">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="sofax-service-slider-wrap">
									<div className="sofax-service-slider-icon">
										<Image src={item.img} alt="Icon" />
									</div>
									<div className="sofax-service-slider-data light-color">
										<h2>{item.txt}</h2>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</section>
	);
}

export default AutoSliderAI;

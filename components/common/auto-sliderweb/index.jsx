"use client";
import Icon1 from "@/public/images/service/icon1.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "UI/UX Design"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "Web Application Development"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "CMS"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "Headless CMS"
    },
    {
        id: crypto.randomUUID(),
        img: Icon1,
        txt: "Website Maintenance & Support"
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

function AutoSliderWeb() {
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

export default AutoSliderWeb;

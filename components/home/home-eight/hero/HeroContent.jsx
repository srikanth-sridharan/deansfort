import Link from "next/link";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../../animation/FadeInStaggerTwo";

function HeroContent() {
  return (
    <div className="sofax-hero-content hero-v8">
      <h2
        className="slider-custom-anim-left"
        data-ani="slider-custom-anim-left"
        data-ani-delay="0.3s"
      >
        Experience the Difference: Expert IT Solutions for Every Need
      </h2>
      <p>
        With a team of skilled professionals, we provide top-tier IT services,
        including branding, web development, and IT resource management,
        tailored to your unique business goals.
      </p>
      <FadeInStaggerTwo className="sofax-hero-btn-wrap sofax-hero5-btn extra-mt">
        <FadeInStaggerTwoChildren>
          <Link
            className="sofax-default-btn pill"
            data-text="Explore More"
            href="/contact-us"
          >
            <span className="button-wraper">Explore More</span>
          </Link>
        </FadeInStaggerTwoChildren>
        <FadeInStaggerTwoChildren>
          <Link
            className="sofax-default-btn pill dark-btn"
            data-text="Contact Us"
            href="/service"
          >
            <span className="button-wraper">Contact Us</span>
          </Link>
        </FadeInStaggerTwoChildren>
      </FadeInStaggerTwo>
    </div>
  );
}

export default HeroContent;

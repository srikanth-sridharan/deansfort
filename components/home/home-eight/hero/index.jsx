'use client'
import HeroContent from "./HeroContent";
import Lottie from "lottie-react";
import webRegister from "./working-chart.json";

function Hero() {
  return (
    <div className=" section sofax-section-padding4" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <HeroContent />
          </div>
          <div className="col-lg-5">
            <Lottie animationData={webRegister} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

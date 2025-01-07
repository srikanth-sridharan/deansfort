"use client";
import HeroContent from "./HeroContent";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import webRegister from "./workingPerson.json";

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

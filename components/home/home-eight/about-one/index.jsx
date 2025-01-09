"use client";
import Icon1 from "@/public/images/v8/cs.png";
import Icon2 from "@/public/images/v8/support.png";
import Image from "next/image";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import rocket from "./Outperform.json";

function AboutOne() {
  return (
    <div className="aboutversoin8 sofax-section-padding2 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sofax-about-thumbv8 wow fadeInLeft">
              <Lottie animationData={rocket} loop={true} />{" "}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="sofax-default-content about-vr8 tac">
              <div className="tg-heading-subheading animation-style3">
                <h2>How We Outperform Competitors</h2>
              </div>
              <p>
                Our tech-savvy team thrives on creating customized solutions
                that fit your unique needs. Whether you’re a startup seeking a
                dynamic online presence or an enterprise looking to automate
                workflows, we deliver cutting-edge technology with precision.
              </p>
            </div>
            <div className="sofax-about-content-wrap">
              <div className="sofax-iconbox-wrap2 col-lg-6">
                <div className="sofax-iconbox-icon2">
                  <Image src={Icon1} alt="icon" />
                </div>
                <div className="sofax-iconbox-data2 aboutv8 ">
                  <h4>Innovative Problem Solving</h4>
                  <p>
                    Our comprehensive approach ensures that issues are
                    thoroughly analyzed and resolved, preventing recurrence and
                    fostering long-term success.
                  </p>
                </div>
              </div>
              <div className="sofax-iconbox-wrap2 col-lg-6">
                <div className="sofax-iconbox-icon2">
                  <Image src={Icon2} alt="icon" />
                </div>
                <div className="sofax-iconbox-data2 aboutv8">
                  <h4>Always Available Support</h4>
                  <p>
                    Our dedicated teams are on call 24/7, ensuring you receive
                    uninterrupted assistance whenever you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOne;

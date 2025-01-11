"use client";
import Icon from "@/public/images/service/icon5.png";
import Thumb2 from "@/public/images/service/service-thumb2.png";
import Shape2 from "@/public/images/v5/shape2.png";
import Image from "next/image";
import FadeInRight from "../../animation/FadeInRight";
import "react-tabs/style/react-tabs.css";
import ServiceTabs from "./ServiceTabs";
function ITSingleServiceDetails() {
  return (
    <section className="sofax-section-padding2">
      <div className="container">
        <div className="sofax-default-content inner-service1 pb-5">
          <h2>Website Development</h2>
          <p>
            At DeansFort Technologies, we provide a comprehensive suite of IT
            services designed to empower businesses with cutting-edge technology
            solutions. Our expertise spans across a wide range of areas,
            including network deployment, cybersecurity, infrastructure
            upgrades, and cloud migrations.
          </p>

          <p>
            We prioritize a consultative approach, working closely with clients
            to understand their unique business objectives and identify the most
            effective solutions. From strategic planning and implementation to
            ongoing support and maintenance, we ensure that our clients' IT
            systems are always secure, reliable, and optimized for peak
            performance.
          </p>

          <p>
            Whether you're seeking to modernize your IT infrastructure, enhance
            your data security, or streamline your business operations,
            DeansFort Technologies is your trusted partner. We are committed to
            delivering exceptional service and exceeding client expectations.
          </p>
          <ServiceTabs />
        </div>
        <div className="sofax-default-content sofax-inner-service-details position-ralatiove">
          <h2>How our agency provides UI/UX design services</h2>
          <p>
            UI/UX design services typically encompass the creation and
            optimization of user interfaces (UI) and user experiences (UX) for
            the digital products such as websites, mobile apps, and software
            applications. Here are some key components of UI/UX design services.
          </p>
          <div className="sofax-service-inner-details-shape">
            <Image src={Shape2} alt="Shape2" />
          </div>
        </div>

        <div className="sofax-section-title">
          <div className="row">
            <div className="col-lg-5">
              <div className="sofax-default-content inner-service2 dark-bg">
                <h3 className="light-color">UI/UX design strategies</h3>
                <p>
                  The broader context of a project aligning to design decisions
                  with business goals & creating roadmap for achieving optimal
                  user experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="sofax-default-content">
                <div className="sofax-list-icon-wrap">
                  <div className="sofax-list-icon-icon">
                    <ul>
                      <li>
                        <Image src={Icon} alt="Icon" />
                        Measurement & analytics
                      </li>
                      <li>
                        <Image src={Icon} alt="Icon" />
                        User-centered approach
                      </li>
                      <li>
                        <Image src={Icon} alt="Icon" />
                        Persona development
                      </li>
                    </ul>
                  </div>
                  <div className="sofax-list-icon-icon">
                    <ul>
                      <li>
                        <Image src={Icon} alt="Icon" />
                        Wireframing & prototyping
                      </li>
                      <li>
                        <Image src={Icon} alt="Icon" />
                        Stakeholder alignment
                      </li>
                      <li>
                        <Image src={Icon} alt="Icon" />
                        Iterative improvement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="sofax-default-content mr-50">
              <h2>Our Approach</h2>
              <p>
                The approach of a digital agency typically encompasses its
                methodologies, philosophies, and strategies for delivering value
                to clients. Here's a general outline of what "Our Approach"
                might entail for a digital agency:
              </p>
              <div className="extra-mt">
                <div className="sofax-inner-service-content-data">
                  <h4>1. Understanding Client Needs</h4>
                  <p>
                    We are beginning by thoroughly understanding the target
                    industries & unique challenges of our clients' target
                    audiences. This includes active listening.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>2. Collaborative Planning</h4>
                  <p>
                    We beging collaboration and teamwork. We work closely with
                    our clients to co-create a tailored strategy that aligns
                    with their objectives & budget.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>3. Understanding Client Needs</h4>
                  <p>
                    We conduct in-depth research & analysis to inform
                    strategies. This includes market research, competitor
                    analysis, audience segmentation & analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2">
            <FadeInRight className="sofax-inner-content-thumb">
              <Image src={Thumb2} alt="THumbs" />
            </FadeInRight>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ITSingleServiceDetails;

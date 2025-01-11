"use client";
import FadeInRight from "../../animation/FadeInRight";
import "react-tabs/style/react-tabs.css";
import ServiceTabs from "./ServiceTabs";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import ourApproach from "./ourApproach.json";
function ITSingleServiceDetails() {
  return (
    <section className="sofax-section-padding2">
      <div className="container">
        <div className="sofax-default-content inner-service1 pb-5">
          <h2>IT Services</h2>
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
        <div className="row">
          <div className="col-lg-7">
            <div className="sofax-default-content mr-50">
              <h2>Our Approach</h2>
              <p>
                At DeansFort Technologies, our approach to delivering
                exceptional IT services is grounded in a deep understanding of
                our clients' unique needs and a commitment to building long-term
                partnerships.
              </p>
              <div className="extra-mt">
                <div className="sofax-inner-service-content-data">
                  <h4>1. Comprehensive Needs Assessment</h4>
                  <p>
                    We begin by conducting a thorough assessment of your
                    existing IT infrastructure, security posture, and business
                    objectives. This includes in-depth discussions, data
                    analysis, and a comprehensive gap analysis to identify areas
                    for improvement and opportunities for optimization.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>2. Collaborative Planning & Solution Design</h4>
                  <p>
                    We beging collaboration and teamwork. We work closely with
                    our clients to co-create a tailored strategy that aligns
                    with their objectives & budget.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>3. Rigorous Implementation & Ongoing Support</h4>
                  <p>
                    We execute all projects with meticulous attention to detail,
                    ensuring seamless implementation and minimal disruption to
                    your business operations. Our dedicated support team
                    provides ongoing maintenance, monitoring, and
                    troubleshooting to ensure the optimal performance and
                    security of your IT systems.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>4. Continuous Improvement & Innovation</h4>
                  <p>
                    We believe in continuous improvement and staying ahead of
                    the curve. We proactively monitor emerging technologies and
                    industry best practices to identify opportunities for
                    enhancing your IT infrastructure and optimizing your
                    business processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2">
            <FadeInRight className="sofax-inner-content-thumb">
            <Lottie animationData={ourApproach} loop={true} />{" "}
            </FadeInRight>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ITSingleServiceDetails;

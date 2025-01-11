"use client";
import FadeInRight from "../../animation/FadeInRight";
import "react-tabs/style/react-tabs.css";
import ServiceTabs from "./ServiceTabs";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import ourApproach from "./ourApproach.json";
function DMSingleServiceDetails() {
  return (
    <section className="sofax-section-padding2">
      <div className="container">
        <div className="sofax-default-content inner-service1 pb-5">
          <h2>Digital Marketing</h2>
          <p>
            {" "}
            Deansfort Technologies is a leading provider of comprehensive
            digital marketing solutions designed to help businesses of all sizes
            achieve their online goals. We offer a wide range of services,
            including Search Engine Optimization (SEO) to improve your website's
            visibility in search results, Pay-Per-Click (PPC) advertising to
            reach your target audience quickly and effectively, and engaging
            Social Media Marketing strategies to build brand awareness and drive
            customer interaction.
          </p>

          <p>
            Furthermore, we specialize in crafting compelling Content Marketing
            that resonates with your target audience and establishes your brand
            as an industry leader. Our expertise extends to Email Marketing,
            where we help you nurture relationships with your subscribers and
            drive conversions through targeted campaigns. We also focus on
            Conversion Rate Optimization (CRO) to maximize the effectiveness of
            your website and marketing efforts by analyzing user behavior and
            implementing A/B testing for continuous improvement.
          </p>
          <p>
            At Deansfort Technologies, we believe in data-driven decision
            making. Our Website Analytics & Reporting services provide valuable
            insights into user behavior and campaign performance, allowing you
            to make informed decisions that drive results. We also offer
            Reputation Management services to protect and enhance your online
            brand image.
          </p>
          <ServiceTabs />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="sofax-default-content mr-50">
              <h2>Our Approach</h2>
              <p>
                At Deansfort Technologies, we embrace a data-driven,
                client-centric approach to digital marketing that prioritizes
                measurable results.
              </p>
              <div className="extra-mt">
                <div className="sofax-inner-service-content-data">
                  <h4>1. Deep Audience Understanding</h4>
                  <p>
                    We begin by conducting thorough audience research to
                    understand their online behavior, preferences, and pain
                    points. This includes in-depth analysis of demographics,
                    psychographics, online browsing habits, and social media
                    engagement.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>2. Strategic Planning & Roadmap</h4>
                  <p>
                    We collaborate closely with our clients to develop a
                    comprehensive digital marketing strategy aligned with their
                    business objectives and target audience. This includes
                    defining clear goals, identifying key performance indicators
                    (KPIs), and creating a detailed roadmap for campaign
                    execution.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>3. Data-Driven Campaign Execution</h4>
                  <p>
                    We leverage data-driven insights to execute targeted
                    campaigns across all relevant channels, including SEO, PPC,
                    social media, content marketing, and email marketing. We
                    continuously monitor campaign performance, analyze key
                    metrics, and make data-informed adjustments to optimize
                    results.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>4. Innovative & Creative Solutions:</h4>
                  <p>
                    We believe in staying ahead of the curve by exploring
                    innovative digital marketing strategies. This includes
                    embracing emerging technologies like artificial intelligence
                    (AI), machine learning, and voice search to deliver
                    cutting-edge solutions for our clients.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>5. Transparent Communication & Reporting</h4>
                  <p>
                    We maintain open and transparent communication with our
                    clients throughout the entire process. We provide regular,
                    detailed reports on campaign performance, share valuable
                    insights, and actively seek client feedback to ensure
                    ongoing success.
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

export default DMSingleServiceDetails;

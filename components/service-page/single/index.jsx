"use client";
import FadeInRight from "../../animation/FadeInRight";
import "react-tabs/style/react-tabs.css";
import ServiceTabs from "./ServiceTabs";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import ourApproach from "./ourApproach.json";
function SingleServiceDetails() {
  return (
    <section className="sofax-section-padding2">
      <div className="container">
        <div className="sofax-default-content inner-service1 pb-5">
          <h2>Website Development</h2>
          <p>
            At DeansFort Technologies, we help businesses thrive online. We
            design and develop stunning websites that are not only visually
            appealing but also perform exceptionally well. We leverage the
            latest technologies like Figma, Adobe XD, and popular programming
            languages to create unique and engaging online experiences that
            captivate your audience.
          </p>
          <p>
            {" "}
            We specialize in crafting custom web applications tailored to your
            specific business needs. Our expertise extends to utilizing powerful
            frameworks and databases to ensure your applications are efficient,
            secure, and scalable. We also offer seamless integration and
            management of popular Content Management Systems (CMS) like
            WordPress and Drupal, making it easy for you to update and manage
            your website content.
          </p>
          <p>
            {" "}
            Our commitment to your success doesn't end with development. We
            provide ongoing maintenance and support services, including regular
            updates, technical troubleshooting, and performance optimization, to
            ensure your website runs smoothly and securely 24/7. With DeansFort Technologies, you can be confident that your online presence is reliable,
            effective, and always performing at its best.
          </p>
          <ServiceTabs />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="sofax-default-content mr-50">
              <h2>Our Approach</h2>
              <p>
                At DeansFort Technologies, we believe in a collaborative and
                results-driven approach to web development.
              </p>
              <div className="extra-mt">
                <div className="sofax-inner-service-content-data">
                  <h4>1. Deep Understanding</h4>
                  <p>
                    We begin by immersing ourselves in your business,
                    understanding your unique goals, target audience, and brand
                    identity. We actively listen to your needs and challenges to
                    ensure our solutions perfectly align with your vision.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>2. Strategic Planning</h4>
                  <p>
                  We collaborate closely with you throughout the entire development process. Our experienced team works with you to define clear objectives, develop a comprehensive strategy, and create a roadmap for success.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>3. Cutting-Edge Technology</h4>
                  <p>
                  We leverage the latest technologies and industry best practices to deliver exceptional results. From design and development to deployment and maintenance, we ensure your website is built on a solid foundation of performance, security, and scalability.</p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4>4. Client-Centric Focus</h4>
                  <p>
                  Client-Centric Focus:** Your satisfaction is our top priority. We maintain open communication throughout the project, provide regular updates and progress reports, and ensure your needs are met at every stage.</p>
                  </div>
                  <div className="sofax-inner-service-content-data">
                  <h4>5. Ongoing Support</h4>
                  <p>
                   Our commitment to your success doesn't end with project delivery. We provide ongoing maintenance and support services to ensure your website remains up-to-date, secure, and performing at its best.</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2">
            <Lottie animationData={ourApproach} loop={true} />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleServiceDetails;

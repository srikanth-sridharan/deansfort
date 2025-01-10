"use client";
import Icon from "@/public/images/service/icon5.png";
import ServiceDetails from "@/public/images/service/service-details.png";
import Thumb2 from "@/public/images/service/service-thumb2.png";
import Shape2 from "@/public/images/v5/shape2.png";
import Image from "next/image";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ServiceTabs from "./ServiceTabs";
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
            captivate your audience.</p><p> We specialize in crafting custom web
            applications tailored to your specific business needs. Our expertise
            extends to utilizing powerful frameworks and databases to ensure
            your applications are efficient, secure, and scalable. We also offer
            seamless integration and management of popular Content Management
            Systems (CMS) like WordPress and Drupal, making it easy for you to
            update and manage your website content.</p><p> Our commitment to your
            success doesn't end with development. We provide ongoing maintenance
            and support services, including regular updates, technical
            troubleshooting, and performance optimization, to ensure your
            website runs smoothly and securely 24/7. With [Company Name], you
            can be confident that your online presence is reliable, effective,
            and always performing at its best.
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

export default SingleServiceDetails;

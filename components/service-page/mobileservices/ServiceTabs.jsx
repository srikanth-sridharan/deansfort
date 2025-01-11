import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Smartphone, Palette, TestTube, Link, WrenchIcon as WrenchScrewdriver, HeadsetIcon as HeadsetHelp, Megaphone, Layers, Building2, Glasses } from 'lucide-react'

function ServiceTabs() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <Tabs className="services-tabs">
          <TabList className="nav nav-pills nav-fill mb-4">
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Smartphone size={20} />
                <span>Mobile App Development </span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Palette size={20} />
                <span>Mobile App Design & UI/UX</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <TestTube size={20} />
                <span>Mobile App Testing & Quality Assurance</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Link size={20} />
                <span>Mobile App Integration</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <WrenchScrewdriver size={20} />
                <span>Mobile App Maintenance & Support</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <HeadsetHelp size={20} />
                <span>Mobile App Consulting</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Megaphone size={20} />
                <span>Mobile App Marketing & ASO</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Layers size={20} />
                <span>Cross-Platform App Development</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Building2 size={20} />
                <span>Enterprise Mobility Solutions</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Glasses size={20} />
                <span>
                  Augmented Reality (AR) & Virtual Reality (VR) App Development
                </span>
              </div>
            </Tab>
          </TabList>

          <div className="tab-content">
            <TabPanel>
              <div className="service-content">
                <h3>Mobile App Development</h3>

                <p>
                  We specialize in crafting high-quality, user-centric mobile
                  applications for iOS and Android platforms. Our expertise
                  extends to native development (Swift, Kotlin, Java) as well as
                  cross-platform frameworks like React Native, Ionic, Flutter,
                  and Xamarin. We leverage these technologies to deliver
                  innovative solutions that meet your specific business needs
                  and exceed user expectations.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Mobile App Design & UI/UX</h3>
                <p>
                  Our expert designers create visually stunning and intuitive
                  mobile app interfaces. We focus on user experience (UX)
                  principles to ensure seamless navigation and effortless
                  interactions. We conduct thorough user research and testing to
                  optimize the app's usability and ensure it provides a
                  delightful user experience across both iOS and Android
                  platforms.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Mobile App Testing & Quality Assurance</h3>
                <p>
                  We rigorously test every aspect of your mobile app to identify
                  and resolve any bugs, performance issues, or compatibility
                  problems. Our QA team employs a comprehensive testing
                  strategy, including functional testing, performance testing,
                  usability testing, and security testing, to ensure your app
                  delivers a high level of quality and reliability on both iOS
                  and Android
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Mobile App Integration</h3>

                <p>
                  We seamlessly integrate your mobile app with other systems and
                  platforms, such as CRM, ERP, and payment gateways. Our skilled
                  developers possess expertise in various integration
                  technologies, including REST APIs, GraphQL, and SDKs, enabling
                  smooth data flow and enhancing the overall functionality of
                  your mobile app on both iOS and Android.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Mobile App Maintenance & Support</h3>

                <p>
                  We provide ongoing maintenance and support for your mobile
                  app, including bug fixes, performance optimizations, and
                  security updates. Our dedicated support team is available to
                  address any issues promptly and ensure your app continues to
                  function seamlessly and meet evolving user needs on both iOS
                  and Android platforms.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>Mobile App Consulting</h3>
                <p>
                  We offer expert consulting services to guide you through the
                  entire mobile app development process. Our experienced
                  consultants can help you define your app's goals, identify
                  target audiences, and choose the most suitable technologies
                  and development approaches (native, cross-platform) to achieve
                  your business objectives on both iOS and Android.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>Mobile App Marketing & ASO</h3>
                <p>
                  We assist you in effectively marketing your mobile app and
                  improving its visibility in app stores. Our services include
                  App Store Optimization (ASO), social media marketing, and
                  targeted advertising campaigns to increase app downloads, user
                  engagement, and overall app success on both iOS App Store and
                  Google Play Store.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>Cross-Platform App Development</h3>
                <p>
                  We develop cross-platform mobile apps using frameworks such as
                  React Native (JavaScript), Ionic (Angular, React, Vue),
                  Flutter (Dart), and Xamarin, enabling you to reach a wider
                  audience with a single codebase while maintaining
                  platform-specific features and performance.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>Enterprise Mobility Solutions</h3>
                <p>
                  We provide enterprise-grade mobile solutions tailored to the
                  specific needs of businesses, including mobile device
                  management (MDM), mobile security, and custom enterprise
                  applications. We help organizations enhance productivity,
                  improve employee collaboration, and streamline business
                  processes through innovative mobile solutions on both iOS and
                  Android devices.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>
                  Augmented Reality (AR) & Virtual Reality (VR) App Development
                </h3>
                <p>
                  We leverage cutting-edge AR and VR technologies to create
                  immersive and engaging mobile experiences. Our developers have
                  expertise in developing AR and VR applications for various
                  industries, including gaming, education, healthcare, and
                  retail, to enhance user interactions and provide unique and
                  innovative solutions on both iOS and Android platforms.
                </p>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default ServiceTabs;

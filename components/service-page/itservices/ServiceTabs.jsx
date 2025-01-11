import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Network,
  Shield,
  ArrowRightLeft,
  Database,
  Cloud,
  Users,
  Globe,
  Building,
  FileSearch,
  Headphones,
} from "lucide-react";

function ServiceTabs() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <Tabs className="services-tabs">
          <TabList className="nav nav-pills nav-fill mb-4">
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Network size={20} />
                <span>End-to-end deployment of Networking</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Shield size={20} />
                <span>Cyber Security & IT Infrastructure upgrade</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <ArrowRightLeft size={20} />
                <span>Technology Migrations</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Database size={20} />
                <span>Building Data Centre</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Cloud size={20} />
                <span>O365 Migrations</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Cloud size={20} />
                <span>Domain Migrations</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Cloud size={20} />
                <span>IT Relocations</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Cloud size={20} />
                <span>GAP Analysis</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Cloud size={20} />
                <span>Consulting</span>
              </div>
            </Tab>
          </TabList>

          <div className="tab-content">
            <TabPanel>
              <div className="service-content">
              <h3>End-to-end deployment of Networking</h3>
                <p>
                Streamline your business operations with our comprehensive networking solutions. From design and implementation to ongoing support and maintenance, we deliver robust and scalable networks tailored to your specific needs, ensuring seamless connectivity, enhanced performance, and improved productivity.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Cyber Security & IT Infrastructure upgrade</h3>
                <p>
                Protect your valuable data and systems with our advanced cybersecurity solutions. We conduct thorough assessments, implement robust security measures, and upgrade your IT infrastructure to the latest standards, mitigating risks and ensuring business continuity in today's evolving threat landscape.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Technology Migrations</h3>
                <p>
                Seamlessly transition to new technologies with our expert migration services. We plan, execute, and support migrations to cloud platforms, new operating systems, and other cutting-edge technologies, minimizing downtime, reducing risks, and maximizing the return on your technology investments.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Building Data Centre</h3>
                <p>
                Establish a secure and reliable foundation for your IT operations with our data center construction services. We design, build, and implement state-of-the-art data centers that meet your specific requirements for performance, scalability, and security, ensuring optimal data storage, processing, and access.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>O365 Migrations</h3>
                <p>
                Effortlessly migrate to Microsoft 365 with our comprehensive migration services. We seamlessly transfer your data, applications, and user accounts to the cloud, enabling enhanced collaboration, improved productivity, and access to the latest Microsoft technologies.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>AD Migrations</h3>
                <p>
                Simplify your Active Directory management with our expert migration services. We seamlessly migrate your existing Active Directory environment to a new domain, reducing complexity, improving security, and streamlining user management processes.</p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Domain Migrations</h3>
                <p>
                Streamline your IT operations with our seamless domain migration services. We migrate your network from one domain to another, minimizing downtime, reducing risks, and ensuring a smooth transition for your users and applications.</p>
                </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>IT Relocations</h3>
                <p>
                Streamline your IT operations with our seamless domain migration services. We migrate your network from one domain to another, minimizing downtime, reducing risks, and ensuring a smooth transition for your users and applications.</p>
                </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>GAP Analysis</h3>
                <p>
                Identify and address critical gaps in your IT infrastructure and security posture with our in-depth gap analysis services. We conduct thorough assessments, identify potential risks, and recommend solutions to improve your overall IT performance and security.</p>
                </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>Consulting</h3>
                <p>
                Gain valuable insights and expert guidance with our comprehensive IT consulting services. We provide strategic advice on a wide range of IT issues, including cloud adoption, cybersecurity, data center optimization, and more, helping you make informed decisions and achieve your business objectives.</p>                </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default ServiceTabs;

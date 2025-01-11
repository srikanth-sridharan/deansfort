import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Brain,
  CodeSquare,
  Cpu,
  Database,
  Server,
  TestTube,
  Scale,
  Microscope,
  GraduationCap,
  WrenchIcon,
} from "lucide-react";

function ServiceTabs() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <Tabs className="services-tabs">
          <TabList className="nav nav-pills nav-fill mb-4">
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Brain size={20} />
                <span>AI Strategy & Consulting</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <CodeSquare size={20} />
                <span>AI Model Development & Training</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Cpu size={20} />
                <span>AI-Powered Solutions</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Database size={20} />
                <span>AI Data Services</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Server size={20} />
                <span>AI Infrastructure & Deployment</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <TestTube size={20} />
                <span>AI Testing & Validation</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Scale size={20} />
                <span>AI Ethics & Governance</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Microscope size={20} />
                <span>AI Research & Development</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <GraduationCap size={20} />
                <span>AI Training & Education</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <WrenchIcon size={20} />
                <span>AI Support & Maintenance</span>
              </div>
            </Tab>
          </TabList>

          <div className="tab-content">
            <TabPanel>
              <div className="service-content">
                <h3>AI Strategy & Consulting</h3>
                <p>
                  Our team provides expert guidance on developing and
                  implementing successful AI strategies. We help you define
                  clear AI goals, conduct feasibility studies, assess data
                  readiness, and choose the right AI/ML technologies to achieve
                  your business objectives.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>AI Model Development & Training</h3>
                <p>
                  We specialize in building and training high-performing AI/ML
                  models. Our skilled data scientists leverage advanced
                  techniques like deep learning and natural language processing
                  to create custom models that meet your specific needs. We
                  prioritize model optimization to ensure efficient and
                  effective performance.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>AI-Powered Solutions</h3>
                <p>
                  We develop innovative AI-powered applications that solve
                  real-world business challenges. From chatbots and
                  recommendation systems to image recognition and predictive
                  analytics, we create custom solutions that integrate
                  seamlessly with your existing systems and enhance your
                  customer experience.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>AI Data Services</h3>
                <p>
                  We provide comprehensive data services to support your AI
                  initiatives. Our expertise includes data collection, cleaning,
                  preparation, and labeling, ensuring high-quality data for
                  model training. We also offer data analysis and visualization
                  services to help you gain valuable insights from your data.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>AI Infrastructure & Deployment</h3>
                <p>
                  We design and implement robust AI infrastructure solutions,
                  including cloud-based and on-premise options. We ensure
                  seamless model deployment and management, and provide ongoing
                  monitoring and maintenance to ensure optimal performance and
                  scalability.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>AI Testing & Validation</h3>
                <p>
                  We conduct rigorous testing and validation of AI models to
                  ensure accuracy, reliability, and robustness. Our
                  comprehensive testing procedures include performance
                  benchmarking and quality assurance measures to guarantee the
                  highest level of quality and reliability.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>AI Ethics & Governance</h3>
                <p>
                  We prioritize ethical and responsible AI development. We
                  advise on ethical considerations, implement robust governance
                  frameworks, and conduct AI audits to ensure compliance with
                  regulations and maintain transparency in all AI-related
                  activities.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>AI Research & Development</h3>
                <p>
                  We stay at the forefront of AI innovation through continuous
                  research and development. We explore emerging technologies and
                  develop cutting-edge AI solutions for challenging problems,
                  collaborating with academic institutions and research
                  organizations to advance the field of AI.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>AI Training & Education</h3>
                <p>
                  We empower your team with the knowledge and skills they need
                  to succeed in the AI era. We offer comprehensive training
                  programs on AI/ML concepts and technologies, tailored to your
                  specific needs and skill levels. We also provide education on
                  how to leverage AI effectively to improve business operations.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>AI Support & Maintenance</h3>
                <p>
                  We provide ongoing support and maintenance for your deployed
                  AI models. We monitor model performance, address any issues
                  that arise, and continuously improve and update models based
                  on new data and feedback, ensuring optimal performance and
                  long-term success.
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

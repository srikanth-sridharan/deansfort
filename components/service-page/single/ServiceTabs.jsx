import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Palette, Code2, FileText, Database, Wrench } from 'lucide-react';

function ServiceTabs() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <Tabs className="services-tabs">
          <TabList className="nav nav-pills nav-fill mb-4">
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Palette size={20} />
                <span>UI/UX Design</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Code2 size={20} />
                <span>Web Application Development</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <FileText size={20} />
                <span>CMS</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Database size={20} />
                <span>Headless CMS</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Wrench size={20} />
                <span>Website Maintenance & Support</span>
              </div>
            </Tab>
          </TabList>

          <div className="tab-content">
            <TabPanel>
              <div className="service-content">
                <h3>Premium Website Design Services</h3>
                <p className="lead">
                  Unleash the full potential of your brand with our premium website design services! From pixel-perfect designs
                  in Figma and Adobe XD to blazing-fast development in HTML, CSS, and JavaScript, we create visually stunning,
                  high-performing websites.
                </p>
                <p>
                  Dive into interactive brilliance with Framer and Webflow, delivering seamless UX/UI for every device. Our
                  designs aren't just websites—they're digital experiences that captivate, convert, and leave lasting
                  impressions. Boost your online presence with bespoke designs, cutting-edge technology, and a team that brings
                  your vision to life!
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Custom Web Application Development</h3>
                <p className="lead">
                  We design and develop robust, high-performing custom web applications tailored to drive your business forward.
                </p>
                <p>
                  With cutting-edge technologies like React, Angular, and Vue.js for the frontend, paired with powerful backend
                  frameworks such as Python (Django, Flask) and Node.js (Express), we deliver seamless functionality. Our
                  expertise extends to MySQL, PostgreSQL, and MongoDB databases, ensuring secure and efficient data management.
                  From smooth REST APIs and API integrations to scalable, future-proof solutions, we focus on delivering
                  user-friendly, innovative, and results-driven web apps to help your business thrive in the digital era.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Content Management System Solutions</h3>
                <p className="lead">
                  Unlock your website's true potential with our exceptional Content Management System (CMS) development and
                  integration services!
                </p>
                <p>
                  We specialize in leading CMS platforms like Wix, WordPress, Joomla, and Drupal, providing seamless plugin
                  installations, expert setup, configuration, and complete customization. Whether you're launching a blog,
                  business site, or eCommerce platform, our solutions guarantee scalability, performance enhancement, and a
                  responsive design. We build secure, SEO-friendly CMS websites that simplify content management while driving
                  your digital growth. Partner with us to create a future-proof website that evolves with your business needs!
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Next-Generation Headless CMS Solutions</h3>
                <p className="lead">
                  Unlock the full potential of your digital presence with our next-generation Headless CMS solutions.
                </p>
                <p>
                  Harnessing the power of WordPress, Drupal, and Joomla, we seamlessly integrate with cutting-edge JavaScript
                  frameworks like React, Angular, and Vue.js to create dynamic, highly scalable websites and applications.
                  Powered by GraphQL, our solutions offer unparalleled efficiency, faster content delivery, and seamless data
                  management. With a focus on performance, customization, and SEO optimization, we craft future-proof digital
                  experiences that empower your brand to stay ahead of the curve. Let us redefine your online presence with
                  innovative, flexible, and robust headless CMS integrations that drive success.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Website Maintenance & Support</h3>
                <p className="lead">
                  At DeansFort Technologies, we offer exceptional website ongoing maintenance and support services, ensuring
                  your site runs seamlessly 24/7.
                </p>
                <p>
                  From secure hosting and regular updates to technical troubleshooting and performance optimization, we cover
                  every aspect of your website's needs. What sets us apart is our commitment to providing equal, top-tier
                  service to all clients, big or small. With proactive maintenance, technical support, and up-to-date
                  solutions, we ensure your website remains fast, secure, and optimized for success. Let us keep your site
                  performing at its best!
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
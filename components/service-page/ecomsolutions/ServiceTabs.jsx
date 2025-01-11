import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Store,
  ShoppingCart,
  Code2,
  Palette,
  TrendingUp,
  Puzzle,
} from "lucide-react";
function ServiceTabs() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <Tabs className="services-tabs">
          <TabList className="nav nav-pills nav-fill mb-4">
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Store size={20} />
                <span>Shopify Ecommerce Solutions</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <ShoppingCart size={20} />
                <span>WordPress WooCommerce Solutions</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Code2 size={20} />
                <span>Custom Ecommerce Development</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Palette size={20} />
                <span>Ecommerce Website Design & Development</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <TrendingUp size={20} />
                <span>Ecommerce Marketing & Optimization</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Puzzle size={20} />
                <span>Ecommerce Integrations & Support</span>
              </div>
            </Tab>
          </TabList>

          <div className="tab-content">
            <TabPanel>
              <div className="service-content">
                <h3>Shopify Ecommerce Solutions</h3>
                <p>
                  Seamlessly launch and scale your online store on the powerful
                  Shopify platform. Our experts handle store setup, theme
                  customization, app integrations, and ongoing support to
                  optimize your sales and customer experience.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>WordPress WooCommerce Solutions </h3>
                <p>
                  Leverage the flexibility and customization of WordPress with
                  the robust WooCommerce plugin. We build high-converting online
                  stores with advanced features, including inventory management,
                  order processing, and marketing integrations.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Custom Ecommerce Development</h3>
                <p>
                  Tailor-made ecommerce solutions built from the ground up to
                  meet your unique business needs and exceed your customer
                  expectations. Our team utilizes cutting-edge technologies to
                  create high-performance, scalable, and secure online stores.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Ecommerce Website Design & Development</h3>
                <p>
                  Transform your brand with visually stunning and user-friendly
                  ecommerce websites. We design and develop engaging online
                  stores that drive conversions, enhance customer satisfaction,
                  and build brand loyalty.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Ecommerce Marketing & Optimization</h3>
                <p>
                  Increase your online visibility and drive sales with our
                  comprehensive ecommerce marketing services. We specialize in
                  SEO, PPC advertising, social media marketing, email marketing,
                  and conversion rate optimization.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Ecommerce Integrations & Support</h3>
                <p>
                  Seamlessly integrate your ecommerce store with various
                  platforms and tools, including payment gateways, shipping
                  carriers, CRM systems, and marketing automation platforms. We
                  also provide ongoing support and maintenance to ensure your
                  store runs smoothly.
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

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Search,
  MousePointerClick,
  Share2,
  FileText,
  Mail,
  TrendingUp,
  BarChart2,
  Star,
  MapPin,
  Video,
  Users,
} from "lucide-react";
function ServiceTabs() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <Tabs className="services-tabs">
          <TabList className="nav nav-pills nav-fill mb-4">
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Search size={20} />
                <span>Search Engine Optimization (SEO)</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <MousePointerClick size={20} />
                <span>Pay-Per-Click (PPC) Advertising</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Share2 size={20} />
                <span>Social Media Marketing</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <FileText size={20} />
                <span>Content Marketing</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Mail size={20} />
                <span>Email Marketing</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <TrendingUp size={20} />
                <span>Conversion Rate Optimization (CRO)</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <BarChart2 size={20} />
                <span>Website Analytics & Reporting</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Star size={20} />
                <span>Reputation Management</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <MapPin size={20} />
                <span>Local SEO</span>
              </div>
            </Tab>
            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Video size={20} />
                <span>Video Marketing</span>
              </div>
            </Tab>

            <Tab className="nav-item">
              <div className="nav-link d-flex align-items-center justify-content-center gap-2">
                <Users size={20} />
                <span>Influencer Marketing</span>
              </div>
            </Tab>
          </TabList>

          <div className="tab-content">
            <TabPanel>
              <div className="service-content">
                <h3>Search Engine Optimization (SEO)</h3>
                <p>
                  Improve your website's visibility in search engine results
                  pages (SERPs) with our comprehensive SEO services. We'll
                  conduct in-depth keyword research, optimize your website's
                  on-page and off-page elements, and track your progress to
                  ensure you achieve top rankings and drive organic traffic.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Pay-Per-Click (PPC) Advertising</h3>
                <p>
                  Reach your target audience quickly and effectively with our
                  targeted PPC campaigns. We'll manage your Google Ads and other
                  PPC platforms, optimize your campaigns for maximum ROI, and
                  track key metrics to ensure your ads are delivering results.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Social Media Marketing</h3>
                <p>
                  Build brand awareness and engage with your audience on social
                  media platforms like Facebook, Instagram, 1 Twitter, and
                  LinkedIn. We'll create compelling content, run targeted ads,
                  and monitor your social media presence to maximize your reach
                  and drive conversions.  
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Content Marketing</h3>
                <p>
                  Create high-quality, informative content that resonates with
                  your target audience and establishes your brand as a thought
                  leader. We'll develop blog posts, articles, videos,
                  infographics, and other forms of content that will attract and
                  engage your ideal customers.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Email Marketing</h3>
                <p>
                  Build and nurture relationships with your email subscribers
                  through targeted email campaigns. We'll design and implement
                  email marketing strategies to capture leads, nurture
                  prospects, and drive sales.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Conversion Rate Optimization (CRO)</h3>
                <p>
                  Improve the effectiveness of your website and marketing
                  campaigns by optimizing for conversions. We'll analyze user
                  behavior, identify areas for improvement, and implement A/B
                  testing to increase your conversion rates.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="service-content">
                <h3>Website Analytics & Reporting</h3>
                <p>
                  Track key website metrics, analyze user behavior, and generate
                  insightful reports to measure the effectiveness of your
                  marketing campaigns. We'll use tools like Google Analytics to
                  provide you with valuable data that will help you make
                  informed decisions.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>Reputation Management</h3>
                <p>
                  Monitor and manage your online reputation by identifying and
                  addressing negative reviews and online discussions. We'll help
                  you build and maintain a positive online presence.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>Local SEO</h3>
                <p>
                  Improve your visibility in local search results with our
                  targeted local SEO services. We'll optimize your Google My
                  Business profile, build local citations, and implement other
                  local SEO strategies to attract customers in your area.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>Video Marketing</h3>
                <p>
                  Create engaging video content that will capture your
                  audience's attention and drive results. We'll produce
                  high-quality videos for your website, social media, and other
                  marketing channels.
                </p>{" "}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service-content">
                <h3>Influencer Marketing</h3>
                <p>
                  Partner with influential figures in your industry to reach a
                  wider audience and build brand credibility. We'll identify and
                  connect you with relevant influencers to help you achieve your
                  marketing goals.
                </p>{" "}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default ServiceTabs;

import Logo from "@/public/images/logo/dflogo.svg";
import Image from "next/image";
import Link from "next/link";
import FooterCopyright from "./FooterCopyright";
import FooterCta from "./FooterCta";
import Subscription from "./Subscription";
function Footer() {
  return (
    <footer className="sofax-footer-section">
      <div className="container">
        <FooterCta />
        <div className="sofax-footer-top">
          <div className="row">
            <div className="col-xl-4 col-md-12">
              <div className="sofax-footer-wrap mr-25">
                <Link href="/multi-page/home-five">
                  <Image width={180} src={Logo} alt="logo" />
                </Link>
                <p>
                  Join the Deansfort family today and be a part of our journey
                  toward technological excellence. Together, we’ll create
                  solutions that make a difference!
                </p>
                <div className="sofax-social-icon">
                  <ul>
                    <li>
                      <a target="_blank" href="https://x.com/Deansforttech">
                        <svg
                          width="17"
                          height="18"
                          viewBox="0 0 17 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.96447 7.24539L16.1975 0H14.7205L9.30833 6.29107L4.98567 0H0L6.5367 9.51321L0 17.1111H1.47711L7.19246 10.4675L11.7575 17.1111H16.7432L9.9641 7.24539H9.96447ZM7.94136 9.59702L7.27906 8.64972L2.00933 1.11194H4.27809L8.53082 7.19517L9.19312 8.14247L14.7212 16.0497H12.4524L7.94136 9.59739V9.59702Z"
                            fill="#0E0E0E"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.facebook.com/deansfort">
                        <svg
                          width="11"
                          height="18"
                          viewBox="0 0 11 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.88663 0.00357362L7.65153 0C5.14046 0 3.5177 1.65905 3.5177 4.22688V6.17575H1.27039C1.0762 6.17575 0.918945 6.33263 0.918945 6.52614V9.34984C0.918945 9.54335 1.07638 9.70005 1.27039 9.70005H3.5177V16.8251C3.5177 17.0187 3.67495 17.1754 3.86914 17.1754H6.80123C6.99543 17.1754 7.15268 17.0185 7.15268 16.8251V9.70005H9.7803C9.9745 9.70005 10.1318 9.54335 10.1318 9.34984L10.1328 6.52614C10.1328 6.43323 10.0957 6.34425 10.0299 6.27849C9.9641 6.21274 9.87444 6.17575 9.7812 6.17575H7.15268V4.52367C7.15268 3.72961 7.34257 3.3265 8.3806 3.3265L9.88627 3.32597C10.0803 3.32597 10.2375 3.16909 10.2375 2.97575V0.353788C10.2375 0.160634 10.0805 0.00393098 9.88663 0.00357362Z"
                            fill="#0E0E0E"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.instagram.com/deansfort">
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.043 0H5.9475C3.14256 0 0.86792 2.26664 0.86792 5.06173V11.1358C0.86792 13.9309 3.14256 16.1975 5.9475 16.1975H12.043C14.8479 16.1975 17.1226 13.9309 17.1226 11.1358V5.06173C17.1226 2.26664 14.8479 0 12.043 0ZM15.5987 11.1358C15.5987 13.0896 14.0037 14.679 12.043 14.679H5.9475C3.98678 14.679 2.39179 13.0896 2.39179 11.1358V5.06173C2.39179 3.1079 3.98678 1.51852 5.9475 1.51852H12.043C14.0037 1.51852 15.5987 3.1079 15.5987 5.06173V11.1358Z"
                            fill="#0E0E0E"
                          />
                          <path
                            d="M9.00312 4.05713C6.75896 4.05713 4.93945 5.87024 4.93945 8.10651C4.93945 10.3428 6.75896 12.1559 9.00312 12.1559C11.2473 12.1559 13.0668 10.3428 13.0668 8.10651C13.0668 5.87024 11.2473 4.05713 9.00312 4.05713ZM9.00312 10.6374C7.60319 10.6374 6.46333 9.50153 6.46333 8.10651C6.46333 6.71049 7.60319 5.57565 9.00312 5.57565C10.4031 5.57565 11.5429 6.71049 11.5429 8.10651C11.5429 9.50153 10.4031 10.6374 9.00312 10.6374Z"
                            fill="#0E0E0E"
                          />
                          <path
                            d="M13.3527 4.29821C13.653 4.29821 13.8964 4.05602 13.8964 3.75726C13.8964 3.4585 13.653 3.21631 13.3527 3.21631C13.0525 3.21631 12.8091 3.4585 12.8091 3.75726C12.8091 4.05602 13.0525 4.29821 13.3527 4.29821Z"
                            fill="#0E0E0E"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/company/deansfort">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.877 15.0112V15.0106H15.8807V9.49947C15.8807 6.8034 15.2983 4.72656 12.1353 4.72656C10.6147 4.72656 9.59433 5.55805 9.17775 6.34633H9.13377V4.97826H6.13477V15.0106H9.25755V10.0429C9.25755 8.73498 9.50637 7.47022 11.1318 7.47022C12.7335 7.47022 12.7573 8.96289 12.7573 10.1268V15.0112H15.877Z"
                            fill="#0E0E0E"
                          />
                          <path
                            d="M1.0498 4.99463H4.17636V15.0269H1.0498V4.99463Z"
                            fill="#0E0E0E"
                          />
                          <path
                            d="M2.62114 0C1.62147 0 0.810303 0.808321 0.810303 1.80448C0.810303 2.80063 1.62147 3.62586 2.62114 3.62586C3.62081 3.62586 4.43198 2.80063 4.43198 1.80448C4.43135 0.808321 3.62018 0 2.62114 0V0Z"
                            fill="#0E0E0E"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="sofax-footer-menu ml-50">
                <h5>Company</h5>
                <ul>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
				  <li>
                    <a target="_blank" href="https://deansfort.medium.com/">Blog</a>
                  </li>
				  <li>
                    <a href="/contact-us">Contact US</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="sofax-footer-menu">
                <h5>Services</h5>
                <ul>
                  <li>
                    <a href="/services/web-development">Web Development</a>
                  </li>
                  <li>
                    <a href="/services/ai-development">AI Development</a>
                  </li>
                  <li>
                    <a href="/services/it-services">IT Services</a>
                  </li>
                  <li>
                    <a href="/services/digital-marketing">Digital Marketing</a>
                  </li>
				  <li>
                    <a href="/services/ecommerce-solutions">Ecommerce Solutions</a>
                  </li>
				  <li>
                    <a href="/services/mobile-development">Mobile App Development</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="sofax-footer-menu">
                <h5>Subscribe to our newsletter</h5>
                <Subscription />
              </div>
            </div>
          </div>
        </div>

        <FooterCopyright />
      </div>
    </footer>
  );
}

export default Footer;

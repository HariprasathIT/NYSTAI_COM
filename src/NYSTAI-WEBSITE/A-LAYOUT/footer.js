import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegramPlane,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import { faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footerproduct() {
  const currentYear = new Date().getFullYear();

  // State for keeping track of active panels in single-open and nested accordions
  const [activeSingle, setActiveSingle] = useState(null);
  const [nestedActive, setNestedActive] = useState({});

  const toggleMultiPanel = (index) => {
    document
      .querySelectorAll(".multi-panel .panel")
      [index].classList.toggle("active");
  };

  const toggleSinglePanel = (index) => {
    setActiveSingle(activeSingle === index ? null : index);
  };

  const toggleNestedPanel = (parentIndex, childIndex = null) => {
    setNestedActive((prevState) => {
      const newState = { ...prevState };
      if (childIndex !== null) {
        newState[parentIndex] = {
          ...(newState[parentIndex] || {}),
          [childIndex]: !newState[parentIndex]?.[childIndex],
        };
      } else {
        newState[parentIndex] = !newState[parentIndex];
      }
      return newState;
    });
  };

  // For Mobile Footer
  const menuItems = [
    {
      title: "Company",
      children: [
        { name: "About Us", path: "/SUPPORT" },
        { name: "Career", path: "/SUPPORT" },
        { name: "Compliance", path: "/SUPPORT" },
        { name: "Quality Policy", path: "/SUPPORT" },
        { name: "Case Studies", path: "/SUPPORT" },
        { name: "Nystai E-Learning", path: "/SUPPORT" },
      ],
    },
    {
      title: "Support",
      children: [
        { name: "Contact Us", path: "/SUPPORT" },
        { name: "Submit a Ticket", path: "/SUPPORT" },
        { name: "Consultations", path: "/SUPPORT" },
        { name: "Where to Buy", path: "/SUPPORT" },
        { name: "FAQ & Help", path: "/nystai-support" },
        // { name: "BLOG", path: "/blog" },
      ],
    },
    {
      title: "Protect Plan",
      children: [
        { name: "Hybrid AIot NVR", path: "/hybriddet" },
        { name: "Alarm", path: "/Alarmdet" },
        { name: "AI Camera", path: "/Camerdet" },
        { name: "Access Control", path: "/Accessdet" },
        { name: "Ai-VMS", path: "/vmsde" },
        { name: "Electric Fence", path: "/electricdet" },
      ],
    },
    {
      title: "Solutions",
      children: [
        { name: "Residential", path: "/nystai-solution-home" },
        { name: "Industrial", path: "/indudet" },
        { name: "Banking", path: "/nystai-solution-banking" },
        { name: "Retail", path: "/nystai-solution-retail" },
        { name: "Education", path: "/nystai-solution-education" },
        { name: "Warehouse", path: "/nystai-solution-Warehouse" },
      ],
    },
  ];

  return (
    <>
      {/* OTHER DEVICE */}
      <body className="body-footer-content big-screen-footer">
        <footer className="nystai-foo-com">
          <div class="content-footer-com">
            <div class="link-boxes container">
              <ul class="box p-0">
                <li class="link_name">Company</li>
                <li>
                  <Link to="/SUPPORT">About Us</Link>
                </li>
                <li>
                  <Link to="/SUPPORT">Career</Link>
                </li>
                <li>
                  <Link to="/SUPPORT">Compliance</Link>
                </li>
                <li>
                  <Link to="/SUPPORT">Quality Policy</Link>
                </li>
                <li>
                  <Link to="/SUPPORT">Case Studies</Link>
                </li>
                <li>
                  <Link to="/SUPPORT">Nystai eLearning</Link>
                </li>
              </ul>
              <ul class="box  p-0">
                <li class="link_name">Support</li>
                <li>
                  <Link to="/SUPPORT">Contact Us</Link>
                </li>
                <li>
                  <Link to="/SUPPORT">Submit a Ticket</Link>
                </li>
                <li>
                  <Link to="/SUPPORT">Consultations</Link>
                </li>
                <li>
                  <Link to="/SUPPORT"> Where to Buy</Link>
                </li>
                <li>
                  <Link to="/SUPPORT">FAQ & Help</Link>
                </li>
                {/* <li><Link to="/footblog">BLOG</Link></li> */}
              </ul>
              <ul class="box  p-0">
                <li class="link_name">Protect Plan</li>
                <li>
                  <Link to="/hybriddet">Hybrid AIot NVR</Link>
                </li>
                <li>
                  <Link to="/Alarmdet">Alarm</Link>
                </li>
                <li>
                  <Link to="/Camerdet">Camera & Alarm</Link>
                </li>
                <li>
                  <Link to="/Accessdet">Access Control</Link>
                </li>
                <li>
                  <Link to="/vmsde">Ai-VMS</Link>
                </li>
                <li>
                  <Link to="/electricdet">Electric Fence</Link>
                </li>
              </ul>
              <ul class="box  p-0">
                <li class="link_name">Solutions</li>
                <li>
                  <Link to="/nystai-solution-home">Residential</Link>
                </li>
                <li>
                  <Link to="/nystai-solution-Industrial">
                    Industrial & Warehouse
                  </Link>
                </li>
                <li>
                  <Link to="/nystai-solution-banking">Banking</Link>
                </li>
                <li>
                  <Link to="/nystai-solution-retail">Retail</Link>
                </li>
                <li>
                  <Link to="/nystai-solution-education">Education</Link>
                </li>
                <li>
                  <Link to="/nystai-solution-Hospital">Health Care</Link>
                </li>
              </ul>

              <ul class="box input-box">
                <li class="link_name">Media</li>

                <div className="d-flex" style={{ flexDirection: "column" }}>
                  <li>
                    <Link to="/SUPPORT">
                      <input
                        type="button"
                        className="footer-subs"
                        value="Subscribe Newsletter"
                      />
                    </Link>
                  </li>

                  <a
                    class=" mb-2"
                    href="https://play.google.com/store/apps/details?id=com.sdfornystalnew&pcampaignid=web_share"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AsyncImage
                      className="news-app-promo__play-store"
                      src={
                        "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/appstore-1 (1).svg"
                      }
                      width="161"
                      height="auto"
                      border="0"
                      alt="nys-img"
                    />
                  </a>
                  <a
                    class=" mb-2"
                    href="https://apps.apple.com/in/app/nystai/id6503040541"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AsyncImage
                      className="news-app-promo__app-store"
                      src={
                        "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/appstore-1 (2).svg"
                      }
                      width="161"
                      height="auto"
                      border="0"
                      alt="nys-img"
                    />
                  </a>
                </div>
              </ul>
              <ul class="box p-0">
                <li class="link_name">Media</li>
                <div className="row">
                  <div className="col-6 mt-2">
                    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                      <li>
                        <a
                          href="http://www.youtube.com/@NYSTAI"
                          target="-blank"
                        >
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/share/1BmNDtcsuY/"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/nystaiiot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px" }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 mt-2">
                    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                      <li>
                        <a
                          href="https://x.com/Nystai_iot?t=fFMeQXZ3W5-2T95uZ_iQHg&s=09"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faXTwitter}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://wa.me/+918189977700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/nystai-iot-leading-aiot-security-solutions-a18a07339"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px" }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <div class=" container bottom-details">
            <div class="bottom_text">
              <span class="copyright_text">
                Copyright © 2024 All Rights Reserved by ADHIBA TECHNOLOGIES
                PRIVATE LIMITED
              </span>
              <span class="policy_terms">
                <a href="#">
                  {" "}
                  <Link to="/nystai-privacy-policy">PRIVACY POLICY</Link> |
                </a>
                <a href="#">
                  {" "}
                  <Link to="/nystai-warrenty">WARRANTY</Link>|
                </a>
                <a href="#">
                  {" "}
                  <Link to="/nystai-terms-condition">TERMS & SERVICE</Link>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </body>

      {/* MOBILE-FOOTER */}
      <body className="body-footer-content MOBILE-footer">
        <div className="accordion-container">
          <div className="section-title">GET IN TOUCH</div>
          <div className="nested-accordion" style={{ padding: "12px" }}>
            {menuItems.map((parent, parentIndex) => (
              <div
                key={parentIndex}
                className={`panel ${nestedActive[parentIndex] ? "active" : ""}`}
              >
                <div
                  className="panel-header"
                  onClick={() => toggleNestedPanel(parentIndex)}
                >
                  {parent.title}
                </div>
                <div className="panel-content">
                  {parent.children.map((child, childIndex) => (
                    <>
                      <Link to={child.path}>
                        <div
                          key={childIndex}
                          className={`sub-panel ${nestedActive[parentIndex]?.[childIndex] ? "active" : ""}`}
                        >
                          <div
                            className="panel-header"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleNestedPanel(parentIndex, childIndex);
                            }}
                          >
                            {child.name}
                          </div>
                        </div>
                      </Link>
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="Footer-mob-icons mb-4">
            <h4 className="mb-0">Follow Us</h4>
            <div className="d-flex justify-content-center gap-3 py-3">
              <a
                href="https://www.instagram.com/nystaiiot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="text-white"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://wa.me/+918189977700"
                target="_blank"
                className="text-white"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
              <a
                href="http://www.youtube.com/@NYSTAI"
                target="_blank"
                className="text-white"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a
                href="https://www.facebook.com/share/1BmNDtcsuY/"
                target="_blank"
                className="text-white"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://x.com/Nystai_iot?t=fFMeQXZ3W5-2T95uZ_iQHg&s=09"
                target="_blank"
                className="text-white"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/nystai-iot-leading-aiot-security-solutions-a18a07339"
                target="_blank"
                className="text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="d-flex align-items-center justify-content-center pb-3"
          style={{ flexDirection: "column" }}
        >
          <li>
            <Link to="/SUPPORT">
              <input
                type="button"
                value="Subscribe Newsletter"
                style={{
                  background: "#fff",
                  color: "#140B5C",
                  border: "none",
                  fontSize: "18px",
                  fontWeight: 500,
                  margin: "4px 0",
                  opacity: 0.8,
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  padding: "10px",
                  borderRadius: "5px",
                }}
                className="mb-2"
              />
            </Link>
          </li>

          <a
            class=" mb-2"
            href="https://play.google.com/store/apps/details?id=com.sdfornystalnew&pcampaignid=web_share"
            target="_blank"
            rel="noreferrer"
          >
            <AsyncImage
              className="news-app-promo__play-store"
              src={"/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/appstore-1 (1).svg"}
              width="161"
              height="auto"
              border="0"
              alt="nys-img"
            />
          </a>
          <a
            class=" mb-2"
            href="https://apps.apple.com/in/app/nystai/id6503040541"
            target="_blank"
            rel="noreferrer"
          >
            <AsyncImage
              className="news-app-promo__app-store"
              src={"/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/appstore-1 (2).svg"}
              width="161"
              height="auto"
              border="0"
              alt="nys-img"
            />
          </a>
        </div>

        <div className="text-center">
          <hr className="container hr-mobile-foo pb-3" />
          <Link to="/nystai-privacy-policy">
            {" "}
            <div className="text-white">PRIVACY POLICY</div>
          </Link>
          <Link to="/nystai-warrenty">
            <div className="text-white">WARRANTY</div>
          </Link>
          <Link to="/nystai-terms-condition">
            <div className="text-white pb-3">TERMS & SERVICE</div>
          </Link>
          <hr className="container hr-mobile-foo pb-3" />
          <div className="text-white pb-3">
            Copyright © 2024
            <br /> All Rights Reserved by <br />
            ADHIBA TECHNOLOGIES PRIVATE LIMITED
          </div>
        </div>
      </body>
    </>
  );
}

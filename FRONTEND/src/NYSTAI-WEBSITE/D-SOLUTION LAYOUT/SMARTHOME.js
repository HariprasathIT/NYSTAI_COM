import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import React, { useEffect, useState } from "react";
import "./edusolution.css";
import Footerproduct from "../A-LAYOUT/footer";
import { products } from "../C-PRODUCT LAYOUT/datass.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import $ from "jquery";
import Swiper from "swiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBuildingColumns,
  faCarBurst,
  faCircleInfo,
  faHandshake,
  faHome,
  faHouseSignal,
  faIndustry,
  faPlaceOfWorship,
  faSchool,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "@mui/material/Drawer";

gsap.registerPlugin(ScrollTrigger);

export default function Smarthomesolu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    [1].includes(product.category)
  );

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [activeSection, setActiveSection] = useState("Overview");

  useEffect(() => {
    const sections = document.querySelectorAll(".page-section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <>
      <header className="placeholder-section">
        <div class=" card ">
          <AsyncImage
            className="card-img"
            src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smarthome.webp"}
            alt="Card image"
          />
        </div>
      </header>

      <Navbar collapseOnSelect expand="lg" className="sub-nav-edu-solu ">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="m-0"
            onClick={toggleDrawer(true)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* DESKTOP ROUTING */}
            <Nav className="sub-nav-desktop-nys m-auto">
              <Nav.Link>
                <a
                  className={`menu-item-link ${activeSection === "Overview" ? "active" : ""}`}
                  onClick={() => handleScrollToSection("Overview")}
                >
                  Overview
                </a>
              </Nav.Link>
              <Nav.Link>
                <a
                  className={`menu-item-link ${activeSection === "What we offer" ? "active" : ""}`}
                  onClick={() => handleScrollToSection("What we offer")}
                >
                  What we offer
                </a>
              </Nav.Link>
              <Nav.Link>
                <a
                  className={`menu-item-link ${activeSection === "Features" ? "active" : ""}`}
                  onClick={() => handleScrollToSection("Features")}
                >
                  Features
                </a>
              </Nav.Link>
              <Nav.Link>
                <a
                  className={`menu-item-link ${activeSection === "Product display" ? "active" : ""}`}
                  onClick={() => handleScrollToSection("Product display")}
                >
                  Product display
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MOBILE DRAWER */}
      <Container className="sub-nav-mob-drawer-nys">
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <div
            className=""
            style={{
              backgroundColor: "#f5f5f5",
              padding: "20px 10px 10px 10px",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <h4 style={{ color: "#1b6763", fontWeight: "bold" }}>
              <span style={{ color: "#8c8c8c" }}>INTEGRATED</span> SOLUTIONS
            </h4>
          </div>
          <div className="mt-3" style={{ paddingLeft: "7px" }}>
            <Link to="/nystai-solution-home">
              <p style={{ color: "#1b6763" }}>
                <FontAwesomeIcon
                  style={{ color: "#8c8c8c" }}
                  icon={faHouseSignal}
                  className="me-3"
                />
                SMARTHOME
              </p>
            </Link>
            <Link to="/nystai-solution-Industrial">
              <p style={{ color: "#1b6763" }}>
                <FontAwesomeIcon
                  style={{ color: "#8c8c8c" }}
                  icon={faIndustry}
                  className="me-3"
                />
                INDUSTRIAL
              </p>
            </Link>
            <Link to="/nystai-solution-education">
              <p style={{ color: "#1b6763" }}>
                <FontAwesomeIcon
                  style={{ color: "#8c8c8c" }}
                  icon={faSchool}
                  className="me-3"
                />
                EDUCATION
              </p>
            </Link>
            <Link to="/nystai-solution-worship">
              <p style={{ color: "#1b6763" }}>
                <FontAwesomeIcon
                  style={{ color: "#8c8c8c" }}
                  icon={faPlaceOfWorship}
                  className="me-3"
                />
                WORSHIP
              </p>
            </Link>
            <Link to="/nystai-solution-vms">
              <p style={{ color: "#1b6763" }}>
                <FontAwesomeIcon
                  style={{ color: "#8c8c8c" }}
                  icon={faCarBurst}
                  className="me-3"
                />
                VMS
              </p>
            </Link>
            <Link to="/nystai-solution-Warehouse">
              <p style={{ color: "#1b6763" }}>
                <FontAwesomeIcon
                  style={{ color: "#8c8c8c" }}
                  icon={faWarehouse}
                  className="me-3"
                />
                WAREHOUSE
              </p>
            </Link>
            <Link to="/nystai-solution-Hospital">
              <p style={{ color: "#1b6763" }}>
                <FontAwesomeIcon
                  style={{ color: "#8c8c8c" }}
                  icon={faIndustry}
                  className="me-3"
                />
                HOSPITAL
              </p>
            </Link>
            <Link to="/nystai-solution-banking">
              <p style={{ color: "#1b6763" }}>
                <FontAwesomeIcon
                  style={{ color: "#8c8c8c" }}
                  icon={faBuildingColumns}
                  className="me-3"
                />
                BANKING
              </p>
            </Link>
            <Link to="/nystai-solution-retail">
              <p style={{ color: "#1b6763" }}>
                <FontAwesomeIcon
                  style={{ color: "#8c8c8c" }}
                  icon={faCircleInfo}
                  className="me-3"
                />
                RETAIL
              </p>
            </Link>
            <Link to="/nystai-solution-parking">
              <p style={{ color: "#1b6763" }}>
                <FontAwesomeIcon
                  style={{ color: "#8c8c8c" }}
                  icon={faHandshake}
                  className="me-3"
                />
                PARKING IOT SOLUTION
              </p>
            </Link>
          </div>
        </Drawer>
      </Container>

      <section id="main-content" className="page-sections">
        <section className="container page-section mt-5 mb-5" id="Overview">
          <div className="mini-block-statement w-clearfix">
            <h3 className="heading-34">Nystai’s Home Automation </h3>
            <p className="text-block-60">
              Home automation has become essential for modern living, offering
              convenience, security, and peace of mind. With smart home products
              like CCTV cameras, alarms, and automation systems, homeowners can
              monitor their properties and control various aspects of their
              homes with ease. NYSTAI’s home automation solutions combine these
              functions into one seamless system, ensuring maximum security and
              efficiency. This integrated approach provides users with real-time
              updates and proactive monitoring, making homes smarter and safer.
            </p>
          </div>

          <div className="card-wrapper card-deck-custom row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
              <div className="card">
                <center>
                  <AsyncImage
                    className="card-img-top"
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smarthome -1 (2).webp"
                    }
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Vigilance</h4>
                  <p className="card-text">
                    Real-time notifications for security
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
              <div className="card">
                <center>
                  <AsyncImage
                    className="card-img-top"
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smarthome -1 (1).webp"
                    }
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Centralization</h4>
                  <p className="card-text">Automated control from one device</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
              <div className="card">
                <center>
                  <AsyncImage
                    className="card-img-top"
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smarthome -1 (1).webp"
                    }
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Anticipation</h4>
                  <p className="card-text">
                    Proactive monitoring prevents problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page-section Whatweoffer text-center"
          id="What we offer"
        >
          <div className="text-center mb-5">
            <h3 class="rrmc-article-desc-title">What we offer</h3>
          </div>
          <div class="container grid-col home-scroll_content page-padding">
            <div class="home-scroll_text-wrap home-scroll_section">
              <div class="home-scroll_text-list">
                {/* First block: text left, image right */}
                <div class="home-scroll_text-item d-flex align-items-center flex-wrap my-5">
                  <div class="col-md-6">
                    <h2 class="text-size-h1">
                      Challenges Without CCTV, Alarms, and Automation
                    </h2>
                    <p>
                      Without advanced security systems like CCTV cameras,
                      alarms, and automation, homes are vulnerable to break-ins
                      and emergencies. Manual monitoring and outdated tech often
                      fail to prevent incidents. Managing multiple systems
                      separately causes inefficiency and delays, leaving homes
                      and families unprotected against potential threats and
                      costly aftermaths.
                    </p>
                  </div>
                  <div class="col-md-6">
                    <AsyncImage
                      alt=""
                      loading="lazy"
                      src={
                        "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smart home img (3).webp"
                      }
                      className="home-scroll_photo w-100 rounded-4 img-fluid"
                      style={{ height: "50vh", objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Second block: image left, text right */}
                <div class="home-scroll_text-item d-flex align-items-center flex-wrap my-5 flex-md-row-reverse">
                  <div class="col-md-6">
                    <h2 class="text-size-h1">
                      Solutions Provided by CCTV, Alarms, and Automation
                    </h2>
                    <p>
                      Modern CCTV cameras, alarms, and automation provide
                      real-time security, control, and convenience from a single
                      platform. With live video feeds and instant alerts,
                      homeowners can quickly respond to threats. Automation
                      enhances comfort by controlling lighting and climate,
                      ensuring seamless protection and peace of mind for a safer
                      home environment.
                    </p>
                  </div>
                  <div class="col-md-6">
                    <AsyncImage
                      alt=""
                      loading="lazy"
                      src={
                        "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smartthree-2.webp"
                      }
                      className="home-scroll_photo w-100 rounded-4 img-fluid"
                      style={{ height: "50vh", objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Third block: text left, image right */}
                <div class="home-scroll_text-item d-flex align-items-center flex-wrap my-5">
                  <div class="col-md-6">
                    <h2 class="text-size-h1">
                      How NYSTAI Products Resolve These Issues
                    </h2>
                    <p>
                      NYSTAI’s home automation system integrates CCTV cameras,
                      alarms, and controls into one platform. Users receive
                      real-time notifications and live video feeds on
                      smartphones, ensuring constant awareness. Designed for
                      proactive security, NYSTAI products help detect potential
                      issues early, providing convenience, protection, and a
                      smarter, safer home experience.
                    </p>
                  </div>
                  <div class="col-md-6">
                    <AsyncImage
                      alt=""
                      loading="lazy"
                      src={
                        "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smart home img (2).webp"
                      }
                      className="home-scroll_photo w-100 rounded-4 img-fluid"
                      style={{ height: "50vh", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page-section mt-5 mb-5 Features-smart"
          id="Features"
        >
          <section class="creative-cards style-one">
            <div className="text-center " style={{ color: "#f5f5f5" }}>
              <h3 class="rrmc-article-desc-title">Features</h3>
              <p class="rrmc-article-desc-intro">
                Features provided by our Home Automation{" "}
              </p>
            </div>

            <div class="container">
              <div class="row">
                <div class="card-column">
                  <div class="card-details active">
                    <div class="card-details--inner">
                      <div class="card-icon">
                        <AsyncImage
                          className="light-icon"
                          src={
                            "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/icon-solu-smart - 1 (5).webp"
                          }
                          alt="icon"
                        />
                      </div>
                      <div class="card-detail">
                        <h3 class="card-heading">
                          <a href="https://www.fiverr.com/aliali44">
                            Unified Control{" "}
                          </a>
                        </h3>
                        <p class="card-decription">
                          Manage CCTV cameras, alarms, and automation from a
                          single platform for seamless operation.{" "}
                        </p>
                        <h6 class="card-count">01</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-column">
                  <div class="card-details card-bg active">
                    <div class="card-details--inner">
                      <div class="card-icon">
                        <AsyncImage
                          className="light-icon"
                          src={
                            "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/icon-solu-smart - 1 (4).webp"
                          }
                          alt="icon"
                        />
                      </div>
                      <div class="card-detail">
                        <h3 class="card-heading">
                          <a href="https://www.fiverr.com/aliali44">
                            Real-Time Alerts
                          </a>
                        </h3>
                        <p class="card-decription">
                          Receive instant notifications for suspicious
                          activities or emergencies, keeping homeowners informed
                          and secure.{" "}
                        </p>
                        <h6 class="card-count">02</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-column">
                  <div class="card-details active">
                    <div class="card-details--inner">
                      <div class="card-icon">
                        <AsyncImage
                          className="light-icon"
                          src={
                            "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/icon-solu-smart - 1 (1).webp"
                          }
                          alt="icon"
                        />
                      </div>
                      <div class="card-detail">
                        <h3 class="card-heading">
                          <a href="https://www.fiverr.com/aliali44">
                            Live Video Feeds
                          </a>
                        </h3>
                        <p class="card-decription">
                          Access live footage from security cameras directly on
                          your smartphone, ensuring constant surveillance.{" "}
                        </p>
                        <h6 class="card-count">03</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-column">
                  <div class="card-details active">
                    <div class="card-details--inner">
                      <div class="card-icon">
                        <AsyncImage
                          className="light-icon"
                          src={
                            "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/icon-solu-smart - 1 (3).webp"
                          }
                          alt="icon"
                        />
                      </div>
                      <div class="card-detail">
                        <h3 class="card-heading">
                          <a href="https://www.fiverr.com/aliali44">
                            Proactive Security
                          </a>
                        </h3>
                        <p class="card-decription">
                          Detect and prevent potential threats before they
                          escalate with advanced motion and activity sensors.
                        </p>
                        <h6 class="card-count">04</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-column">
                  <div class="card-details active">
                    <div class="card-details--inner">
                      <div class="card-icon">
                        <AsyncImage
                          className="light-icon"
                          src={
                            "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/icon-solu-smart - 1 (2).webp"
                          }
                          alt="icon"
                        />
                      </div>
                      <div class="card-detail">
                        <h3 class="card-heading">
                          <a href="https://www.fiverr.com/aliali44">
                            Comprehensive Automation
                          </a>
                        </h3>
                        <p class="card-decription">
                          Control lighting, climate, and security settings,
                          enhancing both convenience and protection.
                        </p>
                        <h6 class="card-count">05</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <center className="page-section container mt-4 mb-4" id="Where we use">
          <AsyncImage
            src={
              "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/SMART HOME AUTOMATION.webp"
            }
            alt="smart"
            className="img-fluid w-100"
            style={{ borderRadius: "10px" }}
          />
        </center>

        <main
          className="container page-section Product-display mb-5"
          id="Product display"
        >
          <div className="text-center">
            <h3 class="rrmc-article-desc-title mb-5">PRODUCT DISPLAY</h3>
          </div>
          <div className="prod-row-card-nys">
            {filteredProducts.map((product) => (
              <div className="prod-column-card-nys mb-2" key={product.id}>
                <div
                  className="card pro_card-des"
                  onClick={() => handleCardClick(product)}
                >
                  <div className="image-container">
                    <AsyncImage
                      alt="Product"
                      src={product.image}
                      className="img-fluid rounded thumbnail-image"
                    />
                  </div>
                  <div className="card-body product-detail-container">
                    <h6>{product.title}</h6>
                    <p>{product.Cardsingleword}</p>
                    <p className="dress-name">{product.Cardthreeword}</p>
                    <div className="d-flex justify-content-between align-items-end btn-modaln">
                      <h5 className="dress-name1">{product.ModelNumber}</h5>
                      <div className="product-detail">
                        <button className="btn pulse">MORE INFO</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {modalOpen && selectedProduct && (
            <div className="modal-overlay" onClick={handleCloseModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <section className="modal-pro">
                  <div className="card-wrapper">
                    <div className="card">
                      <button
                        onClick={handleCloseModal}
                        className="close-button"
                        aria-label="Close Modal"
                      >
                        &times;
                      </button>
                      <div class="product-imgs">
                        <div class="img-display">
                          <div class="img-showcase">
                            <AsyncImage
                              src={selectedProduct.modalimage1}
                              alt="shoe image /"
                            />
                            <AsyncImage
                              src={selectedProduct.modalimage1}
                              alt="shoe image /"
                            />
                            <AsyncImage
                              src={selectedProduct.modalimage1}
                              alt="shoe image /"
                            />
                          </div>
                        </div>
                        <div class="img-select">
                          <div class="img-item">
                            <a data-id="1">
                              <AsyncImage
                                src={selectedProduct.modalimage1}
                                alt="shoe image /"
                              />
                            </a>
                          </div>
                          <div class="img-item">
                            <a data-id="2">
                              <AsyncImage
                                src={selectedProduct.modalimage1}
                                alt="shoe image /"
                              />
                            </a>
                          </div>
                          <div class="img-item">
                            <a data-id="3">
                              <AsyncImage
                                src={selectedProduct.modalimage1}
                                alt="shoe image /"
                              />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="product-content">
                        <h2 className="product-title">
                          {selectedProduct.title}
                        </h2>
                        <h5 className="mb-3 smart-features-head">
                          Smart Features:
                        </h5>

                        <div className="social-links">
                          <div>
                            <a>
                              <AsyncImage
                                src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.webp"
                                className="img-fluid"
                              />
                            </a>
                            <p>Cloud</p>
                          </div>
                          <div>
                            <a>
                              <AsyncImage
                                src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.webp"
                                className="img-fluid"
                              />
                            </a>
                            <p>AI</p>
                          </div>
                          <div>
                            <a>
                              <AsyncImage
                                src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.webp"
                                className="img-fluid"
                              />
                            </a>
                            <p>Video</p>
                          </div>
                          <div>
                            <a>
                              <AsyncImage
                                src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.webp"
                                className="img-fluid"
                              />
                            </a>
                            <p>Wi-fi</p>
                          </div>
                          <div>
                            <a>
                              <AsyncImage
                                src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.webp"
                                className="img-fluid"
                              />
                            </a>
                            <p>Sensor</p>
                          </div>
                        </div>

                        <div className="product-detail">
                          <p>{selectedProduct.modalDescriptionp}</p>
                          <div className="product-detail-keypoints">
                            <h5>Key Features:</h5>
                            <ul>
                              <li>{selectedProduct.Mkeyone}</li>
                              <li>{selectedProduct.Mkeytwo}</li>
                              <li>{selectedProduct.MkeyTHREE}</li>
                              <li>{selectedProduct.MkeyFOUR}</li>
                            </ul>
                          </div>
                        </div>

                        <div className="purchase-info">
                          <Link to="/hybriddet">
                            <button type="button" className="btn">
                              Know More <i className="fas fa-shopping-cart"></i>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}
        </main>
      </section>

      <Footerproduct />
    </>
  );
}

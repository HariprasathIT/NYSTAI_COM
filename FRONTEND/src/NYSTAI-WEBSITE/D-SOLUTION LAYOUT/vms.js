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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
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
gsap.registerPlugin(ScrollTrigger);

export default function Vms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    [9].includes(product.category)
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
            src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/traficbanner.webp"}
            alt="Card image"
          />
        </div>
      </header>

      <Navbar collapseOnSelect expand="lg" className="sub-nav-edu-solu">
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
            <h3 className="heading-34">NYSTAI’S AI VMS</h3>
            <p className="text-block-60">
              Nystai’s Vehicle Management Systems (VMS) offer cutting-edge
              solutions for fleet monitoring and driver safety. With advanced
              technologies like dashboard cameras, AI-powered MDVR (Mobile
              Digital Video Recorder), and 360-degree camera monitors,
              businesses can ensure comprehensive vehicle surveillance and
              real-time data collection. These systems provide valuable insights
              into driver behavior, accident prevention, and operational
              efficiency, while enhancing security. Whether used in logistics,
              transportation, or industrial settings, Our VMS improves vehicle
              oversight, helping companies reduce risks, enhance safety, and
              optimize performance. The combination of AI analytics and visual
              monitoring makes it an essential tool for managing fleets
              efficiently and safely.
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
                  <h4 className="card-title">Safety</h4>
                  <p className="card-text">Monitor vehicles in real time.</p>
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
                  <h4 className="card-title">Tracking</h4>
                  <p className="card-text">
                    {" "}
                    Ensure driver safety and accountability.{" "}
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
                  <h4 className="card-title">Optimization</h4>
                  <p className="card-text">
                    Optimize fleet management efficiency.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page-section Whatweoffer container"
          id="What we offer"
        >
          <div className="text-center mb-4">
            <h3 class="rrmc-article-desc-title">What we offer</h3>
          </div>

          <section className="">
            <div
              class="card mb-3 "
              style={{ maxWidth: "540px;", border: "none" }}
            >
              <div class="row g-0 vms-card-circlr-img">
                <div class="col-md-4">
                  <AsyncImage
                    src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms (3).webp"}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      Challenges Without VMS:
                    </h5>
                    <p class="card-text" style={{ color: "#8c8c8c" }}>
                      Without advanced vehicle management systems, businesses
                      struggle with poor visibility into driver behavior,
                      increased risks of accidents, and inefficient fleet
                      monitoring. Manual oversight fails to provide real-time
                      data, leaving vehicles vulnerable to theft, damage, and
                      misuse. Lack of monitoring leads to higher operational
                      costs and reduced productivity. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" style={{ border: "none" }}>
              <div className="row g-0 vms-card-circlr-img">
                {/* Text column */}
                <div className="col-md-8 order-2 order-md-1">
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      Solutions Provided by VMS:
                    </h5>
                    <p className="card-text" style={{ color: "#8c8c8c" }}>
                      Vehicle management systems like our dashboard cameras, AI
                      MDVR, and 360-degree monitors provide comprehensive
                      surveillance and driver analysis. Real-time alerts, video
                      recording, and AI-powered insights allow businesses to
                      monitor fleet operations effectively. These solutions
                      improve safety, prevent accidents, and offer immediate
                      feedback, ensuring optimal vehicle usage and driver
                      accountability.
                    </p>
                  </div>
                </div>
                {/* Image column */}
                <div className="col-md-4 order-1 order-md-2 d-flex justify-content-end">
                  <AsyncImage
                    src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms (2).webp"}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div
              class="card mb-3 "
              style={{ maxWidth: "540px;", border: "none" }}
            >
              <div class="row g-0 vms-card-circlr-img">
                <div class="col-md-4">
                  <AsyncImage
                    src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms (1).webp"}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      How Nystai Products Resolve These Issues:
                    </h5>
                    <p class="card-text" style={{ color: "#8c8c8c" }}>
                      Nystai’s VMS integrates dashboard cameras, AI MDVR, and
                      360-degree monitors into a unified platform, providing
                      real-time monitoring and AI-based analysis. Businesses
                      receive instant alerts, live video feeds, and data
                      insights for improved decision-making. This proactive
                      solution helps prevent accidents, reduces risks, and
                      optimizes vehicle and driver performance. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="page-section mt-5 mb-5" id="Features">
          <div className="text-center container mb-4">
            <h3 class="rrmc-article-desc-title">
              Features Provided By Our VMS
            </h3>
          </div>

          <AsyncImage
            src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-banner-2.webp"}
            alt="vms-banner"
            className="img-fluid col-12"
          />

          <div className="vms-card-bg-img">
            <section
              class="container-fluid row row-cols-1 row-cols-md-5 g-4 "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div class=" col vms-card-bottom col-md-4 col-lg-2">
                <div class="card  ">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-1.webp"
                    }
                    className="img-fluid card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      Dashboard Cameras
                    </h5>
                    <p class="">
                      Record real-time video of vehicle operations for enhanced
                      safety. 
                    </p>
                  </div>
                </div>
              </div>
              <div class="col vms-card-top col-md-4 col-lg-2">
                <center class="card  ">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (2).webp"
                    }
                    className="img-fluid card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      AI MDVR
                    </h5>
                    <p class="">
                      {" "}
                      Advanced AI-powered video recording and data analytics for
                      comprehensive monitoring. 
                    </p>
                  </div>
                </center>
              </div>
              <div class="col  vms-card-bottom col-md-4 col-lg-2">
                <div class="card  ">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (1).webp"
                    }
                    className="img-fluid card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      360-Degree Monitors
                    </h5>
                    <p class="">
                      {" "}
                      Full view of vehicle surroundings to prevent accidents. 
                    </p>
                  </div>
                </div>
              </div>
              <div class="col vms-card-top col-md-4 col-lg-2">
                <div class="card  ">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (4).webp"
                    }
                    className="img-fluid card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      Real-Time Alerts
                    </h5>
                    <p class="">
                      {" "}
                      Immediate notifications for potential safety incidents.  
                    </p>
                  </div>
                </div>
              </div>
              <div class="col  vms-card-bottom col-md-4 col-lg-2">
                <div class="card  ">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (3).webp"
                    }
                    className="img-fluid card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      Data Insights
                    </h5>
                    <p class="">
                      {" "}
                      AI-driven reports for driver behavior and fleet
                      optimization.   
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

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
                  <div class="card-wrapper ">
                    <div class="card">
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

                      <div class="product-content">
                        <h2 class="product-title">{selectedProduct.title}</h2>
                        <h5 className="mb-4">Smart Features: </h5>
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

                        <div class="product-detail">
                          <p>{selectedProduct.modalDescriptionp}</p>

                          <h5>Key Features </h5>
                          <ul>
                            <li> {selectedProduct.Mkeyone}</li>
                            <li> {selectedProduct.Mkeytwo}</li>
                            <li> {selectedProduct.MkeyTHREE}</li>
                            <li> {selectedProduct.MkeyFOUR}</li>
                          </ul>
                        </div>
                        <div class="purchase-info ">
                          <Link to="/vmsde">
                            <button type="button" class="btn">
                              Know More<i class="fas fa-shopping-cart"></i>
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

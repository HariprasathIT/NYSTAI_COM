import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import "./edusolution.css";
import React, { useEffect, useState } from "react";
import "./edusolution.css";
import Footerproduct from "../A-LAYOUT/footer";
import { products } from "../C-PRODUCT LAYOUT/datass.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "@mui/material/Drawer";
export default function Banking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    [5].includes(product.category)
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

  const [activeTab, setActiveTab] = useState(1);
  const [fade, setFade] = useState(true);

  const handleTabClick = (tabNumber) => {
    setFade(false);
    setTimeout(() => {
      setActiveTab(tabNumber);
      setFade(true);
    }, 300);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < 4 ? prevIndex + 1 : 0)); // Move forward, loop to the start if at the end
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 4)); // Move backward, loop to the end if at the start
  };

  const handleCardClicks = (index) => {
    setActiveIndex(index); // Set the clicked card as active
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
            src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/bankingbanner.webp"}
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
        <section
          className="container page-section container mt-5 mb-5"
          id="Overview"
        >
          <div className="mini-block-statement w-clearfix">
            <h3 className="heading-34">NYSTAI’S Banking Solution  </h3>
            <p className="text-block-60">
              NYSTAI delivers comprehensive solutions tailored for the banking
              sector, addressing security, efficiency, and operational
              challenges. With advanced surveillance systems, automated
              processes, and digital management tools, we empower banks to
              enhance safety, streamline operations, and improve customer
              experiences. NYSTAI’s innovations help financial institutions
              build trust, reduce risks, and adapt to the evolving needs of the
              industry.
            </p>
          </div>

          <div className="card-wrapper card-deck-custom row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
              <div className="card">
                <center>
                  <AsyncImage
                    className="card-img-top"
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (1).webp"
                    }
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Unmatched Security</h4>
                  <p className="card-text">
                    Advanced surveillance and monitoring systems to safeguard
                    bank premises and customer data.
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
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (3).webp"
                    }
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Operational Excellence</h4>
                  <p className="card-text">
                    Streamlined processes and automated tools to enhance
                    productivity and compliance.{" "}
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
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (2).webp"
                    }
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Customer Focused</h4>
                  <p className="card-text">
                    Digital solutions designed to elevate the customer
                    experience with seamless and secure interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* small and medium */}
        <div className="container mt-5 mb-5" id="What we offer">
          <h3 className="mb-5">What We Offer ?</h3>

          <div className="mb-3">
            <AsyncImage
              src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/Banking images/1.webp"}
              className="img-fluid"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>

          <div className="mb-3">
            <AsyncImage
              src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/Banking images/3.webp"}
              className="img-fluid"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </div>

        <section className="five-cards-nys" id="Features">
          <div className="container five-cards-contents-nys">
            <div className="five-cards-heading-nys">
              <h1>Features</h1>
              <h3>Features provided by our Worship solution </h3>
            </div>

            <div
              class="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <div className="">
                      <AsyncImage
                        src={
                          "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banking5cardicon (2).webp"
                        }
                        className=""
                      />
                    </div>
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      Advanced Surveillance
                    </h5>
                    <p class="card-text" style={{ color: "#8c8c8c" }}>
                      Ensure 24/7 security with smart cameras, access control,
                      and real-time alerts. 
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <div className="">
                      <AsyncImage
                        src={
                          "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banking5cardicon (3).webp"
                        }
                        className=""
                      />
                    </div>
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      Digital Document Management
                    </h5>
                    <p class="card-text" style={{ color: "#8c8c8c" }}>
                      Simplify customer onboarding and regulatory compliance
                      with automated verification systems. 
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <div className="">
                      <AsyncImage
                        src={
                          "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banking5cardicon (4).webp"
                        }
                        className=""
                      />
                    </div>
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      Energy-Efficient Solutions
                    </h5>
                    <p class="card-text" style={{ color: "#8c8c8c" }}>
                      {" "}
                      Reduce costs with smart lighting and climate control
                      tailored for banking environments. 
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <div className="">
                      <AsyncImage
                        src={
                          "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banking5cardicon (5).webp"
                        }
                        className=""
                      />
                    </div>
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      Automated Teller Monitoring
                    </h5>
                    <p class="card-text" style={{ color: "#8c8c8c" }}>
                      {" "}
                      Monitor ATM performance, security, and cash flow with
                      advanced remote management tools. 
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <div className="">
                      <AsyncImage
                        src={
                          "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banking5cardicon (1).webp"
                        }
                        className=""
                      />
                    </div>
                    <h5
                      class="card-title"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bolder",
                        color: "#1b6763",
                      }}
                    >
                      Centralized Operations
                    </h5>
                    <p class="card-text" style={{ color: "#8c8c8c" }}>
                      {" "}
                      Manage branch activities, employee schedules, and customer
                      interactions through a unified digital platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main
          className="container page-section Product-display mb-5"
          id="Product display"
        >
          <div className="text-center">
            <h3 class="rrmc-article-desc-title mt-5 mb-5">PRODUCT DISPLAY</h3>
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
                      {/* Close Button */}
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
                        <div class="purchase-info ">
                          <Link to="/sensordet">
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

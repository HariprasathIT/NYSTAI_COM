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
import { Link } from "react-router-dom";

// icons
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

export default function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    [8].includes(product.category)
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

  return (
    <>
      <header className="placeholder-section">
        <div class=" card ">
          <AsyncImage
            className="card-img"
            src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/fidp.webp"}
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
            <Nav className="m-auto sub-nav-desktop-nys">
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
                  className={`menu-item-link ${activeSection === "where we use" ? "active" : ""}`}
                  onClick={() => handleScrollToSection("where we use")}
                >
                  where we use
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
        <section className="container page-section mt-5 " id="Overview">
          <div className="mini-block-statement w-clearfix">
            <h3 className="heading-34">
              Nystai’s Interactive Flat-Panel Display
              <br />
              (IFPD)
            </h3>
            <p className="text-block-60">
              NYSTAI's Interactive Flat-Panel Display (IFPD) offers an adaptable
              solution for educational institutions and industries. This
              versatile panel allows users to install their preferred devices
              and displays, ensuring a customized experience. Designed for
              seamless integration, the IFPD enhances interactive learning and
              workplace collaboration by providing a flexible platform that fits
              diverse needs. With its ultra-clear display and sleek design,
              NYSTAI's IFPD allows users to combine multiple tools into one,
              fostering more dynamic and engaging environments. Whether in a
              classroom or boardroom, the IFPD provides the foundation for
              smoother, more efficient interactions, revolutionizing both
              learning and business communication.
            </p>
          </div>

          <div className="card-wrapper card-deck-custom row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
              <div className="card">
                <center>
                  <AsyncImage
                    className="card-img-top"
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/education icon 1 (1).webp"
                    }
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Adaptability</h4>
                  <p className="card-text">Customizable for Any Environment</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
              <div className="card">
                <center>
                  <AsyncImage
                    className="card-img-top"
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/education icon 1 (2).webp"
                    }
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Synergy</h4>
                  <p className="card-text">
                    Seamless Collaboration and Interaction
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
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/education icon 1 (1).webp"
                    }
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Clarity</h4>
                  <p className="card-text">
                    Ultra-Clear Display for Engagement.
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
          <div className="sticky-card-wrapper">
            <div className="text-center mt-5 mb-2">
              <h3 class="rrmc-article-desc-title">What we offer </h3>
            </div>
            <div
              className="sticky-card sticky-card-1"
              style={{ borderRadius: "10px 10px 0px 10px", background: "#fff" }}
            >
              <div className="container">
                {/* Card 1 */}
                <center>
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/solu-education-banner-1.webp"
                    }
                    alt="sticky 1"
                    className="img-fluid w-100"
                    style={{ borderRadius: "10px 10px 0px 10px" }}
                  />
                </center>
                <div className="content-pic-nys mt-5">
                  <h3 style={{ color: "#151515" }} className="mb-3">
                    Challenges Without Interactive Flat-Panel Displays
                    (IFPD){" "}
                  </h3>
                  <p style={{ color: "#151515" }}>
                    In today’s fast-paced world, outdated collaboration tools
                    like chalkboards, projectors, and static whiteboards limit
                    engagement and efficiency. Educational institutions and
                    businesses struggle with interactive learning, dynamic
                    presentations, and effective information sharing. Without
                    modern tools, participants often disengage, and productivity
                    drops. The lack of real-time interactivity, high-quality
                    visuals, and seamless sharing capabilities leaves many
                    organizations unable to meet the demands of modern learning
                    and workplace collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="sticky-card sticky-card-2"
              style={{
                borderRadius: "10px 10px 0px 10px",
                background: "#151515",
                color: "white",
              }}
            >
              <div className="container">
                <center>
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/sticky-edu-2.webp"
                    }
                    alt="sticky 2"
                    className="img-fluid w-100"
                    style={{ borderRadius: "10px 10px 0px 10px" }}
                  />
                </center>
                <div className="content-pic-nys mt-5">
                  <h3 style={{ color: "#f5f5f5" }} className="mb-3">
                    Solving the Problem with Next-Generation Technology
                  </h3>
                  <p style={{ color: "#f5f5f5" }}>
                    The solution to these challenges is adopting modern
                    technology that supports real-time communication,
                    collaboration, and engagement. Interactive Flat-Panel
                    Displays empower educational institutions and businesses by
                    creating a more immersive, connected environment. Users can
                    interact directly with content, share ideas instantly, and
                    present in engaging ways. With features like multi-user
                    touch capabilities and wireless connectivity, these displays
                    enable faster, smoother collaboration, transforming learning
                    and meetings for the 21st century. This tech-driven approach
                    ensures a seamless transition to modern, efficient
                    communication and collaboration tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="sticky-card sticky-card-3 "
              style={{ borderRadius: "10px 10px 0px 10px", background: "#fff" }}
            >
              <div className="container">
                <center>
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/sticky-edu-3.webp"
                    }
                    alt="sticky 3"
                    className="img-fluid w-100"
                    style={{ borderRadius: "10px 10px 0px 10px" }}
                  />
                </center>
                <div className="content-pic-nys mt-5">
                  <h3 style={{ color: "#151515" }} className="mb-3">
                    How NYSTAI’s IFPD Address Educational and Industry
                    Challenges{" "}
                  </h3>
                  <p style={{ color: "#151515" }}>
                    NYSTAI’s Interactive Flat-Panel Displays offer a flexible
                    foundation for customized device installations. Whether for
                    educational purposes or industry meetings, the IFPD adapts
                    to specific needs. Users can integrate their preferred tools
                    and displays, transforming the IFPD into an efficient,
                    intuitive hub for interactive presentations and lessons.
                    With real-time content sharing and multi-device
                    compatibility, the IFPD enables dynamic collaboration and
                    creates more efficient, engaging environments in both
                    education and business sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page-section Features-education container mt-5 mb-5"
          id="Features"
        >
          <div className="text-center mb-5">
            <h3 class="rrmc-article-desc-title">Features</h3>
            <p class="rrmc-article-desc-intro">
              Features provided by our Interactive Flat-Panel Display
              (IFPD){" "}
            </p>
          </div>
          <div class="">
            <section class="one clearfix">
              <div class="left">
                <div class="right-child p-0">
                  <p>Key Features</p>
                  <h4>
                    Features provided by our <br />
                    Interactive Flat Panel Display
                    <br />
                    (IFPD)
                  </h4>
                </div>
              </div>

              <div class="right p-4">
                <div>
                  <p className="section-title">01. Adaptable Platform</p>
                  <div className="TIME-SOLU-EDU">
                    <p>
                      NYSTAI's IFPD allows users to install their own devices
                      and displays, offering a customizable solution for various
                      needs.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="section-title">02. Seamless Integration</p>
                  <div className="TIME-SOLU-EDU">
                    <p>
                      Provides a flexible foundation for both education and
                      industry, supporting dynamic learning and efficient
                      meetings.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="section-title">03. Ultra-Clear Display</p>
                  <div className="TIME-SOLU-EDU">
                    <p>
                      Enhances engagement and collaboration with a visually
                      stunning display
                    </p>
                  </div>
                </div>

                <div>
                  <p className="section-title">04. Real-Time Content Sharing</p>
                  <div className="TIME-SOLU-EDU">
                    <p>
                      Enables interactive communication with multi-touch
                      capabilities and device integration.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="section-title">05. Versatile Use</p>
                  <div className="TIME-SOLU-EDU">
                    <p>
                      Suitable for classrooms, boardrooms, and beyond,
                      transforming spaces into dynamic, collaborative
                      environments.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="page-section" id="where we use">
          <div className="text-center mb-5">
            <h3 class="rrmc-article-desc-title">WHERE WE USE</h3>
            <p class="rrmc-article-desc-intro">
              NYSTAI's IFPD enhances learning in schools, fosters collaboration
              in colleges, and facilitates <br /> efficient meetings in
              industries through seamless device integration.
            </p>
          </div>

          <div className="container mt-4 mb-3">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <AsyncImage
                  src={
                    "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/divide-div-edu 1 (1).webp"
                  }
                  className="img-fluid w-100"
                  style={{ borderRadius: "15px 15px 0px 15px" }}
                />
                <div className="pt-3 card-para-nys">
                  <p>College Classroom</p>
                </div>
                <AsyncImage
                  src={
                    "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/divide-div-edu 1 (3).webp"
                  }
                  className="img-fluid w-100"
                  style={{ borderRadius: "15px 15px 0px 15px" }}
                />
                <div className="pt-3 card-para-nys">
                  <p>Industry board room</p>
                </div>
              </div>
              <div className="col-lg-8">
                <AsyncImage
                  src={
                    "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/divide-div-edu 1 (2).webp"
                  }
                  className="img-fluid w-100"
                  style={{ borderRadius: "15px 15px 0px 15px" }}
                />
                <div className="pt-3 card-para-nys">
                  <p>School Classroom</p>
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
                          <Link to="/ditdet">
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

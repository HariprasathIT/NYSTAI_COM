import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import React, { useEffect, useState } from "react";
import "./edusolution.css";
import Footerproduct from "../A-LAYOUT/footer";
import { products } from "../C-PRODUCT LAYOUT/datass.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
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

export default function Retailcategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    [4].includes(product.category)
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

  // /////
  // document.querySelectorAll(".home-scroll_section").forEach((section) => {
  //     let childTriggers = section.querySelectorAll(".home-scroll_text-item");
  //     let childTargets = section.querySelectorAll(".home-scroll_img-item");

  //     // switch active class
  //     function makeItemActive(index) {
  //         childTriggers.forEach(trigger => trigger.classList.remove("is-active"));
  //         childTargets.forEach(target => target.classList.remove("is-active"));
  //         childTriggers[index].classList.add("is-active");
  //         childTargets[index].classList.add("is-active");
  //     }
  //     makeItemActive(0);

  //     // create triggers
  //     childTriggers.forEach((trigger, index) => {
  //         ScrollTrigger.create({
  //             trigger: trigger,
  //             start: "top center",
  //             end: "bottom center",
  //             onToggle: ({ isActive }) => {
  //                 if (isActive) {
  //                     makeItemActive(index);
  //                 }
  //             }
  //         });
  //     });
  // });

  const [hoveredIndex, setHoveredIndex] = useState(null);

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
            src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/retailbanner.webp"}
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
        <section className=" container page-section mt-5 mb-5" id="Overview">
          <div className="mini-block-statement w-clearfix">
            <h3 className="heading-34">Nystai’s Retail Business</h3>
            <p className="text-block-60">
              Retail businesses face challenges in managing operations, ensuring
              security, and optimizing efficiency. NYSTAI offers advanced
              electronic and security solutions tailored for retail
              environments. From smart surveillance to automated systems, our
              solutions enhance store management, reduce losses, and improve
              customer experiences, empowering retailers to focus on growth and
              satisfaction.
            </p>
          </div>

          <div className="card-wrapper card-deck-custom row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
              <div className="card">
                <center>
                  <AsyncImage
                    className="card-img-top"
                    src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/wareicon2.webp"}
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Security</h4>
                  <p className="card-text">
                    Advanced surveillance and access control systems ensure a
                    secure environment for worshippers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
              <div className="card">
                <center>
                  <AsyncImage
                    className="card-img-top"
                    src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/wareicon3.webp"}
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Efficiency</h4>
                  <p className="card-text">
                    Smart energy and crowd management solutions streamline
                    day-to-day operations.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
              <div className="card">
                <center>
                  <AsyncImage
                    className="card-img-top"
                    src={"/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/wareicon.webp"}
                    alt="Card image cap"
                  />
                </center>
                <div className="card-body">
                  <h4 className="card-title">Innovation</h4>
                  <p className="card-text">
                    Digital tools enhance communication, organization, and
                    engagement with the congregation.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACCORDION */}
        <div className="accordion-nys pt-5 pb-5" id="What we offer">
          <div className="container ">
            <div className="row">
              <div className="col-lg-6">
                <div className="col-lg-10">
                  <h3>What We Offer ?</h3>
                </div>
                {/* Heading */}
                <div className="accordion-heading-nys">
                  <h3>Smart Solutions for Retail Security and Efficiency !</h3>
                  <p>
                    NYSTAI’s AI-powered technology enhances security, prevents
                    theft, optimizes inventory, and streamlines operations,
                    ensuring a seamless shopping experience and improved
                    efficiency for retailers.
                  </p>
                </div>

                <div className="accordion-contents-nys">
                  <Accordion
                    defaultActiveKey="0"
                    flush
                    className="accordion-custom"
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        What Are the Problems Facing in Retail Segments?
                      </Accordion.Header>
                      <Accordion.Body>
                        Retailers encounter challenges like theft, inventory
                        mismanagement, and inefficient store operations. Lack of
                        real-time monitoring, poor customer flow management, and
                        security vulnerabilities lead to revenue loss.
                        Additionally, ensuring operational efficiency while
                        delivering seamless customer experiences remains a
                        significant concern for retail businesses in today’s
                        competitive market.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How to Solve the Problem?
                      </Accordion.Header>
                      <Accordion.Body>
                        Smart technology can transform retail operations by
                        enabling real-time monitoring, optimizing inventory, and
                        enhancing security. Automated systems, smart
                        surveillance, and AI-powered tools can improve
                        efficiency, reduce theft, and streamline operations.
                        These solutions help retailers maintain a secure,
                        well-organized environment, ensuring both customer
                        satisfaction and operational excellence.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        How NYSTAI Products Solve the Problem?
                      </Accordion.Header>
                      <Accordion.Body>
                        NYSTAI provides intelligent solutions, including smart
                        cameras, access controls, and inventory management
                        systems. Our AI-powered devices ensure real-time
                        surveillance, theft prevention, and streamlined
                        operations. With customizable features, our products
                        adapt to retail-specific needs, enabling seamless store
                        management, improved security, and an enhanced customer
                        experience—all in one integrated solution.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex justify-content-center pt-3 ">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/retail images/1.webp"
                    }
                    className="img-fluid bounce-img w=100 rounded-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="key-features-nys" id="Features">
          <div className="container key-features-fullcont-nys">
            <div className="row">
              <div className="col-lg-6 key-features-left-nys">
                <h3>
                  Features of
                  <br />{" "}
                  <span>
                    NYSTAI Solutions
                    <br /> for Retail{" "}
                  </span>
                </h3>
                <Link to="/camerdet">
                  <button className="col-lg-6 col-md-4 col-sm-3">
                    See More ??
                  </button>
                </Link>
              </div>
              <div className="col-lg-6 key-features-right-nys">
                <div
                  onMouseEnter={() => setHoveredIndex(0)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    opacity:
                      hoveredIndex === null || hoveredIndex === 0 ? 1 : 0.2,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <h6>Smart Surveillance</h6>
                </div>
                <div
                  onMouseEnter={() => setHoveredIndex(1)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    opacity:
                      hoveredIndex === null || hoveredIndex === 1 ? 1 : 0.2,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <h6>Energy Optimization</h6>
                </div>
                <div
                  onMouseEnter={() => setHoveredIndex(2)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    opacity:
                      hoveredIndex === null || hoveredIndex === 2 ? 1 : 0.2,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <h6>Customer Flow Management</h6>
                </div>
                <div
                  onMouseEnter={() => setHoveredIndex(3)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    opacity:
                      hoveredIndex === null || hoveredIndex === 3 ? 1 : 0.2,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <h6>Centralized Operations</h6>
                </div>
                <div
                  onMouseEnter={() => setHoveredIndex(4)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    opacity:
                      hoveredIndex === null || hoveredIndex === 4 ? 1 : 0.2,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <h6>Digital Inventory Tracking</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                          <Link to="/Camerdet">
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

import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import React, { useEffect, useState } from "react";
import "./protplan.css";
import { products } from "../C-PRODUCT LAYOUT/datass.js";
import Footerproduct from "../A-LAYOUT/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Blur } from "transitions-kit";

export default function Protectplan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    [2, 1].includes(product.category)
  );

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // public paths for images
  const servicesbanner = "/IMAGES-VIDEOS/D-IMG-PLAN-LAYOUT/protect-banner.webp";
  const protect1 = "/IMAGES-VIDEOS/D-IMG-PLAN-LAYOUT/protectplan-1 (1).webp";
  const protect2 = "/IMAGES-VIDEOS/D-IMG-PLAN-LAYOUT/protectplan-1 (3).webp";
  const protect3 = "/IMAGES-VIDEOS/D-IMG-PLAN-LAYOUT/protectplan-1 (2).webp";

  return (
    <>
      <body className="protectplan">
        <section className="ser-header-sec">
          <div className="card text-white">
            <AsyncImage
              className="card-img img-fluid"
              alt="Card image"
              src={servicesbanner}
              Transition={Blur}
              loader={
                <div
                  style={{ height: "60vh", width: "100%", background: "#888" }}
                />
              }
              style={{ height: "60vh", objectFit: "cover", width: "100%" }}
            />
            <div className="card-img-overlay container d-flex align-items-center justify-content-start">
              <div
                className="card-img-overlay-div p-3 p-md-5"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                }}
              >
                <h2 className="card-title fs-4 fs-md-2">
                  Additional services that provide <br /> reliable support when
                  you need it most.
                </h2>
                <p>
                  Enhance your security with professional monitoring and
                  emergency response services, <br />
                  available as an add-on to your eligible Nystai Protect Plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container ser-ourservices-sec">
          <div className="services-types-head">
            <p> Security Excellence</p>
            <h2>
              NYSTAI Protect Plan: Revolutionizing Security <br />
              and Efficiency Across Industries
            </h2>
          </div>

          <section className="container service-our-serv-card">
            <div className="card mb-3">
              <div className="row">
                <div className="col-md-4 p-0 d-flex justify-content-center align-items-center">
                  <AsyncImage
                    src={protect1}
                    className="img-fluid w-100"
                    alt="Specialized Safeguarding"
                  />
                </div>
                <div
                  className="col-md-8 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#f9f9f9" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      Comprehensive Protection Across Domains
                    </h5>
                    <p className="card-text">
                      NYSTAI’s Protect Plan offers robust, customizable
                      solutions for diverse domains like industries, hospitals,
                      VMS, and smart cities. With a focus on reliability,
                      innovation, and efficiency, the plan ensures uninterrupted
                      operations and enhanced security. Tailored to meet unique
                      needs, it empowers organizations to safeguard assets and
                      optimize performance effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="row">
                <div className="col-md-4 p-0 d-flex justify-content-center align-items-center order-first order-md-last">
                  <AsyncImage
                    src={protect2}
                    className="img-fluid w-100"
                    alt="Advanced Features"
                  />
                </div>
                <div
                  className="col-md-8 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#f9f9f9" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      Advanced Features for Seamless Operations
                    </h5>
                    <p className="card-text">
                      From AI-powered monitoring to 24/7 system alerts, the
                      Protect Plan delivers proactive diagnostics and smart
                      energy optimization. With comprehensive video history,
                      customizable access controls, and professional-grade
                      emergency response, NYSTAI ensures users have complete
                      control and peace of mind, making daily operations
                      smoother, smarter, and more secure than ever.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="row">
                <div className="col-md-4 p-0 d-flex justify-content-center align-items-center">
                  <AsyncImage
                    src={protect3}
                    className="img-fluid w-100"
                    alt="Commitment to Excellence"
                  />
                </div>
                <div
                  className="col-md-8 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#f9f9f9" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      Commitment to Excellence and Support
                    </h5>
                    <p className="card-text">
                      NYSTAI is dedicated to providing unparalleled customer
                      service with expert support available anytime. By
                      combining advanced technology with user-centric
                      customization, the Protect Plan strengthens reliability
                      and operational excellence. Whether for small businesses
                      or large enterprises, NYSTAI’s solutions guarantee
                      long-term value, ensuring your systems run seamlessly
                      while protecting what matters most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section>
          <section className="bgfpc">
            <div id="orange-sectionmain3">
              <div className="container">
                <h1 id="orange-section-title">
                  Our Integrated Video alarm linkage solution <br />
                  is perfect for the vigilant homeowner
                </h1>
              </div>
            </div>
          </section>
        </section>

        {/* PLAN COMPARISON */}
        <section className="mb-5 container pt-5">
          <div id="vehicle-details">
            <div className="proComparisionContainer">
              <h2
                className="mb-5 text-center"
                style={{
                  textTransform: "uppercase",
                  fontSize: "38px",
                  color: "#8c8c8c",
                  fontWeight: "bolder",
                }}
              >
                Review our
                <span style={{ color: "#1b6763" }}> Protect plans.</span>
              </h2>
              <div className="proComparisionTable">
                <table id="proComparisionTable" className="comparisionTable">
                  <tbody>
                    {/* Example row */}
                    <tr>
                      <th
                        className="proHeading"
                        style={{
                          fontSize: "17px",
                          fontWeight: "300",
                          borderRight: "1px solid #ddd",
                        }}
                      >
                        PRICE
                      </th>
                      <td>
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ fontSize: "18px", color: "#1b6763" }}
                        />
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ fontSize: "18px", color: "#1b6763" }}
                        />
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ fontSize: "18px", color: "#1b6763" }}
                        />
                      </td>
                    </tr>
                    {/* Add all other rows similarly */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 build-ur-systems-nys">
          <div className="container text-center">
            <h2 style={{ textTransform: "uppercase" }}>Build your Plans</h2>
            <p>Find the ideal setup for your entire home.</p>
            <Link to="/SUPPORT">
              {" "}
              <button className="btn btn-outline-secondary">Contact Us</button>
            </Link>
          </div>
        </section>

        <Footerproduct />
      </body>
    </>
  );
}

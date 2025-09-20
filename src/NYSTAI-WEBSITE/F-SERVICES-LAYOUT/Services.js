import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import React, { useEffect, useRef } from "react";
import "./services.css";
import Faqs from "../G-SUPPORT LAYOUT/faqs";
import Footerproduct from "../A-LAYOUT/footer";
import { Link } from "react-router-dom";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <body className="services-body ">
        <section className="ser-header-sec">
          <div className="card text-white">
            <AsyncImage
              style={{ height: "60vh", objectFit: "cover", width: "100%" }}
              src={"/IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/services-banner.webp"}
              alt="Card image"
            />
            <div className="container card-img-overlay d-flex justify-content-end">
              <div className="card-img-overlay-div">
                <h2 className="">
                  We Provide a wide range <br /> of services
                </h2>
                <p className="">
                  including smart solutions, engineering, and manufacturing.
                </p>
                <Link to="/nystai-support">
                  <button type="button" className="btn btn-secondary">
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="services-types-head text-center mt-5 mb-5">
          <h2>How We Work</h2>
          <p>
            {" "}
            We deliver innovative, high-quality solutions with precision,
            on-time, and cost-effective.{" "}
          </p>
        </div>

        <section
          className="container-fluid py-5"
          style={{ backgroundColor: "#1b6763" }}
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card border-0 shadow-sm position-relative overflow-hidden">
                  <AsyncImage
                    src={"/IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/01.webp"}
                    className=""
                    alt="Customer-Centric Approach"
                  />
                  <div className="card-body bg-white position-absolute bottom-0 start-0 end-0 p-3 bg-opacity-75">
                    <h5 className="card-title text-dark fw-bold">
                      Customer Approach
                    </h5>
                    <p className="card-text text-muted mb-0">
                      Designing smart home solutions for customer needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card border-0 shadow-sm position-relative overflow-hidden">
                  <AsyncImage
                    src={"/IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/02.webp"}
                    className=""
                    alt="Precision Manufacturing"
                  />
                  <div className="card-body bg-white position-absolute bottom-0 start-0 end-0 p-3 bg-opacity-75">
                    <h5 className="card-title text-dark fw-bold">
                      Precision Manufacturing
                    </h5>
                    <p className="card-text text-muted mb-0">
                      Leveraging tech for superior, cutting-edge manufacturing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card border-0 shadow-sm position-relative overflow-hidden">
                  <AsyncImage
                    src={"/IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/03.webp"}
                    className=""
                    alt="Timely Delivery & Support"
                  />
                  <div className="card-body bg-white position-absolute bottom-0 start-0 end-0 p-3 bg-opacity-75">
                    <h5 className="card-title text-dark fw-bold">
                      Timely Delivery & Support
                    </h5>
                    <p className="card-text text-muted mb-0">
                      Prioritizing satisfaction through timely, exceptional
                      service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container ser-ourservices-sec">
          <div className="services-types-head">
            <p> Our Services</p>
            <h2>
              {" "}
              Innovative Smart solutions, Precision engineering, Quality
              manufacturing, <br /> Reliable delivery, Customer satisfaction.
            </h2>
          </div>

          <section className="container service-our-serv-card">
            <div className="card mb-3">
              <div className="row">
                <div className="col-md-4 p-0 d-flex justify-content-center align-items-center">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/D-IMG-PLAN-LAYOUT/protectplan-1 (1).webp"
                    }
                    className="img-fluid w-100"
                    alt="Specialized Safeguarding"
                  />
                </div>
                <div
                  className="col-md-8 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#f9f9f9" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Specialized Safeguarding</h5>
                    <p className="card-text">
                      Specialized Safeguarding At Nystai, our Specialized
                      Safeguarding services provide tailored security solutions
                      designed to address the unique risks and challenges faced
                      by your organization. Through expert assessments and
                      customized strategies, we ensure the protection of your
                      assets, personnel, and sensitive information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="row">
                {/* Image first on mobile, last on larger screens */}
                <div className="col-md-4 p-0 d-flex justify-content-center align-items-center order-first order-md-last">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/D-IMG-PLAN-LAYOUT/protectplan-1 (3).webp"
                    }
                    className="img-fluid w-100"
                    alt="Deployment Services"
                  />
                </div>
                {/* Text content */}
                <div
                  className="col-md-8 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#f9f9f9" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Deployment Services</h5>
                    <p className="card-text">
                      At Nystai, our Deployment Services focus on the seamless
                      implementation of systems, technologies, and solutions
                      tailored to your organization’s needs. From initial setup
                      to full operational integration, we ensure smooth
                      transitions and optimal performance, minimizing downtime
                      and maximizing efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <div
          className="mobile-core-sec py-5"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="text-center mb-4">
            <h3 className="fw-bold text-dark">Our Core Values</h3>
          </div>
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="badge rounded-circle text-white me-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "#1b6763",
                          alignItems: "center",
                          fontSize: "18px",
                        }}
                      >
                        1
                      </div>
                      <h5 className="card-title text-dark mb-0">Quality</h5>
                    </div>
                    <p className="card-text text-muted">
                      We prioritize delivering products and services that meet
                      the highest standards of excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="badge rounded-circle text-white me-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "#1b6763",
                          alignItems: "center",
                          fontSize: "18px",
                        }}
                      >
                        2
                      </div>
                      <h5 className="card-title text-dark mb-0">Innovation</h5>
                    </div>
                    <p className="card-text text-muted">
                      We embrace cutting-edge technology and creative solutions
                      to stay ahead in the industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="badge rounded-circle text-white me-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "#1b6763",
                          alignItems: "center",
                          fontSize: "18px",
                        }}
                      >
                        3
                      </div>
                      <h5 className="card-title text-dark mb-0">Reliability</h5>
                    </div>
                    <p className="card-text text-muted">
                      Our solutions are built to perform consistently, ensuring
                      long-lasting results and trust.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="badge rounded-circle text-white me-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "#1b6763",
                          alignItems: "center",
                          fontSize: "18px",
                        }}
                      >
                        4
                      </div>
                      <h5 className="card-title text-dark mb-0">
                        Customer Satisfaction
                      </h5>
                    </div>
                    <p className="card-text text-muted">
                      We are committed to exceeding customer expectations with
                      every product and service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-5 mb-5">
          <Faqs />
        </section>
      </body>
      <Footerproduct />
    </>
  );
}

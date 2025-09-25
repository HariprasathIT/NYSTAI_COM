import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import React, { useEffect } from "react";
import "./A-detailspage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faCompass,
  faHeadset,
  faMicrochip,
  faPeopleArrows,
  faServer,
  faShieldVirus,
} from "@fortawesome/free-solid-svg-icons";
import Footerproduct from "../A-LAYOUT/footer";

export default function Hybriddetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <body className="design1details">
        <div class="video-background-holder">
          <div class="video-background-overlay"></div>
          <AsyncImage
            src={"/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HYBRID-NVR/Banner.webp"}
            className="img-fluid w-100"
            alt="Banner Image"
          />
        </div>

        <div class="flex-container-nystai-scroll">
          <div class="slider-container container p-0">
            <ul class="slider">
              <li class="slider__slide">
                <div class="slide__content">
                  {" "}
                  <FontAwesomeIcon
                    icon={faMicrochip}
                    className="me-3"
                    style={{ fontSize: "3vh", color: "#00aaff" }}
                  />
                  TECHNOLOGIES
                </div>
              </li>
              <li class="slider__slide">
                <div class="slide__content">
                  {" "}
                  <FontAwesomeIcon
                    icon={faPeopleArrows}
                    className="me-3"
                    style={{ fontSize: "3vh", color: "#ff6600" }}
                  />
                  INTEGRATED SOLUTIONS
                </div>
              </li>
              <li class="slider__slide">
                <div class="slide__content">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCompass}
                    className="me-3"
                    style={{ fontSize: "3vh", color: "#28a745" }}
                  />
                  PRODUCT
                </div>
              </li>
              <li class="slider__slide">
                <div class="slide__content">
                  <FontAwesomeIcon
                    icon={faShieldVirus}
                    className="me-3"
                    style={{ fontSize: "3vh", color: "#ff0000" }}
                  />
                  PROTECT PLAN
                </div>
              </li>
              <li class="slider__slide">
                <div class="slide__content">
                  {" "}
                  <FontAwesomeIcon
                    icon={faServer}
                    className="me-3"
                    style={{ fontSize: "3vh", color: "#6c757d" }}
                  />
                  SERVICES
                </div>
              </li>
              <li class="slider__slide">
                <div class="slide__content">
                  {" "}
                  <FontAwesomeIcon
                    icon={faHeadset}
                    className="me-3"
                    style={{ fontSize: "3vh", color: "#007bff" }}
                  />
                  SUPPORT
                </div>
              </li>
              <li class="slider__slide">
                <div class="slide__content">
                  {" "}
                  <FontAwesomeIcon
                    icon={faBlog}
                    className="me-3"
                    style={{ fontSize: "3vh", color: "#6610f2" }}
                  />
                  BLOGS
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="common-top-div">
          <h6 className="head-h-divtopic">
            <span style={{ color: "#1b6763" }}>HYBRID</span> AI-IoT NVR
          </h6>
          <h6 className="sechead-h-divtop" style={{ color: "#8c8c8c" }}>
            AI-powered surveillance, video storage, alarms, access control, fire
            safety, intercom.
          </h6>
        </div>

        {/* LEFT RIGHT CARDS */}
        <section className="container-fluid parallal-text-card-nys">
          <div className="container">
            <div className="text-img-nys">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 col-sm-12"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="text-left-nys">
                    <div className="parallal-text-card-heading-nys">
                      <h2>
                        <span>Smart video storage</span>&nbsp;AI powered
                        surveillance{" "}
                      </h2>
                    </div>
                    <h6>
                      The NYSTAI AI-IoT Hybrid NVR combines NVR and alarm
                      functionality into an affordable, integrated security
                      system. It supports video surveillance, AI video analysis,
                      intercom, one-click alarms, access control, attendance,
                      fire alarms, and more, with applications spanning
                      security, fire safety, and digital classrooms.
                    </h6>
                  </div>
                </div>
                <div
                  className="col-lg-6 img-right-nys"
                  style={{ marginTop: "17px" }}
                >
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HYBRID-NVR/NVR features-resized.webp"
                    }
                    className="img-fluid w-100 rounded-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 mb-5 container key-features-products-section-nys">
          <div className="key-features-products-nys">
            <div className="mb-5">
              <h3 className="head-h-divtopic" style={{ textAlign: "center" }}>
                KEY FEATURES
              </h3>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title"> Intelligent Analysis</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Facial Recognition</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Video Analytics</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title"> Wireless Sensors</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title"> Customized Linkage</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title"> 4K Ultra HD Support</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <center>
                <div className="col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Remote Access & Control</h5>
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </section>

        <section className="mt-4 mb-5">
          <div>
            <h5 className="head-h-divtopic text-center mb-5">
              ADAPTABLE SCENARIO
            </h5>
          </div>
          <div className="container">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Bank.webp"
                    }
                    className=""
                    alt="..."
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-lg-2">
                    <h5 className="" style={{ color: "#1b6763" }}>
                      Office
                    </h5>
                  </div>
                  <div className="col-lg-10">
                    <hr />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Jewelry.webp"
                    }
                    className=""
                    alt="..."
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-lg-3">
                    <h5 className="" style={{ color: "#1b6763" }}>
                      Jewellery Shop
                    </h5>
                  </div>
                  <div className="col-lg-9">
                    <hr />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Church.webp"
                    }
                    className=""
                    alt="..."
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-lg-2">
                    <h5 className="" style={{ color: "#1b6763" }}>
                      Church
                    </h5>
                  </div>
                  <div className="col-lg-10">
                    <hr />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/House.webp"
                    }
                    className=""
                    alt="..."
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-lg-2">
                    <h5 className="" style={{ color: "#1b6763" }}>
                      House
                    </h5>
                  </div>
                  <div className="col-lg-10">
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footerproduct />
      </body>
    </>
  );
}

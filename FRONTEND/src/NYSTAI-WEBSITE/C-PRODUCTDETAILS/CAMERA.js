import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import React, { useEffect } from "react";
import "./A-detailspage.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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

export default function Cameradet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <body className="design1details">
        <section>
          <div class="video-background-holder">
            <div class="video-background-overlay"></div>
            <AsyncImage
              src={
                "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/DETAILS (3).webp"
              }
              className="img-fluid w-100"
              alt="Banner Image"
            />
          </div>
        </section>

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

        {/* 4 CARDS PARALLEL */}
        <section className="container four-cards-parallal-section-cards-nys ">
          <div className="common-top-div">
            <h6 className="head-h-divtopic">
              <span style={{ color: "#1b6763" }}>CAMERA</span>
            </h6>
            <h6 className="sechead-h-divtop">
              AI detection, real-time alerts, night vision, wireless, PTZ, and
              more.
            </h6>
          </div>

          <div className="four-cards-parallal-main-cards mt-3">
            <div className="row ">
              <div className="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">AI-Powered Cameras: </h5>
                    <p class="card-text">
                      AI-powered cameras offer motion detection, real-time
                      alerts, and intelligent analysis, providing smart,
                      reliable security for indoor and outdoor environments.
                    </p>
                  </div>
                  <div>
                    <AsyncImage
                      src={
                        "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/CAMERA-CATEGORY-IMAGES/AI-Powered-Cameras.webp"
                      }
                      className="Parallal-img-nys w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6" style={{ marginTop: "8%" }}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Specialized Cameras: </h5>
                    <p class="card-text">
                      Specialized cameras offer wide-angle coverage, infrared
                      vision, and solar power, providing advanced security for
                      residential and commercial spaces.{" "}
                    </p>
                  </div>
                  <div>
                    <AsyncImage
                      src={
                        "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/CAMERA-CATEGORY-IMAGES/Specialized-cameras.webp"
                      }
                      className="Parallal-img-nys w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row " style={{ marginTop: "-6.5%" }}>
              <div className="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Outdoor & Wireless Cameras: </h5>
                    <p class="card-text">
                      Outdoor and wireless cameras provide flexible,
                      weather-resistant surveillance for remote areas, offering
                      reliable performance without complicated wiring.{" "}
                    </p>
                  </div>
                  <div>
                    <AsyncImage
                      src={
                        "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/CAMERA-CATEGORY-IMAGES/Outdoor-and-wireless-cameras.webp"
                      }
                      className="Parallal-img-nys w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6" style={{ marginTop: "8%" }}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Pan-Tilt-Zoom (PTZ) Cameras: </h5>
                    <p class="card-text">
                      PTZ cameras offer flexible coverage with pan, tilt, and
                      zoom features, ideal for large properties and sensitive
                      zones.{" "}
                    </p>
                  </div>
                  <div>
                    <AsyncImage
                      src={
                        "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/CAMERA-CATEGORY-IMAGES/Pan-tilt-zoom-cameras.webp"
                      }
                      className="Parallal-img-nys w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "-6.5%" }}>
              <div className="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Battery-Powered Cameras: </h5>
                    <p class="card-text">
                      Battery-powered cameras offer wireless, flexible security
                      solutions with motion detection, ideal for indoor and
                      outdoor use in remote areas.{" "}
                    </p>
                  </div>
                  <div>
                    <AsyncImage
                      src={
                        "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/CAMERA-CATEGORY-IMAGES/Battery-powered-cameras.webp"
                      }
                      className="Parallal-img-nys w-100"
                    />
                  </div>
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
                    <h5 class="card-title">AI-Powered Video Analytics</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">High-Resolution Imaging</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Low-Light & Night Vision</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Wide Dynamic Range (WDR)</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Weatherproof & Durable</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Wireless & PoE Support</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <center>
                <div className="col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Seamless NVR & IoT Integration</h5>
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </section>

        <section className="mt-5 mb-5">
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
                      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Farmhouse.webp"
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

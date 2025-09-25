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

export default function Electricdet() {
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
                "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/Electric-Fence-banner.webp"
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

        <section className="container four-cards-parallal-section-cards-nys ">
          <div className="common-top-div">
            <h6 className="head-h-divtopic">
              <span style={{ color: "#1b6763" }}>ELECTRIC</span> FENCE
            </h6>
            <h6 className="sechead-h-divtop">
              Reliable deterrence, safe enclosure, intrusion detection, robust
              perimeter protection.
            </h6>
          </div>
        </section>

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
                        <span>Secure your perimeter with cutting-edge </span>
                        electric fence solutions.
                      </h2>
                    </div>
                    <h6>
                      The "ELECTRIC FENCE" category provides advanced perimeter
                      security solutions, including high-voltage electric
                      fencing systems designed for warehouses, industrial sites,
                      and high-risk areas. With real-time alerts, enhanced
                      visibility, and robust deterrence features, this electric
                      fence ensures maximum protection against unauthorized
                      access and trespassing. Ideal for safeguarding sensitive
                      areas, it offers environmental monitoring and seamless
                      integration with existing security systems to enhance
                      operational safety and security.
                    </h6>
                  </div>
                </div>
                <div
                  className="col-lg-6 img-right-nys"
                  style={{ marginTop: "17px" }}
                >
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/ELEFENCE-CATEGORY-IMAGES/Electric-fence.webp"
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
                    <h5 class="card-title">High Voltage Shock</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Remote Monitoring & Control</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Real-Time Alerts</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Durable & Weather-Resistant</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Power Efficiency</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Customizable Zoning</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <center>
                <div className="col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">
                        Integration with Security Systems
                      </h5>
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
                      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Farmhouse.webp"
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
                      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Isolated-Area.webp"
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
            </div>
          </div>
        </section>

        <Footerproduct />
      </body>
    </>
  );
}

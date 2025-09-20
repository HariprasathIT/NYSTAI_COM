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

export default function Ioedet() {
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
                "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/IOE-Communiation-Banner.jpg"
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
              <span style={{ color: "#1b6763" }}>IOE </span>
            </h6>
            <h6 className="sechead-h-divtop" style={{ color: "#8c8c8c" }}>
              Efficient data transfer, real-time communication, IoT integration,
              reliable performance.
            </h6>
          </div>

          <div className="four-cards-parallal-main-cards mt-3">
            <div className="row ">
              <div className="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Door & Window Sensors</h5>
                    <p class="card-text">
                      Door and window sensors detect unauthorized entry,
                      providing reliable, wireless security with easy
                      installation for homes and businesses.
                    </p>
                  </div>
                  <div>
                    <AsyncImage
                      src={
                        "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/prod-cate-img-1.webp"
                      }
                      className="Parallal-img-nys w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6" style={{ marginTop: "8%" }}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Gas & Environmental Sensors </h5>
                    <p class="card-text">
                      Gas and environmental sensors detect hazards like leaks
                      and smoke, providing early warnings to ensure safety and
                      prevent damage. 
                    </p>
                  </div>
                  <div>
                    <AsyncImage
                      src={
                        "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/prod-cate-img-2.webp"
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
                    <h5 class="card-title"> Perimeter & Beam Sensors </h5>
                    <p class="card-text">
                      Perimeter and beam sensors enhance security by monitoring
                      boundaries with infrared beams, detecting movement and
                      intrusions in large areas.
                    </p>
                  </div>
                  <div>
                    <AsyncImage
                      src={
                        "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/prod-cate-img-3.webp"
                      }
                      className="Parallal-img-nys w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6" style={{ marginTop: "8%" }}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Motion & Radar Sensors</h5>
                    <p class="card-text">
                      Motion and radar sensors detect movement, providing
                      real-time alerts for continuous security in indoor and
                      outdoor environments. 
                    </p>
                  </div>
                  <div>
                    <AsyncImage
                      src={
                        "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/prod-cate-img-4.webp"
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
                    <h5 class="card-title">Specialized Sensors: </h5>
                    <p class="card-text">
                      Specialized sensors offer tailored security solutions,
                      including rolling shutter sensors, for precise protection
                      in various environments. 
                    </p>
                  </div>
                  <div>
                    <AsyncImage
                      src={
                        "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/prod-cate-img-5.webp"
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
                    <h5 class="card-title">Cloud storage</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Full HD video</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">In built device alarm</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Motion senstivity control</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Perimeter Alarm</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Person detection</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <center>
                <div className="col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Record live</h5>
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
                      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Apartments.webp"
                    }
                    className=""
                    alt="..."
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-lg-2">
                    <h5 className="" style={{ color: "#1b6763" }}>
                      Apartments
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
                      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Gated-Communities.webp"
                    }
                    className=""
                    alt="..."
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-lg-1">
                    <h5 className="" style={{ color: "#1b6763" }}>
                      Villas
                    </h5>
                  </div>
                  <div className="col-lg-11">
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

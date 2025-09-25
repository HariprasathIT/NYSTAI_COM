import AsyncImage from "react-async-image";
import React, { useEffect } from "react";
import "./blogsnys.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Footerproduct from "../A-LAYOUT/footer";

export default function Nystaiblogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <body className="Blogs-body-nys">
        {/* Banner img */}
        <section className="blogs-banner-nys">
          <AsyncImage
            src={"/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/blog-img-1.webp"}
            className="img-fluid w-100"
          />
        </section>

        {/*Single big card */}
        <section
          className="caro-cards-nys container"
          style={{ cursor: "pointer" }}
        >
          <div className="caro-cards-heading-nys">
            <h3>
              NYSTAI <span style={{ color: "#1b6763" }}>BLOGS</span>
            </h3>
            <p>Your blog category</p>
          </div>

          <div className="caro-main-cards-nys">
            <div className="card p-3">
              <div className="row g-0">
                <div className="col-md-7 card-left-contents-nys">
                  <div className="image-wrapper">
                    <AsyncImage
                      src={
                        "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/green-innovation-in-commercial-displays-banner 1.webp"
                      }
                      title="green-innovation-in-commercial"
                      className="img-fluid rounded-start w-100 card-image"
                      alt="green innovation in commercial"
                    />
                  </div>
                </div>
                <div className="col-md-5 card-right-contents-nys">
                  <div className="card-body">
                    <h5 className="card-title">
                      Logistics Management Harnessing the power of open and
                      collaborative systems
                    </h5>
                    <p className="card-text">March 13, 2025</p>
                    <p className="card-text2">Topic: Nystai AI-IoT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel card */}
        <section className="carousel-cards-nys container">
          <div className="carousel-cards-main-nys">
            <h3>
              NYSTAI <span style={{ color: "#1b6763" }}>BLOGS</span>
            </h3>
            <p>Your blog category</p>
          </div>

          <div className="carousel-cards-contents-nys">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div class="card ">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/logistics-management-&-hikvision-white-paper 1.webp"
                    }
                    className=" p-3"
                    alt="..."
                  />
                  <div class="card-body ">
                    <h5 class="card-title" style={{ fontSize: "1.35rem" }}>
                      Non-visible light technologies in security:
                    </h5>
                    <p class="card-text">March 13, 2025</p>
                    <p style={{ color: "#8c8c8c" }}>
                      Topic :{" "}
                      <span style={{ color: "#1b6763" }}>Nystai AI-IoT</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div class="card ">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/non-visible-light-technologies-in-security-1280x444 1.webp"
                    }
                    className=" p-3"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontSize: "1.35rem" }}>
                      Exploring the ancient town of Dukezong:
                    </h5>
                    <p class="card-text">March 13, 2025</p>
                    <p style={{ color: "#8c8c8c" }}>
                      Topic :{" "}
                      <span style={{ color: "#1b6763" }}>Nystai AI-IoT</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div class="card ">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/top-5-trends-for-the-aiot-industry-in-2025 1.webp"
                    }
                    className=" p-3"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontSize: "1.35rem" }}>
                      Top 5 trends for the AIoT industry in 2025:
                    </h5>
                    <p class="card-text">March 13, 2025</p>
                    <p style={{ color: "#8c8c8c" }}>
                      Topic :{" "}
                      <span style={{ color: "#1b6763" }}>Nystai AI-IoT</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="d-flex justify-content-evenly align-items-center "
                style={{ paddingTop: "2.5%" }}
              >
                <div className="col-lg-10">
                  <hr />
                </div>
                <div className="col-lg-2 ms-4">
                  <div className="d-flex justify-content-evenly">
                    <div className="left-right-arrow-nys">
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div className="left-right-arrow-nys">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* sticky cards */}
        <section className="bg-white">
          <div className="sticky-cards-nys container">
            {/* Sticky Cards Heading */}

            <div className="sticky-cards-heading-nys">
              <h3>
                NYSTAI <span style={{ color: "#1b6763" }}>BLOGS</span>
              </h3>
              <p>Your blog category</p>
            </div>

            {/* Sticky cards Contents */}

            <div className="sticky-cards-full-contents-nys">
              <div className="row">
                <div className="col-lg-8">
                  <div className="mb-4 sticky-cards-left-contents-nys">
                    <div class="card">
                      <AsyncImage
                        src={
                          "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/blog-img-1.webp"
                        }
                        className=" p-3"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Renting vs Buying IT Equipment: Why Renting Makes
                          Business Sense
                        </h5>
                        <p style={{ color: "#8c8c8c" }}>
                          Managing and maintaining IT equipment is a critical
                          challenge for businesses of all sizes. From laptops
                          and desktops to servers and projectors, purchasing IT
                          devices can require significant upfron
                        </p>
                      </div>
                    </div>
                    <div class="card mt-4">
                      <AsyncImage
                        src={
                          "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/green-innovation-in-commercial-displays-banner 1.webp"
                        }
                        className=" p-3"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Rent a Laptop for Commercial Use: Boost Savings and
                          Productivity with Get It Rent
                        </h5>
                        <p style={{ color: "#8c8c8c" }}>
                          modern business landscape, companies are constantly
                          seeking ways to remain competitive while managing
                          costs efficiently. Whether you’re a startup or a
                          growing enterprise, technology is crucia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 ">
                  <div class="card p-3 sticky-cards-right-contents-nys">
                    <div className="">
                      <h4
                        className=""
                        style={{ fontSize: "1.75rem", color: "#000" }}
                      >
                        FLASH <span style={{ color: "#1B6763" }}>NEWS</span>
                        <hr
                          style={{
                            backgroundColor: "#1b6763",
                            height: "4px",
                            width: "20%",
                            marginTop: "7px",
                          }}
                        />
                      </h4>
                    </div>

                    <div className="d-flex ">
                      <div className="col-lg-3 col-md-4 col-sm-4">
                        <AsyncImage
                          src={
                            "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/logistics-management-&-hikvision-white-paper 1.webp"
                          }
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-md-4 col-sm-4">
                        <div class="card-body ">
                          <h5
                            class="card-title"
                            style={{ fontSize: "1.20rem", color: "#8c8c8c" }}
                          >
                            5 Tips to Keep in Mind Before Renting IT Equip:
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex pt-3">
                      <div className="col-lg-3 col-md-4 col-sm-4">
                        <AsyncImage
                          src={
                            "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/non-visible-light-technologies-in-security-1280x444 1.webp"
                          }
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-md-4 col-sm-4">
                        <div class="card-body ">
                          <h5
                            class="card-title"
                            style={{ fontSize: "1.20rem", color: "#8c8c8c" }}
                          >
                            Streamline Operations, Reduce Expenses:
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex pt-3">
                      <div className="col-lg-3 col-md-4 col-sm-4">
                        <AsyncImage
                          src={
                            "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/top-5-trends-for-the-aiot-industry-in-2025 1.webp"
                          }
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-9 col-md-4 col-sm-4">
                        <div class="card-body ">
                          <h5
                            class="card-title"
                            style={{ fontSize: "1.20rem", color: "#8c8c8c" }}
                          >
                            Non-visible light technologies in security:
                          </h5>
                        </div>
                      </div>
                    </div>
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

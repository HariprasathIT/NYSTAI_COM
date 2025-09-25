import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import React from "react";
import "./support.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import Footer_product from "../A-LAYOUT/footer";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import HeadingForm from "./threeForm";

export default function Support() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openChatbot = () => {
    if (window.$zoho && window.$zoho.salesiq) {
      window.$zoho.salesiq.floatwindow.visible("show");
    }
  };

  return (
    <>
      <div className="ban-img">
        <h1 className="responsive-text">CONTACT US</h1>
      </div>

      <div className="row img-form container mx-auto">
        <div
          className="col-lg-6 col-md-12 col-sm-12 contact-right-support-nystai"
          style={{ marginTop: "30px" }}
        >
          <div style={{ marginBottom: "50px" }}>
            <div>
              <h6
                className="text-nav-topics-nystai pb-3"
                style={{ fontSize: "1.9rem" }}
              >
                GET IN TOUCH!
              </h6>
              <h1 style={{ marginTop: "30px" }}>
                {" "}
                <FontAwesomeIcon
                  icon={faMobile}
                  style={{ color: "#1d736f" }}
                  className="me-1 "
                />
                +91 81899 77700
              </h1>
            </div>
          </div>
          <div className="col-12" style={{ marginBottom: "50px" }}>
            <h6
              className="text-nav-topics-nystai pb-3"
              style={{ fontSize: "1.75rem" }}
            >
              CHAT WITH US
            </h6>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center parallel-opp-img">
                <a href="https://wa.me/+918189977700" target="_blank">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/F-IMG-SUPPORT-LAYOUT/subtract-668405adc24fa.webp"
                    }
                    className="whats-icon-support-nystai"
                    style={{
                      height: "10vh",
                      maxHeight: "80px",
                      width: "auto",
                      maxWidth: "100%",
                      cursor: "pointer",
                    }}
                    onClick={openChatbot}
                  />
                </a>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center ">
                <a href="https://wa.me/+918189977700" target="_blank">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/F-IMG-SUPPORT-LAYOUT/pngwingcom-668405ac87a41.webp"
                    }
                    className="whats-icon-support-nystai"
                    sstyle={{
                      height: "10vh",
                      maxHeight: "80px",
                      width: "auto",
                      maxWidth: "100%",
                      cursor: "pointer",
                    }}
                    onClick={openChatbot}
                  />
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <div>
              <a>
                <Link to="/faqs">
                  <AsyncImage
                    src={
                      "/IMAGES-VIDEOS/F-IMG-SUPPORT-LAYOUT/faq-668405a9687a6.webp"
                    }
                    className="whats-icon-support-nystai"
                    style={{
                      height: "10vh",
                      maxHeight: "80px",
                      width: "auto",
                      maxWidth: "100%",
                      cursor: "pointer",
                    }}
                    alt="nys-pro-image"
                  />
                </Link>
              </a>
            </div>
          </div>
        </div>
        <div className=" col-lg-6 col-md-12">
          <div style={{ marginTop: "30px" }}>
            <div>
              <h6
                className="text-nav-topics-nystai pb-3 text-center"
                style={{ fontSize: "1.9rem", textTransform: "uppercase" }}
              >
                prosperous future!
              </h6>
            </div>
          </div>
          <HeadingForm />
        </div>
      </div>

      <Footer_product />
    </>
  );
}

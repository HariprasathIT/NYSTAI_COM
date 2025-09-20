import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import React, { useRef, useEffect } from "react";
import "./navbar-layout.css";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import $ from "jquery";
import {
  faLinkedin,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBuildingColumns,
  faCarBurst,
  faCircleInfo,
  faHandshake,
  faAngleDown,
  faHouseSignal,
  faIndustry,
  faPlaceOfWorship,
  faSchool,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAngleDoubleUp,
  faMagnifyingGlass,
  faPersonWalkingLuggage,
  faPhone,
  faRightToBracket,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Layout = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  $(document).ready(function () {
    $(".navbar-light .dmenu").hover(
      function () {
        $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
      },
      function () {
        $(this).find(".sm-menu").first().stop(true, true).slideUp(105);
      }
    );
  });

  $(document).ready(function () {
    $(".megamenu").on("click", function (e) {
      e.stopPropagation();
    });
  });

  const [hovered, setHovered] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  function scrollTop() {
    if ($(window).scrollTop() > 200) {
      $(".backToTopBtn").addClass("active");
    } else {
      $(".backToTopBtn").removeClass("active");
    }
  }
  $(function () {
    scrollTop();
    $(window).on("scroll", scrollTop);

    $(".backToTopBtn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1);
      return false;
    });
  });

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const navbar = document.querySelector("#navbar-solution-nys-secnav ");
    if (navbar) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-800px";
      }
    }
  }

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
        closeDropdown1();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isOpen1, setIsOpen1] = useState(false);

  const closeDropdown1 = () => {
    setIsOpen1(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const closeDropdown2 = () => {
    setIsOpen2(false);
  };

  const [stickyNavVisible, setStickyNavVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setStickyNavVisible(true);
      } else {
        setStickyNavVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="body-nav">
        <div className=" col-12  mainnav-nystai ">
          <div className="logo-div-nystai col-lg-2 col-md-2">
            <Link to="nystai-home">
              {" "}
              <AsyncImage
                src="/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/nystai-main-logo.webp"
                className="img-fluid logo-nystai active"
                alt="NYSTAILOGO"
              />
            </Link>
          </div>
          <div className="col-lg-8 col-md-8 navdiv-nystai-main">
            <div className=" navdiv-nystai">
              <div className=" icon-number-div-nystai-main">
                <div className=" icon-number-div-nystai">
                  <div className="social-icon-nav-nystai">
                    <a
                      href="https://www.instagram.com/nystaiiot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "#1b6763" }}
                        className="icon-scocial-text-nystai"
                      />
                    </a>
                    <a
                      href="https://wa.me/+918189977700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{ color: "#1b6763" }}
                        className="icon-scocial-text-nystai"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nystai-iot-leading-aiot-security-solutions-a18a07339"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ color: "#1b6763" }}
                        className="icon-scocial-text-nystai"
                      />
                    </a>
                    <p>
                      <a href="http://www.youtube.com/@NYSTAI" target="-blank">
                        <FontAwesomeIcon
                          icon={faYoutube}
                          style={{ color: "#1b6763" }}
                          className="icon-scocial-text-nystai"
                        />
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" nav-topics-nystai-home" ref={dropdownRef}>
                <h6 class="text-nav-topics-nystai">
                  {" "}
                  <Link
                    to="nystai-product"
                    className={`text-nav-topics-nystai ${isActive("/nystai-product")}`}
                  >
                    PRODUCTS{" "}
                  </Link>
                </h6>
                <h6 class="text-nav-topics-nystai">
                  <div className="dropdown">
                    <a className="dropdown-trigger" onClick={toggleDropdown2}>
                      INTEGRATED SOLUTIONS
                      <span className={`arrow ms-2 ${isOpen2 ? "open" : ""}`}>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </span>
                    </a>
                    {isOpen2 && (
                      <>
                        <div
                          className="dropdown-content pt-3 pb-3"
                          onClick={closeDropdown2}
                        >
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faHouseSignal}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-home"
                              className={` ${isActive("/nystai-solution-education")}`}
                            >
                              SMARTHOME
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faIndustry}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-Industrial"
                              className={` ${isActive("/nystai-solution-education")}`}
                            >
                              INDUSTRIAL
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon icon={faSchool} className="me-3" />
                            <Link
                              to="nystai-solution-education"
                              className={` ${isActive("/nystai-solution-education")}`}
                            >
                              EDUCATION
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            {" "}
                            <FontAwesomeIcon
                              icon={faPlaceOfWorship}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-worship"
                              className={` ${isActive("nystai-solution-worship")}`}
                            >
                              WORSHIP
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faCarBurst}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-vms"
                              className={` ${isActive("/nystai-solution-vms")}`}
                            >
                              VMS
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faWarehouse}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-Warehouse"
                              className={` ${isActive("/nystai-solution-education")}`}
                            >
                              WAREHOUSE
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faIndustry}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-Hospital"
                              className={` ${isActive("/nystai-solution-Hospital")}`}
                            >
                              HOSPITAL
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faBuildingColumns}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-banking"
                              className={` ${isActive("/nystai-solution-banking")}`}
                            >
                              BANKING
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            {" "}
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-retail"
                              className={` ${isActive("/nystai-solution-retail")}`}
                            >
                              RETAIL
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faHandshake}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-parking"
                              className={` ${isActive("/nystai-solution-parking")}`}
                            >
                              PARKING IOT SOLUTION
                            </Link>
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </h6>
                <h6 className=" text-nav-topics-nystai">
                  <Link
                    to="nystai-PLAN"
                    className={`text-nav-topics-nystai ${isActive("/nystai-PLAN")}`}
                  >
                    PROTECT PLAN
                  </Link>
                </h6>
                <h6 className=" text-nav-topics-nystai">
                  <Link
                    to="nystai-SERVICE"
                    className={`text-nav-topics-nystai ${isActive("/nystai-SERVICE")}`}
                  >
                    SERVICE
                  </Link>
                </h6>
                <h6 className=" text-nav-topics-nystai">
                  <Link
                    to="nystai-support"
                    className={`text-nav-topics-nystai ${isActive("/nystai-support")}`}
                  >
                    SUPPORT
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 right-ssl-icon-nystai ">
            <div className="right-ssl-icon-nystai-number">
              <a
                href="https://wa.me/+918189977700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#000" }}
                  className="me-2"
                />
              </a>
              <a className="text-number-nystai" href="tel:+91 81899 77700">
                +91 81899 77700
              </a>
            </div>
          </div>
          <p>
            <button class="backToTopBtn">
              <FontAwesomeIcon icon={faAngleDoubleUp} className="icon-top" />
            </button>
          </p>
        </div>

        <section
          id="sticky_nav"
          style={{
            position: "fixed",
            top: stickyNavVisible ? "0" : "-150px",
            transition: "top 0.3s",
            padding: " 10px",
          }}
        >
          <div
            id="navbar-solution-nys-secnav"
            style={{ outline: "none", border: "none" }}
          >
            {/* Second Nav bar start*/}
            <nav class="container d-flex Second-Nav-bar-nys ">
              <div className="col-lg-2 Second-Nav-bar-logo-nys">
                <Link to="nystai-home">
                  <AsyncImage
                    src="/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/full-logo-nys.webp"
                    className="img-fluid"
                    alt="NYSLOGO"
                  />
                </Link>
              </div>
              <div
                className="col-lg-8 d-flex Second-Nav-bar-heading-nys"
                style={{ justifyContent: "space-around", alignItems: "center" }}
                ref={dropdownRef}
              >
                {/* <div className="d-flex" style={{ justifyContent: "space-around", alignItems: "center" }} ref={dropdownRef}> */}
                <h6 class="text-nav-topics-nystai">
                  {" "}
                  <Link
                    to="nystai-product"
                    className={`text-nav-topics-nystai ${isActive("/nystai-product")}`}
                  >
                    PRODUCTS{" "}
                  </Link>
                </h6>
                <h6 class="text-nav-topics-nystai">
                  <div className="dropdown">
                    <a className="dropdown-trigger" onClick={toggleDropdown}>
                      INTEGRATED SOLUTIONS
                      <span className={`arrow ms-2 ${isOpen ? "open" : ""}`}>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </span>
                    </a>
                    {isOpen && (
                      <>
                        <div
                          className="dropdown-content pt-3 pb-3"
                          onClick={closeDropdown}
                        >
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faHouseSignal}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-home"
                              className={` ${isActive("/nystai-solution-education")}`}
                            >
                              SMARTHOME
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faIndustry}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-Industrial"
                              className={` ${isActive("/nystai-solution-education")}`}
                            >
                              INDUSTRIAL
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon icon={faSchool} className="me-3" />
                            <Link
                              to="nystai-solution-education"
                              className={` ${isActive("/nystai-solution-education")}`}
                            >
                              EDUCATION
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            {" "}
                            <FontAwesomeIcon
                              icon={faPlaceOfWorship}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-worship"
                              className={` ${isActive("/nystai-solution-education")}`}
                            >
                              WORSHIP
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faCarBurst}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-vms"
                              className={` ${isActive("/nystai-solution-vms")}`}
                            >
                              VMS
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faWarehouse}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-Warehouse"
                              className={` ${isActive("/nystai-solution-education")}`}
                            >
                              WAREHOUSE
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>

                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faIndustry}
                              className="me-3"
                            />{" "}
                            <Link
                              to="nystai-solution-Hospital"
                              className={` ${isActive("/nystai-solution-Hospital")}`}
                            >
                              HOSPITAL
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faBuildingColumns}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-banking"
                              className={` ${isActive("/nystai-solution-banking")}`}
                            >
                              BANKING
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-retail"
                              className={` ${isActive("/nystai-solution-retail")}`}
                            >
                              RETAIL
                            </Link>
                          </a>
                          <div class="dropdown-divider ms-3 me-3"></div>
                          <a className="dropdown-content-a">
                            <FontAwesomeIcon
                              icon={faHandshake}
                              className="me-3"
                            />
                            <Link
                              to="nystai-solution-parking"
                              className={` ${isActive("/nystai-solution-parking")}`}
                            >
                              PARKING IOT SOLUTION
                            </Link>
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </h6>
                <h6 className=" text-nav-topics-nystai">
                  {" "}
                  <Link
                    to="nystai-PLAN"
                    className={`text-nav-topics-nystai ${isActive("/nystai-PLAN")}`}
                  >
                    PROTECT PLAN
                  </Link>
                </h6>
                <h6 className=" text-nav-topics-nystai">
                  {" "}
                  <Link
                    to="nystai-SERVICE"
                    className={`text-nav-topics-nystai ${isActive("/nystai-SERVICE")}`}
                  >
                    SERVICE
                  </Link>{" "}
                </h6>
                <h6 className=" text-nav-topics-nystai">
                  <Link
                    to="nystai-support"
                    className={`text-nav-topics-nystai ${isActive("/nystai-support")}`}
                  >
                    SUPPORT
                  </Link>
                </h6>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-3 d-flex justify-content-end align-items-center Second-Nav-bar-icon-nys">
                <FontAwesomeIcon icon={faPhone} className="me-1" />
                <a className="text-number-nystai" href="tel:+91 81899 77700">
                  +91 81899 77700
                </a>
              </div>
            </nav>
          </div>
        </section>
      </div>
      {/* second nav end */}

      {/* mobile navbar start */}
      <div className="nav-mobile-nystai sticky-top">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div>
              <Link to="/nystai-home">
                <AsyncImage
                  src="/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/full-logo-nys.webp"
                  className="img-fluid logo-nystai active"
                  alt="NYSTAILOGO"
                />
              </Link>
            </div>
            <div>
              <div
                id="myNav"
                className={`overlay-mobile-nav ${navOpen ? "open" : ""}`}
              >
                <p className="closebtn" onClick={closeNav}>
                  &times;
                </p>
                <div className="container overlay-content">
                  <p className="nav-link">
                    <Link to="/nystai-product" onClick={closeNav}>
                      PRODUCTS
                    </Link>
                  </p>
                  <p className="nav-link">
                    <Link to="/nystai-solution-home" onClick={closeNav}>
                      INTEGRATED SOLUTIONS
                    </Link>
                  </p>
                  <p className="nav-link">
                    <Link to="/nystai-PLAN" onClick={closeNav}>
                      PROTECT PLAN
                    </Link>
                  </p>
                  <p className="nav-link">
                    <Link to="/nystai-SERVICE" onClick={closeNav}>
                      SERVICE
                    </Link>
                  </p>
                  <p className="nav-link">
                    <Link to="/nystai-support" onClick={closeNav}>
                      SUPPORT
                    </Link>
                  </p>
                  <div className="">
                    <div className="right-ssl-icon-nystai-number">
                      <p
                        className="text-number-nystai"
                        href="tel:+91 81899 77700"
                      >
                        <FontAwesomeIcon
                          icon={faPhone}
                          style={{ color: "#1b6763", fontSize: "20px" }}
                          className="me-2"
                        />
                        +91 81899 77700
                      </p>
                    </div>
                    {/* <div className="d-flex">
                      <div className="div-2-icon">
                        <p>
                          <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-search ricon-text-nystai" style={{ cursor: "pointer" }} />
                        </p>
                      </div>
                      <p
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Sign in"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        data-tip="Sign In"
                      >
                        <FontAwesomeIcon
                          icon={hovered ? faPersonWalkingLuggage : faRightToBracket}
                          className="ricon-text-nystai"
                        />
                      </p>
                      <Tooltip id="my-tooltip" place="bottom" className="tooltip" />
                      <p>
                        <FontAwesomeIcon icon={faShoppingBasket} bounce className="ricon-text-nystai" />
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
              <span>
                <p onClick={openNav} className="close-mobileinav-icon mb-0">
                  Menu &#9776;
                </p>
              </span>
            </div>
          </div>
        </nav>
      </div>
      {/* mobile navbar end */}

      <Outlet />
    </>
  );
};

export default Layout;

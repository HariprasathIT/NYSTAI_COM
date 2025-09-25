import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import React, { useState, useEffect } from "react";
import "./shopingcardpro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingBasket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
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
import { Link, useLocation } from "react-router-dom";
import { categories } from "./datass";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "react-tooltip";
import Sample1 from "./HYBRIDAI-NVR";
import Camera from "./CAMERA";
import Alarmautomation from "./ALARM & AUTOMATION";
import SENSORS from "./SENSORS";
import Accesscontrol from "./ACCSESS.js";
import Indutrial from "./INDUSTRIALAI-NVR";
import SMARTSWITCH from "./SMART SWITCH";
import DIGITALCLASS from "./DIGITALCLASS.js";
import AIVMS from "./AI-VMS.js";
import WATER from "./WATER.js";
import FIRESAFETY from "./FIRESAFETY.js";
import ELECTRICFENCE from "./ELECTRIC FENCE";
import ACCESSORIES from "./ACCESSORIES.js";
import WAREHOUSE from "./WAREHOUSE.js";
import IOECOMMUNICATION from "./IOE.js";
import Drawer from "@mui/material/Drawer";
import Hotel from "./HOTEL.js";
import HOTEL from "./HOTEL.js";
import SIGNAGE from "./SIGNAGE.js";
import DRONES from "./DRONES.js";
import NETWORKING from "./NETWORKING.js";
import AUDIOVIDEO from "./AUDIO&VIDEO.js";

const AdminHub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSidebarHidden, setIsSidebarHidden] = useState(
    window.innerWidth < 768
  );
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setIsSidebarHidden(true);
      } else {
        setIsSidebarHidden(false);
      }
      if (window.innerWidth > 576) {
        setIsSearchFormVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get("category");
  const initialSubcategory = searchParams.get("subcategory");

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    if (initialSubcategory) {
      setSelectedSubcategory(initialSubcategory);
    }
  }, [initialCategory, initialSubcategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  const renderCategoryComponent = () => {
    switch (parseInt(selectedCategory)) {
      case 1:
        return <Sample1 />;
      case 2:
        return <Indutrial />;
      case 3:
        return <Alarmautomation />;
      case 4:
        return <Camera />;
      case 5:
        return <SENSORS />;
      case 6:
        return <SMARTSWITCH />;
      case 7:
        return <Accesscontrol />;
      case 8:
        return <DIGITALCLASS />;
      case 9:
        return <AIVMS />;
      case 10:
        return <WATER />;
      case 11:
        return <ELECTRICFENCE />;
      case 12:
        return <FIRESAFETY />;
      case 13:
        return <IOECOMMUNICATION />;
      case 14:
        return <WAREHOUSE />;
      case 15:
        return <ACCESSORIES />;
      case 16:
        return <HOTEL />;
      case 17:
        return <SIGNAGE />;
      case 18:
        return <DRONES />;
      case 19:
        return <NETWORKING />;
      case 20:
        return <AUDIOVIDEO />;
      default:
        return <div>Please select a category</div>;
    }
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <body className="pro-body">
        <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
          <Link to="/nystai-home">
            <a className="brand mt-3 mb-3 d-flex align-items-center">
              <AsyncImage
                src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/trilogoproductdash.webp"
                alt="Brand Logo"
              />
              <AsyncImage
                src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/productdashlogo.webp"
                alt="nys-logo"
              />
            </a>
          </Link>

          <div className="side-menu top big-screen-res">
            <li onClick={toggleSidebar}>
              <a>
                <FontAwesomeIcon icon={faBars} className=" dash-icon" />
                <span
                  className="text"
                  style={{
                    fontSize: "16px",
                    textTransform: "uppercase",
                    color: "#1b6763",
                  }}
                >
                  Product Category
                </span>
              </a>
            </li>
          </div>

          <div className="side-menu top">
            {categories.map((category) => (
              <li
                key={category.id}
                className={` ${parseInt(selectedCategory) === category.id ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedSubcategory(null);
                }}
              >
                <a>
                  <FontAwesomeIcon
                    icon={category.icons}
                    className="dash-icon"
                  />
                  <span className="text">{category.name}</span>
                </a>
              </li>
            ))}
          </div>
        </section>

        <section id="content">
          <nav class="navbar navbar-expand-lg  sticky-top ">
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <Link to="/nystai-home">
                <a className="brand mt-3 mb-3 d-flex align-items-center">
                  <AsyncImage
                    src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/Untitled-3.png"
                    alt="Brand Logo"
                    style={{
                      width: "40px",
                      height: "35px",
                      objectFit: "contain",
                      marginRight: "8px",
                    }}
                  />
                  <AsyncImage
                    src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/nys logo (2).png"
                    alt="nys-logo"
                    style={{
                      width: "50px",
                      height: "30px",
                      objectFit: "contain",
                    }}
                  />
                </a>
              </Link>

              <div className="side-menu mobil-nav-pro mt-1">
                <li>
                  <a className="nav-link ">
                    <Link to="/nystai-product">PRODUCTS</Link>
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    {" "}
                    <Link to="/nystai-solution-home">INTEGRATED SOLUTIONS</Link>
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    {" "}
                    <Link to="/nystai-PLAN">PROTECT PLAN</Link>
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <Link to="/nystai-SERVICE">SERVICE</Link>
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <Link to="/nystai-support">SUPPORT</Link>
                  </a>
                </li>
              </div>

              <span
                className="text mt-1 mb-1"
                style={{
                  fontWeight: "bolder",
                  fontSize: "17px",
                  textTransform: "uppercase",
                  color: "#1b6763",
                }}
              >
                Product Category
              </span>
              <div className="side-menu mobil-nav-pro">
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className={` ${parseInt(selectedCategory) === category.id ? "active" : ""}`}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSelectedSubcategory(null);
                    }}
                  >
                    <a>
                      <FontAwesomeIcon
                        icon={category.icons}
                        className="dash-icon"
                      />
                      <span className="text">{category.name}</span>
                    </a>
                  </li>
                ))}
              </div>
            </Drawer>

            <button
              onClick={toggleDrawer(true)}
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a className="nav-link  me-3">
                    <Link to="/nystai-product">PRODUCTS</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-link  me-3">
                    <div className="dropdown">
                      <a className="dropdown-trigger" onClick={toggleDropdown}>
                        INTEGRATED SOLUTIONS
                        <span className={`arrow ms-1 ${isOpen ? "open" : ""}`}>
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
                                to="/nystai-solution-home"
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
                                to="/nystai-solution-Industrial"
                                className={` ${isActive("/nystai-solution-education")}`}
                              >
                                INDUSTRIAL
                              </Link>
                            </a>
                            <div class="dropdown-divider ms-3 me-3"></div>
                            <a className="dropdown-content-a">
                              <FontAwesomeIcon
                                icon={faSchool}
                                className="me-3"
                              />
                              <Link
                                to="/nystai-solution-education"
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
                                to="/nystai-solution-worship"
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
                                to="/nystai-solution-vms"
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
                                to="/nystai-solution-Warehouse"
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
                                to="/nystai-solution-banking"
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
                                to="/nystai-solution-retail"
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
                                to="/nystai-solution-parking"
                                className={` ${isActive("/nystai-solution-parking")}`}
                              >
                                PARKING IOT SOLUTION
                              </Link>
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-link me-3">
                    {" "}
                    <Link to="/nystai-PLAN">PROTECT PLAN</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-link me-3">
                    <Link to="/nystai-SERVICE">SERVICE</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-link me-3">
                    <Link to="/nystai-support">SUPPORT</Link>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main>
            <div className="p-1">{renderCategoryComponent()}</div>
          </main>
        </section>
      </body>
    </>
  );
};

export default AdminHub;

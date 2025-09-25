import AsyncImage from "react-async-image";
import LazyImage from "../../NYSTAI-WEBSITE/common/LazyImage";
import React, { useState, useEffect } from "react";
import "../../NYSTAI-WEBSITE/C-PRODUCT LAYOUT/shopingcardpro.css";
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
import {
  faUserPlus,
  faBoxOpen,
  faTags,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../../NYSTAI-WEBSITE/C-PRODUCT LAYOUT/datass";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "react-tooltip";
import Test from "./admintest";
import Drawer from "@mui/material/Drawer";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <body className="pro-body">
        <section
          id="sidebar"
          className={isSidebarHidden ? "hide" : ""}
          style={{ backgroundColor: "#FFF" }}
        >
          {/* <Link to="/admin/register"> */}
          <Link to="/">
            <a className=" mt-3 mb-3 d-flex align-items-center">
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

          <div className="side-menu top mt-3">
            <li>
              <NavLink
                to="register"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#FFF3CA" : "#fff",
                  color: isActive ? "#a57f00" : "#64748B",
                  fontSize: "14px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "12px",
                })}
              >
                <FontAwesomeIcon icon={faUserPlus} className="dash-icon" />
                <span className="text">Register</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="products"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#FFF3CA" : "#fff",
                  color: isActive ? "#a57f00" : "#64748B",
                  fontSize: "14px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "12px",
                })}
              >
                <FontAwesomeIcon icon={faBoxOpen} className="dash-icon" />
                <span className="text">Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="add-category"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#FFF3CA" : "#fff",
                  color: isActive ? "#a57f00" : "#64748B",
                  fontSize: "14px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "12px",
                })}
              >
                <FontAwesomeIcon icon={faTags} className="dash-icon" />
                <span className="text">Add Category</span>
              </NavLink>
            </li>
          </div>
        </section>

        <section
          id="content"
          style={{
            backgroundColor: "#f9f9f9",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <nav
            class="navbar navbar-expand-lg sticky-top"
            style={{ backgroundColor: "#FFF3CA", height: "68px" }}
          >
            <div className="side-menu top big-screen-res">
              <li onClick={toggleSidebar}>
                <a>
                  <FontAwesomeIcon icon={faBars} className=" " />
                  <span
                    className="text"
                    style={{
                      fontSize: "16px",
                      textTransform: "uppercase",
                      color: "#1b6763",
                    }}
                  ></span>
                </a>
              </li>
            </div>

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
                <li>
                  <a>
                    <span className="text">category.name</span>
                  </a>
                </li>
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

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav align-items-center">
                {/* SUPPORT LINK */}
                <li className="nav-item me-3">
                  <Link to="/nystai-support" className="nav-link">
                    ADMIN{" "}
                  </Link>
                </li>

                {/* USER CIRCLE IMAGE */}
                <li className="nav-item me-3">
                  <Link to="/nystai-support" className="nav-link p-0">
                    <AsyncImage
                      src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/trilogoproductdash.webp"
                      alt="User"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main
            style={{
              paddingTop: "25px",
            }}
          >
            <div className="p-1">
              <Outlet />
            </div>
          </main>
        </section>
      </body>
    </>
  );
};

export default AdminDashboard;

import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingBasket,
  faSearch,
  faPlus,
  faArrowLeftLong,
  faArrowAltCircleUp,
  faDeleteLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Modal from "../Dialogbox/Modal";




const AddCategory = () => {
  const inputRef = useRef(null);
  const categories = [
    {
      id: 1,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/sample-icon.png",
    },
    {
      id: 2,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/sample-icon.png",
    },
    {
      id: 3,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/sample-icon.png",
    },
    {
      id: 4,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/sample-icon.png",
    },
    {
      id: 5,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/sample-icon.png",
    },
    {
      id: 6,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/sample-icon.png",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [fileName, setFileName] = useState("No file chosen");

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name); // show selected file name
    } else {
      setFileName("No file chosen");
    }
  };


  return (
    <>
        <div className="card-container pt-0">
          <div className="student-course-header mb-4">
            <h3>Product Category</h3>
            <div className="student-course-actions">
              {/* Course filter */}
              <div className="search-container">
                <span className="search-icon">
                  <FontAwesomeIcon icon={faSearch} className="icon- " />
                </span>

                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search..."
                  className="search-input-dash"
                  style={{ border: "none", outline: "none" }}
                />
              </div>

              {/* Status filter */}
              <Link onClick={openModal} className="add-student-btn">
                <FontAwesomeIcon icon={faPlus} className="icon" />
                Add Category
              </Link>
            </div>
          </div>


          {/* Modal for Adding New Course */}
          <Modal isOpen={isOpen} onClose={closeModal} className="custom-modal" size="sm">
            <h4 className="form-title pt-3">Add Category</h4>
            <form className="form">
              <div className="form-body p-0" style={{ overflow: "hidden" }}>
                <div className="form-group mt-1">
                  <label>Category Title</label>
                  <input type="text" placeholder="Hybrid AIoT NVR..." style={{ backgroundColor: "#f5f5f5", border: "1px solid #d8d8d8" }} />
                </div>
                {/* <div className="form-group mt-3">
                  <label>Banner Image Upload</label>
                  <div style={{ border: "1px solid #d8d8d8", padding: "15px", borderRadius: "10px" }}>
                    <input type="file" style={{ height: "90px", borderRadius: "10px" }} />
                  </div>
                </div> */}
                <div className="row g-2 p-0">
                  <div className="col-md-8">
                    <div className="form-group mt-3">
                      <label>Banner Image Upload</label>
                      <div style={{ border: "1px solid #d8d8d8", padding: "8px", borderRadius: "10px" }}>
                        <div className="file-upload-box">
                          <input type="file" id="bannerUpload" onChange={handleChange} />
                          <label htmlFor="bannerUpload" className="file-label">
                            <span className="file-btn">Upload new</span>
                            <span className="file-text">{fileName}</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group mt-3">
                      <label>Icon Upload</label>
                      <div className="file-upload-box">
                        <input type="file" id="bannerUpload" />
                        <label htmlFor="bannerUpload" style={{ cursor: "pointer" }}>
                          <span className="file-btn" style={{ border: "none" }}><FontAwesomeIcon icon={faArrowAltCircleUp} style={{ fontSize: "35px", color: "#555555" }} /></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-actions">
                {/* <button type="button" onClick={closeModal} className="btn-cancel">
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                </button> */}
                <button type="submit" className="btn-submit text-white">
                  Create
                </button>
              </div>
            </form>
          </Modal>

          <section className="category-section">
            <div className="category-container">
              <div className="category-grid">
                {categories.map((cat) => (
                  <div key={cat.id} className="category-card" style={{ cursor: "pointer", position: "relative" }}>
                    <button className="delete-btn">
                      <FontAwesomeIcon icon={faTrash} style={{ fontSize: "13px" }} />
                    </button>

                    <Link to="/admin/add-category/Productlistdash" className="add-student-btn">
                      <div className="category-image-wrapper">
                        <img src={cat.img} alt={cat.title} />
                      </div>
                      <div className="category-info pt-3" style={{ width: "150px" }}>
                        <h3>{cat.title}</h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <Stack
              spacing={2}
              style={{ alignItems: "center", marginTop: "10px", backgroundColor: "transparent" }}
            >
              <Pagination count={3} />
            </Stack>
          </section>
        </div>
    </>
  );
};

export default AddCategory;

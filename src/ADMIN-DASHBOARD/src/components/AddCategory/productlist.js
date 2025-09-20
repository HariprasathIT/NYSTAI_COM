import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Modal from "../Dialogbox/Modal";

const Productlist = () => {
  const inputRef = useRef(null);
  const [isAddOpen, setIsAddOpen] = useState(false); // Add product modal
  const [isDeleteOpen, setIsDeleteOpen] = useState(false); // Delete modal
  const [isEditOpen, setIsEditOpen] = useState(false); // Edit modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    {
      id: 1,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.webp",
      paragraph:
        "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
    },
    {
      id: 2,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.webp",
      paragraph:
        "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
    },
    {
      id: 3,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Camera with Battery.webp",
      paragraph:
        "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
    },
    {
      id: 4,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.webp",
      paragraph:
        "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
    },
    {
      id: 5,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.webp",
      paragraph:
        "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
    },
    {
      id: 6,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Camera with Battery.webp",
      paragraph:
        "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
    },
    {
      id: 7,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.webp",
      paragraph:
        "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
    },
    {
      id: 8,
      title: "NYSTAI AI-IoT Hybrid NVR",
      img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.webp",
      paragraph:
        "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
    }
  ];

  // Open delete modal for a specific product
  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setIsDeleteOpen(true);
  };

  // Open edit modal for a specific product
  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditOpen(true);
  };

  return (

    <>
      <div className="card-container pt-0">
        {/* <div className="student-course-header mb-4">
          <Link to="/add-category" className="back-link">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <button
                onClick={() => setIsDeleteOpen(false)}
                style={{
                  padding: "3px",
                  background: "#ff8d91",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginRight: "15px",
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#fff", fontSize: "25px" }} />
              </button>
              <h3 className="pt-2">Camera</h3>
            </div>
          </Link>

          <div className="student-course-actions">
            <div className="search-container">
              <span className="search-icon">
                <FontAwesomeIcon icon={faSearch} className="icon" />
              </span>

              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="search-input-dash"
              />
            </div>

            <Link onClick={() => setIsAddOpen(true)} className="add-student-btn">
              <FontAwesomeIcon icon={faPlus} className="icon" />
              Add Product
            </Link>
          </div>
        </div> */}


        <div className="student-course-header mb-4">
          <Link to="/add-category" className="back-link">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <button
                onClick={() => setIsDeleteOpen(false)}
                style={{
                  padding: "3px",
                  background: "#ff8d91",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginRight: "15px",
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#fff", fontSize: "25px" }} />
              </button>
              <h3 className="pt-2">Camera</h3>
            </div>
          </Link>
          <div className="student-course-actions">
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

             <Link onClick={() => setIsAddOpen(true)} className="add-student-btn">
              <FontAwesomeIcon icon={faPlus} className="icon" />
              Add Category
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <section>
          <div className="category-grid-product">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="category-card-product pt-3"
                style={{ cursor: "pointer", position: "relative" }}
                onClick={() => openEditModal(cat)} // Open Edit modal on card click
              >
                {/* Delete button (stop event bubbling so it won't trigger edit modal) */}
                <button
                  className="delete-btn-product"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent edit modal
                    openDeleteModal(cat);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} style={{ fontSize: "15px" }} />
                </button>

                <img
                  src={cat.img}
                  alt={cat.title}
                  style={{ height: "173px", objectFit: "cover" }}
                />
                <div className="category-info-product">
                  <h3>{cat.title}</h3>
                  <p>{cat.paragraph}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Add Product Modal */}
          <Modal
            isOpen={isAddOpen}
            onClose={() => setIsAddOpen(false)}
            className="custom-modal"
            size="lg"
          >
            <h4 className="form-title pt-3">Add Product Information</h4>
            <form className="form">
              <div className="form-body p-0" style={{ overflowX: "hidden" }}>
                <div className="row g-2 p-0">
                  <div className="col-md-6">
                    <div className="form-group mt-1">
                      <label>Product Name</label>
                      <input
                        type="text"
                        placeholder="Hybrid AIoT NVR..."
                        style={{
                          backgroundColor: "#f5f5f5",
                          border: "1px solid #d8d8d8",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mt-1">
                      <label>Product Name</label>
                      <input
                        type="text"
                        placeholder="Hybrid AIoT NVR..."
                        style={{
                          backgroundColor: "#f5f5f5",
                          border: "1px solid #d8d8d8",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-submit text-white">
                  Next
                </button>
              </div>
            </form>
          </Modal>

          {/* Edit Product Modal */}
          <Modal
            isOpen={isEditOpen}
            onClose={() => setIsEditOpen(false)}
            className="custom-modal"
            size="lg"
          >
            <h4 className="form-title pt-3">Edit Product Information</h4>
            <form className="form">
              <div className="form-body p-0" style={{ overflowX: "hidden" }}>
                <div className="row g-2 p-0">
                  <div className="col-md-6">
                    <div className="form-group mt-1">
                      <label>Product Name</label>
                      <input
                        type="text"
                        defaultValue={selectedProduct?.title}
                        style={{
                          backgroundColor: "#f5f5f5",
                          border: "1px solid #d8d8d8",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mt-1">
                      <label>Product Name</label>
                      <input
                        type="text"
                        defaultValue={selectedProduct?.title}
                        style={{
                          backgroundColor: "#f5f5f5",
                          border: "1px solid #d8d8d8",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-submit text-white">
                  Update
                </button>
              </div>
            </form>
          </Modal>

          {/* Delete Confirmation Modal */}
          <Modal
            isOpen={isDeleteOpen}
            onClose={() => setIsDeleteOpen(false)}
            size="sm"
            style={{ textAlign: "center" }}
          >
            <h4
              className="form-title pt-3"
              style={{ fontSize: "17px", fontWeight: "500" }}
            >
              Delete Product
            </h4>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>
              You're going to delete the Product{" "}
              <strong>{selectedProduct?.title}</strong>. Are you sure?
            </p>
            <div
              className="form-actions"
              style={{ display: "flex", gap: "10px", marginTop: "20px" }}
            >
              <button
                onClick={() => setIsDeleteOpen(false)}
                style={{
                  padding: "8px 16px",
                  background: "transparent",
                  border: "2px solid #ff8d91",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ff4249" }} />
              </button>
              <button
                onClick={() => {
                  console.log("Deleting:", selectedProduct);
                  setIsDeleteOpen(false);
                }}
                style={{
                  padding: "8px 16px",
                  background: "#ff4249",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon icon={faTrash} style={{ marginRight: "8px" }} />
                Delete
              </button>
            </div>
          </Modal>

          {/* Pagination */}
          <Stack spacing={2} style={{ alignItems: "center", marginTop: "20px" }}>
            <Pagination count={10} color="primary" />
          </Stack>
        </section>
      </div>
    </>

  );
};

export default Productlist;



// this is the old Productlist.js modal bg will not scroll
// import React, { useRef, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../../styles/dashboard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faShoppingBasket,
//   faSearch,
//   faPlus,
//   faTrash,
//   faArrowAltCircleUp,
// } from "@fortawesome/free-solid-svg-icons";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import Modal from "../Dialogbox/Modal";

// const Productlist = () => {
//   const inputRef = useRef(null);
//   const categories = [
//     {
//       id: 1,
//       title: "NYSTAI AI-IoT Hybrid NVR",
//       img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.webp",
//       paragraph: "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
//     },
//     {
//       id: 2,
//       title: "NYSTAI AI-IoT Hybrid NVR",
//       img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.webp",
//       paragraph: "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
//     },
//     {
//       id: 3,
//       title: "NYSTAI AI-IoT Hybrid NVR",
//       img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Camera with Battery.webp",
//       paragraph: "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
//     },
//     {
//       id: 4,
//       title: "NYSTAI AI-IoT Hybrid NVR",
//       img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.webp",
//       paragraph: "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
//     },
//     {
//       id: 5,
//       title: "NYSTAI AI-IoT Hybrid NVR",
//       img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.webp",
//       paragraph: "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
//     },
//     {
//       id: 6,
//       title: "NYSTAI AI-IoT Hybrid NVR",
//       img: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/ai-motion-camera-with-battery.webp",
//       paragraph: "AI-powered indoor camera with motion detection, providing real-time alerts and advanced",
//     },
//   ];


//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);


//   return (
//     <>
//       <div className="card-container">
//         <div className="student-course-header">
//           <h3>Camera</h3>
//           <div className="student-course-actions">
//             {/* Course filter */}
//             <div className="search-container">
//               <span className="search-icon">
//                 <FontAwesomeIcon icon={faSearch} className="icon" />
//               </span>

//               <input
//                 ref={inputRef}
//                 type="text"
//                 placeholder="Search..."
//                 className="search-input-dash"
//               />
//             </div>

//             {/* Status filter */}
//             <Link onClick={openModal} className="add-student-btn">
//               <FontAwesomeIcon icon={faPlus} className="icon" />
//               Add Product
//             </Link>
//           </div>
//         </div>

//         <section className="">
//           <div className="category-grid-product">
//             {categories.map((cat) => (
//               <div key={cat.id} className="category-card-product pt-3" style={{ cursor: "pointer", position: "relative" }}>
//                 <button className="delete-btn-product">
//                   <FontAwesomeIcon icon={faTrash} style={{ fontSize: "15px" }} />
//                 </button>
//                 <img
//                   src={cat.img}
//                   alt={cat.title}
//                   className=""
//                   style={{ height: "173px", objectFit: "cover" }}
//                 />
//                 <div className="category-info-product">
//                   <h3>{cat.title}</h3>
//                   <p>{cat.paragraph}</p>
//                 </div>
//               </div>
//             ))}
//           </div>


//           <Modal isOpen={isOpen} onClose={closeModal} className="custom-modal" size="lg">
//             <h4 className="form-title pt-3">Add Product Information</h4>
//             <form className="form">
//               <div className="form-body p-0" style={{ overflowX: "hidden" }}>

//                 <div className="row g-2 p-0">
//                   <div className="col-md-6">
//                     <div className="form-group mt-1">
//                       <label>Product Name</label>
//                       <input type="text" placeholder="Hybrid AIoT NVR..." style={{ backgroundColor: "#f5f5f5", border: "1px solid #d8d8d8" }} />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group mt-1">
//                       <label>Product Name</label>
//                       <input type="text" placeholder="Hybrid AIoT NVR..." style={{ backgroundColor: "#f5f5f5", border: "1px solid #d8d8d8" }} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="form-actions">
//                 <button type="submit" className="btn-submit text-white">
//                   Next
//                 </button>
//               </div>
//             </form>
//           </Modal>

//           <Stack
//             spacing={2}
//             style={{ alignItems: "center", marginTop: "20px" }}
//           >
//             <Pagination count={10} color="primary" />
//           </Stack>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Productlist;

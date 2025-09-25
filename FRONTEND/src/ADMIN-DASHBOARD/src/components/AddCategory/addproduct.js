// import { Link } from "react-router-dom";
// import "../../styles/dashboard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faArrowLeft,
//     faTrash,
//     faXmark,
//     faSearch,
//     faPlus
// } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import { Upload } from "@mui/icons-material";

// const AddProduct = () => {
//     // 4 fixed slots for images
//     const [images, setImages] = useState([null, null, null, null]);

//     // Handle gateway upload (fills the next empty slots only)
//     const handleGatewayUpload = (e) => {
//         const files = Array.from(e.target.files);
//         if (!files.length) return;

//         setImages((prev) => {
//             const newImages = [...prev];
//             let fileIndex = 0;

//             // Loop through slots and fill empty ones
//             for (let i = 0; i < newImages.length && fileIndex < files.length; i++) {
//                 if (!newImages[i]) {
//                     newImages[i] = URL.createObjectURL(files[fileIndex]);
//                     fileIndex++;
//                 }
//             }
//             return newImages;
//         });
//     };

//     // Delete specific slot
//     const handleDelete = (index) => {
//         setImages((prev) => {
//             const newImages = [...prev];
//             newImages[index] = null; // clear that slot only
//             return newImages;
//         });
//     };


//     const [uploadedImages, setUploadedImages] = useState({});
//     const [productNames, setProductNames] = useState({});

//     const handleImageUpload = (index, event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 setUploadedImages(prev => ({
//                     ...prev,
//                     [index]: {
//                         file: file,
//                         url: e.target.result
//                     }
//                 }));
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const removeImage = (index) => {
//         setUploadedImages(prev => {
//             const newImages = { ...prev };
//             delete newImages[index];
//             return newImages;
//         });
//     };

//     const handleProductNameChange = (index, value) => {
//         setProductNames(prev => ({
//             ...prev,
//             [index]: value
//         }));
//     };


//     return (
//         <>
//             <div className="card-container pt-0">

//                 <div className="student-course-header">
//                     <Link to="/admin/add-category/Productlistdash" className="back-link">
//                         <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//                             <button
//                                 style={{
//                                     padding: "3px",
//                                     background: "#ff8d91",
//                                     border: "none",
//                                     borderRadius: "6px",
//                                     cursor: "pointer",
//                                     marginRight: "15px",
//                                 }}
//                             >
//                                 <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#fff", fontSize: "15px" }} />
//                             </button>
//                             <h3 className="pt-2">Add Product Page</h3>
//                         </div>
//                     </Link>
//                 </div>

//                 <div style={{ display: "flex", justifyContent: "center" }}>
//                     <div className="bg-form-addprod">
//                         <div className="row">
//                             <div className="col-lg-4  add-prod-inputs">
//                                 <label>Product Name</label>
//                                 <div class="input-group">
//                                     <input type="text" className="form-control custom-placeholder" placeholder="Product Name" />
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 add-prod-inputs">
//                                 <label>Category</label>
//                                 <div class="input-group">
//                                     <input type="text" className="form-control custom-placeholder" placeholder="Category" />
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 add-prod-inputs">
//                                 <label>Product Code</label>
//                                 <div class="input-group">
//                                     <input type="text" className="form-control custom-placeholder" placeholder="Product Code" />
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 add-prod-inputs">
//                                 <label>1. Key Features</label>
//                                 <div class="input-group">
//                                     <input type="text" className="form-control custom-placeholder" placeholder="AI Fish Eye Camera 3MP+IR" />
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 add-prod-inputs">
//                                 <label>2. Key Features</label>
//                                 <div class="input-group">
//                                     <input type="text" className="form-control custom-placeholder" placeholder="AI Fish Eye Camera 3MP+IR" />
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 add-prod-inputs">
//                                 <label>3. Key Features</label>
//                                 <div class="input-group">
//                                     <input type="text" className="form-control custom-placeholder" placeholder="AI Fish Eye Camera 3MP+IR" />
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 add-prod-inputs">
//                                 <label>4. Key Features</label>
//                                 <div class="input-group">
//                                     <input type="text" className="form-control custom-placeholder" placeholder="AI Fish Eye Camera 3MP+IR" />
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 add-prod-inputs">
//                                 <label>Small Description</label>
//                                 <div class="input-group">
//                                     <textarea className="form-control custom-placeholder" aria-label="With textarea" placeholder="AI Fish Eye Camera 3MP+IR" style={{ height: "100px" }}></textarea>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 add-prod-inputs">
//                                 <label>Description</label>
//                                 <div class="input-group">
//                                     <textarea className="form-control custom-placeholder" aria-label="With textarea" placeholder="AI Fish Eye Camera 3MP+IR" style={{ height: "100px" }}></textarea>
//                                 </div>
//                             </div>

//                             <div className="row mt-3">
//                                 {images.map((img, index) => (
//                                     <div className="col-lg-3 mb-3" key={index}>
//                                         <label className="form-label mb-2" style={{ fontSize: "15px", fontWeight: "bold" }}>Product Image {index + 1}</label>
//                                         <div
//                                             style={{
//                                                 border: "1px dashed #ffebab",
//                                                 borderRadius: "50px",
//                                                 height: "60px",
//                                                 width: "60px",
//                                                 display: "flex",
//                                                 alignItems: "center",
//                                                 justifyContent: "center",
//                                                 position: "relative",
//                                                 background: "#ffebab",
//                                             }}
//                                         >
//                                             {img ? (
//                                                 <>
//                                                     <img
//                                                         src={img}
//                                                         alt={`Preview ${index + 1}`}
//                                                         style={{
//                                                             maxWidth: "100%",
//                                                             maxHeight: "100%",
//                                                             borderRadius: "6px",
//                                                         }}
//                                                     />
//                                                     <button
//                                                         type="button"
//                                                         onClick={() => handleDelete(index)}
//                                                         style={{
//                                                             position: "absolute",
//                                                             top: "-5px",
//                                                             right: "-5px",
//                                                             background: "#ff8d91",
//                                                             border: "none",
//                                                             height: "25px",
//                                                             width: "25px",
//                                                             borderRadius: "50%",
//                                                             color: "white",
//                                                             cursor: "pointer",
//                                                             fontSize: "10px"
//                                                         }}
//                                                     >
//                                                         <FontAwesomeIcon icon={faXmark} />
//                                                     </button>
//                                                 </>
//                                             ) : (
//                                                 <span style={{ color: "#4A4A4A99", fontSize: "10px" }}>Empty</span>
//                                             )}
//                                         </div>
//                                     </div>
//                                 ))}

//                                 {/* Gateway Upload Input - Matching Design */}
//                                 <div className="mb-3 mt-3">
//                                     <div style={{ position: 'relative' }}>
//                                         <input
//                                             type="file"
//                                             multiple
//                                             onChange={handleGatewayUpload}
//                                             style={{
//                                                 position: 'absolute',
//                                                 inset: '0',
//                                                 width: '100%',
//                                                 height: '100%',
//                                                 opacity: '0',
//                                                 cursor: 'pointer',
//                                                 zIndex: '10'
//                                             }}
//                                             accept="image/*"
//                                         />
//                                         <div style={{
//                                             border: '1px dashed #cda10e',
//                                             borderRadius: '8px',
//                                             padding: '60px 20px',
//                                             textAlign: 'center',
//                                             backgroundColor: 'transparent',
//                                             cursor: 'pointer',
//                                             transition: 'all 0.2s ease',
//                                             minHeight: '200px',
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'center'
//                                         }}
//                                             onMouseEnter={(e) => {
//                                                 e.target.style.backgroundColor = '#f0f0f0';
//                                                 e.target.style.borderColor = '#ccc';
//                                             }}
//                                             onMouseLeave={(e) => {
//                                                 e.target.style.backgroundColor = '#fafafa';
//                                                 e.target.style.borderColor = '#ddd';
//                                             }}>
//                                             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                                                 {/* Yellow Upload Icon */}
//                                                 <div style={{
//                                                     width: '60px',
//                                                     height: '60px',
//                                                     borderRadius: '50%',
//                                                     display: 'flex',
//                                                     alignItems: 'center',
//                                                     justifyContent: 'center',
//                                                 }}>
//                                                     <Upload style={{ width: '40px', height: '40px', color: '#f5d547' }} />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>

//                             <div className="mt-3 mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
//                                 <div style={{
//                                     display: 'flex',
//                                     gap: '0px',
//                                     flexWrap: 'wrap',
//                                     justifyContent: 'space-between'
//                                 }}>
//                                     {[0, 1, 2, 3, 4].map(index => {
//                                         const hasImage = uploadedImages[index];
//                                         return (
//                                             <div key={index} className="mb-3 mt-3" style={{ flex: '1', margin: '0 10px' }}>
//                                                 {/* Product Name Input */}
//                                                 <div className="col-lg-4 add-prod-inputs" style={{ marginBottom: '10px', width: '102px' }}>
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         placeholder="Icon Text"
//                                                         value={productNames[index] || ''}
//                                                         onChange={(e) => handleProductNameChange(index, e.target.value)}
//                                                         style={{
//                                                             width: '100%',
//                                                             height: '30px',
//                                                             borderRadius: '4px',
//                                                             fontSize: '15px',
//                                                             color: "#4A4A4A99"
//                                                         }}
//                                                     />
//                                                 </div>

//                                                 {/* Image Upload Box */}
//                                                 <div style={{ position: 'relative' }}>
//                                                     {!hasImage && (
//                                                         <input
//                                                             type="file"
//                                                             accept="image/*"
//                                                             onChange={(e) => handleImageUpload(index, e)}
//                                                             style={{
//                                                                 position: 'absolute',
//                                                                 inset: '0',
//                                                                 width: '100%',
//                                                                 height: '100%',
//                                                                 opacity: '0',
//                                                                 cursor: 'pointer',
//                                                                 zIndex: '10'
//                                                             }}
//                                                         />
//                                                     )}
//                                                     <div style={{
//                                                         border: hasImage ? '1px solid #ddd' : '1px dashed #cfa209',
//                                                         borderRadius: '8px',
//                                                         textAlign: 'center',
//                                                         backgroundColor: hasImage ? 'transparent' : 'transparent',
//                                                         cursor: hasImage ? 'default' : 'pointer',
//                                                         transition: 'all 0.2s ease',
//                                                         height: '66px',
//                                                         width: "102px",
//                                                         display: 'flex',
//                                                         alignItems: 'center',
//                                                         justifyContent: 'center',
//                                                         position: 'relative',
//                                                         overflow: 'hidden'
//                                                     }}>
//                                                         {hasImage ? (
//                                                             <>
//                                                                 <img
//                                                                     src={hasImage.url}
//                                                                     alt="Uploaded preview"
//                                                                     style={{
//                                                                         width: '100%',
//                                                                         height: '100%',
//                                                                         objectFit: 'cover',
//                                                                         borderRadius: '7px'
//                                                                     }}
//                                                                 />
//                                                                 <button
//                                                                     type="button"
//                                                                     onClick={() => removeImage(index)}
//                                                                     style={{
//                                                                         position: "absolute",
//                                                                         top: "5px",
//                                                                         right: "5px",
//                                                                         background: "#ff8d91",
//                                                                         border: "none",
//                                                                         height: "25px",
//                                                                         width: "25px",
//                                                                         borderRadius: "50%",
//                                                                         color: "white",
//                                                                         cursor: "pointer",
//                                                                         fontSize: "12px",
//                                                                         display: 'flex',
//                                                                         alignItems: 'center',
//                                                                         justifyContent: 'center'
//                                                                     }}
//                                                                 >
//                                                                     ×
//                                                                 </button>
//                                                             </>
//                                                         ) : (
//                                                             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                                                                 <div style={{
//                                                                     width: '50px',
//                                                                     height: '50px',
//                                                                     borderRadius: '50%',
//                                                                     display: 'flex',
//                                                                     alignItems: 'center',
//                                                                     justifyContent: 'center',
//                                                                 }}>
//                                                                     <Upload style={{ width: '25px', height: '25px', color: '#f5d547' }} />
//                                                                 </div>
//                                                             </div>
//                                                         )}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             </div>

//                             <div className="d-flex justify-content-center">
//                                 <button className="btn btn-danger col-sm-12 col-md-6 col-lg-2" >
//                                     Submit
//                                 </button>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );

// };

// export default AddProduct;









































































































import { Link, useParams, useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faTrash,
    faXmark,
    faSearch,
    faPlus
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Upload } from "@mui/icons-material";

const AddProduct = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        subName: '',
        code: '',
        coverDesc: '',
        mainDesc: '',
        keyFeatures: ['', '', '', ''], // 4 key features
        smartIconsText: ['', '', '', '', ''] // 5 smart icons
    });

    // 4 fixed slots for main product images
    const [images, setImages] = useState([null, null, null, null]);

    // Smart icons images (5 slots)
    const [uploadedImages, setUploadedImages] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle key features changes
    const handleKeyFeatureChange = (index, value) => {
        setFormData(prev => ({
            ...prev,
            keyFeatures: prev.keyFeatures.map((feature, i) =>
                i === index ? value : feature
            )
        }));
    };

    // Handle smart icons text changes
    const handleSmartIconTextChange = (index, value) => {
        setFormData(prev => ({
            ...prev,
            smartIconsText: prev.smartIconsText.map((text, i) =>
                i === index ? value : text
            )
        }));
    };

    // Handle main product images upload (fills the next empty slots only)
    const handleGatewayUpload = (e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;

        setImages((prev) => {
            const newImages = [...prev];
            let fileIndex = 0;

            // Loop through slots and fill empty ones
            for (let i = 0; i < newImages.length && fileIndex < files.length; i++) {
                if (!newImages[i]) {
                    newImages[i] = files[fileIndex];
                    fileIndex++;
                }
            }
            return newImages;
        });
    };

    // Delete specific main image slot
    const handleDelete = (index) => {
        setImages((prev) => {
            const newImages = [...prev];
            newImages[index] = null; // clear that slot only
            return newImages;
        });
    };

    // Handle smart icon image upload
    const handleSmartIconImageUpload = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedImages(prev => ({
                ...prev,
                [index]: file
            }));
        }
    };

    // Remove smart icon image
    const removeSmartIconImage = (index) => {
        setUploadedImages(prev => {
            const newImages = { ...prev };
            delete newImages[index];
            return newImages;
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name.trim()) {
            alert("Please enter a product name");
            return;
        }

        if (!categoryId) {
            alert("Category ID is missing");
            return;
        }

        try {
            setIsSubmitting(true);

            const submitFormData = new FormData();

            // Add basic form data
            submitFormData.append("categoryId", categoryId);
            submitFormData.append("name", formData.name.trim());
            submitFormData.append("subName", formData.subName.trim());
            submitFormData.append("code", formData.code.trim());
            submitFormData.append("coverDesc", formData.coverDesc.trim());
            submitFormData.append("mainDesc", formData.mainDesc.trim());

            // Add key features (filter out empty ones)
            const validKeyFeatures = formData.keyFeatures.filter(
                (feature) => feature.trim()
            );
            submitFormData.append("keyFeatures", JSON.stringify(validKeyFeatures));

            // Add smart icons text (filter out empty ones)
            const validSmartIconsText = formData.smartIconsText.filter(
                (text) => text.trim()
            );
            submitFormData.append(
                "smartIconsText",
                JSON.stringify(validSmartIconsText)
            );

            // ✅ Map 4 product image slots → backend fields
            if (images[0]) {
                // First slot = cover
                submitFormData.append("cover", images[0]);
            }
            for (let i = 1; i < images.length; i++) {
                if (images[i]) {
                    // Remaining slots = gallery
                    submitFormData.append("gallery", images[i]);
                }
            }

            // ✅ Smart icon images
            Object.entries(uploadedImages).forEach(([index, file]) => {
                if (file) {
                    submitFormData.append("smartIcons", file);
                }
            });

            const response = await fetch(
                "https://nystai-com-dashboarad.onrender.com/api/products/add",
                {
                    method: "POST",
                    body: submitFormData,
                }
            );

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(
                    `HTTP error! status: ${response.status}, message: ${errorData}`
                );
            }

            const result = await response.json();
            console.log("Product added successfully:", result);

            alert("Product added successfully!");

            // Navigate back to product list
            navigate(`/admin/add-category/Productlistdash/${categoryId}`);
        } catch (error) {
            console.error("Error adding product:", error);
            alert(`Failed to add product: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
            <div className="card-container pt-0">
                <div className="student-course-header">
                    <Link to={`/admin/add-category/Productlistdash/${categoryId}`} className="back-link">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button
                                style={{
                                    padding: "3px",
                                    background: "#ff8d91",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    marginRight: "15px",
                                }}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#fff", fontSize: "15px" }} />
                            </button>
                            <h3 className="pt-2">Add Product Page</h3>
                        </div>
                    </Link>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <form onSubmit={handleSubmit} className="bg-form-addprod">
                        <div className="row">
                            <div className="col-lg-4 add-prod-inputs">
                                <label>Product Name *</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control custom-placeholder"
                                        placeholder="Product Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 add-prod-inputs">
                                <label>Sub Name</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="subName"
                                        className="form-control custom-placeholder"
                                        placeholder="Sub Name"
                                        value={formData.subName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 add-prod-inputs">
                                <label>Product Code</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="code"
                                        className="form-control custom-placeholder"
                                        placeholder="Product Code"
                                        value={formData.code}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Key Features */}
                            {[0, 1, 2, 3].map((index) => (
                                <div key={index} className="col-lg-6 add-prod-inputs">
                                    <label>{index + 1}. Key Features</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control custom-placeholder"
                                            placeholder="AI Fish Eye Camera 3MP+IR"
                                            value={formData.keyFeatures[index]}
                                            onChange={(e) => handleKeyFeatureChange(index, e.target.value)}
                                        />
                                    </div>
                                </div>
                            ))}

                            <div className="col-lg-6 add-prod-inputs">
                                <label>Cover Description</label>
                                <div className="input-group">
                                    <textarea
                                        name="coverDesc"
                                        className="form-control custom-placeholder"
                                        aria-label="With textarea"
                                        placeholder="Cover Description..."
                                        style={{ height: "100px" }}
                                        value={formData.coverDesc}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 add-prod-inputs">
                                <label>Description</label>
                                <div className="input-group">
                                    <textarea
                                        name="mainDesc"
                                        className="form-control custom-placeholder"
                                        aria-label="With textarea"
                                        placeholder="Detailed description..."
                                        style={{ height: "100px" }}
                                        value={formData.mainDesc}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Main Product Images */}
                            <div className="row mt-3">
                                {images.map((img, index) => (
                                    <div className="col-lg-3 mb-3" key={index}>
                                        <label className="form-label mb-2" style={{ fontSize: "15px", fontWeight: "bold" }}>
                                            Product Image {index + 1}
                                        </label>
                                        <div
                                            style={{
                                                border: "1px dashed #ffebab",
                                                borderRadius: "50px",
                                                height: "60px",
                                                width: "60px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                position: "relative",
                                                background: "#ffebab",
                                            }}
                                        >
                                            {img ? (
                                                <>
                                                    <img
                                                        src={URL.createObjectURL(img)}
                                                        alt={`Preview ${index + 1}`}
                                                        style={{
                                                            maxWidth: "100%",
                                                            maxHeight: "100%",
                                                            borderRadius: "6px",
                                                        }}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDelete(index)}
                                                        style={{
                                                            position: "absolute",
                                                            top: "-5px",
                                                            right: "-5px",
                                                            background: "#ff8d91",
                                                            border: "none",
                                                            height: "25px",
                                                            width: "25px",
                                                            borderRadius: "50%",
                                                            color: "white",
                                                            cursor: "pointer",
                                                            fontSize: "10px"
                                                        }}
                                                    >
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </button>
                                                </>
                                            ) : (
                                                <span style={{ color: "#4A4A4A99", fontSize: "10px" }}>Images</span>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {/* Gateway Upload Input */}
                                <div className="mb-3 mt-3">
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="file"
                                            multiple
                                            onChange={handleGatewayUpload}
                                            style={{
                                                position: 'absolute',
                                                inset: '0',
                                                width: '100%',
                                                height: '100%',
                                                opacity: '0',
                                                cursor: 'pointer',
                                                zIndex: '10'
                                            }}
                                            accept="image/*"
                                        />
                                        <div style={{
                                            border: '1px dashed #cda10e',
                                            borderRadius: '8px',
                                            padding: '60px 20px',
                                            textAlign: 'center',
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            minHeight: '200px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}>
                                                    <Upload style={{ width: '40px', height: '40px', color: '#f5d547' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Smart Icons Section */}
                            <div className="mt-3 mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
                                {/* <h5 className="mb-3">Smart Icons</h5> */}
                                <div style={{
                                    display: 'flex',
                                    gap: '0px',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between'
                                }}>
                                    {[0, 1, 2, 3, 4].map(index => {
                                        const hasImage = uploadedImages[index];
                                        return (
                                            <div key={index} className="mb-3 mt-3" style={{ flex: '1', margin: '0 10px' }}>
                                                {/* Smart Icon Text Input */}
                                                <div className="col-lg-4 add-prod-inputs" style={{ marginBottom: '10px', width: '102px' }}>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Icon Text"
                                                        value={formData.smartIconsText[index]}
                                                        onChange={(e) => handleSmartIconTextChange(index, e.target.value)}
                                                        style={{
                                                            width: '100%',
                                                            height: '30px',
                                                            borderRadius: '4px',
                                                            fontSize: '15px',
                                                            color: "#4A4A4A99"
                                                        }}
                                                    />
                                                </div>

                                                {/* Smart Icon Image Upload */}
                                                <div style={{ position: 'relative' }}>
                                                    {!hasImage && (
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => handleSmartIconImageUpload(index, e)}
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0',
                                                                width: '100%',
                                                                height: '100%',
                                                                opacity: '0',
                                                                cursor: 'pointer',
                                                                zIndex: '10'
                                                            }}
                                                        />
                                                    )}
                                                    <div style={{
                                                        border: hasImage ? '1px solid #ddd' : '1px dashed #cfa209',
                                                        borderRadius: '8px',
                                                        textAlign: 'center',
                                                        backgroundColor: hasImage ? 'transparent' : 'transparent',
                                                        cursor: hasImage ? 'default' : 'pointer',
                                                        transition: 'all 0.2s ease',
                                                        height: '66px',
                                                        width: "102px",
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        position: 'relative',
                                                        overflow: 'hidden'
                                                    }}>
                                                        {hasImage ? (
                                                            <>
                                                                <img
                                                                    src={URL.createObjectURL(hasImage)}
                                                                    alt="Smart icon preview"
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover',
                                                                        borderRadius: '7px'
                                                                    }}
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => removeSmartIconImage(index)}
                                                                    style={{
                                                                        position: "absolute",
                                                                        top: "5px",
                                                                        right: "5px",
                                                                        background: "#ff8d91",
                                                                        border: "none",
                                                                        height: "25px",
                                                                        width: "25px",
                                                                        borderRadius: "50%",
                                                                        color: "white",
                                                                        cursor: "pointer",
                                                                        fontSize: "12px",
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center'
                                                                    }}
                                                                >
                                                                    ×
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                <div style={{
                                                                    width: '50px',
                                                                    height: '50px',
                                                                    borderRadius: '50%',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                }}>
                                                                    <Upload style={{ width: '25px', height: '25px', color: '#f5d547' }} />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="auth-submit-btn col-sm-12 col-md-6 col-lg-2 mt-0"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Adding...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProduct;
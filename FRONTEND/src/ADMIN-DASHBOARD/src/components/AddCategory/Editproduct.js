import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Upload } from "@mui/icons-material";

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    // Form states
    const [productData, setProductData] = useState({
        name: "",
        category: "",
        code: "",
        keyFeatures: ["", "", "", ""],
        coverDesc: "",
        mainDesc: "",
    });

    // Main images
    const [images, setImages] = useState([null, null, null, null]);

    // Icon images
    const [uploadedImages, setUploadedImages] = useState({});
    const [iconTexts, setIconTexts] = useState({});

    // Fetch product data
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(
                    `https://nystai-com-dashboarad.onrender.com/api/products/get/${productId}`
                );
                const data = await res.json();

                // Populate text fields
                setProductData({
                    name: data.name || "",
                    categoryId: data.categoryId || "",
                    code: data.code || "",
                    keyFeatures: data.keyFeatures || ["", "", "", ""],
                    coverDesc: data.coverDesc || "",
                    mainDesc: data.mainDesc || "",
                });

                // Main images
                const galleryImages =
                    data.images
                        ?.filter(
                            (img) =>
                                img.type === "cover" || img.type === "gallery"
                        )
                        .map((img) => img.imageUrl) || [];

                const mainImages = [null, null, null, null];
                galleryImages.forEach((url, idx) => {
                    if (idx < 4) mainImages[idx] = url;
                });
                setImages(mainImages);

                // Icon images
                const smartIcons =
                    data.images?.filter((img) => img.type === "smartIcon") || [];

                const iconImgs = {};
                const iconLabels = {};
                smartIcons.forEach((icon, idx) => {
                    iconImgs[idx] = { url: icon.imageUrl };
                    iconLabels[idx] = icon.text || "";
                });

                setUploadedImages(iconImgs);
                setIconTexts(iconLabels);
            } catch (err) {
                console.error("Failed to fetch product", err);
            }
        };

        fetchProduct();
    }, [productId]);

    // Handlers
    const handleDelete = (index) => {
        setImages((prev) => {
            const newImages = [...prev];
            newImages[index] = null;
            return newImages;
        });
    };

    const handleImageUpload = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImages((prev) => ({
                    ...prev,
                    [index]: { file: file, url: e.target.result },
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = (index) => {
        setUploadedImages((prev) => {
            const newImages = { ...prev };
            delete newImages[index];
            return newImages;
        });
        setIconTexts((prev) => {
            const newTexts = { ...prev };
            delete newTexts[index];
            return newTexts;
        });
    };

    const handleIconTextChange = (index, value) => {
        setIconTexts((prev) => ({ ...prev, [index]: value }));
    };

    const handleKeyFeatureChange = (index, value) => {
        const newFeatures = [...productData.keyFeatures];
        newFeatures[index] = value;
        setProductData((prev) => ({ ...prev, keyFeatures: newFeatures }));
    };

    // --- Submit handler ---
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Build main images
            const mainImagesPayload = images
                .filter(Boolean) // remove nulls
                .map((url, idx) => ({
                    type: idx === 0 ? "cover" : "gallery",
                    imageUrl: url,
                    text: null,
                }));

            // Build icon images
            const smartIconsPayload = Object.keys(uploadedImages).map((idx) => ({
                type: "smartIcon",
                imageUrl: uploadedImages[idx].url,
                text: iconTexts[idx] || "",
            }));

            // Collect icon texts only
            const smartIconsText = Object.values(iconTexts).filter((txt) => txt && txt.trim() !== "");

            const payload = {
                name: productData.name,
                categoryId: productData.categoryId, // ✅ correct
                code: productData.code,
                keyFeatures: productData.keyFeatures,
                coverDesc: productData.coverDesc,
                mainDesc: productData.mainDesc,
                images: [...mainImagesPayload, ...smartIconsPayload],
                smartIconsText,
            };

            const res = await fetch(`https://nystai-com-dashboarad.onrender.com/api/products/update/${productId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Failed to update product");
            const data = await res.json();
            console.log("Updated product:", data);
            alert("Product updated successfully!");
        } catch (err) {
            console.error("Update failed", err);
            alert("Failed to update product");
        }
    };


    return (
        <div className="card-container pt-0">
            <div className="student-course-header">
                <Link
                    to="/admin/add-category/Productlistdash"
                    className="back-link"
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
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
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                style={{ color: "#fff", fontSize: "15px" }}
                            />
                        </button>
                        <h3 className="pt-2">Edit Product Page</h3>
                    </div>
                </Link>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="bg-form-addprod">
                    {/* ✅ wrap in form */}
                    <form className="row" onSubmit={handleSubmit}>
                        {/* Product Name */}
                        <div className="col-lg-4 add-prod-inputs">
                            <label>Product Name</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control custom-placeholder"
                                    placeholder="Product Name"
                                    value={productData.name}
                                    onChange={(e) =>
                                        setProductData((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="col-lg-4 add-prod-inputs">
                            <label>Category</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control custom-placeholder"
                                    placeholder="Category"
                                    value={productData.category}
                                    onChange={(e) =>
                                        setProductData((prev) => ({
                                            ...prev,
                                            category: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>

                        {/* Product Code */}
                        <div className="col-lg-4 add-prod-inputs">
                            <label>Product Code</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control custom-placeholder"
                                    placeholder="Product Code"
                                    value={productData.code}
                                    onChange={(e) =>
                                        setProductData((prev) => ({
                                            ...prev,
                                            code: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>

                        {/* Key Features */}
                        {productData.keyFeatures.map((feature, index) => (
                            <div className="col-lg-6 add-prod-inputs" key={index}>
                                <label>{index + 1}. Key Features</label>
                                <input
                                    type="text"
                                    className="form-control custom-placeholder"
                                    placeholder={`Feature ${index + 1}`}
                                    value={feature}
                                    onChange={(e) =>
                                        handleKeyFeatureChange(
                                            index,
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        ))}

                        {/* Small Description */}
                        <div className="col-lg-6 add-prod-inputs">
                            <label>Small Description</label>
                            <textarea
                                className="form-control custom-placeholder"
                                style={{ height: "100px" }}
                                value={productData.coverDesc}
                                onChange={(e) =>
                                    setProductData((prev) => ({
                                        ...prev,
                                        coverDesc: e.target.value,
                                    }))
                                }
                            />
                        </div>

                        {/* Description */}
                        <div className="col-lg-6 add-prod-inputs">
                            <label>Description</label>
                            <textarea
                                className="form-control custom-placeholder"
                                style={{ height: "100px" }}
                                value={productData.mainDesc}
                                onChange={(e) =>
                                    setProductData((prev) => ({
                                        ...prev,
                                        mainDesc: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        

                        {/* Main Images */}
                        {images.map((img, index) => (
                            <div className="col-lg-3 mb-3" key={index}>
                                <label className="form-label mb-2">
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
                                                src={img}
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
                                                    fontSize: "10px",
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faXmark} />
                                            </button>
                                        </>
                                    ) : (
                                        <span
                                            style={{
                                                color: "#4A4A4A99",
                                                fontSize: "10px",
                                            }}
                                        >
                                            Empty
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Icon Images & Texts */}
                        <div
                            className="mt-3 mb-4"
                            style={{ maxWidth: "700px", margin: "0 auto" }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    gap: "0px",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                }}
                            >
                                {[0, 1, 2, 3, 4].map((index) => {
                                    const hasImage = uploadedImages[index];
                                    return (
                                        <div
                                            key={index}
                                            className="mb-3 mt-3"
                                            style={{
                                                flex: "1",
                                                margin: "0 10px",
                                            }}
                                        >
                                            {/* Text */}
                                            <div
                                                className="col-lg-4 add-prod-inputs"
                                                style={{
                                                    marginBottom: "10px",
                                                    width: "102px",
                                                }}
                                            >
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Icon Text"
                                                    value={iconTexts[index] || ""}
                                                    onChange={(e) =>
                                                        handleIconTextChange(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                    style={{
                                                        width: "100%",
                                                        height: "30px",
                                                        borderRadius: "4px",
                                                        fontSize: "15px",
                                                        color: "#4A4A4A99",
                                                    }}
                                                />
                                            </div>

                                            {/* Image */}
                                            <div style={{ position: "relative" }}>
                                                {!hasImage && (
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) =>
                                                            handleImageUpload(
                                                                index,
                                                                e
                                                            )
                                                        }
                                                        style={{
                                                            position: "absolute",
                                                            inset: "0",
                                                            width: "100%",
                                                            height: "100%",
                                                            opacity: "0",
                                                            cursor: "pointer",
                                                            zIndex: "10",
                                                        }}
                                                    />
                                                )}
                                                <div
                                                    style={{
                                                        border: hasImage
                                                            ? "1px solid #ddd"
                                                            : "1px dashed #cfa209",
                                                        borderRadius: "8px",
                                                        textAlign: "center",
                                                        backgroundColor:
                                                            "transparent",
                                                        cursor: "pointer",
                                                        transition:
                                                            "all 0.2s ease",
                                                        height: "66px",
                                                        width: "102px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        position: "relative",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    {hasImage ? (
                                                        <>
                                                            <img
                                                                src={
                                                                    hasImage.url
                                                                }
                                                                alt="Uploaded preview"
                                                                style={{
                                                                    width: "100%",
                                                                    height:
                                                                        "100%",
                                                                    objectFit:
                                                                        "cover",
                                                                    borderRadius:
                                                                        "7px",
                                                                }}
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    removeImage(
                                                                        index
                                                                    )
                                                                }
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    top: "5px",
                                                                    right: "5px",
                                                                    background:
                                                                        "#ff8d91",
                                                                    border: "none",
                                                                    height:
                                                                        "25px",
                                                                    width:
                                                                        "25px",
                                                                    borderRadius:
                                                                        "50%",
                                                                    color:
                                                                        "white",
                                                                    cursor:
                                                                        "pointer",
                                                                    fontSize:
                                                                        "12px",
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    justifyContent:
                                                                        "center",
                                                                }}
                                                            >
                                                                ×
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection:
                                                                    "column",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    width: "50px",
                                                                    height: "50px",
                                                                    borderRadius:
                                                                        "50%",
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    justifyContent:
                                                                        "center",
                                                                }}
                                                            >
                                                                <Upload
                                                                    style={{
                                                                        width: "25px",
                                                                        height:
                                                                            "25px",
                                                                        color: "#f5d547",
                                                                    }}
                                                                />
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
                            {/* ✅ type submit */}
                            <button
                                type="submit"
                                className="auth-submit-btn mt-0 col-sm-12 col-md-6 col-lg-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;

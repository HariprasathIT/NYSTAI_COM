import { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faTrash,
  faArrowLeft,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Modal from "../Dialogbox/Modal";
import AnimatedDeleteButton from "./deletebutton";

const Productlist = () => {

  const inputRef = useRef(null);
  const { categoryId } = useParams(); // Get categoryId from URL

  // State management
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search and pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  // Modal states
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch category and its products
  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch all categories to get the specific one and its products
      const response = await fetch('https://nystai-com-dashboarad.onrender.com/api/categories/list');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const categories = await response.json();

      // Find the specific category by ID
      const category = categories.find(cat => cat.id === parseInt(categoryId));

      if (!category) {
        throw new Error('Category not found');
      }

      setCategoryName(category.name);
      setProducts(category.products || []);
      setFilteredProducts(category.products || []);

    } catch (err) {
      console.error('Error fetching category data:', err);
      setError('Failed to load category data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount or categoryId change
  useEffect(() => {
    if (categoryId) {
      fetchCategoryData();
    }
  }, [categoryId]);

  // Handle search functionality
  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.subName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when searching
  }, [searchTerm, products]);

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Delete product handler
  const handleDeleteProduct = async () => {
    if (!selectedProduct) return;

    try {
      setIsSubmitting(true);

      // Correct API call
      const response = await fetch(
        `https://nystai-com-dashboarad.onrender.com/api/products/delete/${selectedProduct.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Delete failed: ${response.status} - ${errorText}`);
      }

      // Update local state
      const updatedProducts = products.filter(
        (product) => product.id !== selectedProduct.id
      );
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts); // 👈 also update filtered list

      setIsDeleteOpen(false);
      setSelectedProduct(null);

      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  // Modal handlers
  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setIsDeleteOpen(true);
  };

  // Search handler
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Pagination handler
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Get product cover image
  const getProductCoverImage = (product) => {
    const coverImage = product.images?.find(img => img.type === 'cover');
    return coverImage?.imageUrl || "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/default-product.webp";
  };

  // Loading state
  if (loading) {
    return (
      <div className="card-container pt-0">
        <div className="text-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading products...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="card-container pt-0">
        <div className="alert alert-danger text-center" role="alert">
          <h4>Error Loading Products</h4>
          <p>{error}</p>
          <div className="mt-3">
            <button className="btn btn-primary me-2" onClick={fetchCategoryData}>
              Try Again
            </button>
            <Link to="/admin/add-category" className="btn btn-secondary">
              Back to Categories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card-container pt-0">
        <div className="student-course-header">
          <Link to="/admin/add-category" className="back-link">
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
              <h3 className="pt-2">{categoryName || 'Category Products'}</h3>
            </div>
          </Link>

          <div className="student-course-actions">
            <div className="search-container">
              <span className="search-icon">
                <FontAwesomeIcon icon={faSearch} className="icon-" />
              </span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search products..."
                className="search-input-dash"
                style={{ border: "none", outline: "none" }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {/* <Link to="/admin/add-category/Productlistdash/add-product" className="add-student-btn">
              <FontAwesomeIcon icon={faPlus} className="icon" />
              Add Product
            </Link> */}
            <Link to={`/admin/add-category/Productlistdash/${categoryId}/add-product`} className="add-student-btn">
              <FontAwesomeIcon icon={faPlus} className="icon" />
              Add Product
            </Link>

          </div>
        </div>

        {/* Product Grid */}
        <section>
          {currentProducts.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">
                {searchTerm ? `No products found for "${searchTerm}"` : "No products available in this category"}
              </p>
              {/* {!searchTerm && (
                <Link to="/admin/add-category/Productlistdash/add-product" className="auth-submit-btn p-3" style={{fontSize:"13px"}}>
                  Add Product
                </Link>
              )} */}
            </div>
          ) : (
            <div className="category-grid-product">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="category-card-product pt-3"
                  style={{ cursor: "pointer", position: "relative" }}
                >
                  <button
                    className="delete-btn-product"
                    onClick={(e) => {
                      e.stopPropagation();
                      openDeleteModal(product);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} style={{ fontSize: "15px" }} />
                  </button>

                  <Link to={`/admin/add-category/Productlistdash/${product.categoryId}/edit-product/${product.id}`}>
                    <img
                      src={getProductCoverImage(product)}
                      alt={product.name}
                      style={{
                        height: "130px",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.src = "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/default-product.webp";
                      }}
                    />
                    <div className="category-info-product">
                      <h3>{product.name}</h3>
                      <p>{(() => {
                        const text = product.coverDesc || product.mainDesc || "AI-powered indoor camera with motion detection, providing real-time alerts and advanced";
                        const words = text.split(' ');
                        return words.length > 12 ? words.slice(0, 12).join(' ') + '...' : text;
                      })()}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Delete Confirmation Modal */}
          <Modal
            isOpen={isDeleteOpen}
            onClose={() => setIsDeleteOpen(false)}
            size="sm"
            style={{ textAlign: "center" }}
          >
            <h4
              className="form-title pt-3"
              style={{ fontSize: "17px", fontWeight: "bold" }}
            >
              Delete Product
            </h4>
            <p style={{ fontSize: "15px", marginTop: "10px", textAlign: "center" }}>
              You're going to delete the Product{" "}
              <strong>{selectedProduct?.name}</strong>. Are you sure?
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
                disabled={isSubmitting}
              >
                <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ff4249" }} />
              </button>
              <AnimatedDeleteButton
                onClick={handleDeleteProduct}
                disabled={isSubmitting}
              />
            </div>
          </Modal>

          {/* Pagination - Only show if there are products and multiple pages */}
          {filteredProducts.length > 0 && totalPages > 1 && (
            <Stack spacing={2} style={{ alignItems: "center", marginTop: "20px" }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                hidePrevButton
                hideNextButton
                sx={{
                  '& .MuiPaginationItem-root.Mui-selected': {
                    backgroundColor: '#FF797E',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#FF797E',
                    },
                  },
                }}
              />
            </Stack>
          )}
        </section>
      </div>
    </>
  );
};

export default Productlist;
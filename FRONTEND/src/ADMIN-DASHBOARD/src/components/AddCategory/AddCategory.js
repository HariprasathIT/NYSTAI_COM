import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faArrowAltCircleUp,
  faTrash,
  faArrowLeft,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Modal from "../Dialogbox/Modal";
import AnimatedDeleteButton from "./deletebutton";

const AddCategory = () => {
  const inputRef = useRef(null);

  // State for categories from API
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(8); // 8 categories per page

  // Modal states
  const [isOpen, setIsOpen] = useState(false); // add category modal
  const [editModal, setEditModal] = useState(false); // edit category modal
  const [deleteModal, setDeleteModal] = useState(false); // delete confirm modal
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Form states
  const [fileName, setFileName] = useState("No file chosen");
  const [iconFileName, setIconFileName] = useState("No file chosen");
  const [formData, setFormData] = useState({
    name: '',
    banner: null,
    icon: null
  });

  // Edit form states
  const [editFileName, setEditFileName] = useState("No file chosen");
  const [editIconFileName, setEditIconFileName] = useState("No file chosen");
  const [editFormData, setEditFormData] = useState({
    name: '',
    banner: null,
    icon: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://nystai-com-dashboarad.onrender.com/api/categories/list');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCategories(data.sort((a, b) => a.id - b.id));
      setFilteredCategories(data.sort((a, b) => a.id - b.id));
      setError(null);
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError('Failed to load categories. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle search functionality
  useEffect(() => {
    const filtered = categories.filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(filtered);
    setCurrentPage(1); // Reset to first page when searching
  }, [searchTerm, categories]);

  // Calculate pagination
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstCategory, indexOfLastCategory);
  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

  // Modal handlers
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDeleteClick = (cat) => {
    setSelectedCategory(cat);
    setDeleteModal(true);
  };

  const [currentBannerUrl, setCurrentBannerUrl] = useState('');
  const [currentIconUrl, setCurrentIconUrl] = useState('');
  const [isBannerDeleted, setIsBannerDeleted] = useState(false);
  const [isIconDeleted, setIsIconDeleted] = useState(false);

  const handleEditClick = (cat) => {
    setSelectedCategory(cat);
    setEditFormData({
      name: cat.name,
      banner: null,
      icon: null
    });
    setEditFileName("No file chosen");
    setEditIconFileName("No file chosen");

    setCurrentBannerUrl(cat.bannerUrl || '');
    setCurrentIconUrl(cat.iconUrl || '');

    setIsBannerDeleted(false);
    setIsIconDeleted(false);

    setEditModal(true);
  };

  const confirmDelete = async () => {
    try {
      setIsSubmitting(true);
      const response = await fetch(`https://nystai-com-dashboarad.onrender.com/api/categories/delete/${selectedCategory.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Update local state - remove the deleted category
      const updatedCategories = categories.filter(cat => cat.id !== selectedCategory.id);
      setCategories(updatedCategories);

      setDeleteModal(false);
      setSelectedCategory(null);

      console.log("Category deleted successfully");
    } catch (error) {
      console.error('Error deleting category:', error);
      alert('Failed to delete category. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Edit category handler
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    if (!editFormData.name.trim()) {
      alert('Please enter a category name');
      return;
    }

    try {
      setIsSubmitting(true);

      const submitFormData = new FormData();
      submitFormData.append('name', editFormData.name.trim());

      // Only append files if they were selected
      if (editFormData.banner) {
        submitFormData.append('banner', editFormData.banner);
      }
      if (editFormData.icon) {
        submitFormData.append('icon', editFormData.icon);
      }

      const response = await fetch(`https://nystai-com-dashboarad.onrender.com/api/categories/update/${selectedCategory.id}`, {
        method: 'PUT',
        body: submitFormData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Category updated successfully:', result);

      // Refresh the categories list
      await fetchCategories();

      // Reset form and close modal
      setEditFormData({ name: '', banner: null, icon: null });
      setEditFileName("No file chosen");
      setEditIconFileName("No file chosen");
      setEditModal(false);
      setSelectedCategory(null);

    } catch (error) {
      console.error('Error updating category:', error);
      alert('Failed to update category. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // File upload handlers for Add form
  const handleBannerChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFormData(prev => ({ ...prev, banner: file }));
    } else {
      setFileName("No file chosen");
      setFormData(prev => ({ ...prev, banner: null }));
    }
  };

  const handleIconChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setIconFileName(file.name);
      setFormData(prev => ({ ...prev, icon: file }));
    } else {
      setIconFileName("No file chosen");
      setFormData(prev => ({ ...prev, icon: null }));
    }
  };

  // File upload handlers for Edit form
  const handleEditBannerChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setEditFileName(file.name);
      setEditFormData(prev => ({ ...prev, banner: file }));
    } else {
      setEditFileName("No file chosen");
      setEditFormData(prev => ({ ...prev, banner: null }));
    }
  };

  const handleEditIconChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setEditIconFileName(file.name);
      setEditFormData(prev => ({ ...prev, icon: file }));
    } else {
      setEditIconFileName("No file chosen");
      setEditFormData(prev => ({ ...prev, icon: null }));
    }
  };

  // Form input handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  // Add category handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('Please enter a category name');
      return;
    }

    if (!formData.banner || !formData.icon) {
      alert('Please upload both banner and icon images');
      return;
    }

    try {
      setIsSubmitting(true);

      const submitFormData = new FormData();
      submitFormData.append('name', formData.name.trim());
      submitFormData.append('banner', formData.banner);
      submitFormData.append('icon', formData.icon);

      const response = await fetch('https://nystai-com-dashboarad.onrender.com/api/categories/add', {
        method: 'POST',
        body: submitFormData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Category added successfully:', result);

      // Refresh the categories list
      await fetchCategories();

      // Reset form and close modal
      setFormData({ name: '', banner: null, icon: null });
      setFileName("No file chosen");
      setIconFileName("No file chosen");
      closeModal();

    } catch (error) {
      console.error('Error adding category:', error);
      alert('Failed to add category. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Search handler
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Pagination handler
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return (
      <div className="card-container pt-0">
        <div className="text-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading categories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card-container pt-0">
        <div className="text-center py-5 bg-white" style={{ borderRadius: "25px" }} role="alert">
          <h4>Error Loading Categories</h4>
          <p>{error}</p>
          <button className="auth-submit-btn mt-0 col-sm-12 col-md-6 col-lg-2" style={{ fontSize: "13px" }} onClick={fetchCategories}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card-container pt-0">
        <div className="student-course-header">
          <h3>Product Category</h3>
          <div className="student-course-actions">
            {/* Search container */}
            <div className="search-container">
              <span className="search-icon">
                <FontAwesomeIcon icon={faSearch} className="icon-" />
              </span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search categories..."
                className="search-input-dash"
                style={{ border: "none", outline: "none" }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {/* Add category button */}
            <Link onClick={openModal} className="add-student-btn">
              <FontAwesomeIcon icon={faPlus} className="icon" />
              Add Category
            </Link>
          </div>
        </div>

        {/* Modal for Adding New Category */}
        <Modal isOpen={isOpen} onClose={closeModal} className="custom-modal" size="sm">
          <h4 className="form-title pt-3">Add Category</h4>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-body p-0" style={{ overflow: "hidden" }}>
              <div className="form-group mt-1">
                <label>Category Title</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Hybrid AIoT NVR..."
                  style={{ backgroundColor: "#f5f5f5", border: "1px solid #d8d8d8" }}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="row g-2 p-0">
                <div className="col-md-8">
                  <div className="form-group mt-3">
                    <label>Banner Image Upload</label>
                    <div style={{ border: "1px solid #d8d8d8", padding: "8px", borderRadius: "10px" }}>
                      <div className="file-upload-box">
                        <input
                          type="file"
                          id="bannerUpload"
                          accept="image/*"
                          onChange={handleBannerChange}
                          disabled={isSubmitting}
                        />
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
                      <input
                        type="file"
                        id="iconUpload"
                        accept="image/*"
                        onChange={handleIconChange}
                        disabled={isSubmitting}
                      />
                      <label htmlFor="iconUpload" style={{ cursor: "pointer" }}>
                        <span className="file-btn" style={{ border: "none" }}>
                          <FontAwesomeIcon
                            icon={faArrowAltCircleUp}
                            style={{ fontSize: "35px", color: "#555555" }}
                          />
                        </span>
                      </label>
                    </div>
                    {iconFileName !== "No file chosen" && (
                      <small className="text-muted" style={{ fontSize: "13px" }}>{iconFileName}</small>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-actions">
              <button
                type="submit"
                className="btn-submit text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating...' : 'Create'}
              </button>
            </div>
          </form>
        </Modal>

        {/* Modal for Editing Category */}
        <Modal isOpen={editModal} onClose={() => setEditModal(false)} className="custom-modal" size="sm">
          <h4 className="form-title pt-3">Edit Category</h4>
          <form className="form" onSubmit={handleEditSubmit}>
            <div className="form-body p-0" style={{ overflow: "hidden" }}>
              <div className="form-group mt-1">
                <label>Category Title</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Hybrid AIoT NVR..."
                  style={{ backgroundColor: "#f5f5f5", border: "1px solid #d8d8d8" }}
                  value={editFormData.name}
                  onChange={handleEditInputChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="row g-2 p-0">
                <div className="col-md-8">
                  <div className="form-group mt-3">
                    <label>Banner Image Upload</label>
                    {currentBannerUrl && !isBannerDeleted && (
                      <div style={{ position: 'relative', marginBottom: '10px' }}>
                        <img src={currentBannerUrl} alt="Banner" style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', height: "50px" }} />
                        <button
                          type="button"
                          onClick={() => { setIsBannerDeleted(true); setCurrentBannerUrl(''); }}
                          style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            background: '#ff4249',
                            border: 'none',
                            color: 'white',
                            borderRadius: '50%',
                            width: '25px',
                            height: '25px',
                            cursor: 'pointer'
                          }}
                        >
                          &times;
                        </button>
                      </div>
                    )}
                    <div style={{ border: "1px solid #d8d8d8", padding: "8px", borderRadius: "10px" }}>
                      <div className="file-upload-box">
                        <input
                          type="file"
                          id="editBannerUpload"
                          accept="image/*"
                          onChange={handleEditBannerChange}
                          disabled={isSubmitting}
                        />
                        <label htmlFor="editBannerUpload" className="file-label">
                          <span className="file-btn">Upload new</span>
                          <span className="file-text">{editFileName}</span>
                        </label>
                      </div>
                      {isBannerDeleted && !editFormData.banner && (
                        <small style={{ color: '#ff4249', fontSize:"10px" }}>You must select a new banner image.</small>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mt-3">
                    <label>Icon Upload</label>
                    {currentIconUrl && !isIconDeleted && (
                      <div style={{ position: 'relative', marginBottom: '10px' }}>
                        <img src={currentIconUrl} alt="Icon" style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover', height: "50px" }} />
                        <button
                          type="button"
                          onClick={() => { setIsIconDeleted(true); setCurrentIconUrl(''); }}
                          style={{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            background: '#ff4249',
                            border: 'none',
                            color: 'white',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            cursor: 'pointer'
                          }}
                        >
                          &times;
                        </button>
                      </div>
                    )}
                    <div className="file-upload-box">
                      <input
                        type="file"
                        id="editIconUpload"
                        accept="image/*"
                        onChange={handleEditIconChange}
                        disabled={isSubmitting}
                      />
                      <label htmlFor="editIconUpload" style={{ cursor: "pointer" }}>
                        <span className="file-btn" style={{ border: "none" }}>
                          <FontAwesomeIcon
                            icon={faArrowAltCircleUp}
                            style={{ fontSize: "35px", color: "#555555" }}
                          />
                        </span>
                      </label>
                      {isIconDeleted && !editFormData.icon && (
                        <small style={{ color: '#ff4249', fontSize:"10px" }}>You must select a new icon image.</small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-actions">
              <button
                type="submit"
                className="btn-submit text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Updating...' : 'Update'}
              </button>
            </div>
          </form>
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)} className="custom-modal" size="sm">
          <h4 className="pt-3" style={{ fontSize: "17px", fontWeight: "bold", textAlign: "center" }}>
            Delete Category
          </h4>
          <p className="text-center" style={{ fontSize: "15px", marginTop: "10px", textAlign: "center" }}>
            Are you sure you want to delete the Category <b>{selectedCategory?.name}</b>?
          </p>
          <div className="form-actions">
            <button onClick={() => setDeleteModal(false)} className="btn-cancel">
              <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ff4249" }} />
            </button>
            <AnimatedDeleteButton onClick={confirmDelete} disabled={isSubmitting} />
          </div>
        </Modal>

        <section className="category-section">
          <div className="category-container">
            {currentCategories.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted">
                  {searchTerm ? `No categories found for "${searchTerm}"` : "No categories available"}
                </p>
              </div>
            ) : (
              <div className="category-grid">
                {currentCategories.map((cat) => (
                  <div key={cat.id} className="category-card" style={{ cursor: "pointer", position: "relative" }}>
                    {/* Edit Button - Left Side */}
                    <button className="edit-btn" onClick={() => handleEditClick(cat)}>
                      <FontAwesomeIcon icon={faEdit} style={{ fontSize: "13px" }} />
                    </button>

                    {/* Delete Button - Right Side */}
                    <button className="delete-btn" onClick={() => handleDeleteClick(cat)}>
                      <FontAwesomeIcon icon={faTrash} style={{ fontSize: "13px" }} />
                    </button>

                    <Link to={`/admin/add-category/Productlistdash/${cat.id}`} className="add-student-btn">
                      <div className="category-image-wrapper">
                        <img src={cat.iconUrl || "/IMAGES-VIDEOS/1A-ADMIN_DASHBOARD/sample-icon.png"} alt={cat.name} style={{ width: "100px" }} />
                      </div>
                      <div className="category-info pt-3">
                        <h3>{cat.name}</h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Show pagination only if there are categories and more than one page */}
          {filteredCategories.length > 0 && totalPages > 1 && (
            <Stack
              spacing={2}
              style={{ alignItems: "center", marginTop: "20px", backgroundColor: "transparent" }}
            >
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

export default AddCategory;
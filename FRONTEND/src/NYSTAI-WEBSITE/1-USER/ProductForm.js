import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductForm() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    starPoints: "",
    shortDesc: "",
    fullDesc: "",
    categoryId: "",
    cardImage: null,
    galleryImages: [],
    keyFeatures: [""],
    smartFeatures: [{ text: "", icon: null }],
  });

  // Fetch categories for dropdown
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.files }));
  };

  const handleSingleFile = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };

  // Dynamic key features
  const handleKeyFeatureChange = (index, value) => {
    const updated = [...formData.keyFeatures];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, keyFeatures: updated }));
  };

  const addKeyFeature = () => {
    setFormData((prev) => ({
      ...prev,
      keyFeatures: [...prev.keyFeatures, ""],
    }));
  };

  // Dynamic smart features
  const handleSmartFeatureChange = (index, field, value) => {
    const updated = [...formData.smartFeatures];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, smartFeatures: updated }));
  };

  const addSmartFeature = () => {
    setFormData((prev) => ({
      ...prev,
      smartFeatures: [...prev.smartFeatures, { text: "", icon: null }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("code", formData.code);
    data.append("starPoints", formData.starPoints);
    data.append("shortDesc", formData.shortDesc);
    data.append("fullDesc", formData.fullDesc);
    data.append("categoryId", formData.categoryId);

    if (formData.cardImage) {
      data.append("cardImage", formData.cardImage);
    }

    // Gallery images
    for (let i = 0; i < formData.galleryImages.length; i++) {
      data.append("galleryImages", formData.galleryImages[i]);
    }

    // Key features
    formData.keyFeatures.forEach((kf) => data.append("keyFeatures", kf));

    // Smart features + icons
    formData.smartFeatures.forEach((sf, i) => {
      data.append("smartFeatures", sf.text);
      if (sf.icon) {
        data.append("smartIcons", sf.icon);
      }
    });

    try {
      const res = await axios.post("http://localhost:5000/api/products", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Product created successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to create product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 border rounded space-y-3"
    >
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="text"
        name="code"
        placeholder="Product Code"
        value={formData.code}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="number"
        name="starPoints"
        placeholder="Star Points"
        value={formData.starPoints}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <textarea
        name="shortDesc"
        placeholder="Short Description"
        value={formData.shortDesc}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <textarea
        name="fullDesc"
        placeholder="Full Description"
        value={formData.fullDesc}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <select
        name="categoryId"
        value={formData.categoryId}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* Card Image */}
      <label className="block">Card Image</label>
      <input
        type="file"
        name="cardImage"
        onChange={handleSingleFile}
        className="w-full"
      />

      {/* Gallery Images */}
      <label className="block">Gallery Images</label>
      <input
        type="file"
        name="galleryImages"
        multiple
        onChange={handleFileChange}
        className="w-full"
      />

      {/* Key Features */}
      <div>
        <label className="block font-semibold">Key Features</label>
        {formData.keyFeatures.map((kf, i) => (
          <input
            key={i}
            type="text"
            value={kf}
            onChange={(e) => handleKeyFeatureChange(i, e.target.value)}
            placeholder={`Feature ${i + 1}`}
            className="w-full p-2 border rounded mb-2"
          />
        ))}
        <button
          type="button"
          onClick={addKeyFeature}
          className="bg-gray-200 px-2 py-1 rounded"
        >
          + Add Feature
        </button>
      </div>

      {/* Smart Features */}
      <div>
        <label className="block font-semibold">Smart Features</label>
        {formData.smartFeatures.map((sf, i) => (
          <div key={i} className="flex space-x-2 mb-2">
            <input
              type="text"
              value={sf.text}
              onChange={(e) =>
                handleSmartFeatureChange(i, "text", e.target.value)
              }
              placeholder={`Smart Feature ${i + 1}`}
              className="flex-1 p-2 border rounded"
            />
            <input
              type="file"
              onChange={(e) =>
                handleSmartFeatureChange(i, "icon", e.target.files[0])
              }
              className="flex-1"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addSmartFeature}
          className="bg-gray-200 px-2 py-1 rounded"
        >
          + Add Smart Feature
        </button>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Product
      </button>
    </form>
  );
}

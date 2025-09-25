import { useState, useEffect } from "react";
import axios from "axios";

export default function CategoryForm() {
  const [name, setName] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error("❌ Error fetching categories:", err);
    }
  };

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/categories", {
        name,
        bannerUrl,
      });
      setName("");
      setBannerUrl("");
      fetchCategories();
    } catch (err) {
      console.error("❌ Error adding category:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4 border rounded space-y-3">
      <h2 className="text-xl font-bold">Add Category</h2>
      <form onSubmit={addCategory} className="space-y-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          value={bannerUrl}
          onChange={(e) => setBannerUrl(e.target.value)}
          placeholder="Banner Image URL"
          className="w-full p-2 border rounded"
        />
        {bannerUrl && (
          <img src={bannerUrl} alt="preview" className="w-32 rounded" />
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add
        </button>
      </form>

      <h3 className="text-lg font-semibold mt-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((c) => (
          <li key={c.id} className="flex items-center space-x-2">
            <span>{c.name}</span>
            {c.bannerUrl && (
              <img src={c.bannerUrl} alt="" className="w-20 rounded" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

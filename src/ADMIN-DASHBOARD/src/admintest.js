// src/AdminDashboard/AdminRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminApp";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import AddCategory from "./components/AddCategory/AddCategory";
import Role from "./components/Role/Role";
import { Outlet, Link } from "react-router-dom";
import Productlist from "./components/AddCategory/productlist";
const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDashboard />}>
          <Route path="register" element={<Register />} />
          <Route path="products" element={<Products />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route
            path="/admin/add-category/Productlistdash"
            element={<Productlist />}
          />
          <Route path="role" element={<Role />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;

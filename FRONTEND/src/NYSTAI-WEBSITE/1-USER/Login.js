import React, { useState } from "react";
import API from "../../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          type="email"
          required
        />
        <br />
        <input
          name="password"
          placeholder="Password"
          onChange={handleChange}
          type="password"
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

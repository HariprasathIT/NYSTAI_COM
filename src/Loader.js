import AsyncImage from "react-async-image";

import LazyImage from "../common/LazyImage";

import React from "react";
import "./App.css";
// import loaderGif from "../src/NYSTAI-WEBSITE/IMAGES-VIDEOS/logogif.gif"  // ❌ removed (use /public path instead)

const Preloader = () => (
  <div className="loader-container">
    <AsyncImage src={loaderGif} alt="Loading..." />
  </div>
);

export default Preloader;

import AsyncImage from "react-async-image";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Homeslider.css";
import { Blur } from "transitions-kit";

const bannerData = [
  {
    src: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/smarthome-banner.webp",
    title: "SMART HOME",
    desc: "SMART HOME From the everyday safety & security to the totally unforgettable, know what’s happening at home from wherever you are.",
  },
  {
    src: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/Fire-alarm-Banner.webp",
    title: "FIRE ALARM",
    desc: "No additional IT infrastructure is required, which results in reduced CAPEX & OPEX costs.",
  },
  {
    src: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/video-and-alarm-banner.webp",
    title: "VIDEO & ALARM LINKAGE",
    desc: "Seamlessly integrates with all third-party devices & networks from all brands at no extra cost.",
  },
  {
    src: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/Intruder-alarm-banner.webp",
    title: "INTRUDER ALARM",
    desc: "Better protection starts with smarter prevention using light and sound to scare away lurkers before they become burglars.",
  },
  {
    src: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/Industrial-banner.webp",
    title: "INDUSTRIAL",
    desc: "Increase situational awareness with multi-dimensional Alarm & Reduce property loss with risk detection and evacuation.",
  },
  {
    src: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/warehouse-banner.webp",
    title: "WARE HOUSE",
    desc: "No additional IT infrastructure is required, which results in reduced CAPEX & OPEX costs.",
  },
  {
    src: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/Banking-Banner.webp",
    title: "BANKING",
    desc: "Advanced security solutions tailored for the banking sector.",
  },
  {
    src: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/Access-Control-banner.webp",
    title: "ACCESS CONTROL",
    desc: "Smart and secure access management for any facility.",
  },
];

export default function Trial() {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const thumbnailRef = useRef(null);
  const runTimeOutRef = useRef(null);
  const runNextAutoRef = useRef(null);
  const timeRunning = 1000;
  const timeAutoNext = 4000;

  useEffect(() => {
    const autoNextSlide = () => nextBtnRef.current.click();

    const resetAutoPlay = () => {
      clearTimeout(runNextAutoRef.current);
      runNextAutoRef.current = setTimeout(autoNextSlide, timeAutoNext);
    };

    const showSlider = (type) => {
      const slider = sliderRef.current;
      const thumbnails = thumbnailRef.current;
      const sliderItems = slider.querySelectorAll(".item");
      const thumbnailItems = thumbnails?.querySelectorAll(".item");

      if (type === "next") {
        slider.appendChild(sliderItems[0]);
        if (thumbnailItems?.length) thumbnails.appendChild(thumbnailItems[0]);
        carouselRef.current.classList.add("next");
      } else {
        slider.prepend(sliderItems[sliderItems.length - 1]);
        if (thumbnailItems?.length)
          thumbnails.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carouselRef.current.classList.add("prev");
      }

      clearTimeout(runTimeOutRef.current);
      runTimeOutRef.current = setTimeout(() => {
        carouselRef.current.classList.remove("next");
        carouselRef.current.classList.remove("prev");
      }, timeRunning);

      resetAutoPlay();
    };

    nextBtnRef.current.onclick = () => showSlider("next");
    prevBtnRef.current.onclick = () => showSlider("prev");

    runNextAutoRef.current = setTimeout(autoNextSlide, timeAutoNext);

    return () => clearTimeout(runNextAutoRef.current);
  }, []);

  return (
    <>
      <div
        className="carousel-nystai-home1"
        ref={carouselRef}
        style={{ overflow: "hidden", position: "relative" }}
      >
        <div className="list " ref={sliderRef}>
          {bannerData.map((banner, index) => (
            <div className="item " key={index}>
              <AsyncImage
                className="img w-100"
                alt={banner.title}
                src={banner.src}
                Transition={Blur}
                loader={<div style={{ background: "#888" }} />}
              />
              <div className="content">
                <div className="bar-item-text-line"></div>
                <div className="title">{banner.title}</div>
                <div className="des">{banner.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="navigation">
          <button ref={prevBtnRef} id="prev" className="nav-btn prev">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button ref={nextBtnRef} id="next" className="nav-btn next">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>

        {/* Thumbnail Section Placeholder (optional) */}
        <div className="thumbnail-nystai-slider-home1" ref={thumbnailRef}>
          {/* Optional thumbnails go here */}
        </div>
      </div>
    </>
  );
}

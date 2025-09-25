import React from "react";
import "./sample.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Tabsliderpro() {
  const [currentBanner, setCurrentBanner] = useState(1);

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner % 5) + 1);
    }, 10000);

    return () => {
      clearInterval(bannerTimer);
    };
  }, []);

  useEffect(() => {
    const nextBanner = document.getElementById(`banner${currentBanner}`);
    if (nextBanner) nextBanner.click();
  }, [currentBanner]);

  return (
    <>
      <section className="container hover-tab-body-nystai mt-4 mb-4">
        <section id="section-1" className="p-0">
          <div className="content-slider">
            <input
              type="radio"
              id="banner1"
              className="sec-1-input"
              name="banner"
              defaultChecked
            />
            <input
              type="radio"
              id="banner2"
              className="sec-1-input"
              name="banner"
            />
            <input
              type="radio"
              id="banner3"
              className="sec-1-input"
              name="banner"
            />
            <div class="slider">
              <div id="top-banner-1" class="banner">
                <div class="banner-inner-wrapper">
                  <h2> Challenges Without Warehouse Automation</h2>
                  <p>
                    Warehouse safety is often overlooked, causing accidents,
                    injuries, and equipment damage. Poor visibility and
                    communication increase risks, while weak protocols lead to
                    inefficiencies, higher operational costs, and reduced
                    employee safety and productivity.
                  </p>
                </div>
              </div>
              <div id="top-banner-2" class="banner">
                <div class="banner-inner-wrapper">
                  <h2> How These Solutions Provide Benefits for Warehouse</h2>
                  <p>
                    Advanced safety products like anti-collision systems,
                    forklift lights, and 4G helmets enhance visibility and
                    communication. These tools prevent accidents, boost
                    situational awareness, and ensure real-time alerts,
                    improving safety, efficiency, and response during
                    emergencies.
                  </p>
                </div>
              </div>
              <div id="top-banner-3" class="banner">
                <div class="banner-inner-wrapper">
                  <h2>
                    {" "}
                    How NYSTAI Products Resolve These Issues for Warehouse:
                  </h2>
                  <p>
                    ChatGPT said: NYSTAI’s warehouse safety solutions feature
                    alert systems, emergency lighting, and advanced devices that
                    protect workers and equipment in real time. By improving
                    visibility and communication, NYSTAI reduces accidents and
                    ensures safe, efficient warehouse operations.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="controls mb-1">
                <label htmlFor="banner1">
                  <span className="progressbar">
                    <span className="progressbar-fill"></span>
                  </span>
                  <p className="spantext">
                    <a class="link">
                      <svg
                        viewBox="0 0 200 200"
                        width="200"
                        height="200"
                        xmlns="http://www.w3.org/2000/svg"
                        class="link__svg"
                        aria-labelledby="link1-title link1-desc"
                      >
                        <path
                          id="link-circle"
                          class="link__path"
                          d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                          stroke="none"
                          fill="none"
                        />
                        <path
                          class="link__arrow"
                          d="M 100 125 L 100 75 L 85 90 M 100 75 L 115 90"
                          stroke="black"
                          fill="none"
                          stroke-width="2"
                        />
                        <text class="link__text">
                          <textPath href="#link-circle" stroke="none">
                            CLICK TO KNOW WAREHOUSE
                          </textPath>
                        </text>
                      </svg>
                    </a>
                  </p>
                  <p class="h6 fw-bold">Challenges</p>
                </label>
                <label htmlFor="banner2">
                  <span className="progressbar">
                    <span className="progressbar-fill"></span>
                  </span>{" "}
                  <p className="spantext">
                    <a class="link">
                      <svg
                        viewBox="0 0 200 200"
                        width="200"
                        height="200"
                        xmlns="http://www.w3.org/2000/svg"
                        class="link__svg"
                        aria-labelledby="link1-title link1-desc"
                      >
                        <path
                          id="link-circle"
                          class="link__path"
                          d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                          stroke="none"
                          fill="none"
                        />
                        <path
                          class="link__arrow"
                          d="M 100 125 L 100 75 L 85 90 M 100 75 L 115 90"
                          stroke="black"
                          fill="none"
                          stroke-width="2"
                        />
                        <text class="link__text">
                          <textPath href="#link-circle" stroke="none">
                            CLICK TO KNOW WAREHOUSE
                          </textPath>
                        </text>
                      </svg>
                    </a>
                  </p>
                  <p class="h6 fw-bold">Solution</p>
                </label>
                <label htmlFor="banner3">
                  <span className="progressbar">
                    <span className="progressbar-fill"></span>
                  </span>
                  <p className="spantext">
                    <a class="link">
                      <svg
                        viewBox="0 0 200 200"
                        width="200"
                        height="200"
                        xmlns="http://www.w3.org/2000/svg"
                        class="link__svg"
                        aria-labelledby="link1-title link1-desc"
                      >
                        <path
                          id="link-circle"
                          class="link__path"
                          d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                          stroke="none"
                          fill="none"
                        />
                        <path
                          class="link__arrow"
                          d="M 100 125 L 100 75 L 85 90 M 100 75 L 115 90"
                          stroke="black"
                          fill="none"
                          stroke-width="2"
                        />
                        <text class="link__text">
                          <textPath href="#link-circle" stroke="none">
                            CLICK TO KNOW WAREHOUSE
                          </textPath>
                        </text>
                      </svg>
                    </a>
                  </p>
                  <p class="h6 fw-bold">Nystai Solution</p>
                </label>

                <div className="line-tab-solu"></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

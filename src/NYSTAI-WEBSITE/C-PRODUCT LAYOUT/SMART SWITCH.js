import AsyncImage from "react-async-image";
import LazyImage from "../common/LazyImage";
import React, { useState, useEffect } from "react";
import "./sample.css";
import { products } from "../C-PRODUCT LAYOUT/datass.js";
import Footerproduct from "../A-LAYOUT/footer";
import { Link } from "react-router-dom";

export default function SMARTSWITCH() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    [6].includes(product.category)
  );

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <>
      <section className="">
        <AsyncImage
          src={
            "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/smart-switch-banner-3.webp"
          }
          className="img-fluid w-100"
        />
      </section>

      {/* <section className="icons-pro-des">
                <h1>Smart features included</h1>
                <div className="rrmc-rich-text-divider-line"></div>
                <div className="mb-5 mt-4">
                    <div class="icons-row-card-nys">
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon1} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Cloud storage </small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon2} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Download & share video clips </small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon3} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Full HD video </small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon4} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">In built device alarm</small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon5} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Lifetime call & field support</small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon5} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Lifetime call & field support</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="">
                    <div class=" icons-row-card-nys">
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon7} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Motion senstivity control </small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon8} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Perimeter zoning</small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon9} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Person detection </small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon10} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Record live</small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon11} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Simultaneous viewing</small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <AsyncImage src={icon11} className="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Simultaneous viewing</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

      <div className="mt-4 mb-5">
        <h3 className="mb-4" style={{ color: "#1b6763", fontWeight: "bolder" }}>
          SMARTSWITCH
        </h3>
        <div className="prod-row-card-nys">
          {filteredProducts.map((product) => (
            <div className="prod-column-card-nys mb-2" key={product.id}>
              <div
                className="card pro_card-des"
                onClick={() => handleCardClick(product)}
              >
                <div className="image-container">
                  <AsyncImage
                    alt="Product"
                    src={product.image}
                    className="img-fluid rounded thumbnail-image"
                  />
                </div>
                <div className="card-body product-detail-container">
                  <h6>{product.title}</h6>
                  <p>{product.Cardsingleword}</p>
                  <p className="dress-name">{product.Cardthreeword}</p>
                  <div className="d-flex justify-content-between align-items-end btn-modaln">
                    <h5 className="dress-name1">{product.ModelNumber}</h5>
                    <div className="product-detail">
                      <button className="btn pulse">MORE INFO</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <section className="modal-pro">
              <div class="card-wrapper ">
                <div class="card">
                  {/* Close Button */}
                  <button
                    onClick={handleCloseModal}
                    className="close-button"
                    aria-label="Close Modal"
                  >
                    &times;
                  </button>
                  <div class="product-imgs">
                    <div class="img-display">
                      <div class="img-showcase">
                        <AsyncImage
                          src={selectedProduct.modalimage1}
                          alt="shoe image /"
                        />
                      </div>
                    </div>
                    <div class="img-select">
                      <div class="img-item">
                        <a data-id="1">
                          <AsyncImage
                            src={selectedProduct.modalimage1}
                            alt="shoe image /"
                          />
                        </a>
                      </div>
                      <div class="img-item">
                        <a data-id="2">
                          <AsyncImage
                            src={selectedProduct.modalimage1}
                            alt="shoe image /"
                          />
                        </a>
                      </div>
                      <div class="img-item">
                        <a data-id="3">
                          <AsyncImage
                            src={selectedProduct.modalimage1}
                            alt="shoe image /"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="product-content">
                    <h2 class="product-title">{selectedProduct.title}</h2>
                    <h5 className="mb-3 smart-features-head">
                      Smart Features:
                    </h5>
                    <div className="social-links">
                      <div>
                        <a>
                          <AsyncImage
                            src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.webp"
                            className="img-fluid"
                          />
                        </a>
                        <p>Cloud</p>
                      </div>
                      <div>
                        <a>
                          <AsyncImage
                            src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.webp"
                            className="img-fluid"
                          />
                        </a>
                        <p>AI</p>
                      </div>
                      <div>
                        <a>
                          <AsyncImage
                            src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.webp"
                            className="img-fluid"
                          />
                        </a>
                        <p>Video</p>
                      </div>
                      <div>
                        <a>
                          <AsyncImage
                            src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.webp"
                            className="img-fluid"
                          />
                        </a>
                        <p>Wi-fi</p>
                      </div>
                      <div>
                        <a>
                          <AsyncImage
                            src="/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.webp"
                            className="img-fluid"
                          />
                        </a>
                        <p>Sensor</p>
                      </div>
                    </div>
                    <div className="product-detail">
                      <p>{selectedProduct.modalDescriptionp}</p>
                      <div className="product-detail-keypoints">
                        <h5>Key Features:</h5>
                        <ul>
                          <li>{selectedProduct.Mkeyone}</li>
                          <li>{selectedProduct.Mkeytwo}</li>
                          <li>{selectedProduct.MkeyTHREE}</li>
                          <li>{selectedProduct.MkeyFOUR}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="purchase-info ">
                      <Link to="/swichdet">
                        <button type="button" class="btn">
                          Know More<i class="fas fa-shopping-cart"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      <Footerproduct />
    </>
  );
}

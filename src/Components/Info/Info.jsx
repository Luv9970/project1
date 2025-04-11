import React, { useState } from "react";
import "./Info.css";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-page">
      <div className="product-main">
        <div className="product-image">
          <img src="light-gray-top.jpg" alt="Light Gray Top" />
          <div className="thumbnail-images">
            <img src="thumb1.jpg" alt="thumb1" />
            <img src="thumb2.jpg" alt="thumb2" />
            <img src="thumb3.jpg" alt="thumb3" />
            <img src="thumb4.jpg" alt="thumb4" />
          </div>
        </div>

        <div className="product-info">
          <p className="collection-title">MINIMAL WOMEN COLLECTION</p>
          <h1 className="product-title">Light Gray Top for Women</h1>
          <p className="price">
            <span className="original-price">$60</span>
            <span className="sale-price">$40</span>
          </p>

          <div className="size-selection">
            <p>SELECT SIZE <a href="#">See Chart</a></p>
            <div className="sizes">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-actions">
            <button className="wishlist-btn">♡ WISHLIST</button>
            <button className="cart-btn">ADD TO CART</button>
          </div>

          <div className="product-details">
            <p><strong>PRODUCT DETAILS</strong></p>
            <p>Light Grey solid Top, has a boat neck, 3/4 sleeves</p>
            <p><strong>MATERIAL & CARE</strong></p>
            <ul>
              <li>Cotton</li>
              <li>Machine-wash</li>
            </ul>
            <p><strong>SOLD BY</strong></p>
            <p><a href="#">Wind & Store, Stillwater</a></p>
            <p>95% Positive Feedback</p>
            <p>All Products come with 3 months Warranty</p>
          </div>
        </div>
      </div>

      <div className="similar-products">
        <h2>Similar Products</h2>
        <div className="similar-grid">
          <div className="similar-item">
            <img src="navy-dots-top.jpg" alt="Navy Dots" />
            <p>Navy Blue Dots Basic Top</p>
            <span>$39</span>
          </div>
          <div className="similar-item">
            <img src="black-top.jpg" alt="Black Top" />
            <p>Minimal Black Top</p>
            <span>$35</span>
          </div>
          <div className="similar-item">
            <img src="nautical-top.jpg" alt="Nautical" />
            <p>Blue Nautical Top</p>
            <span>$32</span>
          </div>
          <div className="similar-item">
            <img src="checked-top.jpg" alt="Checked" />
            <p>Navy Blue Checked Top</p>
            <span>$42</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
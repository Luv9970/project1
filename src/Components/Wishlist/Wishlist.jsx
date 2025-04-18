import React from "react";
import "./Wishlist.css";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

const WishlistPage = () => {
  const wishlistItems = [
    {
      name: "Beanie with Logo",
      price: 18.0,
      image: "beanie-logo.jpg",
      stock: "In Stock",
    },
    {
      name: "Classy shirt",
      price: 16.0,
      image: "classy-shirt.jpg",
      stock: "In Stock",
    },
    {
      name: "Beanie",
      price: 18.0,
      image: "beanie.jpg",
      stock: "In Stock",
    },
  ];

  return (
    <div className="wishlist-page">
      <div className="wishlist-navbar">
        <NavLink to="/Home" className="back-link">
          <p className="breadcrumb">
            <IoIosArrowBack />
          </p>
        </NavLink>

        <NavLink to="/Cart" className="navlink">
          <div className="navbar-item">
            {/* Cart */}
            <div className="navbar-icon">
              <HiOutlineShoppingCart />
            </div>
          </div>
        </NavLink>
      </div>

      <div className="wishlist-header">
        <div className="wishlist-icon">♡</div>
        <h1>My Wishlist</h1>
      </div>

      <div className="wishlist-table">
        <div className="wishlist-row header">
          <span>Product name</span>
          <span>Unit price</span>
          <span>Stock status</span>
        </div>

        {wishlistItems.map((item, index) => (
          <div className="wishlist-row" key={index}>
            <div className="product-info">
              <button className="remove-btn">Remove</button>
              <img src={item.image} alt={item.name} className="product-image" />
              <span>{item.name}</span>
            </div>
            <div className="price-info">
              {item.originalPrice && (
                <span className="original-price">
                  ${item.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="sale-price">${item.price.toFixed(2)}</span>
            </div>
            <div className="stock-info">
              <p>{item.stock}</p>
              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;

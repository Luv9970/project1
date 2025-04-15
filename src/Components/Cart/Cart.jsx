import React from "react";
import "./Cart.css";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ShoppingCart = () => {

  const [increase, setincrease] = useState(1)
  const [decrease, setdecrease] = useState(1)
  const handleIncrease = () => {
    setincrease((increase)=>( increase + 1));
  };

  const handleDecrease = () => {
    if (increase > 1) {
      setdecrease(increase - 1);
    }
  }




  const items = [
    {
      name: "FERGUS STRAP AUTOMATIC 42MM",
      itemNo: "796483117334",
      size: "OS",
      price: 297.5,
      image: "fergus-watch.jpg",
    },
    {
      name: "NEW Q ZIPPERS HUGE HILLIER HOBO",
      itemNo: "888877826172",
      size: "1SZ",
      price: 598.0,
      image: "hillier-hobo.jpg",
    },
    {
      name: "BAKER 36MM",
      itemNo: "796483092149",
      size: "OS",
      price: 190.0,
      image: "baker-watch.jpg",
    },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="main-cart">
      <div className="cart-header">
        <NavLink to="/Home" className="back-link">
          <p className="breadcrumb">
            <IoIosArrowBack />
          </p>
        </NavLink>
      </div>
      <div className="shopping-cart">
        <div className="cart-items">
          <h2 className="section-title">MY SHOPPING BAG</h2>
          {items.map((item, index) => (
            <div key={index} className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-meta">ITEM NO: {item.itemNo}</p>
                <p className="item-meta">SIZE: {item.size}</p>
                <div className="item-price">
                  <span className="original-price">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <div className="item-actions">
                  <div className="modify-group">
                    <button className="action-button1">delete</button>
                    <button className="action-button2">Edit</button>
                  </div>

                  <div className="quantity-group">
                    <button className="quantity-button" onClick={handleDecrease} >-</button>
                      <input type="text" className="quantity-input" value={increase} onChange={handleIncrease}  />
                    <button className="quantity-button" onClick={handleIncrease}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="summary-box">
          <h3 className="summary-title">SUMMARY</h3>
          <p className="summary-text">Do you have a promo code?</p>
          <div className="promo-code">
            <input
              type="text"
              placeholder="Enter code"
              className="promo-input"
            />
            <button className="promo-button">APPLY</button>
          </div>
          <div className="summary-details">
            <div className="summary-row">
              <span>SUBTOTAL</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>TBD</span>
            </div>
            <div className="summary-row">
              <span>Sales Tax</span>
              <span>TBD</span>
            </div>
          </div>
          <div className="summary-total">
            <span>ESTIMATED TOTAL</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="checkout-button">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

import React from "react";
import "./Cart.css";

const ShoppingCart = () => {
  const items = [
    {
      name: "FERGUS STRAP AUTOMATIC 42MM",
      itemNo: "796483117334",
      size: "OS",
      color: "SILVER/BLACK/TAN",
      price: 297.5,
      originalPrice: 425.0,
      image: "fergus-watch.jpg",
    },
    {
      name: "NEW Q ZIPPERS HUGE HILLIER HOBO",
      itemNo: "888877826172",
      size: "1SZ",
      color: "BLACK MULTI",
      price: 598.0,
      image: "hillier-hobo.jpg",
    },
    {
      name: "BAKER 36MM",
      itemNo: "796483092149",
      size: "OS",
      color: "BLACK",
      price: 195.0,
      image: "baker-watch.jpg",
    },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);

  return (
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
              <p className="item-meta">COLOR: {item.color}</p>
              <div className="item-price">
                {item.originalPrice && item.originalPrice !== item.price && (
                  <span className="original-price">
                    ${item.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="current-price">${item.price.toFixed(2)}</span>
              </div>
              <div className="item-actions">REMOVE | EDIT</div>
            </div>
          </div>
        ))}
      </div>

      <div className="summary-box">
        <h3 className="summary-title">SUMMARY</h3>
        <p className="summary-text">Do you have a promo code?</p>
        <div className="promo-code">
          <input type="text" placeholder="Enter code" className="promo-input" />
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
        <p className="help-text">Need help? Call us at 1-877-707-6272</p>
      </div>
    </div>
  );
};

export default ShoppingCart;

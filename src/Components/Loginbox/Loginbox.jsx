import React from "react";
import "./LoginBox.css";

const Loginbox = () => {
  return (
    <div className="loginbox-container">
      <form className="login-box">
        <h2>Login</h2>

        <div className="login-input-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="username" placeholder="Enter your username" />
        </div>

        <div className="login-input-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="password" placeholder="Enter your password" />
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Loginbox;

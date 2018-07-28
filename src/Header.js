import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header-wrapper">
    <div className="header-container">
      <div className="header-title">
        <span>Joe & Selah</span>
      </div>
      <div className="header-nav">
        <span>Home</span>
        <span>Stories</span>
        <span>About</span>
        <span><a href="#contact">Contact</a></span>
      </div>
    </div>
  </div>
);

export default Header;

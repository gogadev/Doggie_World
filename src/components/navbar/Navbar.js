import React from "react";

import navImg from "../../assets/nav.png";
import icon from "../../assets/icon.png"

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="nav-title">Welc<span><img className="icon" src={icon} alt=""/></span>me T<span><img className="icon" src={icon} alt=""/></span> D<span><img className="icon" src={icon} alt=""/></span>ggie W<span><img className="icon" src={icon} alt=""/></span>rld</h1>
      <img className="nav-img" src={navImg} alt="" />
    </nav>
  );
};

export default Navbar;

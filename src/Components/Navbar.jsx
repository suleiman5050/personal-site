import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const Navbar = () => {
  const { openToggle } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <span className="logo">Continental Foods</span>
        <button className="nav-toggle" onClick={openToggle}>
          <FaBars />
        </button>
        <div className="nav-links">
          <div className="nav-link">Home</div>
          <div className="nav-link">Services</div>
          <div className="nav-link">Projects</div>
          <div className="nav-link">About</div>
          <div className="nav-link">Contact Us</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

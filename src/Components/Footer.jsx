import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-link">Home</div>
        <div className="footer-link">Services</div>
        <div className="footer-link">Projects</div>
        <div className="footer-link">About</div>
        <div className="footer-link">Contact Us</div>
      </div>
      <div className="social-links">
        <FaFacebook className="social-link" />
        <FaTwitter className="social-link" />
        <FaLinkedin className="social-link" />
      </div>
    </div>
  );
};

export default Footer;

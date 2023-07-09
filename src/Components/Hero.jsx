import React from "react";
import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-container">
          <img src={hero} alt="hero-img" className="img" />
        </div>
        <div className="hero-info">
          <div className="title">
            <h3 className="hello">Hello, I'm Abdurrahman</h3>
            <h1>Business Consultant</h1>
          </div>
          <h4>Services offered : </h4>
          <p>
            Food Distribution | Agribusiness Value Chain Consulting | Quality
            Management | Alternative Energy | Commodity Exports Advisory
            Business Consulting | Financial Analysis | Wealth Management |
            Management Consulting | Financial Consulting | Negotiation |
            Corporate Training
          </p>
          <button className="btn hero-btn">About me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

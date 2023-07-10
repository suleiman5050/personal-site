import React from "react";
import { services } from "../assets/data";
import Service from "./Service";
const Services = () => {
  return (
    <section className="section services">
      <h2>Services</h2>
      <div className="services-center hold">
        {services.map((service) => {
          return <Service key={service.id} {...service}></Service>;
        })}
      </div>
    </section>
  );
};

export default Services;

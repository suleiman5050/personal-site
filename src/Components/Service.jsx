import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
const Service = ({ id, icon, text, desc }) => {
  return (
    <article className="service hold">
      <div className="icon">{icon} </div>
      <h4>{text}</h4>
      <p>{desc}</p>
      <div className="readmore-btn btn">
        <button className=" btn service-btn">readmore</button>
        <BsFillArrowRightSquareFill className="arrow" />
      </div>
    </article>
  );
};

export default Service;

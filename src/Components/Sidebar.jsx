import React from "react";
import { Links } from "../assets/data";
import { useGlobalContext } from "../Context";
import { FaTimes } from "react-icons/fa";
const Sidebar = () => {
  const { closeToggle, isToggleOpen } = useGlobalContext();
  return (
    <aside className={isToggleOpen ? "show-sidebar sidebar" : "sidebar"}>
      <div className="sidebar-wrapper">
        <button className="close-btn" onClick={closeToggle}>
          <FaTimes />
        </button>
        <ul className="links">
          {Links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id} className="link">
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

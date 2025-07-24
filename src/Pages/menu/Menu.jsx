import React from "react";
import bgMenu from "../../assets/bg-menu.png";
import logoKini from "../../assets/logo-kini.svg";
import contentMenu from "../../assets/content-menu.png";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="content-menu">
      <div className="wrapper-content">
        <h2 className="menu-title">OUR MENU</h2>

        <div className="logo-section">
          by
          <img src={logoKini} className="logo-kini" alt="Logo Kini" />
        </div>

        <div className="more-section">
          <img
            src={contentMenu}
            alt="Menu Content"
            className="content-menu-image"
          />
          <button className="more-button">More</button>
        </div>

        <div className="footer-text">@2025 8Pool Billiard Medan</div>
      </div>
    </div>
  );
};

export default Menu;

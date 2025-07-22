import React, { useState } from "react";
import "./Navbar.css";
import MyLogo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {menuOpen && <div className="sidebar_overlay" onClick={toggleMenu}></div>}

      <nav className="navbar">
        <img src={MyLogo} alt="Logo" className="logo-navbar" />
        <div className="nav_tabs">
          <a href="#home" className="tab">
            HOME
          </a>
          <a href="#about" className="tab">
            RESERVATION
          </a>
          <a href="#menu" className="tab">
            MENU
          </a>
          <a href="#contact" className="tab">
            FAQS
          </a>
        </div>
        <div className="menu_btn" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      <div className={`nav_tabs mobile_nav ${menuOpen ? "open" : ""}`}>
        <div className="cancel_btn" onClick={toggleMenu}>
          ✕
        </div>
        <a href="#home" className="tab">
          Home
        </a>
        <a href="#about" className="tab">
          About
        </a>
        <a href="#menu" className="tab">
          Menu
        </a>
        <a href="#contact" className="tab">
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;

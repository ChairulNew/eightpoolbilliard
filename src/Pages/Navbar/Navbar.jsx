import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import MyLogo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const activeStyle = {
    color: "yellow",
    fontWeight: "bold",
  };

  return (
    <>
      {menuOpen && <div className="sidebar_overlay" onClick={toggleMenu}></div>}

      <nav className="navbar">
        <img src={MyLogo} alt="Logo" className="logo-navbar" />
        <div className="nav_tabs">
          <NavLink
            to="/"
            className="tab"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/booking"
            className="tab"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            BOOKING
          </NavLink>
          <a href="#menu" className="tab">
            MENU
          </a>
          <a href="#faqs" className="tab">
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
        <NavLink
          to="/"
          className="tab"
          onClick={toggleMenu}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          HOME
        </NavLink>
        <NavLink
          to="/booking"
          className="tab"
          onClick={toggleMenu}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          BOOKING
        </NavLink>
        <a href="#menu" className="tab" onClick={toggleMenu}>
          MENU
        </a>
        <a href="#contact" className="tab" onClick={toggleMenu}>
          CONTACT
        </a>
      </div>
    </>
  );
};

export default Navbar;

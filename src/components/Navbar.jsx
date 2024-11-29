import React from 'react';
import '../styles/Navbar.css';
import { FaMoon } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <ul className="menu">
        <li><Link to="/about-me">About Me</Link></li> {/* Enlace funcional */}
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/store">Store</Link></li>
      </ul>
      <div className="switch-container">
        <FaMoon className="theme-icon" />
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;

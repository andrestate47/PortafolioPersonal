import React from "react";
import { FaWhatsapp, FaEnvelope, FaShoppingCart, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="avatar-container">
        <img src="/public/images/Link0.jpg" alt="Avatar" className="avatar" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <FaWhatsapp style={{ color: "#25D366", marginRight: "10px" }} />
          WhatsApp
        </li>
        <li>
          <FaEnvelope style={{ color: "#0072C6", marginRight: "20px" }} />
          Mail
        </li>
        <li>
          <FaShoppingCart style={{ color: "#FF6347", marginRight: "10px" }} />
          Cart (0)
        </li>
      </ul>
      <div className="social-links">
        <a href="#" aria-label="Instagram">
          <FaInstagram style={{ color: "#E4405F" }} />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter style={{ color: "#1DA1F2" }} />
        </a>
        <a href="#" aria-label="LinkedIn">
          <FaLinkedin style={{ color: "#0077B5" }} />
        </a>
        <a href="#" aria-label="GitHub">
          <FaGithub style={{ color: "#333" }} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;

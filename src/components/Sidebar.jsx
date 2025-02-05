import React from "react";
import { Link } from "react-router-dom"; 
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Solo importamos los íconos de LinkedIn, GitHub y Mail
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="avatar-container">
        <img src={`${import.meta.env.BASE_URL}images/Link0.jpg`} alt="Avatar" className="avatar" />
      </div>

      {/* Sección de botones debajo del avatar */}
      <div className="contact-buttons">
      <Link to="/contact" className="contact-button mail">
          <FaEnvelope style={{ marginRight: "10px" }} />
          Mail
        </Link>
        <a
          href="https://www.linkedin.com/in/andres-figueroa-024878232/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button linkedin"
        >
          <FaLinkedin style={{ marginRight: "10px" }} />
          LinkedIn
        </a>
        <a
          href="https://github.com/andrestate47"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button github"
        >
          <FaGithub style={{ marginRight: "10px" }} />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Sidebar;

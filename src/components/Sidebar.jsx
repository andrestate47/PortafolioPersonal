import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Solo importamos los íconos de LinkedIn, GitHub y Mail
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="avatar-container">
        <img src="/public/images/Link0.jpg" alt="Avatar" className="avatar" />
      </div>

      {/* Sección de botones debajo del avatar */}
      <div className="contact-buttons">
        <a href="mailto:email@example.com" className="contact-button mail">
          <FaEnvelope style={{ marginRight: "10px" }} />
          Mail
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button linkedin"
        >
          <FaLinkedin style={{ marginRight: "10px" }} />
          LinkedIn
        </a>
        <a
          href="https://github.com"
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

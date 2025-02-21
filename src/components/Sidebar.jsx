import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; 
import "../styles/Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar el sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón para abrir/cerrar el menú en móviles */}
      <button className="menu-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="avatar-container">
          <img
            src={`${import.meta.env.BASE_URL}images/Link0.jpg`}
            alt="Avatar"
            className="avatar"
          />
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
    </>
  );
}

export default Sidebar;

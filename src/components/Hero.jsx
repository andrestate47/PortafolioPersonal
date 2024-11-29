import React, { useEffect, useState } from "react";
import "../styles/Hero.css"; // Archivo CSS actualizado

const roles = ["Desarrollador Front-End", "Diseñador UX/UI", "Entusiasta de ReactJS"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Título principal */}
        <h1 className="hero-title">¡Hola, soy[Andrés👋!]</h1>

        {/* Texto dinámico con roles */}
        <div className="role">
          <span>{roles[currentRole]}</span>
        </div>

        {/* Subtítulo o descripción */}
        <p className="hero-subtitle">
          Construyo experiencias digitales modernas y funcionales.
        </p>

        {/* Botones de acción */}
        <div className="hero-buttons">
          <a href="#about" className="btn">
            Sobre mí
          </a>
          <a href="#portfolio" className="btn">
            Proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

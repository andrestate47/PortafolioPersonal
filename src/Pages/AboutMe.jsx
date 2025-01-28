import React from 'react';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div className="aboutme-container">
       {/* Hero Section */}
       <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>¡Hola! Soy Andrés Figueroa👋</h1>
          <p>Desarrollador Frontend 💻 apasionado por crear experiencias increíbles en la web🌐.</p>
        </div>
        <video
          className="hero-video"
          src="/public/images/sora.mp4"
          autoPlay
          loop
          muted
        ></video>
      </section>


      {/* Body Section - Información adicional */}
      <section id="about-body" className="about-body">
        <div className="body-content">
          <h2>Más sobre mí</h2>
          <p>
            Soy un desarrollador con experiencia en diversas tecnologías y frameworks como ReactJS, NodeJS y más. Me encanta aprender nuevas herramientas y colaborar en proyectos creativos.
          </p>

          {/* Subsecciones o bloques adicionales */}
          <div className="info-block">
            <h3>Mis habilidades</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>WordPress</li>
            </ul>
          </div>

          <div className="info-block">
            <h3>Mis intereses</h3>
            <p>
              Disfruto trabajar en interfaces minimalistas, explorar tecnologías como inteligencia artificial,E-commerce, creacion de landing pages.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;

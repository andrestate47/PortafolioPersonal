import React from 'react'; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import DynamicText from '../components/DynamicText';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div className="aboutme-container">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <DynamicText/>
          <p>Desarrollador Frontend 💻 apasionado por crear experiencias increíbles en la web🌐.</p>
        </div>
        <video
          className="hero-video"
          src="/public/images/0_Abstract_Technology_1080x1080.mp4"
          autoPlay
          loop
          muted
        ></video>
      </section>

      {/* Body Section - Información adicional */}
      <section id="about-body" className="about-body">
        <div className="body-content">
          <h2>Más sobre mí</h2>
          <p className="skills-section">
            Soy un desarrollador con experiencia en diversas tecnologías y frameworks como ReactJS, NodeJS y más. Me encanta aprender nuevas herramientas y colaborar en proyectos creativos.
          </p>

          {/* Experiencia Profesional */}
          <div className="info-block">
            <h3>Experiencia Profesional</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Desarrollador Web Freelance</h4>
                  <span>2022 - Actualidad</span>
                  <p>He desarrollado sitios web modernos y funcionales para startups y negocios, enfocados en UI/UX y rendimiento.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Soporte Técnico en WordPress</h4>
                  <span>2021 - 2022</span>
                  <p>Brindé soporte y optimización a sitios en WordPress, asegurando velocidad y seguridad.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Habilidades */}
          <div className="info-block">
            <h3>Mis habilidades</h3>
            <div className="tech-cards">
              <div className="tech-card"><FaHtml5 size={35} color="#E44D26" /><p>HTML5</p></div>
              <div className="tech-card"><FaCss3Alt size={35} color="#1572B6" /><p>CSS3</p></div>
              <div className="tech-card"><FaJs size={35} color="#F7DF1E" /><p>JavaScript</p></div>
              <div className="tech-card"><FaReact size={35} color="#61DBFB" /><p>ReactJS</p></div>
              <div className="tech-card"><FaNodeJs size={35} color="#68A063" /><p>NodeJS</p></div>
              <div className="tech-card"><FaWordpress size={35} color="#21759B" /><p>WordPress</p></div>
            </div>
          </div>

          {/* Tecnologías en Aprendizaje */}
          <div className="info-block">
            <h3>Tecnologías que estoy aprendiendo</h3>
            <div className="tech-cards">
              <div className="tech-card"><SiTypescript size={35} color="#3178C6" /><p>TypeScript</p></div>
              <div className="tech-card"><FaNodeJs size={35} color="#68A063" /><p>NodeJS</p></div>
              <div className="tech-card"><SiNextdotjs size={35} color="#000000" /><p>Next.js</p></div>
              <div className="tech-card"><SiTailwindcss size={35} color="#38BDF8" /><p>Tailwind CSS</p></div>
            </div>
          </div>

          {/* Intereses */}
          <div className="info-block">
            <h3>Mis intereses</h3>
            <div className="interests-grid">
              <div className="interest-item"><p>🎨 UI/UX Design</p></div>
              <div className="interest-item"><p>💻 Desarrollo Web</p></div>
              <div className="interest-item"><p>🛒 E-Commerce</p></div>
              <div className="interest-item"><p>🕵️‍♂️ CryptoMonedas</p></div>
              <div className="interest-item"><p>🤖IA</p></div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default AboutMe;

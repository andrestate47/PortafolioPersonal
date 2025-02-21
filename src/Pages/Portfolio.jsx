import React from 'react';
import "../styles/Portafolio.css"

function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Sección de colaboración */}
      <section className="collaboration-section">
        <h2>Siéntete libre de contactar para colaboración</h2>
        <p>
          Estoy abierto a nuevos proyectos y colaboraciones. ¡No dudes en ponerte en contacto conmigo para discutir cómo podemos trabajar juntos!
        </p>
        <button className="contact-btn">Contactar</button>
      </section>

      <div className="projects-container">
        {/** Lista de proyectos */}
        {projects.map((project, index) => (
          <div className={`project-row ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'LandingPage de servicios IT',
    description: 'landingpage dedicada a la venta de servicios it',
    details: 'Reactjs, TypeScript, CSS3',
    image: `${import.meta.env.BASE_URL}images/ladingp1.png`
  },
  {
    title: 'Pagina web',
    description: 'Pagina web dedicada a la venta de cursos financieron on-line',
    details: 'Wordpres, Elementor',
    image: `${import.meta.env.BASE_URL}images/AntCapt.png`,
  },
  {
    title: 'Pagina web informativa',
    description: 'Pagina web orientada a la venta de viajes espaciales ',
    details: 'HTML5, CSS3, JavaScript',
    image: `${import.meta.env.BASE_URL}images/galaxyTravel.png`,
  },
  {
    title: 'LandingPage personal',
    description: 'Landingp ',
    details: 'nextjs, tailwindcss',
    image: `${import.meta.env.BASE_URL}images/landingp2.png`
  },
];

export default Portfolio;

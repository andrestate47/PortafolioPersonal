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
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
    details: 'Detalles del proyecto 1 aquí.',
    image: `${import.meta.env.BASE_URL}images/robot.jpeg`,
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2',
    details: 'Detalles del proyecto 2 aquí.',
    image: `${import.meta.env.BASE_URL}images/AntCapt.png`,
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del Proyecto 3',
    details: 'Detalles del proyecto 3 aquí.',
    image: `${import.meta.env.BASE_URL}images/galaxyTravel.png`,
  },
  {
    title: 'Proyecto 4',
    description: 'Descripción del Proyecto 4',
    details: 'Detalles del proyecto 4 aquí.',
    image: 'https://via.placeholder.com/150',
  },
];

export default Portfolio;

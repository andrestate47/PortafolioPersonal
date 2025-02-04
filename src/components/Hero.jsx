import React from "react";
import DynamicText from "./DynamicText";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <DynamicText />
        <p>¡Bienvenido a mi portafolio!</p>
      </div>
    </section>
  );
};

export default Hero;

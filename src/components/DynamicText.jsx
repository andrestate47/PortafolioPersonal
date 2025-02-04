import React, { useState, useEffect } from "react";

const DynamicText = () => {
  // Arreglo de textos que queremos mostrar uno a la vez
  const texts = [
    "HOLA👋 mi nombre es Andrés Figueroa.",
    " Desarrollador Front-End",
    "Mi objetivo es construir productos que impacten positivamente."
  ];

  const [displayedText, setDisplayedText] = useState(""); // Texto que se está mostrando
  const [index, setIndex] = useState(0); // Índice del texto actual
  const [isWriting, setIsWriting] = useState(true); // Estado para saber si estamos escribiendo

  useEffect(() => {
    // Si estamos escribiendo y aún no hemos terminado el texto actual
    if (isWriting) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[index][displayedText.length]); // Añadir la siguiente letra
      }, 100); // Velocidad de escritura

      // Si hemos llegado al final del texto actual, paramos de escribir y pasamos al siguiente
      if (displayedText.length === texts[index].length) {
        clearTimeout(timeout);
        setIsWriting(false);
      }

      return () => clearTimeout(timeout); // Limpiar el timeout
    } else {
      // Si hemos terminado de escribir el texto, esperar un poco antes de cambiar al siguiente
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length); // Cambiar al siguiente texto, ciclo cuando lleguemos al final
        setDisplayedText(""); // Limpiar el texto mostrado
        setIsWriting(true); // Volver a empezar a escribir
      }, 2000); // Esperar 2 segundos antes de cambiar

      return () => clearTimeout(timeout);
    }
  }, [displayedText, isWriting, index, texts]);

  return (
    <h1 className="dynamic-text">
      {displayedText}
      <span className="cursor">|</span>
    </h1>
  );
};

export default DynamicText;

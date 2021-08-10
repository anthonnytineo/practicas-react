import React, { useState, useEffect } from 'react';


// Entender sintaxis de las fases de montaje, actualizacion y desmontaje de useEffect
export default function ScrollHooks () {
  const [scrollY, setscrollY] = useState(0);


  // sintaxis fases de montaje de useEffect
  useEffect(() => {
    console.log("Fase de actualizacion");
    const detectarScroll = () => setscrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);

    return () => {
    window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);

  // sintaxis fases de actualizacion de useEffect, solo se actualiza 
  // cuando la variable scrollY sufra algun cambio.
  useEffect(() => {
    console.log("Fase de montaje");
  },[]);

  // sintaxis fases de desmontaje de useEffect al pasarle como retorno una funcion.
  // useEffect(() => {
  //   return () => {
  //     console.log("Fase de desmontaje");
  //   };

  // });

  return (
    <>
      <h2>Hooks ciclos de vida.</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
} 
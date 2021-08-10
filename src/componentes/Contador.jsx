import React, { useState } from 'react';

export default function Contador () {

  const [contador, setcontador] = useState(0);

  const sumar = () => setcontador(contador + 1)

  const restar = () => setcontador(contador - 1);


  return (
    <>
      <h2>Contador simple</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
    </>
  );
}
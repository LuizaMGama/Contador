import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0); // Começa com o valor zero

  const incrementar = () => {
    setContador(contador + 1); // Aumenta de 1 em 1
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="container">
      <h2>Contador</h2>
      <h3>Escolha uma das opções abaixo!</h3>
      <p>Valor: {contador}</p>
      <button className="btn" onClick={incrementar}>Incrementar</button>
      <button className="btn" onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;

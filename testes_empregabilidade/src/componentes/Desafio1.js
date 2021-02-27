import React from 'react'

function Desafio1() {
  let A = 10
  let B = 20
  let C = 0

  C = A
  A = B
  B = C

  return (
    <div>
      <header>
        <h1>Desafio 1</h1>
        <p>O valor de A trocado é: {A} </p>
        <p>O valor de B trocado é: {B} </p>
      </header>
    </div>
  );
}

export default Desafio1;

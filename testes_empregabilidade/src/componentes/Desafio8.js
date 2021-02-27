import React from 'react'

export default function Desafio8() {
  let numeroInteiro
  let resultado
  let contador
  let lista = []
  let listaTabuada = ""
  
  
  
  const tabuada = () => {

    numeroInteiro = Number(prompt("Escolha um numero de 1 a 10"))
  
    
    if(numeroInteiro >= 0 && numeroInteiro <= 10){
      for(contador = 1; contador <= 10; contador++ ){
        resultado = numeroInteiro * contador
        lista.push(`${numeroInteiro} x ${contador} = ${resultado}`)
      }
        
      listaTabuada = lista.map((conta) => { 
            return console.log(conta)
          })

    }else(tabuada())
      
    return listaTabuada
  }

  

  
  return (
    <div>

        <p>Escolha a Tabuada</p>

        <button onClick={tabuada}> Escolha </button>

        {listaTabuada}

    </div>
  )
}



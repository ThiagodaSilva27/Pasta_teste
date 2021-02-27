import React, {useState} from 'react'
import './App.css';
import Desafio1 from './componentes/Desafio1'
import Desafio2 from './componentes/Desafio2'
import Desafio3 from './componentes/Desafio3'
import Desafio4 from './componentes/Desafio4'
import Desafio5 from './componentes/Desafio5'
import Desafio6 from './componentes/Desafio6'
import Desafio7 from './componentes/Desafio7'
import Desafio8 from './componentes/Desafio8'

function App() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("1")

  const option = [1, 2, 3, 4, 5, 6, 7, 8]

  let opcao

    switch (opcaoSelecionada) {
      case "1":
        opcao = <Desafio1 />
        break
      case "2":
        opcao = <Desafio2 />
        break
      case "3":
        opcao = <Desafio3 />
        break
      case "4":
        opcao = <Desafio4 />
        break
      case "5":
        opcao = <Desafio5 />
        break
      case "6":
        opcao = <Desafio6 />
        break
      case "7":
        opcao = <Desafio7 />
        break
      case "8":
        opcao = <Desafio8 />
        break
    }

  return (
    <div>
      <div>
        <p>Escolha o Desafio</p> 
        <select value={opcaoSelecionada}
                onChange={evento => {setOpcaoSelecionada(evento.target.value)}}>

            {option.map(optionValor => (
              <option value={optionValor}>{optionValor}</option>
            ))}

        </select>
        {opcao}
      </div>
    </div>
  )
}

export default App;

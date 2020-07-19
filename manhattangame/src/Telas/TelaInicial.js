import React, { useState } from 'react';
import './TelaInicial.css';
import Square from '../Components/square'
import Positions from '../Components/positions'
import Start from '../Components/start'
import Reset from '../Components/reset'


export default () => {
  let matrizNumeros = Array(3)

  matrizNumeros[0] = Array(3)
  matrizNumeros[1] = Array(3)
  matrizNumeros[2] = Array(3)

  matrizNumeros[0].fill(0)
  matrizNumeros[1].fill(0)
  matrizNumeros[2].fill(0)

  const [numerosJaAlocados, setNumerosJaAlocados] = useState(matrizNumeros)

  return (
    <div className="App">
      <h1>Manhattan automático</h1>
      <Square className="align">
        <div className="formato">
          <Positions numerosJaAlocados={numerosJaAlocados} setNumerosJaAlocados={setNumerosJaAlocados} numeroPos={{ pos1: 0, pos2: 0 }} />
          <Positions numerosJaAlocados={numerosJaAlocados} setNumerosJaAlocados={setNumerosJaAlocados} numeroPos={{ pos1: 0, pos2: 1 }} />
          <Positions numerosJaAlocados={numerosJaAlocados} setNumerosJaAlocados={setNumerosJaAlocados} numeroPos={{ pos1: 0, pos2: 2 }} />
          <Positions numerosJaAlocados={numerosJaAlocados} setNumerosJaAlocados={setNumerosJaAlocados} numeroPos={{ pos1: 1, pos2: 0 }} />
          <Positions numerosJaAlocados={numerosJaAlocados} setNumerosJaAlocados={setNumerosJaAlocados} numeroPos={{ pos1: 1, pos2: 1 }} />
          <Positions numerosJaAlocados={numerosJaAlocados} setNumerosJaAlocados={setNumerosJaAlocados} numeroPos={{ pos1: 1, pos2: 2 }} />
          <Positions numerosJaAlocados={numerosJaAlocados} setNumerosJaAlocados={setNumerosJaAlocados} numeroPos={{ pos1: 2, pos2: 0 }} />
          <Positions numerosJaAlocados={numerosJaAlocados} setNumerosJaAlocados={setNumerosJaAlocados} numeroPos={{ pos1: 2, pos2: 1 }} />
          <Positions numerosJaAlocados={numerosJaAlocados} setNumerosJaAlocados={setNumerosJaAlocados} numeroPos={{ pos1: 2, pos2: 2 }} />
        </div>
      </Square>
      <div>
        <Reset numerosJaAlocados={numerosJaAlocados} setNumerosJaAlocados={setNumerosJaAlocados} />
        <Start numerosJaAlocados={numerosJaAlocados} nomeBotao={"Busca Em Largura"} />
      </div>
      <div>
        <Start numerosJaAlocados={numerosJaAlocados} nomeBotao={"Heuristica"} />
      </div>
    </div>
  );
}
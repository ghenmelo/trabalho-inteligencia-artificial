import React, { useState, useEffect } from 'react';
import './TelaResolucao.css';
import Square from '../Components/square'
import Positions from '../Components/positions'
import { Link } from 'react-router-dom';

export default ({ location: { state } }) => {

    const [num, setNum] = useState(0)
    const [posicoes, setPosicoes] = useState({ pos1: [-1, -1], pos2: [-1, -1] })

    useEffect(() => {
        descobrirPosNovaMatriz(num)
    }, [num])

    const descobrirPosNovaMatriz = (numero) => {
        let novasPos = { pos1: [-1, -1], pos2: [-1, -1] }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (numero < state.matrizes.length - 1 && state.matrizes[numero][i][j] !== state.matrizes[numero + 1][i][j] && state.matrizes[numero][i][j] !== -1) {
                    novasPos.pos2 = [i, j]
                } else if (numero > 0 && state.matrizes[numero][i][j] !== state.matrizes[numero - 1][i][j] && state.matrizes[numero][i][j] !== -1) {
                    novasPos.pos1 = [i, j]
                }
            }
        }
        setPosicoes(novasPos)
    }
    const aumentarMatriz = () => {
        if (num < state.matrizes.length - 1) {
            setNum(num + 1)
        }
    }
    const diminuirMatriz = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }


    const confirmaPosPraColorir = (posLocal) => {
        if (posicoes.pos1.toString() === posLocal.toString()) {
            return "lightPink"
        } else if (posicoes.pos2.toString() === posLocal.toString()) {
            return "lightGreen"
        } else {
            return ''
        }
    }

    return (
        <div className="App">
            <h1>Resolução</h1>
            <h1>Numero de passos : {state.matrizes.length - 1}</h1>
            <Square className="align">
                <div className="formato">
                    <Positions numero={state.matrizes[num][0][0]}
                        cor={{ "backgroundColor": confirmaPosPraColorir([0, 0]) }} numeroPos={{ pos1: 0, pos2: 0 }} />
                    <Positions numero={state.matrizes[num][0][1]}
                        cor={{ "backgroundColor": confirmaPosPraColorir([0, 1]) }} numeroPos={{ pos1: 0, pos2: 0 }} />
                    <Positions numero={state.matrizes[num][0][2]}
                        cor={{ "backgroundColor": confirmaPosPraColorir([0, 2]) }} numeroPos={{ pos1: 0, pos2: 0 }} />
                    <Positions numero={state.matrizes[num][1][0]}
                        cor={{ "backgroundColor": confirmaPosPraColorir([1, 0]) }} numeroPos={{ pos1: 0, pos2: 0 }} />
                    <Positions numero={state.matrizes[num][1][1]}
                        cor={{ "backgroundColor": confirmaPosPraColorir([1, 1]) }} numeroPos={{ pos1: 0, pos2: 0 }} />
                    <Positions numero={state.matrizes[num][1][2]}
                        cor={{ "backgroundColor": confirmaPosPraColorir([1, 2]) }} numeroPos={{ pos1: 0, pos2: 0 }} />
                    <Positions numero={state.matrizes[num][2][0]}
                        cor={{ "backgroundColor": confirmaPosPraColorir([2, 0]) }} numeroPos={{ pos1: 0, pos2: 0 }} />
                    <Positions numero={state.matrizes[num][2][1]}
                        cor={{ "backgroundColor": confirmaPosPraColorir([2, 1]) }} numeroPos={{ pos1: 0, pos2: 0 }} />
                    <Positions numero={state.matrizes[num][2][2]}
                        cor={{ "backgroundColor": confirmaPosPraColorir([2, 2]) }} numeroPos={{ pos1: 0, pos2: 0 }} />
                </div>
            </Square>
            <Link to="/">
                <button className="w3-button w3-xlarge w3-teal w3-hover-cyan w3-round-large w3-text-white w3-hover-text-white  " style={{
                    width: "300px", "marginRight": "60px", "marginTop": "-30px"
                }}>
                    Tente novamente
            </button>
            </Link>
            <button onClick={() => { diminuirMatriz() }} className="w3-xxxlarge w3-teal w3-hover-cyan fa fa-arrow-left w3-round-xxlarge w3-text-white w3-hover-text-white " style={{ "marginLeft": "30px", "marginTop": "30px" }}></button>
            <button onClick={() => { aumentarMatriz() }} className="w3-xxxlarge w3-teal w3-hover-cyan fa fa-arrow-right w3-round-xxlarge w3-text-white w3-hover-text-white " style={{ "marginLeft": "30px", "marginTop": "30px" }}></button>
        </div >
    );
}
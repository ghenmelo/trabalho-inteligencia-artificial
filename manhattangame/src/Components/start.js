import React, { useState } from 'react'
import busca from '../metodosDeBusca/menorDistanciaDaPosicao'
import { Link } from 'react-router-dom'
import "./start.css"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export default props => {
    const [linkParaResolucao, setLinkParaResolucao] = useState([])

    const calcularDistancia = () => {
        let matriz
        try {
            matriz = busca.heuristica(props.numerosJaAlocados)
            if (props.nomeBotao === "Busca Em Largura") {
                matriz = busca.buscaEmLargura(props.numerosJaAlocados)
            } else {
            }
            let matrizes = [matriz.data]
            while (matriz.pai !== null) {
                matrizes.push(matriz.pai.data)
                matriz = matriz.pai
            }

            matrizes.reverse()
            setLinkParaResolucao(<div>
                <Link to={{ pathname: "/resolucao", state: { matrizes: matrizes } }}>
                    <button className="startButtonResolucao">Resolucao</button>
                </Link>
            </div>
            )
        } catch (e) {
            console.log(e)
            alert("NAO FOI POSSIVEL RESOLVER O TABULEIRO")
            sleep(2000)
            window.location.reload(false);
        }


    }


    return (
        <React.Fragment>
            <button className="startButton" onClick={() => { calcularDistancia() }}>
                {props.nomeBotao}
            </button>
            {linkParaResolucao}
        </React.Fragment>
    )
}
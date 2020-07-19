import React, { useState } from 'react'
import './textBox.css'

export default props => {
    const [numero, setNumero] = useState(0)
    const { pos1, pos2 } = props.numeroPos

    const procurarNaMatriz = (numero) => {
        return props.numerosJaAlocados[0].includes(numero) || props.numerosJaAlocados[1].includes(numero) || props.numerosJaAlocados[2].includes(numero)
    }

    const quantidadeDeElementos = () => {
        let quantidadeDeZeros = 0
        props.numerosJaAlocados.forEach(ele => {
            ele.forEach(elemento => {
                if (elemento === 0) {
                    quantidadeDeZeros += 1
                }
            })
        });
        return 9 - quantidadeDeZeros
    }

    const excluirDaMatriz = (numExclude) => {
        const value = [props.numerosJaAlocados[0], props.numerosJaAlocados[1], props.numerosJaAlocados[2]]
        const indice1 = value[0].findIndex((ele) => { return ele === numExclude })
        const indice2 = value[1].findIndex((ele) => { return ele === numExclude })
        const indice3 = value[2].findIndex((ele) => { return ele === numExclude })
        let indiceVet1 = -1
        let indiceVet2 = -1
        if (indice1 !== -1) {
            indiceVet1 = 0
            indiceVet2 = indice1
        } else if (indice2 !== -1) {
            indiceVet1 = 1
            indiceVet2 = indice2
        } else if (indice3 !== -1) {
            indiceVet1 = 2
            indiceVet2 = indice3
        }
        if (indiceVet2 !== -1) {
            value[indiceVet1].splice(indiceVet2, 1, 0)
        }
        return value
    }

    const criarNovaMatriz = (matriz, numero) => {
        let novaMatriz = [matriz[0], matriz[1], matriz[2]]
        novaMatriz[pos1][pos2] = numero
        return novaMatriz
    }

    const aumentarNumero = (numero, numExclude) => {
        const tempNum = numero + 1;
        if (quantidadeDeElementos() === 8 && numero === 0) {
            setNumero('')
            props.setNumerosJaAlocados(criarNovaMatriz(props.numerosJaAlocados, -1))
        } else if (quantidadeDeElementos() === 8 || quantidadeDeElementos() === 9) {
            return
        } else if (!procurarNaMatriz(tempNum) && tempNum < 9) {
            setNumero(tempNum)
            props.setNumerosJaAlocados(criarNovaMatriz(excluirDaMatriz(numExclude), tempNum))

        } else if (tempNum === 9) {
            aumentarNumero(proximoNumeroValido(1) - 1, numExclude)
        } else {
            aumentarNumero(proximoNumeroValido(tempNum) - 1, numero)
        }
    }

    const proximoNumeroValido = (numAtual) => {
        if (procurarNaMatriz(numAtual)) {
            if (numAtual === 9) {
                return numAtual
            }
            return proximoNumeroValido(numAtual + 1)
        }

        return numAtual
    }

    function primeiraVezAcesso() {
        if (props.numero) {
            if (props.numero === -1) {
                return ''
            }
            return props.numero
        }
        if (numero === 0) {
            return "Clique aqui para inserir o número"
        }
        return numero
    }

    return (
        <button id="button" onClick={() => { aumentarNumero(numero, numero) }}
            className="text" style={props.cor ? props.cor : null} disabled={props.numero ? 1 : 0}>
            {primeiraVezAcesso()}
        </button>
    )
}
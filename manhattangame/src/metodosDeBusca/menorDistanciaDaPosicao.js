let posicaoBranca = { pos1: -1, pos2: -1 }
let posAdjacentes = []
let filaDescobertos = []
let fila = []

const buscaEmLargura = (matriz) => {
    filaDescobertos.push({ pai: null, data: matriz, distancia: 0 })
    return encontrarMelhorCaminhoEscolhaBuscaEmLargura({ pai: null, data: matriz, distancia: 0 })
}

const heuristica = (matriz) => {
    filaDescobertos.push({ pai: null, data: matriz, distancia: 0 })
    return encontrarMelhorCaminhoEscolhaHeuristica({ pai: null, data: matriz, distancia: 0 })
}

const encontrarMelhorCaminhoEscolhaBuscaEmLargura = (matriz) => {//Busca em largura
    posicaoBranca = { pos1: -1, pos2: -1 }
    posAdjacentes = []
    encontrarPosBranca(matriz.data)
    encontrarPosAdjacentes(matriz.data)
    const quantidadeAdjacentes = posAdjacentes.length

    if (calcularDistanciaMatriz(matriz.data) === 0) {
        return matriz
    }

    for (let i = 0; i < quantidadeAdjacentes; i++) {
        const tempMatriz = retornaMatrizComPosicaoTrocada(matriz.data, i)
        if (!verificarMatrizNaoPassada(tempMatriz)) {
            let distancia = calcularDistanciaMatriz(tempMatriz)
            if (distancia === 0) {
                return { pai: matriz, data: tempMatriz, distancia: distancia }
            }
            fila.push({ pai: matriz, data: tempMatriz, distancia: distancia })
        }
    }
    filaDescobertos.push(fila.shift())
    return encontrarMelhorCaminhoEscolhaBuscaEmLargura(filaDescobertos[filaDescobertos.length - 1])
}

const encontrarMelhorCaminhoEscolhaHeuristica = (matriz) => {
    posicaoBranca = { pos1: -1, pos2: -1 }
    posAdjacentes = []
    encontrarPosBranca(matriz.data)
    encontrarPosAdjacentes(matriz.data)
    const quantidadeAdjacentes = posAdjacentes.length

    if (calcularDistanciaMatriz(matriz.data) === 0) {
        return matriz
    }

    for (let i = 0; i < quantidadeAdjacentes; i++) {
        const tempMatriz = retornaMatrizComPosicaoTrocada(matriz.data, i)
        if (!verificarMatrizNaoPassada(tempMatriz)) {
            let distancia = calcularDistanciaMatriz(tempMatriz)
            if (distancia === 0) {
                return { pai: matriz, data: tempMatriz, distancia: distancia }
            }
            fila.push({ pai: matriz, data: tempMatriz, distancia: distancia })
        }
    }
    const a = fila.splice(escolherMatrizMenorDistancia(fila), 1)
    filaDescobertos.push(a[0])
    return encontrarMelhorCaminhoEscolhaHeuristica(filaDescobertos[filaDescobertos.length - 1])
}

const escolherMatrizMenorDistancia = () => {
    const vetorComDistancias = fila.map((ele) => ele.distancia)
    const index = fila.findIndex(ele => {
        return ele.distancia === Math.min(...vetorComDistancias)
    })
    const valor = verificarMatrizNaoPassada(fila[index].data)

    if (valor) {
        fila.splice(index, 1)
        vetorComDistancias.splice(index, 1)
        return escolherMatrizMenorDistancia(fila)
    } else {
        return index
    }
}

const verificarMatrizNaoPassada = (matriz) => {
    let valor = false
    filaDescobertos.forEach(element => {//Nao pode ir para ->> 
        if (compararIgualdadeEntreMatriz(matriz, element.data)) {
            valor = true
        }
    });
    return valor
}

const compararIgualdadeEntreMatriz = (m1, m2) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (m1[i][j] !== m2[i][j]) {
                return false
            }
        }
    }
    return true
}

const calcularDistanciaMatriz = (matriz) => {
    let totalValorDistancia = 0
    const possiveisPosicoes = [[0, 0, 1], [0, 1, 2], [0, 2, 3], [1, 2, 4], [2, 2, 5], [2, 1, 6], [2, 0, 7], [1, 0, 8], [1, 1, -1]]
    possiveisPosicoes.forEach(element => {
        totalValorDistancia += calcularDistanciaPosPos(matriz, element)
    });
    return totalValorDistancia
}

const calcularDistanciaPosPos = (matriz, pos) => {
    if (matriz[pos[0]][pos[1]] !== pos[2]) {
        const [newPos1, newPos2] = encontrarPosValorMatriz(matriz, pos[2])
        return Math.abs(pos[0] - newPos1) + Math.abs(pos[1] - newPos2)
    } else {
        return 0
    }

}

const encontrarPosValorMatriz = (matriz, valor) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] === valor) {
                return [i, j]
            }
        }
    }
}

const retornaMatrizComPosicaoTrocada = (matriz, pos) => {
    let novaMatriz = [[...matriz[0]], [...matriz[1]], [...matriz[2]]]

    novaMatriz[posAdjacentes[pos].pos1][posAdjacentes[pos].pos2] = -1
    novaMatriz[posicaoBranca.pos1][posicaoBranca.pos2] = posAdjacentes[pos].valor

    return novaMatriz
}
const encontrarPosBranca = (matriz) => {
    if (matriz[0].includes(-1)) {
        posicaoBranca.pos2 = matriz[0].findIndex(ele => { return ele === -1 })
        posicaoBranca.pos1 = 0
    } else if (matriz[1].includes(-1)) {
        posicaoBranca.pos2 = matriz[1].findIndex(ele => { return ele === -1 })
        posicaoBranca.pos1 = 1
    } else if (matriz[2].includes(-1)) {
        posicaoBranca.pos2 = matriz[2].findIndex(ele => { return ele === -1 })
        posicaoBranca.pos1 = 2
    }
}

const encontrarPosAdjacentes = (matriz) => {
    if (posicaoBranca.pos1 === 0 && posicaoBranca.pos2 === 0) {
        posAdjacentes.push({ pos1: 0, pos2: 1, valor: matriz[0][1] })
        posAdjacentes.push({ pos1: 1, pos2: 0, valor: matriz[1][0] })
    } else if (posicaoBranca.pos1 === 0 && posicaoBranca.pos2 === 1) {
        posAdjacentes.push({ pos1: 0, pos2: 0, valor: matriz[0][0] })
        posAdjacentes.push({ pos1: 1, pos2: 1, valor: matriz[1][1] })
        posAdjacentes.push({ pos1: 0, pos2: 2, valor: matriz[0][2] })
    } else if (posicaoBranca.pos1 === 0 && posicaoBranca.pos2 === 2) {
        posAdjacentes.push({ pos1: 0, pos2: 1, valor: matriz[0][1] })
        posAdjacentes.push({ pos1: 1, pos2: 2, valor: matriz[1][2] })
    } else if (posicaoBranca.pos1 === 1 && posicaoBranca.pos2 === 0) {
        posAdjacentes.push({ pos1: 0, pos2: 0, valor: matriz[0][0] })
        posAdjacentes.push({ pos1: 1, pos2: 1, valor: matriz[1][1] })
        posAdjacentes.push({ pos1: 2, pos2: 0, valor: matriz[2][0] })
    } else if (posicaoBranca.pos1 === 1 && posicaoBranca.pos2 === 1) {
        posAdjacentes.push({ pos1: 0, pos2: 1, valor: matriz[0][1] })
        posAdjacentes.push({ pos1: 1, pos2: 2, valor: matriz[1][2] })
        posAdjacentes.push({ pos1: 1, pos2: 0, valor: matriz[1][0] })
        posAdjacentes.push({ pos1: 2, pos2: 1, valor: matriz[2][1] })
    } else if (posicaoBranca.pos1 === 1 && posicaoBranca.pos2 === 2) {
        posAdjacentes.push({ pos1: 0, pos2: 2, valor: matriz[0][2] })
        posAdjacentes.push({ pos1: 1, pos2: 1, valor: matriz[1][1] })
        posAdjacentes.push({ pos1: 2, pos2: 2, valor: matriz[2][2] })
    } else if (posicaoBranca.pos1 === 2 && posicaoBranca.pos2 === 0) {
        posAdjacentes.push({ pos1: 2, pos2: 1, valor: matriz[2][1] })
        posAdjacentes.push({ pos1: 1, pos2: 0, valor: matriz[1][0] })
    } else if (posicaoBranca.pos1 === 2 && posicaoBranca.pos2 === 1) {
        posAdjacentes.push({ pos1: 2, pos2: 0, valor: matriz[2][0] })
        posAdjacentes.push({ pos1: 2, pos2: 2, valor: matriz[2][2] })
        posAdjacentes.push({ pos1: 1, pos2: 1, valor: matriz[1][1] })
    } else if (posicaoBranca.pos1 === 2 && posicaoBranca.pos2 === 2) {
        posAdjacentes.push({ pos1: 2, pos2: 1, valor: matriz[2][1] })
        posAdjacentes.push({ pos1: 1, pos2: 2, valor: matriz[1][2] })
    }


}

export default { buscaEmLargura, heuristica }
//[0][0] -> [0][1] e [1][0]
//[0][1] -> [0][0] , [1][1] e [0][2]
//[0][2] -> [0][1] , [1][2]

//[1][0] -> [0][0] , [1][1] e [2][0]
//[1][1] -> [0][1] , [1][2] , [1][0] e [2][1]
//[1][2] -> [0][2] , [1][1] e [2][2]

//[2][0] -> [2][1] , [1][0]
//[2][1] -> [2][0] , [2][2] e [1][1]
//[2][2] -> [2][1] , [1][2]


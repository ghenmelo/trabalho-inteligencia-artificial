import React from 'react'
import Texto from "./textBox"
import "./positions.css"

export default props => {
    return (
        <div className="button">
            <Texto numerosJaAlocados={props.numerosJaAlocados} setNumerosJaAlocados={props.setNumerosJaAlocados}
                numeroPos={props.numeroPos} numero={props.numero} cor={props.cor}></Texto>
        </div>
    )
}
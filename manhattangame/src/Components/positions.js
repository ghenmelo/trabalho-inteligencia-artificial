import React from 'react'
import ButtonContent from "./buttonContent"
import "./positions.css"

export default props => {
    return (
        <div className="button">
            <ButtonContent numerosJaAlocados={props.numerosJaAlocados} setNumerosJaAlocados={props.setNumerosJaAlocados}
                numeroPos={props.numeroPos} numero={props.numero} cor={props.cor}></ButtonContent>
        </div>
    )
}
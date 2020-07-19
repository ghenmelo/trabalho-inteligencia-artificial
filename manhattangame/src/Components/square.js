import React from 'react';
import "./square.css"

export default props => {
    return (
        <div className="square">
            {props.children}
        </div>
    )
}
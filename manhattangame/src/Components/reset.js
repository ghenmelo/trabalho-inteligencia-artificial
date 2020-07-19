import React from 'react'
import './reset.css'

export default props => {
    return (
        <button className="resetButton" onClick={() => {
            window.location.reload(false);
        }}>

        </button>
    )
}
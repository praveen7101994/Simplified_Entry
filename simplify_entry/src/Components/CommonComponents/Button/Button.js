import React from 'react'
import './Button.css'

function Button({title, onClick}) {
    return (
        <button className="Custom_Button" onClick={onClick}>
            {title}
        </button>
    )
}

export default Button

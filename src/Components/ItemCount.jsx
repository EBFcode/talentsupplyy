import './ItemCount.css'
import React from 'react'

export default function ItemCount() {
    return (
        <div className="containerCount">
            <div className="CountObjets">
                <div className="textContainer">
                    <h3>Agrega Columnas donde escribir texto</h3>
                </div>

                <div className="CountObjet">
                    <button>-</button>
                    <h4>1</h4>
                    <button>+</button>
                </div>
            </div>
            

        </div>
    )
}


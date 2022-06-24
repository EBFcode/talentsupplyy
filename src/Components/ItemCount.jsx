import './ItemCount.css'
import React, { useState } from 'react';

export default function ItemCount({maxStock}) {
    const [numero, setNumero]  = useState(0);

    // Declarando un STATE
    const [disponibleStock, setDisponibleStock] = useState(maxStock);

    function onAdd(){
        setNumero(numero + 1);
        setDisponibleStock(disponibleStock - 1);
        
    }

    function restaSeleccion(){
        setNumero(numero - 1);
        setDisponibleStock(disponibleStock + 1);
    }
    return (
        <div className="containerCount">

            <div className="CountObjets">

                <div className="CountObjet">
                    <h4>Stock Disponible: {disponibleStock}</h4>
                </div>

                <div className="CountObjet">
                    <button onClick={() => restaSeleccion()} id="menos">-</button>
                    <h4>{numero}</h4>
                    {/* Funcion sumar 1 */}
                    <button onClick={() => onAdd()} id="mas">+</button>
                </div>

                <div className="textContainer">
                    <button>Agrega Stok</button>
                </div>

            </div>
            

        </div>
    )
}


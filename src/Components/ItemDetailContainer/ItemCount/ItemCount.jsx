import './ItemCount.css'
import React, { useState } from 'react';


export default function ItemCount({stock, initial, onAdd}) {
    // Cambiar numero a count
    const [numero, setNumero]  = useState(initial);

    // Declarando un STATE 
    // const [stock, setStock] = useState(stock = stock - initial);

    function sumar(){
        if (numero < stock){
            setNumero(numero + 1);
        }
    }

    function restar(){
        if (numero > 1) {
            setNumero(numero - 1);
        }
    }
    return (
        <div className="containerCount">

            <div className="CountObjets">

                <div className="CountObjet">
                    <h4 id="textStock">Stock Disponible: {stock}</h4>
                </div>

                <div className="CountObjet">
                    <button onClick={() => restar()} className="menos">-</button>
                    <h4>{numero}</h4>
                    {/* Funcion sumar 1 */}
                    <button onClick={() => sumar()} className="mas">+</button>
                </div>

                <div className="textContainer" >
                    <button onClick={() => onAdd(numero)} className="AgregarStock">Agregar al carrito</button>
                </div>

            </div>
            

        </div>
    )
}
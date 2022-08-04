import './ItemCount.css'
import React, { useState } from 'react';


export default function ItemCount({stock, initial, onAdd, setMostrarBoton}) {
    
    const [count, setCount]  = useState(initial);

    // Declarando un STATE 
    // const [stock, setStock] = useState(stock = stock - initial);

    function sumar(){
        if (count < stock){
            setCount(count + 1);
        }
    }

    function restar(){
        if (count > 1) {
            setCount(count - 1);
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
                    <h4>{count}</h4>
                    {/* Funcion sumar 1 */}
                    <button onClick={() => sumar()} className="mas">+</button>
                </div>

                <div className="textContainer" >
                    <button onClick={() => {
                        onAdd(count);
                        setMostrarBoton(false);
                    }} className="AgregarStock">Agregar al carrito</button>
                </div>

            </div>
            

        </div>
    )
}
import './ItemCount.css'
import React, { useState } from 'react';


export default function ItemCount({stock, initial, onAdd, setMostrarBoton = ''}) {
    
    const [count, setCount]  = useState(initial);


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

                <div style={{backgroundColor: '#e1872d', borderRadius: 5}}>
                    <div className="CountObjet" style={{margin: '0 auto'}}>
                        <button onClick={() => restar()} className="menos">-</button>
                        <h4>{count}</h4>
                        <button onClick={() => sumar()} className="mas">+</button>
                    </div>
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
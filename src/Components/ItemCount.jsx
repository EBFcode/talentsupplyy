import './ItemCount.css'
import React, { useState } from 'react';

export default function ItemCount({maxStock}) {
    const [numero, setNumero]  = useState(0);

    // Declarando un STATE
    const [disponibleStock, setDisponibleStock] = useState(maxStock);

    let btnMas = document.getElementById("mas");
    let btnMenos = document.getElementById("menos");
    let textStock = document.getElementById("textStock")



    function onAdd(){

        if (numero <= (maxStock - 1)){
            setNumero(numero + 1);
            setDisponibleStock(disponibleStock - 1);
            btnMenos.style.backgroundColor = "#2B4162";


        }else {
            btnMas.style.backgroundColor = "#f2f2f2";
            textStock.style.color = "red";
        }
        
    }

    function onSubtract(){

        if (disponibleStock < maxStock) {
            setNumero(numero - 1);
            setDisponibleStock(disponibleStock + 1);
            btnMas.style.backgroundColor = "#2B4162";
            textStock.style.color = "#fff";


        }else {
            btnMenos.style.backgroundColor = "#f2f2f2";
        }
        
    }
    return (
        <div className="containerCount">

            <div className="CountObjets">

                <div className="CountObjet">
                    <h4 id="textStock">Stock Disponible: {disponibleStock}</h4>
                </div>

                <div className="CountObjet">
                    <button onClick={() => onSubtract()} id="menos">-</button>
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


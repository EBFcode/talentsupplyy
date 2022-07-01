import './ItemCount.css'
import React, { useState } from 'react';


export default function ItemCount({stock, initial, onAdd}) {
    const [numero, setNumero]  = useState(initial);

    // Declarando un STATE 
    const [disponibleStock, setDisponibleStock] = useState(stock = stock - initial);

    // Estilos negativos AUN NO EN USO!!!!
    let EstilosNegativos = {
        text:{
            color: ""
        },
        bgText: {
            backgroundColor: "#f2f2f2",
            color: "grey",
            boxShadow: "none"
        }
    };



    function onAdd(){

        if (numero <= stock){
            setNumero(numero + 1);
            setDisponibleStock(disponibleStock - 1);
            


        }else {
            // btnMas.style.backgroundColor = "#f2f2f2";
            // textStock.style.color = "red";
        }
        
    }

    function onSubtract(){

        if (disponibleStock <= stock) {
            setNumero(numero - 1);
            setDisponibleStock(disponibleStock + 1);
            // btnMas.style.backgroundColor = "#2B4162";
            // textStock.style.color = "#fff";


        }else {
            // btnMenos.style.backgroundColor = "#f2f2f2";
        }
        
    }
    return (
        <div className="containerCount">

            <div className="CountObjets">

                <div className="CountObjet">
                    <h4 id="textStock" style={EstilosNegativos.text}>Stock Disponible: {disponibleStock}</h4>
                </div>

                <div className="CountObjet">
                    <button onClick={() => onSubtract()} className="menos">-</button>
                    <h4>{numero}</h4>
                    {/* Funcion sumar 1 */}
                    <button onClick={() => onAdd()} className="mas">+</button>
                </div>

                <div className="textContainer" >
                    <button className="AgregarStock">Agrega Stok</button>
                </div>

            </div>
            

        </div>
    )
}


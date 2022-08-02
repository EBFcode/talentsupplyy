import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
    return (
        <>
        <div className='container'>
            <p> Nombre: {item.nombre}</p>
            <p>Precio: {item.precio}</p>
            <img src={item.img} alt={item.nombre} />

            <button>
                <Link to={`/item/${item.id}`}>Ver detalle del producto</Link>
            </button>
        </div>
        </>
    );
}

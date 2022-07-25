import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
    return (
        <>
        <div className='container'>
        <p> ID: {item.id} </p>
            <p> Titulo: {item.titulo}</p>
            <p>Price: {item.precio}</p>
            <img src={item.url} alt={item.titulo}/>
            <button>
                <Link to={`/item/${item.id}`}>Ver detalle del producto</Link>
            </button>
        </div>
        </>
    );
}

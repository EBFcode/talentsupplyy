import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
    console.log(item)
    return (
        <>
        <div className='container'>
            <p> ID: {item.id} </p>
            <p> Titulo: {item.title}</p>
            <p>Price: {item.price}</p>
            <img src={item.pictureUrl} alt={item.title}/>
            <p>Stock:{item.stock} </p>
            <button>
                <Link to={`item/${item.id}`}>Ver detalle del producto</Link>
            </button>
        </div>
        </>
    );
}

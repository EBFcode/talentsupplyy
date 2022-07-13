import React from 'react'
import { Link } from "react-router-dom";

export default function ItemDetail({item}) {
    return (
        <>
        <div className='container'>
            <p> ID: {item.id} </p>
            <p> Titulo: {item.titulo}</p>
            <p>Price: {item.precio}</p>
            <img src={item.url} alt={item.titulo}/>
            {/* <p>Stock:{item.stock} </p> */}
        </div>
        </>
    )
}

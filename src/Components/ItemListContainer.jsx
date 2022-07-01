import React from 'react'
import ItemCount from './ItemCount'
import './ItemListContainer.css'


export default function ItemListContainer() {
    // Variable para administrar Stock
    let maxStock = 100;
    let initial = 1;

    function onAdd(numero){
        alert("Items agregados al carrito: " + numero)
    }


    return (
        <ItemCount stock={maxStock} initial={initial} onAdd={onAdd}/>
    )
}

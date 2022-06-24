import React from 'react'
import ItemCount from './ItemCount'
import './ItemListContainer.css'


export default function ItemListContainer() {
    // Variable para administrar Stok
    let maxStock = 100;



    return (
        <ItemCount maxStock={maxStock}/>
    )
}

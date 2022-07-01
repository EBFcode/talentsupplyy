import React from 'react'
import ItemCount from './ItemCount'
import './ItemListContainer.css'


export default function ItemListContainer() {
    // Variable para administrar Stok
    let maxStock = 100;
    let initial = 1;



    return (
        <ItemCount stock={maxStock} initial={initial} />
    )
}

import React from 'react'
import './ItemListContainer.css'


export default function ItemListContainer({greeting}) {
    return (
        <div className="containerGreeting">
            
            <h2>{greeting}</h2>
            
        </div>
    )
}

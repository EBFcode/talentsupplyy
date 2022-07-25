import React from 'react'
import { CartContext } from '../Context/CartContext'

export default function Cart() {

    const {cart} = React.useContext(CartContext);

    console.log(cart)

    return (
        <div>
            
        </div>
    )
}

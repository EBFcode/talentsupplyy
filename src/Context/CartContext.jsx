import React from 'react'

export const CartContext = React.createContext();

export default function CartProvider({children}) {
    const [cart, setCart] = React.useState([])

    function isInCart(id) {
        return cart.some(e => e.id === Number(id))
    }

    function addItem(item, quantity) {
        if (isInCart(item.id)) {
            let newCart = cart;
            let indexProduct = newCart.findIndex(element => element.id === Number(item.id));
            // Recuerda crear un quantity en el json
            newCart[indexProduct].quantity = Number(newCart[indexProduct].quantity) + Number(quantity);
            setCart([...newCart]);
        } else {
            setCart([...cart, {...item, quantity: quantity}]);
        }
    }

    function clear() {
        setCart([])
    }

    function hola() {
        console.log('dsafas');
    }

    return (
            <CartContext.Provider value={{addItem, hola, cart}}>{children}</CartContext.Provider>
    )
}

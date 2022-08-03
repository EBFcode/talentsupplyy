import React from 'react'

export const CartContext = React.createContext();

export default function CartProvider({children}) {
    const [cart, setCart] = React.useState([])
    const [total, setTotal] = React.useState(0)

    function isInCart(id) {
        return cart.some(e => e.id === Number(id))
    }

    function addItem(item, quantity) {
        if (isInCart(item.id)) {
            let newCart = cart;
            let indexProduct = newCart.findIndex(element => element.id === Number(item.id));
            newCart[indexProduct].quantity = Number(newCart[indexProduct].quantity) + Number(quantity);
            setCart([...newCart]);
        } else {
            setCart([...cart, {...item, quantity: quantity}]);
        }
    }

    function removeItemId(id){
        cart.filter((element) => element.id !== id);
    }

    function clear() {
        setCart([])
    }

    React.useEffect(() =>{
        const total = cart.reduce((previo, acumulador) => previo + acumulador.precio * acumulador.quantity, 0);
        setTotal(total);
    }, [cart])

    return (
            <CartContext.Provider value={{addItem, cart, total}}>{children}</CartContext.Provider>
    )
}

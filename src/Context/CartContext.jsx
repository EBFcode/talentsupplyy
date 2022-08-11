import React from 'react'

export const CartContext = React.createContext();

export default function CartProvider({children}) {
    const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('carrito')) || [])
    const [total, setTotal] = React.useState(0)
    const [cantidad, setCantidad] = React.useState(0);

    const [resultadoTerminarCompra, setResultadoTerminarCompra] = React.useState(true);


    
    function isInCart(id) {
        return cart.some(e => e.id === id);
    }

    function addItem(item, quantity) {
        if (isInCart(item.id)) {
            let newCart = cart;
            let indexProduct = newCart.findIndex(element => element.id === item.id);
        
            if (newCart[indexProduct].quantity + quantity > item.stock) {
                return setResultadoTerminarCompra(false)

            } 

            newCart[indexProduct].quantity = Number(newCart[indexProduct].quantity) + Number(quantity);
            setCart([...newCart]);
        } else {
            setCart([...cart, {...item, quantity: quantity}]);
        }
    }

    function removeItemId(id){
        const eliminarItem = cart.filter((element) => element.id !== id);
        if(eliminarItem) setCart(eliminarItem);
    }

    function clear() {
        setCart([])
        setTotal(0)
        setCantidad(0)
        localStorage.clear();
    }

    React.useEffect(() =>{
        localStorage.setItem('carrito', JSON.stringify(cart));
        const total = cart.reduce((previo, acumulador) => previo + acumulador.precio * acumulador.quantity, 0);
        setTotal(total);

        const carritoCantidad = cart.reduce((previo, acumulador) => previo + acumulador.quantity,0);
        setCantidad(carritoCantidad);
    }, [cart])

    return (
            <CartContext.Provider value={{addItem, cart, clear,removeItemId, total, cantidad, resultadoTerminarCompra}}>{children}</CartContext.Provider>
    )
}

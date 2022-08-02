import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
        <header className="navContainer">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/category/lapto'>Laptop</Link></li>
                <li><Link to='/category/mouse'>Mouse</Link></li>
                <li><Link to='/ingresarProductos'>Agregar Productos</Link></li>


            </ul>
            <div className="CartWidget">
                <CartWidget />
            </div>
        </header>
        </>
    )
}
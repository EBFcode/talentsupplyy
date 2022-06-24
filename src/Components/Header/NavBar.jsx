import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'


export default function NavBar() {
    return (
        <header className="navContainer">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Learn More</a></li>
            </ul>
            
            <label><a href="/">Talent Supply</a></label>
            

            <div className="CartWidget">
                <CartWidget />
            </div>
        </header>
    )
}
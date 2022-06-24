import React from 'react'
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

export default function CartWidget() {
    return (
        <div className="Widget">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping-fast" />
            <p>0</p>
        </div>
    )
}

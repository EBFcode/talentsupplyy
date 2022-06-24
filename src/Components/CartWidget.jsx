import React from 'react'
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';




export default function CartWidget() {
    return (
        <div className="Widget">
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>

            <p>0</p>
        </div>
    )
}

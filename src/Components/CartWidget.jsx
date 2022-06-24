import React from 'react'
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CartWidget() {
    return (
        <div className="Widget">
            <FontAwesomeIcon icon={['fab', 'apple']} />
            <p>0</p>
        </div>
    )
}

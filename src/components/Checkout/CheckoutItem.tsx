import React, {MouseEvent} from 'react';
import './checkout.css';

export interface IProps {
    name: number,
    price: number,
    updateCart(val1: any):void;
}

export default function CheckoutItem(props:IProps) {

    function handleClick() {
        props.updateCart(props.name)
    }
return(
    <div className="co-list-item">
        <div className="co-info-container">
        <p className="co-headline">{props.name}</p>
        <p>{props.price} :-</p>
        </div>
        <div className="delete-btn-container">
            <button type="button" onClick={handleClick}>Delete <i className="fas fa-times"></i></button>
        </div>
    </div>
)
}
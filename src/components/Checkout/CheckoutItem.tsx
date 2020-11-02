import React from 'react';
import './checkout.css';

interface IProps {
    name: number,
    price: number,
}

export default function CheckoutItem(props:IProps) {
return(
    <div className="co-list-item">
        <div className="co-info-container">
        <p className="co-headline">{props.name}</p>
        <p>{props.price} :-</p>
        </div>
    </div>
)
}
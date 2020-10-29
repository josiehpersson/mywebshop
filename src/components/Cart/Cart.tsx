import React, {ChangeEvent, useState} from 'react';
import './cart.css';

interface IcartTotal{
    total:number;
}

export default function Cart (props:IcartTotal) {

    const [cart, setCart] = useState([]);
    const [cartTotal, setcartTotal] = useState(0);


return (
    <div className="cart">
                    <div className="cart-container">
                        <span>{props.total}</span>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
    </div>
)
}
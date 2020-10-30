import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

interface IcartTotal {
  total: number;
}

export default function Cart(props: IcartTotal) {
  return (
    <Link to="/checkout">
      <div className="cart">
        <div className="cart-container">
          <span>{props.total}</span>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </Link>
  );
}

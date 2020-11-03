import React from 'react';
import './cart.css';
import {ICartTotal} from '../../models/ICartTotal';

export default function Cart(props: ICartTotal) {
  return (
      <div className="cart">
        <div className="cart-container">
          <span>{props.total}</span>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
  );
}

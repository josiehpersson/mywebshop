import React, { useEffect, useState, MouseEvent } from 'react';
import './checkout.css';
import Userform, { IUserForm } from './Userform';
import CheckoutItem from './CheckoutItem';
import moment from 'moment';
import axios from 'axios';

export interface IShoppingCart {
  myShoppingCart: Array<ICartProduct>;
}

interface ICartProduct {
    id: number;
    productId: number;
    product: string;
    amount: number;
    orderId: number;
  }

export default function Checkout(props: IShoppingCart) {
  const defaultValue1: IUserForm = {
    firstname: '',
    lastname: '',
    address: '',
    zipcode: '',
    city: '',
  };
  const [userForm, setUserForm] = useState(defaultValue1);

  const defaultValue2: Array<{ id: number, productId: number, product: string, amount: number, orderId: number }> = [];
  const [shoppingCart, setShoppingCart] = useState(defaultValue2);

  const [sum, setSum] = useState(0);

  const myCart: Array<{ id: number, productId: number, product: string, amount: number, orderId: number }> = [];


  useEffect(() => {
    myCart.push(...shoppingCart);
    myCart.push(...props.myShoppingCart);
    setShoppingCart(myCart);
    let total = 0;
    for(let i = 0; i< myCart.length; i++) {
        total += sum + myCart[i].amount;
    }
    setSum(total);
  }, []);

  function updateForm(formValue: IUserForm): void {
    setUserForm(formValue);
    console.log(userForm);
  }

  function placeOrder(e: MouseEvent<HTMLButtonElement>) {
    let newDate = moment().format();

    const newOrder = {
      companyId: 7996,
      totalPrice :  sum,
      orderRows : JSON.stringify(shoppingCart),
      createdBy : JSON.stringify(userForm),
      created : newDate
    }
    console.log(newOrder);


    const baseURL : string = `https://medieinstitutet-wie-products.azurewebsites.net/api/orders`;

    axios.post(baseURL, newOrder)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


  }
  const cartItems = shoppingCart.map((product: ICartProduct) => {
      return(
          <CheckoutItem
          name={product.product}
          price={product.amount}
          />
      );
  });

  return (
    <div className="checkout-container">
        <div className="user-information">
      <Userform updateParent={updateForm} />
        </div>
      <div className="cart-container">
        <div className="shopping-cart">
      <i className="fas fa-shopping-basket"></i>
          {cartItems}
        </div>
          <p>{sum} :-</p>
      <button type="button" onClick={placeOrder}>
        Check out
      </button>
      </div>
    </div>
  );
}

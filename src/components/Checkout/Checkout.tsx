import React, { useEffect, useState, MouseEvent } from 'react';
import './checkout.css';
import Userform from './Userform';
import CheckoutItem from './CheckoutItem';
import {ICartProduct} from '../../models/ICartProduct';
import {IUserForm} from '../../models/IUserForm';
import moment from 'moment';
import axios from 'axios';

export interface IShoppingCart {
  myShoppingCart: Array<ICartProduct>;
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

  const defaultValue2: Array<ICartProduct> = [];
  const [shoppingCart, setShoppingCart] = useState(defaultValue2);

  const [sum, setSum] = useState(0);

  const myCart: Array<ICartProduct> = [];

  useEffect(() => {
    myCart.push(...shoppingCart);
    myCart.push(...props.myShoppingCart);
    setShoppingCart(myCart);
    let total = 0;
    for (let i = 0; i < myCart.length; i++) {
      total += sum + myCart[i].amount;
    }
    setSum(total);
  }, []);

  function updateForm(formValue: IUserForm): void {
    setUserForm(formValue);
  }

  function placeOrder(e: MouseEvent<HTMLButtonElement>) {
    let newDate = moment().format();

    const newOrder = {
      companyId: 7996,
      totalPrice: sum,
      orderRows: shoppingCart,
      createdBy: JSON.stringify(userForm),
      created: newDate,
    };
    console.log(newOrder);

    const baseURL: string = `https://medieinstitutet-wie-products.azurewebsites.net/api/orders`;

    axios
      .post(baseURL, newOrder)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const cartItems = shoppingCart.map((product: ICartProduct) => {
    function removeItem(e: MouseEvent<HTMLButtonElement>) {
      const tempCart = [...shoppingCart];
      const item = {
        productId: product.productId,
        amount: product.amount,
      };
      let itemIndex = tempCart.findIndex(function (ind) {
        return ind.productId == item.productId;
      });
      if (itemIndex !== -1) {
        tempCart.splice(itemIndex, 1);
      }
      let total = 0;
      for (let i = 0; i < tempCart.length; i++) {
        total += sum + tempCart[i].amount;
      }
      setSum(total);
      setShoppingCart(tempCart);
    }
    return (
      <CheckoutItem
        name={product.productId}
        price={product.amount}
        updateCart={removeItem}
      />
    );
  });

  return (
    <div className="checkout-container">
      <div className="user-information">
        <Userform updateParent={updateForm} />
      </div>
      <div className="checkout-cart-container">
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

import React, { useEffect, useState } from 'react';
import './checkout.css';
import Userform, { IUserForm } from './Userform';
import CheckoutItem from './CheckoutItem';

export interface IShoppingCart {
  myShoppingCart: Array<{ name: string,price: number }>;
}

interface ICartProduct {
    name: string;
    price: number;
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

  const defaultValue2: Array<{ name: string, price: number }> = [];
  const [shoppingCart, setShoppingCart] = useState(defaultValue2);

  useEffect(() => {
    const myCart: Array<{ name: string, price: number }> = [];
    myCart.push(...shoppingCart);
    myCart.push(...props.myShoppingCart);
    setShoppingCart(myCart);
  }, []);

  function updateForm(formValue: IUserForm): void {
    setUserForm(formValue);
    console.log(userForm);
  }

  const cartItems = shoppingCart.map((product: ICartProduct) => {
      return(
          <CheckoutItem
          name={product.name}
          price={product.price}
          />
      );
  });

  return (
    <div className="checkout-container">
      <Userform updateParent={updateForm} />
      <div className="cart-container">
      <i className="fas fa-shopping-basket"></i>
          {cartItems}
      </div>
    </div>
  );
}

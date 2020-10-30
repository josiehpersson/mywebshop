import React, { useEffect, useState } from 'react';
import './checkout.css';
import Userform, { IUserForm } from './Userform';

export interface IShoppingCart {
  myShoppingCart: Array<{ id: number }>;
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
  
  const defaultValue2: Array<{ id: number }> = [];
  const [shoppingCart, setShoppingCart] = useState(defaultValue2);

  useEffect(() => {
    const myCart: Array<{ id: number }> = [];
    myCart.push(...shoppingCart);
    myCart.push(...props.myShoppingCart);
    setShoppingCart(myCart);
  }, []);

  function updateForm(formValue: IUserForm): void {
    setUserForm(formValue);
    console.log(userForm);
  }

  return (
    <div className="checkout-container">
      <Userform updateParent={updateForm} />
    </div>
  );
}

import React, { useEffect, useState, MouseEvent } from 'react';
import './checkout.css';
import Userform, { IUserForm } from './Userform';
import CheckoutItem from './CheckoutItem';
import axios from 'axios';

export interface IShoppingCart {
  myShoppingCart: Array<ICartProduct>;
}

interface ICartProduct {
    name: string;
    price: number;
}

interface IPlaceOrder {
  companyID: number;
  totalPrice: number;
  paymentMethod?: string;
  orderRows: Array<ICartProduct>;
  createdBy: IUserForm;
  created: string;
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

  const [sum, setSum] = useState(0);

  const [date,setDate] = useState('');

  const myCart: Array<{ name: string, price: number }> = [];

  useEffect(() => {
    myCart.push(...shoppingCart);
    myCart.push(...props.myShoppingCart);
    setShoppingCart(myCart);
    let total = 0;
    for(let i = 0; i< myCart.length; i++) {
        total += sum + myCart[i].price;
    }
    setSum(total);
  }, []);

  function updateForm(formValue: IUserForm): void {
    setUserForm(formValue);
    console.log(userForm);
  }

  function placeOrder(e: MouseEvent<HTMLButtonElement>) {
    let newDate = new Date();
    setDate(JSON.stringify(newDate));
    console.log(date);

    const newOrder: IPlaceOrder = {
      companyID: 7996,
      totalPrice: sum,
      orderRows: shoppingCart,
      createdBy: userForm,
      created: date
    }
    axios.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/', {newOrder})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    /*
    axios.get('http://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .then(res => {
        setProducts(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
    */
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

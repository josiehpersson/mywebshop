import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './webshop.css';
//import Header from "../Header/Header"
import Home from '../Home/Home';
import ProductPage, {ICart} from '../ProductPage/ProductPage';
import ShoppingCart from '../Cart/Cart';

/*
interface IState {
  tasks?:Array<object>
}*/

interface IObjectClass {
  product: object;

}

interface IState {
  cart:object[];
}
function Webshop() {
  const defaultValue : IState = {cart:[]};
    const [cart, setCart] = useState(defaultValue);
    // const [cartTotal, setcartTotal] = useState(0);
  //const storageArray: IObjectClass [] = [];
    const [cartTotal, setcartTotal] = useState(0);
    const myCart: object[] = [cart];

    const increment = (props: ICart) =>{
      let product = {
        name: props.addName,
        price: props.addPrice
      }
      myCart.push(product);
      console.log(myCart);
     /* let storageArray: object[] = [cart]; 
        let product = [{
        name: props.addName,
        price: props.addPrice,
      }];
      setcartTotal(cartTotal + 1);
      storageArray.push(...product);
      setCart(product);
      console.log(storageArray);
      */
      //storageArray.push(product);
      //console.log(storageArray);
    }
 
  return (
    <Router>
              <nav className="navbar">
            <Link to="/" className="nav-link home-link">
                HOME
           </Link>
            <div className="search-container">
                <input type="text" className="search-input"/>
                <i className="fas fa-search"></i>
            </div>
            <div className="link-container">
{/* links in nav */}
                <Link to="/login" className="nav-link">
                    <div className="nav-option">
                        <span>Hello</span>
                        <span>LOGGA OUT</span>
                    </div>
                </Link>

                <Link to="/login" className="nav-link">
                    <div className="nav-option">
                        <span>ADMIN</span>
                        <span>LOGIN</span>
                    </div>
                </Link>

                <Link to="checkout" className="nav-link">
<ShoppingCart total={cartTotal}/>
                </Link>

            </div>


        </nav>
      <div className="app">
       <Switch>
         <Route path="/checkout">
           <h1>CHECKOUT</h1>
           {/* <ShoppingCart total={cartTotal}></ShoppingCart> */}
         </Route>
         <Route path="/login">
           <h1>LOGIN</h1>
         </Route>
         <Route path="/products/:id">
              <ProductPage updateCount={increment}></ProductPage>
          </Route>
         <Route path="/" exact={true}>
           <Home></Home>
         </Route> 
       </Switch>
      </div>
    </Router>
  );
}

export default Webshop;

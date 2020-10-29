import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './webshop.css';
//import Header from "../Header/Header"
import Home from '../Home/Home';
import ProductPage, { ICart } from '../ProductPage/ProductPage';
import ShoppingCart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';

function Webshop() {
  const [cartTotal, setCartTotal] = useState(0);
  const myCart: Array<{ name: string; price: number }> = [];
  const [cart, setCart] = useState(myCart);

  /*
  // Emmulate componentDidMount lifecycle
  React.useEffect(() => {
    s = setInterval(() => {
      setCounter(state => (state +1));
    }, 1000);
  }, []);

  // This is for counter state variable
  React.useEffect(() => {
    if (counter > 9) {
      clearInterval(s);
    }
  }, [counter]);
*/

  useEffect(() => {
    setCart(myCart);
  }, []);
  const increment = (props: ICart) => {
    myCart.push(...cart);
    let product = {
      name: props.name,
      price: props.price,
    };
    myCart.push(product);
    setCart(myCart);
    console.log(myCart, cart);
    setCartTotal(cartTotal + 1);
  };
  /*
    const increment = (props: ICart) =>{
      myCart.push(...cart);
      let product = {
        name: props.name,
        price: props.price
      }
      myCart.push(product);
      setCart(myCart);
      console.log(myCart, cart);
      setCartTotal(cartTotal + 1);
}
//FUNKAR MEN CART LIGGER EFTER MED 1
*/

  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link home-link">
          HOME
        </Link>
        <div className="search-container">
          <input type="text" className="search-input" />
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

          <Link to="/checkout" className="nav-link">
            <ShoppingCart total={cartTotal} />
          </Link>
        </div>
      </nav>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Checkout />
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

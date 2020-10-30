import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './webshop.css';
import Home from '../Home/Home';
import ProductPage, { ICart } from '../ProductPage/ProductPage';
import ShoppingCart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';



function Webshop() {
  const [cartTotal, setCartTotal] = useState(0);
  const myCart: Array<{ id: number }> = [];
  const [cart, setCart] = useState(myCart);

  useEffect(() => {
    setCart(myCart);
  }, []);

  const addToCart = (props: ICart) => {
    myCart.push(...cart);
    let product = {
      id: props.id
    };
    myCart.push(product);
    setCart(myCart);
    console.log(myCart, cart);
    setCartTotal(cartTotal + 1);
  };

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

          <Link to="/login" className="nav-link">
            <div className="nav-option">
              <span>ADMIN</span>
            </div>
          </Link>

          <Link to="/checkout" className="nav-link">
          </Link>
        </div>
          <ShoppingCart total={cartTotal} />
      </nav>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Checkout  myShoppingCart={cart}/>
          </Route>
          <Route path="/login">
            <h1>LOGIN</h1>
          </Route>
          <Route path="/products/:id">
            <ProductPage updateCount={addToCart}></ProductPage>
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

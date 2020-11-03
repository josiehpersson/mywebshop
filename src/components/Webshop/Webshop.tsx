import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './webshop.css';
import Home from '../Home/Home';
import ProductPage from '../ProductPage/ProductPage';
import ShoppingCart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/AdminPage';
import {ICartProduct} from '../../models/ICartProduct';

function Webshop() {
  const [cartTotal, setCartTotal] = useState(0);
  const myCart: Array<ICartProduct> = [];
  const [cart, setCart] = useState(myCart);

  useEffect(() => {
    setCart(myCart);
  }, []);

  const addToCart = (props: ICartProduct) => {
    myCart.push(...cart);
    let product = {
      productId: props.productId,
      amount: props.amount,
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
        <i className="fas fa-home"></i>
        </Link>
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input type="text" className="search-input" />
        </div>
        <div className="link-container">
          <Link to="/admin" className="nav-link">
            <div className="nav-option">
              <span>ADMIN</span>
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
            <Checkout myShoppingCart={cart} />
          </Route>
          <Route path="/admin">
            <Admin />
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

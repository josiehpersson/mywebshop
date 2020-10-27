import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="app">
       <Switch>
         <Route path="/checkout">
           <h1>CHECKOUT</h1>
         </Route>
         <Route path="/login">
           <h1>LOGIN</h1>
         </Route>
         <Route path="/products/:id">
              <ProductPage></ProductPage>
          </Route>
         <Route path="/" exact={true}>
           <Home></Home>
         </Route> 
       </Switch>
      </div>
    </Router>
  );
}

export default App;

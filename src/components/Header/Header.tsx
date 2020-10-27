import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


function Header() {
    return(
        <nav className="navbar">
                <Link to="/" className="nav-link home-link">
                    <div className="nav-option">
                        <span>HOME</span>
                    </div>
                </Link>
            <div className="search-container">
                <i className="fas fa-search"></i>
                <input type="text" className="search-input"/>
            </div>
            <div className="link-container">
                <Link to="/login" className="nav-link">
                    <div className="nav-option">
                        <span>Hello</span>
                        <span>LOGOUT</span>
                    </div>
                </Link>

                <Link to="/login" className="nav-link">
                    <div className="nav-option">
                        <span>ADMIN</span>
                        <span>LOGIN</span>
                    </div>
                </Link>
            </div>


                <Link to="/checkout" className="nav-link cart-link">
                    <div className="cart-container">
                        <span>0</span>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                </Link>


        </nav>
    )
}

export default Header
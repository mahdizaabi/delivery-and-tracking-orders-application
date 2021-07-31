import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartReducer } from '../Reducers/cartReducer';
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const cartState = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between shadow p-3 mb-5 bg-white rounded">
                <Link className="navbar-brand" href="###" to="/">My Store</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="###">Home<span className="sr-only">Login</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ordersscreen">Cart {cartState.cartItems.length}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
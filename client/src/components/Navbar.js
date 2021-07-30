import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { CartReducer } from '../Reducers/cartReducer';
import './navbar.css'

export default function Navbar() {
    const cartState = useSelector(state=>state.CartReducer)
    const dispatch = useDispatch()
       
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between shadow p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="###">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="###">Home<span className="sr-only">Login</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="###">Cart {cartState.cartItems.length}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
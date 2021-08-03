import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartReducer } from '../Reducers/cartReducer';
import { logoutUser } from '../actions/userAction'
import './navbar.css'
import { Link } from 'react-router-dom';
import DropDown from './DropDown'
export default function Navbar() {
    const cartState = useSelector(state => state.CartReducer);
    const authState = useSelector(state => state.userLoginReducer);
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between shadow p-3 mb-5 bg-white rounded">
                <Link className="navbar-brand" href="###" to="/">My Store</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify-content-between">
                        <li>

                            {
                                authState.success ? <DropDown></DropDown>
                                    :
                                    <Link className="nav-link" to="/login">login</Link>
                            }
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ordersscreen">Cart {authState.success ? cartState.cartItems.length : 0}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
import React from 'react';

import './navbar.css'

export default function Navbar() {

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
                            <a className="nav-link" href="###">Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
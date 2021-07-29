import React from 'react';

import './navbar.css'

export default function Navbar() {

    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between shadow p-3 mb-5 bg-white rounded">
                <a class="navbar-brand" href="###">Navbar</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="###">Home <span class="sr-only">Login</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="###">Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
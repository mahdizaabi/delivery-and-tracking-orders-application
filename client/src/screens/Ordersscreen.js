

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OrderCard } from '../components/Ordercard';

export default function OrdersScreen() {


    const cartState = useSelector(state => state.CartReducer)
    const cartItems = cartState.cartItems;

    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-6">
                    <h2 className="text-center">My Cart</h2>
                    {cartItems.map(item => OrderCard(item))}
                </div>
                
                <div className="col-md-4">International</div>
            </div>


        </div>
    )

}
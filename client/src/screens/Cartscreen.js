

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Checkout from '../components/Checkout';
import { OrderCard } from '../components/Ordercard';

export default function OrdersScreen() {

    const auth = useSelector(state => state.userLoginReducer)

    const cartState = useSelector(state => state.CartReducer)
    const cartItems = cartState.cartItems;
    const calculatePrice = (quantity, varientPrice) => quantity * varientPrice;
    const subTotal = cartItems.reduce((accumulater, current) => accumulater + current.prices[0][current.selectedVarient] * current.selectedQuanity, 0)
    return (
        <div className="container">
            {auth.success && (<div className="row justify-content-between">
                <div className="col-md-6">
                    <h2 className="text-center">My Cart</h2>
                    {cartItems.map(item => OrderCard(item))}
                </div>

                <div className="col-md-4">

                    <p>Total amount to pay: {subTotal}dt</p>
                    <Checkout subTotal></Checkout>
                </div>
            </div>)}

        </div>
    )

}
import react from 'react';
import { useDispatch } from 'react-redux'; 
import StripeCheckout from 'react-stripe-checkout';
import {placeOrder} from '../actions/orderAction';


export default function Checkout({subtotal}) {
    const dispatch = useDispatch();
    const tokenHandler = (token) => {
        dispatch(placeOrder(token,subtotal))
    }
    return(
        <div>
            <StripeCheckout
            amount={subtotal}
            shippingAddress
            stripeKey="pk_test_51JKBHIE4KLe4LrYx9WSpEPvxqFdwENbNOPmEP1KTnOufYSRrdZA2POSMVZFtahGFf2eCOVa6TMm5M2dxIwMUrmxY00Vt7op0aN"
            token={tokenHandler}
            >
                <button className="btn" style={{backgroundColor:"red"}}>pay now</button>
            </StripeCheckout>
        </div>
    )
}
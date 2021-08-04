import react from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderAction';
import SuccessNotification from '../components/SuccessNotification';
import Spinneer from '../components/Spinner';

export default function Checkout({ subtotal }) {
    const dispatch = useDispatch();

    const orderState = useSelector(state => state.orderReducer);
    const { loading, error, success } = orderState;
    const tokenHandler = (token) => {
        dispatch(placeOrder(token, subtotal))
    }
    return (
        <div>
            <StripeCheckout
                amount={subtotal}
                shippingAddress
                stripeKey="pk_test_51JKBHIE4KLe4LrYx9WSpEPvxqFdwENbNOPmEP1KTnOufYSRrdZA2POSMVZFtahGFf2eCOVa6TMm5M2dxIwMUrmxY00Vt7op0aN"
                token={tokenHandler}
            >
                <button className="btn" style={{ backgroundColor: "red" }}>pay now</button>
            </StripeCheckout>
            {success && <SuccessNotification title="your payment was successful!" details="your order is being processed"></SuccessNotification>}
            {loading && <Spinneer />}
            {error && <p>{error}</p>}
        </div>
    )
}
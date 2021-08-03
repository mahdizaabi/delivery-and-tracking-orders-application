import react from 'react';
import StripeCheckout from 'react-stripe-checkout';



export default function Checkout({subtotal}) {
    const tokenHandler = (token) => {


    }
    return(
        <div>
            <StripeCheckout
            amount={subtotal}
            shippingAddress
            token={tokenHandler}
            currency="EUR"
            >
                <button className="btn" style={{backgroundColor:"red"}}>pay now</button>
            </StripeCheckout>
        </div>
    )
}
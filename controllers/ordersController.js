
const productModel = require('../models/ProductModel');
const { v4: uuidv4 } = require('uuid')
const stripe = require("stripe")("sk_test_51JKBHIE4KLe4LrYxB0vrpYyscnQug7U1wQi2wdKArIHkJi2hegZWUyfGpK7E3LXOVgvsRkHMcGRdZIP54ckd57NV00rsjlMBaS");


class orderController {
    static async placeOrder(req, res) {
        const { token, subtotal, currentUser, cartItems } = req.body;
        try {
            const customer = await stripe.customers.create({
                email: token.email,
                source: token.id
            })

            const payment = await stripe.charges.create({
                amount: subtotal * 100,
                currency: 'inr',
                customer: customer.id,
                receipt_email: token.email
            },
                {
                    idempotencykey: uuidv4()
                })



                if(payment) {
                    res.send('Payment done')
                } else {
                    res.send('Payent failed')
                }
        }

        catch (error) {
            return res.status(400).json({message:"something went wrong " + error})
         }
    }


}
module.exports = orderController;
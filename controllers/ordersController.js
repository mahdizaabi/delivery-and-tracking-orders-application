
const { v4: uuidv4 } = require('uuid')
const stripe = require("stripe")("sk_test_51JKBHIE4KLe4LrYxB0vrpYyscnQug7U1wQi2wdKArIHkJi2hegZWUyfGpK7E3LXOVgvsRkHMcGRdZIP54ckd57NV00rsjlMBaS");
const orderModel = require('../models/orderModel')
class orderController {
    static async placeOrder(req, res) {
        const { token, subTotal, currentUser, cartItems } = req.body;

        const newOrder = new orderModel({
            name: currentUser.name,
            email: currentUser.email,
            userId: currentUser._id,
            orderItems: cartItems,
            orderAmount: subTotal,
            shippingAddress: {
                street: token.card.address_line1,
                city: token.card.address_city,
                country: token.card.address_country,
                pincode: token.card.address_zip
            },
            transactionId: token.card.id
        })
        newOrder.save()
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



            if (payment) {
                res.send('Payment done')
            } else {
                res.send('Payent failed')
            }
        }

        catch (error) {
            return res.status(400).json({ message: "something went wrong " + error })
        }
    }

    static async getAllUserOrder(req, res) {
        const { userId } = req.query
        console.log(userId)

        try {
            const ordersList = await orderModel.find({ userId: userId })
            console.log(ordersList)
            res.status(200).json(ordersList)
        } catch (e) {
            res.status(401).json({ error: e.message })


        }

    }

}
module.exports = orderController;
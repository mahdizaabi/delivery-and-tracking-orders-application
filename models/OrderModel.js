const mongoose = require('mongoose');

/* create pizza Modal for mongoDB*/
const orderSchema = mongoose.Schema({
    name: { type: String, require },
    email:{type: String, require},
    userId:{type:String, require},
    orderItems:[],
    shippingAddress: {type:Object},
    orderAmount: {type:Number, require},
    isDelivered: {type:Boolean, require, default: false},
    transactionId: {type:String, require}


},
    {
        timestamps: true,
    }
)


const orderModel = mongoose.model('order', orderSchema);
module.exports = orderModel;
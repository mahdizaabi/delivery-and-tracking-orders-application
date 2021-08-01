const mongoose = require('mongoose');

/* create pizza Modal for mongoDB*/
const productSchema = mongoose.Schema({
    name: { type: String, require },
    varients: [],
    prices: [],
    category: { type: String, require },
    image: { type: String, require },
    description: { type: String, require }


},
    {
        timestamps: true,
    }
)


const productModel = mongoose.model('pizzas', productSchema);
module.exports = productModel;
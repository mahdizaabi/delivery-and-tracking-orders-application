const mongoose = require('mongoose');

/* create pizza Modal for mongoDB*/
const pizzaSchema = mongoose.Schema({
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


const pizzaModal = mongoose.model('pizzas', pizzaSchema);
module.exports = pizzaModal;
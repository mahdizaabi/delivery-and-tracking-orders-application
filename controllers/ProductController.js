
const pizzaModel = require('../models/pizzaModel');


class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await pizzaModel.find({});
            res.send(products);
        }
        catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
}

module.exports = ProductController;

const productModel = require('../models/ProductModel');

const pizzas = require('./pizzasdata')
class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await productModel.find({});
            res.send(JSON.stringify(products));
        }
        catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
}

module.exports = ProductController;
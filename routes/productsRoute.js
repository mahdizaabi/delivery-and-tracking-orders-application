const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get("/getallproducts", ProductController.getAllProducts);

module.exports = router;
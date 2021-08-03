const express = require('express');
const router = express.Router();
const orderController = require('../controllers/ordersController');

router.post("/placeorder", orderController.placeOrder);

module.exports = router;
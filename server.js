  const express = require("express");
const db = require('./db');
const app = express();
/*import modal*/




app.use(express.json());

/* import view/route  */
const productsRoute = require('./routes/productsRoute');
const userRegistrationRoute = require('./routes/userRoute');
const orderRoute = require('./routes/ordersRoute');

const getUserOrders = require('./routes/ordersRoute');

app.use('/api/products', productsRoute);
app.use('/api/users', userRegistrationRoute);
app.use('/api/orders', orderRoute)
app.get('/', function (req, res, next) {
    res.send("welcome to Pizza delvery application!")
})

const port = process.env.PORT || 5001;

app.listen(port, () => 'server running on port 5000')



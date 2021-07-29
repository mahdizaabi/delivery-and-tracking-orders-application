  const express = require("express");
const db = require('./db');
const app = express();
/*import modal*/




app.use(express.json());

/* import view/route  */
const pizzasRoute = require('./routes/pizzaRoute');

app.use('/api/pizzas', pizzasRoute);



app.get('/', function (req, res, next) {
    res.send("welcome to Pizza delvery application!")
})

const port = process.env.PORT || 5000;

app.listen(port, () => 'server running on port 5000')



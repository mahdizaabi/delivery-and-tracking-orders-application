const mongoose = require("mongoose");

const mongoUrL = 'mongodb+srv://mahdi:mahdouche92@cluster0.gusz9.mongodb.net/pizza-application';
mongoose.connect(mongoUrL, {useUnifiedTopology:true, useNewUrlParser:true});

const db = mongoose.connection;
db.on('connected', ()=>{
    console.log('Database connected succefully')
})

db.on('error', ()=> {
    console.log("connection to database has failed")
});


module.exports = mongoose;
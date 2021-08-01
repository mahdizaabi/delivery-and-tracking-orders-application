const mongoose = require('mongoose');

/* create pizza Modal for mongoDB*/
const userSchema = mongoose.Schema({
    name: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false}
},
    {
        timestamps: true,
    }
)

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
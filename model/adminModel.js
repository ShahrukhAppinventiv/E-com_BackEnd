const mongoose = require("mongoose");

const admin = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: false
    },
    mobile: {
        type: Number,
        require: true
    },
    country: {
        type: String,
        require: false
    },

})

const Admin = new mongoose.model('Admin',admin);
module.exports = Admin
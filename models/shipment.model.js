const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
    }
})
const usermodel = mongoose.model('Shipment', userschema);
module.exports = usermodel;


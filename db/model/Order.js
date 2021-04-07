const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        min: 6,
        max: 1500
    },
    visibility: {
        type: String,
        // required: true,
        max: 255,
        min: 6
    },
    status: {
        type: String,
        // required: true,
        max: 50,
        min: 6
    },
    variety: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    exchange: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    tradingsymbol: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    transaction_type: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    order_type: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    quantity: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    price: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    product: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    validity: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    disclosed_quantity: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    trigger_price: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    squareoff: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    stoploss: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    trailing_stoploss: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    user_id: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    updateUser: [String],
    updateDate: [Date],
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('orders', jobSchema);
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    category: {
        required: true,
        type: Array
    },
    supplier: {
        required: true,
        type: String
    },
    stock: {
        default: false,
        type: Boolean
    }
})

module.exports = mongoose.model("products", productSchema)
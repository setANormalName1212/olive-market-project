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
    img: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    stock: {
        default: false,
        type: Boolean
    }
})

module.exports = mongoose.model("products", productSchema)
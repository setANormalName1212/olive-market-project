const mongoose = require("mongoose")
const Schema = mongoose.Schema

const supplierSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    phone: {
        type: Number
    },
    productList: {
        type: Array
    }
})

module.exports = mongoose.model("suppliers", supplierSchema)
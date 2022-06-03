const express = require('express')
const router = express.Router()

// controller
const product = require("../controllers/product-controller")

// Add product
router.post("/product/add", product.add)

// Get product
router.get("/product/:id", product.getOne)

// Edit product
router.post("/product/edit/:id", product.edit)

// Delete product
router.get("/product/delete/:id", product.delete)

// Delete all products
router.get("/product/deleteAll", product.deleteAll)

module.exports = router
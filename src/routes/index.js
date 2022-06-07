const express = require('express')
const router = express.Router()

// controllers
const index = require("../controllers/index-controller")

// cookies
const cookies = require("../controllers/cookies/cookies")

// Login
router.get("/", index.login)

// Register
router.get('/register', index.register)

// Main
router.get('/main', cookies, index.main)

// Add supplier
router.get('/supplier/add', cookies, index.addSupplier)

// Add product
router.get('/product/add', index.addProduct)

// Get supplier
router.get('/supplier/get/:id', cookies, index.getSupplier)

// Get product
router.get('/product/get/:id', cookies, index.getProduct)

module.exports = router
const express = require('express')
const router = express.Router()

// controllers
const index = require("../controllers/index-controller")

router.get("/", index.login)

router.get('register', index.register)

router.get('/main', index.main)

router.get('/supplier/get/:id', index.supplier)

router.get('/product/get/:id', index.product)

module.exports = router
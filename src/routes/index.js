const express = require('express')
const router = express.Router()

// controllers
const index = require("../controllers/index-controller")

// cookies
const cookies = require("../controllers/cookies/cookies")

router.get("/", index.login)

router.get('/register', index.register)

router.get('/main', cookies, index.main)

router.get('/supplier/get/:id', cookies, index.supplier)

router.get('/product/get/:id', cookies, index.product)

module.exports = router
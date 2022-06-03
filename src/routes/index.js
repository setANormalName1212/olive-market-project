const express = require('express')
const router = express.Router()

// controllers
const index = require("../controllers/index-controller")

router.get("/", index.login)

router.get('/main', index.main)

module.exports = router
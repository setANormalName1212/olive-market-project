const express = require('express')
const router = express.Router()

// controller
const supplier = require("../controllers/supplier-controller")

// Add supplier
router.get("/supplier/add", supplier.add)

module.exports = router
const express = require('express')
const router = express.Router()

// controller
const admin = require("../controllers/admin-controller")

// cookies
const cookies = require("../controllers/cookies/cookies")

// Add
router.post("/admin/add", admin.register)

// login
router.post("/admin/login", admin.login)

// Edit
router.post("/admin/edit/:id", cookies, admin.edit)

// Delete
router.get("/admin/delete/:id", cookies, admin.delete)

module.exports = router
const express = require('express')
const router = express.Router()

// controller
const admin = require("../controllers/admin-controller")

// Add
router.get("/admin/add", admin.add)

// Edit
router.post("/admin/edit/:id", admin.edit)

// Delete
router.get("/admin/delete/:id", admin.delete)

module.exports = router
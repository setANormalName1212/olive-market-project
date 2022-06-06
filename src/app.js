const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()
require('dotenv').config()

// settings
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.set('PORT', process.env.PORT || 8080)

// mongoose
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true
}, () => {
    console.log("MongoDB connected...")
})

// EJS
app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

// routes
const index = require('./routes/index')
const product = require("./routes/product")
const admin = require("./routes/admin")
const supplier = require("./routes/supplier")

app.use("/", index)
app.use("/", product)
app.use("/", admin)
app.use("/", supplier)

// server listening
app.listen(app.get('PORT'), () => {
    console.log(`Server running on port: ${app.get('PORT')}`)
})
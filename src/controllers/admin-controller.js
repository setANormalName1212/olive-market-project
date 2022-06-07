const adminDAO = require("../models/DAOs/adminDAO")

// JWT
const jwt = require('jsonwebtoken')

// bcrypt
const bcrypt = require('bcrypt')

const admin = {
    register: async (req, res) => {
        const {name, email, password, password2} = req.body
        const errors = []

        // Empty input
        if( !name || !email || !password || !password2) {
            errors.push({ msg: "Fill all inputs" })
        }

        // Passwords dont match
        if(password !== password2) {
            errors.push({ msg: "Passwords dont match" })
        }

        // Errors exist
        if(errors.length > 0) {
            res.render('register', {
                name,
                email,
                password,
                password2,
                errors
            })
        } else {
            await adminDAO.getOnebyEmail(email)
                .then(user => {
                    if(user) {
                        errors.push({ msg: "Email already registered" })
                        res.render("register", {
                            errors
                        })
                    } else {
                        adminDAO.add(req.body)
                            .then(res.redirect('/'))
                    }
                })
        }
    },

    login: async(req, res) => {
        const {email, password} = req.body
        const errors = []

        // Empty inputs
        if( !email || !password) {
            errors.push({ msg: "Fill all inputs" })
        }

        // Errors exists
        if(errors.length > 0) {
            res.render('login', {
                errors,
                email,
                password
            })
        } else {
            await adminDAO.getOnebyEmail(email)
                .then(admin => {
                    // If user exist
                    if(!admin) {
                        errors.push({ msg: "User dont exist" })
                        res.render('login', {
                            errors
                        })
                    } else {
                        bcrypt.compare(password, admin.password, (err, isMatch) => {
                            if(isMatch) {
                                const access_token = jwt.sign(admin.id, process.env.ACCESS_TOKEN)
                                res.cookie("user", access_token)
                                res.redirect('/main')
                            } else {
                                errors.push({ msg: "An error has occurred" })
                                res.render('login', {
                                    errors
                                })
                            }
                        })
                    }
                })
        }
    },

    delete: async (req, res) => {
        await adminDAO.delete(req.params.id)
            .then(() => {
                res.clearCookie("user")
                res.redirect('/')
            })
    },
    edit: async (req, res) => {
        await adminDAO.edit(req.params.id, req.body)
            .then(res.redirect("/main"))
    }
}

module.exports = admin
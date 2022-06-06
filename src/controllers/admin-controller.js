const adminDAO = require("../models/DAOs/adminDAO")

const admin = {
    add: async (req, res) => {
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
            await adminDAO.add(req.body)
                .then(res.redirect('/login'))
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
                        res.cookie("user", admin.id)
                        res.redirect('/main')
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
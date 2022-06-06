// JWT
const jwt = require("jsonwebtoken")

const cookies = async (req, res) => {
    const errors = []

    if(!req.cookies.user) {
        errors.push({ msg: "You need to register first" })
        res.render('login', {
            errors
        })
    } else {
        jwt.sign(req.cookies.user, process.env.ACCESS_TOKEN, (err, user) => {
            if(err) {
                errors.push({ msg: "Your token dont match" })
                res.render("login", {
                    errors
                })
            } else {
                req.user = user
                next()
            }
        })
    }
}

module.exports = cookies
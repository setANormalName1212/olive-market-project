const adminDAO = require("../models/DAOs/adminDAO")

const admin = {
    add: async (req, res) => {
        await adminDAO.add(req.body)
    },
    delete: async (req, res) => {
        await adminDAO.delete(req.params.id)
            .then(() => {
                // Delete cookie and redirect to "log in"
            })
    },
    edit: async (req, res) => {
        await adminDAO.edit(req.params.id, req.body)
            .then(res.redirect("/main"))
    }
}

module.exports = admin
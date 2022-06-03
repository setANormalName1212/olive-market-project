// DAO
const productDAO = require("../models/DAOs/productDAO")

const product = {
    add: async (req, res) => {
        await productDAO.add(req.body)
            .then(res.redirect("/main"))
    },
    getOne: async (req, res) => {
        await productDAO.getOne(req.params.id)
            .then(product => {
                res.render("product", {
                    product
                })
            })
    },
    edit: async (req, res) => {
        await productDAO.edit(req.params.id, req.body)
            .then(res.redirect("/main"))
    },
    delete: async (req, res) => {
        await productDAO.delete(req.params.id)
            .then(res.redirect("/main"))
    },
    deleteAll: async (req, res) => {
        await productDAO.deleteAll()
    }
}

module.exports = product
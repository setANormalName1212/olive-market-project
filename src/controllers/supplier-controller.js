const supplierDAO = require("../models/DAOs/supplierDAO")

const supplier = {
    add: async (req, res) => {
        await supplierDAO.add(req.body)
            .then(res.redirect("/main"))
    }
}

module.exports = supplier
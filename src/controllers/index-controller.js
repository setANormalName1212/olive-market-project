// DAOs
const supplierDAO = require('../models/DAOs/supplierDAO')
const productDAO = require('../models/DAOs/productDAO')
const adminDAO = require('../models/DAOs/adminDAO')

const index = {
    login: async (req, res) => {
        res.render('login')
    },
    main: async (req, res) => {
        const products = await productDAO.getAll()
        const suppliers = await supplierDAO.getAll()
        res.render('main', {
            products,
            suppliers
        })
    },
    addSupplier: async (req, res) => {
        res.render("addSupplier")
    },
    addProduct: async (req, res) => {
        res.render("addProduct")
    },
    getProduct: async (req, res) => {
        await productDAO.getOne(req.params.id)
            .then(supplier => {
                res.render('supplier', {
                    supplier
                })
            })
    },
    getSupplier: async (req, res) => {
        await supplierDAO.getOne(req.params.id)
            .then(supplier => {
                res.render('product', {
                    supplier
                })
            })
    },
    admin: async(req, res) => {
        await adminDAO.getOne(req.params.id)
            .then(admin => {
                res.render('config', {
                    admin
                })
            })
    },
    register: async (req, res) => {
        res.render('register')
    }
}

module.exports = index
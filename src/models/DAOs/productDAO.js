const productDB = require("../Product")

class productDAO {
    async add(data) {
        try{
            const newProduct = new productDB({
                title: data.title,
                price: data.price,
                img: data.img,
                description: data.description,
                stock: data.stock
            })

            newProduct.save()
        } catch(e) {
            throw e
        }
    }

    async getOne(id) {
        try {
            return await productDB.findById(id)
        } catch(e) {
            throw e
        }
    }

    async getAll() {
        try {
            const products = await productDB.find()
            return products
        } catch(e) {
            throw e
        }
    }

    async edit(id, data) {
        try {
            await productDB.updateOne({ _id: id }, data)
        } catch(e) {
            throw e
        }
    }

    async delete(id) {
        try{
            await productDB.deleteOne(id)
        } catch(e) {
            throw e
        }
    }

    async deleteAll() {
        try {
            await productDB.deleteMany()
        } catch(e) {
            throw e
        }
    }
}

const product = new productDAO

module.exports = product
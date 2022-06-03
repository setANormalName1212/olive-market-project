const supplierDB = require("../Supplier")

class supplierDAO {
    async add(data) {
        try {
            const newSupplier = new supplierDB({
                name: data.name,
                phone: data.phone
            })

            newSupplier.save()
        } catch(e) {
            throw e
        }
    }

    async getOne(id) {
        try{
            return await supplierDB.findById(id)
        } catch(e) {
            throw e
        }
    }
}

const supplier = new supplierDAO

module.exports = supplier
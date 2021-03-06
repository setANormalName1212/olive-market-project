const adminDB = require("../Admin")

const bcrypt = require("bcrypt")

class Admin {
    async add(data) {
        try{
            bcrypt.genSalt(10, (err, salt ) => {
                bcrypt.hash(data.password, salt, (err, hash) => {
                    if(err) throw err

                    // hash
                    data.password = hash

                    const newAdmin = new adminDB({
                        name: data.name,
                        email: data.email,
                        password: data.password
                    })

                    newAdmin.save()
                })
            })
        } catch(e) {
            throw e
        }
    }

    async getOne(id) {
        try {
            return await adminDB.findById(id)
        } catch(e) {
            throw e
        }
    }

    async getOnebyEmail(email) {
        try{
            return await adminDB.findOne({ email: email })
        } catch(e) {
            throw e
        }
    }

    async edit(id, data) {
        try{
            await adminDB.updateOne({ _id: id }, data)
        } catch(e) {
            throw e
        }
    }

    async delete(id) {
        try{
            await adminDB.deleteOne(id)
        } catch(e) {
            throw e
        }
    }
}

const admin = new Admin()

module.exports = admin
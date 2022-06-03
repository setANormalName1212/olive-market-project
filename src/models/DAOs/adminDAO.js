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

                    newAdmin = new adminDB({
                        first_name: data.first_name,
                        last_name: data.last_name,
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
class adminDTO {
    constructor(data) {
        this.first_name = data.first_name,
        this.last_name = data.last_name,
        this.email = data.email,
        this.password = data.password
    }
}

module.exports = adminDTO
class productDTO {
    constructor(data) {
        this.title = data.title,
        this.price = data.price,
        this.img = data.img,
        this.description = data.description,
        this.stock = data.stock
    }
}

module.exports = productDTO
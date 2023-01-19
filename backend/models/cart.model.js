const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    description: String,
    images: String,
    category: String
})

const cartModel = mongoose.model("product",cartSchema)

module.exports = {
    cartModel
}
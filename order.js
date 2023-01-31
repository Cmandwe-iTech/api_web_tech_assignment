const mongoose = require("mongoose")

const orderDetails = new mongoose.Schema({
    customer: { type: String, ref: "constomer" },
    Inventary: { type: String, ref: "Inventory" },
    quantity: { type: Number }
})
const constomer_models = mongoose.model("order", orderDetails)
module.exports = constomer_models
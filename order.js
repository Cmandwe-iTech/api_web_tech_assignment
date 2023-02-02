const mongoose = require("mongoose")

const orderDetails = new mongoose.Schema({
    customer_id: { type: String},
    Inventory_id: { type: String},
    Item_name:{type:String},
    quantity: { type: Number }
})
const OrderModel = mongoose.model("order", orderDetails);
module.exports = OrderModel;
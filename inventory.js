const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    inventory_id:{type:String},
    inventory_type:{type:String},
    item_name:{type:String,unique:true},
    available:{type:Number}
})
const Inventory = mongoose.model("Inventory",InventorySchema)
module.exports = Inventory;
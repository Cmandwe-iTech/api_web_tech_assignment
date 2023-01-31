const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customer_id:{type:String},
  customer_name:{type:String},
  email:{type:String}  
})

const Customer = mongoose.model("customer",customerSchema);
module.exports = Customer;
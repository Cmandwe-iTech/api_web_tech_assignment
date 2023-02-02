const express = require("express");
const Customer = require("./customer");
const Inventory = require("./inventory");
const OrderModel = require("./order");
const order_routes = express.Router();

order_routes.post("/createOrders", async (req, res) => {
    try {
        const inventory = await Inventory.findOne({item_name:req.body.Item_name});
        const customer = await Customer.find();
        const orders = await OrderModel.create({
            customer_id:customer[customer.length-1].customer_id,
            Inventory_id:inventory.inventory_id,
            Item_name:req.body.Item_name,
            quantity:req.body.quantity
        })
        res.status(200).json({
            status: "Success",
            orders
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})
order_routes.get("/orders", async (req, res) => {
    try {
        const Orders = await OrderModel.find()
        console.log(Orders);
        const inventory_item = await Inventory.findOne({item_name:Orders[Orders.length-1].Item_name}); 
        // console.log(inventory_item.available);
        // console.log(Orders[Orders.length-1].quantity);
        if(inventory_item.available >= Orders[Orders.length-1].quantity){
        const updated = await inventory_item.updateOne({
                available:inventory_item.available - Orders[Orders.length-1].quantity
            })
            // console.log(updated);
            res.status(200).json({
                status: "Orders Successfully",
            })
        }else{
            res.json({
                status:"Orders out of stock"
            })
        }
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})
module.exports = order_routes;
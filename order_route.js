const express = require("express");
const OrderModel = require("./order");
const order_routes = express.Router();

order_routes.post("/createOrders", async (req, res) => {
    try {
        const orders = await OrderModel.create({
            customer_id: req.customer_id,
            Inventary: req.inventory_id,
            ItemName: req.item_name,
            quantity: req.body.quantity
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
        res.status(200).json({
            status: "Success",
            Orders
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})
module.exports = order_routes;
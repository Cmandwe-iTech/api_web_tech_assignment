const express = require('express');
const Customer = require('./customer');
const customer_route = express.Router();

customer_route.post("/createCustomer", async(req, res)=>{
    try {
        const customer = await Customer.find();
        const inventory = await Customer.create({
            customer_id:`OD${customer.length+100}`,
            customer_name:req.body.customer_name,
            email:req.body.email
        })
        res.status(200).json({
            status:"ok",
            inventory
        })
    } catch (error) {
        message:error.message
    }
})
customer_route.get("/customerDetails", async(req,res)=>{
    try {
        const customer = await Customer.find();
        res.status(200).json({
            status:"successfull",
            customer
        })
    } catch (error) {
     message:error.message   
    }
})
module.exports = customer_route;
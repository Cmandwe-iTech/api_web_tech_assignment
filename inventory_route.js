const express = require("express");
const invent_route = express.Router();
const Inventory = require("./inventory.js")
invent_route.post("/createInventory", async (req, res)=>{
    try{
        const data = await Inventory.find()
        const inventory = await Inventory.create({
            inventory_id: `INTD${data.length+500}`,
            inventory_type:req.body.inventory_type,
            item_name:req.body.item_name,
            available:req.body.available
        })
        res.status(200).json({
            status:"ok",
            inventory
        })
    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
})
invent_route.get("/inventory", async(req,res)=>{
    try{
      const inventory = await Inventory.find();
      res.status(200).json({
        status:"ok",
        inventory
      })
    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
})

invent_route.put("/itemName/availableQuantity/:id", async(req, res)=>{
    try {
        const findInventory = await Inventory.findOne({id:req.params._id})
        if(findInventory){
       const update = await Inventory.updateOne({availabel:req.body.availabel})
                res.status(200).json({
                    status:"updated successfully",
                    update
                })
            }
    } catch (error) {
     res.status(400).json({
        status:"failed",
        message:error.message
     })   
    }
})
module.exports = invent_route;
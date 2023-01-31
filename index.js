const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const bodyparser = require('body-parser');
const invent_route = require("./inventory_route");
const customer_route = require("./customer_route");
const order_routes = require("./order_route");
const port = 5000
const app = express();

app.use(express.json());
app.use(bodyparser.json());

mongoose.connect("mongodb+srv://prt:assignment@cluster0.trcnk0m.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("connected to db");
})
app.use("/", invent_route)
app.use("/",customer_route)
app.use("/",order_routes)
app.listen(5000, ()=>{
    console.log("connected to server 5000")
})
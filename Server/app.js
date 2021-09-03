const express=require("express")
const product = require("./product")

const app=express();
app.get("/product",(req,res)=>{
    res.json(product)
})
// console.log(product[0].name)
app.listen(7000,()=>{
    console.log("visiting port 5000")
})
const express=require('express');
const app=express();
const dotenv=require('dotenv')
const mongoose=require('mongoose');
dotenv.config();
mongoose.connect(
    process.env.DBconnect,
    {useNewUrlParser:true},
    ()=>console.log("connected to db")
);
const productRoutes=require("./Routes/Product");
const categoryRoutes=require("./Routes/Category");
app.use("api/category",categoryRoutes)
app.use("api/products",productRoutes)
app.listen(4000,()=>{
    console.log("app is running on 4000");
})


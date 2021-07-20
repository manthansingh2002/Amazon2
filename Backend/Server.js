import express from "express";
import Products from "./Products.js";
const app= express();

app.get("/api/products",(req,res)=>{
    res.send(Products);
})

app.get("/",(req,res)=>{
    res.send("Server is good")
})

const port = process.env.port ||5000;
app.listen(port,()=>{
  console.log("Server is up and Running");  
})
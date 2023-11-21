const express = require('express');
require('dotenv').config();
const app = express();
const Port = process.env.Port ||8000

app.get("/", (req,res)=>{
    res.send("hello World!")
})
// app.post("/home", (req,res)=>{
//     res.send("Post Route")
// })


app.listen(Port,()=>{
    console.log(`Server Listening on Port ${Port}`)   
})
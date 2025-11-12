import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bycrpt";

const app = express();
app.use(express.json);

mongoose.connect("mongodb://127.0.0.1:27017/testdb").then(() => console.log("mongodb connecte")).catch(err => console.log("error",err));

const User = mongoose.model(User, new 
  mongoose.model({
    userName : String,
    email : String,
    password : String,
  })
)

app.post('/regester', (req,res) => {
  const data = req.body;
  if(!userName||!email||!password)
    res.status(400).json({Message:"felup the inputs"})
  
})
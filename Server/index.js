const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const Port = process.env.Port || 8000;
const bcrypt = require("bcrypt");
const apiRoutes= require("./routes/apiRoutes")
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.use("/api",apiRoutes)


app.listen(Port, () => {
  console.log(`Server Listening on Port ${Port}`);
});

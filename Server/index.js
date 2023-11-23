const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const Port = process.env.Port || 8000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
  .then(user => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the passwrod is Incorrect");
      }
    } else {
      res.json("No record Found!");
    }
  });
});
app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(Port, () => {
  console.log(`Server Listening on Port ${Port}`);
});

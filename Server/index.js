const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const Port = process.env.Port || 8000;
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          res.json("Success");
        } else {
          res.json("Invalid Password");
        }
      });
    } else {
      res.json("No record Found!");
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hashpassword) => {
      EmployeeModel.create({ name: name, email: email, password: hashpassword })
        .then((employees) => res.json(employees))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err.message));
});

app.listen(Port, () => {
  console.log(`Server Listening on Port ${Port}`);
});

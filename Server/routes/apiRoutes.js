const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiControllers")
const bcrypt=require("bcrypt")
const EmployeeModel = require("../models/Employee");


// Define API routes
router.post('/login', (req, res) => {
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



router.post('/register', (req, res) => {
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
// ... other routes

module.exports = router ;

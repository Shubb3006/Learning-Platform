const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Secret_key = "Shubhamisagoodboy";
const jwt = require("jsonwebtoken");
const authenticate = require("../authenticate");

router.post(
  "/createuser",
  [
    body("email", "Please Enter a valid Email Id").isEmail(),
    body("name", "Please Enter A name with more than 3 characters").isLength({
      min: 3,
    }),
    body(
      "password",
      "Please Enter A name with more than 6 characters"
    ).isLength({
      min: 6,
    }),
    body(
      "cpassword",
      "Please Enter A name with more than 6 characters"
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(401).json({ Error: "Email already exists" });
      }
      if (req.body.password !== req.body.cpassword) {
        return res.status(402).json({ Error: "Passwords Do not Match" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, Secret_key);
      // req.setheader(authtoken);
      res.send({ authtoken });
    } catch (error) {
      console.error(error.message);
      return res.status(400).json({ Error: "Some error occured" });
    }
  }
);

router.post(
  "/signin",
  [
    body("email", "Please Enter a valid Email Id").isEmail(),
    body("password", "Please cannot be empty").exists(),
  ],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ Error: "User does not exists" });
      }
      const passcompare = await bcrypt.compare(password, user.password);
      if (!passcompare) {
        return res.status(401).json({ Error: "Invalid Details" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, Secret_key);
      res.json({ authtoken });
      console.log(authtoken);
    } catch (error) {
      console.error(error.message);
      return res.status(400).json({ Error: "Some error occured" });
    }
  }
);

router.post("/getuser", authenticate, async (req, res) => {
  try {
    const userid = req.user.id;
    // console.log(userid);
    const user = await User.findById(userid).select("-password");
    res.send(user);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

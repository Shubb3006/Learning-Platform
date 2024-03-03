const express = require("express");
const router = express.Router();
// const User = require("../models/userschema");
// const Course = require("../models/courseschema");
const { body, validationResult } = require("express-validator");
// const bcrypt = require("bcryptjs");
// const Secret_key = "Shubhamisagoodboy";
// const jwt = require("jsonwebtoken");
// const authenticate = require("../authenticate");
const Contact = require("../models/contactschema");

router.post(
  "/contactus",
  [
    body("username", "Please Enter a valid name").isLength({ min: 6 }),
    body("phone", "Please Enter a valid mobile number")
      .isNumeric()
      .isLength({ min: 10 }),
    body("email", "Please Enter a valid Email Id").isEmail(),
    body("course", "Please Enter a valid Course Id").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const{username,email,course,phone,comments}=req.body
    try {
      const detail = await Contact.create({
        name: username,
        email: email,
        course: course,
        mobile: phone,
        comments: comments,
      });
      res.send({Callback:"Saved"})
    } catch (error) {
      console.error(error.message);
      return res.status(400).json({ Error: "Some error occured" });
    }
  }
);
module.exports = router;

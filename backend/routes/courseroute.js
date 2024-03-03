const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const Course = require("../models/courseschema");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Secret_key = "Shubhamisagoodboy";
const jwt = require("jsonwebtoken");
const authenticate = require("../authenticate");

router.post("/createcourse/:id", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const courseid=req.params.id;
    var course=await Course.findOne({courseid,userid:req.user.id})
    if(course){
      return res.status(400).json({Error:"Course already bought"})
    }
      course = new Course({
      userid: req.user.id,
      username: user.name,
      img:req.body.img,
      name:req.body.name,
      language:req.body.language,
      price:req.body.price,
      courseid
    });
    const savecourse = await course.save();
    res.json(course);
  } catch (error) {
    console.error(error.message);
    return res.status(400).json("Internal Server Error");
  }
});

router.get("/fetchallcourses",authenticate,async(req,res)=>{
  const courses=await Course.find({userid:req.user.id});
  // console.log(courses);
  res.json(courses);
})

router.delete("/deletecourse/:id",authenticate,async(req,res)=>{
  try{
    let course=await Course.findById(req.params.id);
    if (!course) {
      res.status(400).json("Note Not found");
    }
    if (course.userid.toString() !== req.user.id) {
      res.status(400).json("Not allowed");
    }
    course=await Course.findByIdAndDelete(req.params.id);
    res.json({ Success: "Course has been deleted", course: course });

  }
  catch(error){
    console.error(error.message)
    return res.status(400).json({ Error: "Internal errror" });

  }
})
module.exports = router;

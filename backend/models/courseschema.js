const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "USER",
  },
  username:{
    type:String
  },
  courseid:{
    type:Number,
    unique:true
  },
  img:{
    type:String
  },
  name:{
    type:String
  },
  language:{
    type:String
  },
  price:{
    type:String
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
const Course = mongoose.model("COURSE", courseSchema);
module.exports = Course;

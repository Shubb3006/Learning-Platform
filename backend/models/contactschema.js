const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile:{
    type:Number,
    required: true,
  },
  course:{
    type:String,
    required: true,
  },
  comments:{
    type:String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// userschema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//     this.cpassword = await bcrypt.hash(this.cpassword, 12);
//   }
//   next();
// });

// userschema.methods.generateAuthToken = async function () {
//   try {
//     let tokeng = jwt.sign({ _id: this._id },"asdivkjibiuovuvubvhvbjhkiuviubio");
//     this.tokens = this.tokens.concat({token:tokeng});
//     await this.save();
//     // console.log(tokeng)
//     return tokeng;
//   } catch (error) {
//     console.log(error);
//   }
// };

const Contact = mongoose.model("CONTACT", contactschema);
module.exports = Contact;

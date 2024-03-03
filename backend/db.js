const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/mern";
const connecttomongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
};
module.exports = connecttomongo;

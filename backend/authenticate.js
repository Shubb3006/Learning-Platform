const jwt = require("jsonwebtoken");
const Secret_key = "Shubhamisagoodboy";
const authenticate = (req, res, next) => {
  const token=req.header("auth-token");
  
  // const token = localStorage.getItem("token")   
  if (!token) {
    return res.status(401).send({ Error: "Please authenticate using a valid token" });
  }
  try {
    const verifytoken = jwt.verify(token, Secret_key);
    // console.log(verifytoken)
    // console.log(verifytoken.user)
    req.user = verifytoken.user;
    next();
  } catch (error) {
    // res.status(401).send("Unauthorised");
    console.log(error);
  }
};

module.exports = authenticate;

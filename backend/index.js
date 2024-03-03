const connection=require("./db");
connection();
var cors=require("cors");
const express=require("express");
const app=express();
const port=5000;
app.use(cors());


app.use(express.json());//fot req.body

app.use("/api/auth",require("./routes/auth"))
app.use("/api/course",require("./routes/courseroute"))
app.use("/api/contact",require("./routes/contact"))
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})
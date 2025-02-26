const express = require('express');
const app = express();
const mongoose=require("mongoose")
app.use(express.json());
const { userRouter } = require("./routes/user"); 
const { courseRouter } = require("./routes/course");
const {adminRouter}=require("./routes/admin")
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin",adminRouter);
async function main() {
     
    await mongoose.connect("mongodb://localhost:27017/Coursera")
    .then(()=>{
        console.log("Connected To MongoDB Server")
    })
    .catch(()=>{
        console.log("Error in connecting to MongoDB Server")
    })
    
    app.listen(3000);
    console.log("Listening on port 3000")
}
main();
const express = require('express');
const app = express();

app.use(express.json());

const { userRouter } = require("./user"); 
const { courseRouter } = require("./course");
const {adminRouter}=require("./admin")
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin",adminRouter)

app.listen(3000);

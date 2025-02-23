const express = require('express');
const app = express();

app.use(express.json());

const { userRouter } = require("./user"); 
const { courseRouter } = require("./course");

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

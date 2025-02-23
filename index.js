const express=require('express')
const app=express()
const {Router}=require("express")
app.use("/user",userRouter)
app.use("/course",courseRouter)


app.listen(3000);
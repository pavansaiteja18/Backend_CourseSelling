const express=require('express')
const app=express()
app.post("/user/signup",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})
app.post("/user/signin",function(req,res){
    res.json({
        message:"signin endpoint"
    })
})
app.get("/user/purchases",function(req,res){
    res.json({
        message:"this end point is for user to see what all are the courses does the user buyed"
    })
})
app.post("/course/purchase",function(req,res){
    res.json({
        message:"this endpoint is for user to purchase a course"
    })
})
app.get("/courses",function(req,res){
    res.json({
        message:"this endpoint is to display all the courses that organsation"
    })
})
app.listen(3000)
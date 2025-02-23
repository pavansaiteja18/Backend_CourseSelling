const {Router}=require("express")
const adminRouter=Router()
const {adminModel}=require("../db")
adminRouter.post("/signin",function(req,res){
    res.json({
        message:"This end point is for admin login "
    })
})
adminRouter.post("/signup",function(req,res){
    res.json({
        message:"This endpoint is for admin to signup"
    })
})
adminRouter.post("/course",function(req,res){
    res.json({
        message:"Altering of courses"
    })
})
adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message:"This end point is for showing what courses are added by user"
    })
})
module.exports={adminRouter}
const {Router}=require("express")
const userRouter=Router()
userRouter.post("/signup",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})
userRouter.post("/signin",function(req,res){
    res.json({
        message:"signin endpoint"
    })
})
userRouter.get("/purchases",function(req,res){
    res.json({
        message:"this end point is for user to see what all are the courses does the user buyed"
    })
})
module.exports={
    userRouter:userRouter
}
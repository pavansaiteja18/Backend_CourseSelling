const {Router}=require("express")
const courseRouter=Router()
courseRouter.post("/course/purchase",function(req,res){
    res.json({
        message:"this endpoint is for user to purchase a course"
    })
})
courseRouter.get("/course/preview",function(req,res){
    res.json({
        message:"this endpoint is to display all the courses that organsation"
    })
})
module.exports={
    courseRouter:courseRouter
}
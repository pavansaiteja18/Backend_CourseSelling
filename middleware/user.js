const jwt=require("jsonwebtoken")
const {JWT_USER_PASSWORD, JWT_ADMIN_PASSWORD}=require("../config")
function userMiddleware(req,res,next){
    const token=req.headers.authorization;
    try{
    const decoded=jwt.verify(token,JWT_ADMIN_PASSWORD);
        req.userId=decoded.userId;
        next();
    }
    catch(error){
        return res.status(403).json({
            message: "You are not Signed in!", // Inform the user that they are not authorized
        });
    }
    
}
module.exports={
    userMiddleware,
}
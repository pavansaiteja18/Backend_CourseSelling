const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", (req, res) => {
    res.json({
        message: "Signup endpoint"
    });
});

userRouter.post("/signin", (req, res) => {
    res.json({
        message: "Signin endpoint"
    });
});

userRouter.get("/purchases", (req, res) => {
    res.json({
        message: "This endpoint is for users to see all purchased courses"
    });
});

module.exports = { userRouter };  // ✅ Ensure correct export

const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
    res.json({
        message: "This endpoint is for users to purchase a course"
    });
});

courseRouter.get("/preview", (req, res) => {
    res.json({
        message: "This endpoint is to display all the courses that the organization offers"
    });
});

module.exports = { courseRouter };  // ✅ Ensure this is correctly exported

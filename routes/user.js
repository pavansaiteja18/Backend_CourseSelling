const { Router } = require("express");
const bcrypt = require("bcrypt");
const zod = require("zod");
const { userModel } = require("../db");

const userRouter = Router();
const jwt=require("jsonwebtoken")
const { JWT_USER_PASSWORD } = require("../config");
// Define Zod schema for validation  
const reqBody = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6, "Password must be at least 6 characters"),
  firstName: zod.string().min(3, "First name must be at least 3 characters"),
  lastName: zod.string().min(3, "Last name must be at least 3 characters"),
});

userRouter.post("/signup", async (req, res) => {
  // Validate the request body using safeParse
  const parseDataWithSuccess = reqBody.safeParse(req.body);
  if (!parseDataWithSuccess.success) {
    return res.status(400).json({
      message: "Incorrect data format",
      error: parseDataWithSuccess.error.errors,
    });
  }

  const { email, password, firstName, lastName } = parseDataWithSuccess.data;

  try {
    // Check if a user with the same email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "This email is already used",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    await userModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.status(201).json({
      message: "Sign Up successful!",
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
    const requireBody = zod.object({
      email: zod.string().email(),
      password: zod.string().min(6),
    });
  
    const parseDataWithSuccess = requireBody.safeParse(req.body);
    if (!parseDataWithSuccess.success) {
      return res.status(400).json({
        message: "Invalid input format",
        error: parseDataWithSuccess.error.errors,
      });
    }
  
    const { email, password } = req.body; // ✅ Corrected variable names
  
    try {
      const user = await userModel.findOne({ email }); // ✅ Searching for lowercase `email`
  
      if (!user) {
        return res.status(401).json({
          message: "User not found or incorrect credentials",
        });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password); // ✅ Corrected `user.password`
      if (!passwordMatch) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }
      console.log("JWT_USER_PASSWORD:", JWT_USER_PASSWORD);
      const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD);
      res.status(200).json({
        token: token,
      });
    } catch (error) {
      console.error("Error during signin:", error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  });
  
userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "This endpoint is for users to see all purchased courses",
  });
});

module.exports = {userRouter};

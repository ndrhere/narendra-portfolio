import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      res
        .status(400)
        .json({ message: "Password must be at least 6 characters." });
    }

    const admin = await User.findOne({ email });

    if (!admin) {
      res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await admin.matchPassword(password);

    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true, // prevent XSS attacks,
      sameSite: "strict", // prevent CSRF attacks
      secure: process.env.NODE_ENV === "production",
    });

    res.status(201).json({
      success: true,
      user: admin,
    });
  } catch (error) {
    console.log("Error in login Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

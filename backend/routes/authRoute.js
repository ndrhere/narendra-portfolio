import express from "express";
import { adminLogin } from "../controllers/authController.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();


router.post("/", adminLogin)


router.get("/me", protectRoute, (req, res) => {
res.status(200).json({ success: true, user: req.user });
})


export default router;
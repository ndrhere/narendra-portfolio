import express from "express";
import { getProjects, getProject, createProject, updateProject, deleteProject } from "../controllers/projectController.js";
import { upload } from "../middleware/multer.middleware.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();


router.get("/", getProjects)
router.get("/:id", getProject)
router.post("/", protectRoute, upload.single("attachment"),createProject)
router.put("/:id", protectRoute, upload.single("attachment"),updateProject)
router.delete("/:id", protectRoute, deleteProject)



export default router;
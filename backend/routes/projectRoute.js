import express from "express";
import { getProjects, getProject, createProject, updateProject, deleteProject } from "../controllers/projectController.js";
import { upload } from "../middleware/multer.middleware.js";
const router = express.Router();


router.get("/", getProjects)
router.get("/:id", getProject)
router.post("/", upload.single("attachment"),createProject)
router.put("/:id",upload.single("attachment"),updateProject)
router.delete("/:id", deleteProject)



export default router;
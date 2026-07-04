import { Router } from "express";
import { projectController } from "./project.controller";
import { auth } from "../../middleware/auth";

const router = Router();
router.post("/create", auth("ADMIN"), projectController.createProject);
router.get("/all-project", projectController.getAllProjects);
router.get("/single/:id", projectController.getSingleProject);
router.patch("/update/:id", auth("ADMIN"), projectController.updateProject);
router.delete("/delete/:id", auth("ADMIN"), projectController.deleteProject);



export const projectRouter =router;
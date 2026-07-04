import { Router } from "express";
import { experienceController } from "./experience.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.post("/create", auth("ADMIN"), experienceController.createExperience);
router.get("/all-experiences", experienceController.getAllExperiences);
router.get("/single/:id", experienceController.getSingleExperience);
router.patch("/update/:id", auth("ADMIN"), experienceController.updateExperience);
router.delete("/delete/:id", auth("ADMIN"), experienceController.deleteExperience);

export const experienceRoute = router;
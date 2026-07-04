import { Router } from "express";
import { skillController } from "./skill.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.post("/create", auth("ADMIN"), skillController.createSkill);
router.get("/all-skill", skillController.getAllSkills);
router.get("/single/:id", skillController.getSingleSkill);
router.patch("/update/:id", auth("ADMIN"), skillController.updateSkill);
router.delete("/delete/:id", auth("ADMIN"), skillController.deleteSkill);

export const skillRoute = router;
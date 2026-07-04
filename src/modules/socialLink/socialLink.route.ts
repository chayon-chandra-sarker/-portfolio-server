import { Router } from "express";
import { socialLinkController } from "./socialLink.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.post("/create", auth("ADMIN"), socialLinkController.createSocialLink);
router.get("/all-socials", socialLinkController.getAllSocialLinks);
router.get("/single/:id", socialLinkController.getSingleSocialLink);
router.patch("/update/:id", auth("ADMIN"), socialLinkController.updateSocialLink);
router.delete("/delete/:id", auth("ADMIN"), socialLinkController.deleteSocialLink);

export const socialLinkRoute = router;
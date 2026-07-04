import { Router } from "express";
import { messageController } from "./message.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.post("/create", auth("ADMIN"), messageController.createMessage);
router.get("/all-messages", messageController.getAllMessages);
router.get("/single/:id", messageController.getSingleMessage);
router.patch("/update/:id", auth("ADMIN"), messageController.updateMessage);
router.delete("/delete/:id", auth("ADMIN"), messageController.deleteMessage);

export const messageRoute = router;
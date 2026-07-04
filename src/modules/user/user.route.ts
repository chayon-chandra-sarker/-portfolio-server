import { Router } from "express";
import { userController } from "./user.controller";
import { authController } from "../auth/auth.controller";

const router = Router();
router.post("/register", userController.registerUser);
router.post("/login", authController.login );

export const userRouter = router;
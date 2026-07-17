import { Router } from "express";
import { authController } from "./auth.controller";
import { auth } from "../../middleware/auth";

const route = Router();

route.post("/login", authController.login);
route.post("/logout", authController.logout);
route.get("/me", auth(), authController.me);


export const authRoute = route;
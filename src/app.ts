import express from "express";
import type { Application, Request, Response } from "express";
import cors from "cors";
import config from "./config";
import cookieParser from "cookie-parser";
import { authRoute } from "./modules/auth/auth.route";
import { userRouter } from "./modules/user/user.route";
import { projectRouter } from "./modules/project/project.route";
import { skillRoute } from "./modules/skill/skill.route";
import { experienceRoute } from "./modules/experience/experience.route";
import { messageRoute } from "./modules/message/message.route";
import { socialLinkRoute } from "./modules/socialLink/socialLink.route";
import { globalErrorHandler } from "./middleware/globalErrorHandler";



const app : Application = express();
app.use(cors({
    origin: config.app_url,
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRoute);
app.use("/api/projects", projectRouter);
app.use("/api/skills", skillRoute);
app.use("/api/experiences", experienceRoute);
app.use("/api/messages", messageRoute);
app.use("/api/socials", socialLinkRoute);

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Route Not Found",
  });
});

app.use(globalErrorHandler);





export default app;
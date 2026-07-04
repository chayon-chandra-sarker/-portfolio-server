import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utility/catchAsync";
import { userService } from "./user.service";
import { sendResponse } from "../../utility/sendResponse";
import httpStatus from "http-status";

const registerUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const user = await userService.registerIntoDB(payload);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Register created successfully",
      data: {
        user,
      },
    });
  },
);

export const userController ={
    registerUser
}
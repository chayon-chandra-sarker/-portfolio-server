import type { NextFunction, Request, Response } from "express";
import { authService } from "./auth.service";
import httpStatus from "http-status";
import { sendResponse } from "../../utility/sendResponse";


const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const { accessToken, refreshToken } = await authService.login(payload);
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24, //24 hours or 1day.
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 100, //100day
    });

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User login successfully",
      data: { accessToken, refreshToken },
    });
  } catch (error:any) {
    sendResponse(res, {
      success: false,
      statusCode: 401,
      message: error.message,
      data: null,
    });
  }
};

const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User logged out successfully",
      data: null,
    });
  } catch (error: any) {
    sendResponse(res, {
      success: false,
      statusCode: 500,
      message: error.message,
      data: null,
    });
  }
};

const me = async (req: Request, res: Response) => {
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Current User",
    data: req.user,
  });
};

export const authController = {
  login,
  logout,
  me
};

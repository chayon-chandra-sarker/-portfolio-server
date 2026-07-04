import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { skillService } from "./skill.service";
import { sendResponse } from "../../utility/sendResponse";

const createSkill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await skillService.skillIntoDB(req.body);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Skill created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllSkills = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await skillService.getAllSkills();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Skills retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleSkill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await skillService.getSingleSkill(
      req.params.id as string
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Skill retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateSkill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await skillService.updateSkill(
      req.params.id as string,
      req.body
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Skill updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSkill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await skillService.deleteSkill(
      req.params.id as string
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Skill deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const skillController = {
  createSkill,
  getAllSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
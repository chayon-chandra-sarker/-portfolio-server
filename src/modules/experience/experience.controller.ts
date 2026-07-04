import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { sendResponse } from "../../utility/sendResponse";
import { experienceService } from "./experience.service";

const createExperience = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await experienceService.experienceIntoDB(req.body);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Experience created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllExperiences = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await experienceService.getAllExperiences();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Experiences retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleExperience = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await experienceService.getSingleExperience(
      req.params.id as string
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Experience retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateExperience = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await experienceService.updateExperience(
      req.params.id as string,
      req.body
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Experience updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteExperience = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await experienceService.deleteExperience(
      req.params.id as string
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Experience deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const experienceController = {
  createExperience,
  getAllExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
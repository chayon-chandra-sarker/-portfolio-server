import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { projectService } from "./project.service";
import { sendResponse } from "../../utility/sendResponse";

const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await projectService.projectIntoDB(req.body);
;

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Project created successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await projectService.getAllProjects();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Projects retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getSingleProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await projectService.getSingleProject(req.params.id as string);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Project retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await projectService.updateProject(
      req.params.id as string,
      req.body
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Project updated successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await projectService.deleteProject(req.params.id as string);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Project deleted successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const projectController = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
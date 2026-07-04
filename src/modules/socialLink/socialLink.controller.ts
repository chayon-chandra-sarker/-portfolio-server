import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { sendResponse } from "../../utility/sendResponse";
import { socialLinkService } from "./socialLink.service";

const createSocialLink = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await socialLinkService.socialLinkIntoDB(req.body);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Social links created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllSocialLinks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await socialLinkService.getAllSocialLinks();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Social links retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleSocialLink = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await socialLinkService.getSingleSocialLink(
      req.params.id as string
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Social link retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateSocialLink = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await socialLinkService.updateSocialLink(
      req.params.id as string,
      req.body
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Social link updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSocialLink = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await socialLinkService.deleteSocialLink(
      req.params.id as string
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Social link deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const socialLinkController = {
  createSocialLink,
  getAllSocialLinks,
  getSingleSocialLink,
  updateSocialLink,
  deleteSocialLink,
};
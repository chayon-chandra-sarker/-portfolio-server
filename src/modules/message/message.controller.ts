import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { sendResponse } from "../../utility/sendResponse";
import { messageService } from "./message.service";

const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await messageService.messageIntoDB(req.body);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Message sent successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await messageService.getAllMessages();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Messages retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await messageService.getSingleMessage(
      req.params.id as string
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Message retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await messageService.updateMessage(
      req.params.id as string,
      req.body
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Message updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await messageService.deleteMessage(
      req.params.id as string
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Message deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const messageController = {
  createMessage,
  getAllMessages,
  getSingleMessage,
  updateMessage,
  deleteMessage,
};
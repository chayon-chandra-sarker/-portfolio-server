import type { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong";
  console.log(error);


  if (error instanceof Prisma.PrismaClientValidationError) {
    message = error.message;
  }

  
  else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        statusCode = 409;
        message = "This data already exists.";
        break;

      case "P2025":
        statusCode = 404;
        message = "Data not found.";
        break;

      default:
        message = error.message;
    }
  }

  // Normal Error
  else if (error instanceof Error) {
    message = error.message;
  }

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error: process.env.NODE_ENV === "development" ? error : undefined,
  });
};
import type { NextFunction, Request, Response } from "express";
import type { JwtPayload } from "jsonwebtoken";

import config from "../config";
import { prisma } from "../lib/prisma";
import { jwtUtils } from "../utility/jwt";
import { Role } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        name: string;
        email: string;
        role: Role;
      };
    }
  }
}

export const auth =
  (...roles: Role[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token =
        req.cookies.accessToken ||
        (req.headers.authorization?.startsWith("Bearer ")
          ? req.headers.authorization.split(" ")[1]
          : req.headers.authorization);

      if (!token) {
        throw new Error("You are not logged in. Please log in.");
      }

      const verifiedToken = jwtUtils.verifiedToken(
        token,
        config.jwt_access_secret,
      );

      if (!verifiedToken.success) {
        throw new Error(verifiedToken.error);
      }

      const { id, email, name, role } = verifiedToken.data as JwtPayload;

      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new Error("User not found. Please log in again.");
      }

      // Role Check
      if (roles.length > 0 && !roles.includes(user.role)) {
        throw new Error("You are not authorized.");
      }

      req.user = {
        id,
        email,
        name,
        role,
      };

      next();
    } catch (error) {
      console.error("Auth Middleware Error:", error);
      next(error);
    }
  };

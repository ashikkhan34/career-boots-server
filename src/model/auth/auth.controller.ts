import type { NextFunction, Request, Response } from "express";
import AppError from "../helper/AppError.js";
import { authLoginService } from "./auth.service.js";

export const authLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await authLoginService(req.body);
    res.status(200).json({
      success: true,
      message: "login successful",
      data: result,
    });
  } catch (error: any) {
    next(new AppError(400, "bad request "));
  }
};

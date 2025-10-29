import type { NextFunction, Request, Response } from "express";
import { userService } from "./user.service.js";
import AppError from "../helper/AppError.js";

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.createUserService(req.body);
    res.status(201).json({
      message: "user create successful",
      success: true,
      data: user,
    });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const getAllUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allUser = await userService.getAllUserService();
    // Global error handler e pathano
    if (!allUser || allUser.length === 0) {
      return next(new AppError(404, "Users not found"));
    }

    res.status(200).json({
      message: "Users retrieved successfully",
      success: true,
      data: allUser,
    });
  } catch (error: any) {
    next(
      new AppError(
        error.statusCode || 500,
        error.message || "internal server error"
      )
    );
  }
};

const getAUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) {
      return next(new AppError(404, "id is required"));
    }
    const user = await userService.getAUserService(id);
    if (!user) return next(new AppError(404, "user not found"));
    res.status(200).json({
      success: true,
      message: "get a user data",
      data: user,
    });
  } catch (error: any) {
    next(
      new AppError(
        error.statusCode || 500,
        error.message || "internal server error"
      )
    );
  }
};
const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) {
      return next(new AppError(404, "id is required"));
    }
    const user = await userService.updateUserService(id,req.body);
    if (!user) return next(new AppError(404, "user not found"));
    res.status(200).json({
      success: true,
      message: "update a user data",
      data: user,
    });
  } catch (error: any) {
    next(
      new AppError(
        error.statusCode || 500,
        error.message || "internal server error"
      )
    );
  }
};
const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) {
      return next(new AppError(404, "id is required"));
    }
    const user = await userService.deleteUserService(id);
    if (!user) return next(new AppError(404, "user not found"));
    res.status(200).json({
      success: true,
      message: "delete a user data",
      data: user,
    });
  } catch (error: any) {
    next(
      new AppError(
        error.statusCode || 500,
        error.message || "internal server error"
      )
    );
  }
};


export const userController = {
    createUserController,
    getAUserController,
    getAllUserController,
    updateUserController,
    deleteUserController
}
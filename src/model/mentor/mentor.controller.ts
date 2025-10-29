import type { NextFunction, Request, Response } from "express";
import { mentorService } from "./mentor.service.js";
import AppError from "../helper/AppError.js";

const createMentorController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const mentor = await mentorService.createMentorService(req.body);
    res.status(201).json({
      message: "Mentor created successfully",
      success: true,
      data: mentor,
    });
  } catch (err: any) {
    next(
      new AppError(err.statusCode || 500, err.message || "Internal Server Error")
    );
  }
};

const getAllMentorsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const mentors = await mentorService.getAllMentorsService();
    if (!mentors || mentors.length === 0) {
      return next(new AppError(404, "Mentors not found"));
    }

    res.status(200).json({
      message: "Mentors retrieved successfully",
      success: true,
      data: mentors,
    });
  } catch (error: any) {
    next(
      new AppError(error.statusCode || 500, error.message || "Internal Server Error")
    );
  }
};

const getAMentorController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const mentor = await mentorService.getMentorService(id);
    if (!mentor) return next(new AppError(404, "Mentor not found"));

    res.status(200).json({
      success: true,
      message: "Get a mentor data",
      data: mentor,
    });
  } catch (error: any) {
    next(
      new AppError(error.statusCode || 500, error.message || "Internal Server Error")
    );
  }
};

const updateMentorController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const mentor = await mentorService.updateMentorService(id, req.body);
    if (!mentor) return next(new AppError(404, "Mentor not found"));

    res.status(200).json({
      success: true,
      message: "Mentor updated successfully",
      data: mentor,
    });
  } catch (error: any) {
    next(
      new AppError(error.statusCode || 500, error.message || "Internal Server Error")
    );
  }
};

const deleteMentorController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const mentor = await mentorService.deleteMentorService(id);
    if (!mentor) return next(new AppError(404, "Mentor not found"));

    res.status(200).json({
      success: true,
      message: "Mentor deleted successfully",
      data: mentor,
    });
  } catch (error: any) {
    next(
      new AppError(error.statusCode || 500, error.message || "Internal Server Error")
    );
  }
};

export const mentorController = {
  createMentorController,
  getAMentorController,
  getAllMentorsController,
  updateMentorController,
  deleteMentorController,
};

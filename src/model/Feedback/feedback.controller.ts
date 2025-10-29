import type { NextFunction, Request, Response } from "express";
import { feedbackService } from "./feedback.service.js";
import AppError from "../helper/AppError.js";

const createFeedbackController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const feedback = await feedbackService.createFeedbackService(req.body);
    res
      .status(201)
      .json({ success: true, message: "Feedback created", data: feedback });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const getAllFeedbackController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const feedbacks = await feedbackService.getAllFeedbackService();
    if (!feedbacks || feedbacks.length === 0)
      return next(new AppError(404, "No feedback found"));
    res
      .status(200)
      .json({ success: true, message: "Feedbacks retrieved", data: feedbacks });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const getFeedbackController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const feedback = await feedbackService.getFeedbackService(id);
    if (!feedback) return next(new AppError(404, "Feedback not found"));

    res
      .status(200)
      .json({ success: true, message: "Get feedback", data: feedback });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const updateFeedbackController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const feedback = await feedbackService.updateFeedbackService(id, req.body);
    if (!feedback) return next(new AppError(404, "Feedback not found"));

    res
      .status(200)
      .json({ success: true, message: "Feedback updated", data: feedback });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const deleteFeedbackController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const feedback = await feedbackService.deleteFeedbackService(id);
    if (!feedback) return next(new AppError(404, "Feedback not found"));

    res
      .status(200)
      .json({ success: true, message: "Feedback deleted", data: feedback });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

export const feedbackController = {
  createFeedbackController,
  getAllFeedbackController,
  getFeedbackController,
  updateFeedbackController,
  deleteFeedbackController,
};

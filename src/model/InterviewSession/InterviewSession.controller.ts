import type { NextFunction, Request, Response } from "express";
import AppError from "../helper/AppError.js";
import { interviewSessionService } from "./InterviewSession.service.js";

const createInterviewSessionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const session = await interviewSessionService.createInterviewSessionService(
      req.body
    );
    res
      .status(201)
      .json({
        success: true,
        message: "Interview session created",
        data: session,
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

const getAllInterviewSessionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sessions =
      await interviewSessionService.getAllInterviewSessionsService();
    if (!sessions || sessions.length === 0)
      return next(new AppError(404, "No interview sessions found"));
    res
      .status(200)
      .json({
        success: true,
        message: "Interview sessions retrieved",
        data: sessions,
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

const getAnInterviewSessionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const session = await interviewSessionService.getInterviewSessionService(
      id
    );
    if (!session) return next(new AppError(404, "Interview session not found"));

    res
      .status(200)
      .json({ success: true, message: "Get interview session", data: session });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const updateInterviewSessionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const session = await interviewSessionService.updateInterviewSessionService(
      id,
      req.body
    );
    if (!session) return next(new AppError(404, "Interview session not found"));

    res
      .status(200)
      .json({
        success: true,
        message: "Interview session updated",
        data: session,
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

const deleteInterviewSessionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const session = await interviewSessionService.deleteInterviewSessionService(
      id
    );
    if (!session) return next(new AppError(404, "Interview session not found"));

    res
      .status(200)
      .json({
        success: true,
        message: "Interview session deleted",
        data: session,
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

export const interviewSessionController = {
  createInterviewSessionController,
  getAllInterviewSessionsController,
  getAnInterviewSessionController,
  updateInterviewSessionController,
  deleteInterviewSessionController,
};

import type { NextFunction, Request, Response } from "express";
import AppError from "../helper/AppError.js";
import { questionService } from "./quistion.service.js";

const createQuestionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const question = await questionService.createQuestionService(req.body);
    res
      .status(201)
      .json({ success: true, message: "Question created", data: question });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const getAllQuestionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const questions = await questionService.getAllQuestionsService();
    if (!questions || questions.length === 0)
      return next(new AppError(404, "No questions found"));

    res
      .status(200)
      .json({ success: true, message: "Questions retrieved", data: questions });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const getAQuestionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const question = await questionService.getQuestionService(id);
    if (!question) return next(new AppError(404, "Question not found"));

    res
      .status(200)
      .json({ success: true, message: "Get question", data: question });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const updateQuestionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const question = await questionService.updateQuestionService(id, req.body);
    if (!question) return next(new AppError(404, "Question not found"));

    res
      .status(200)
      .json({ success: true, message: "Question updated", data: question });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const deleteQuestionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const question = await questionService.deleteQuestionService(id);
    if (!question) return next(new AppError(404, "Question not found"));

    res
      .status(200)
      .json({ success: true, message: "Question deleted", data: question });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

export const questionController = {
  createQuestionController,
  getAllQuestionsController,
  getAQuestionController,
  updateQuestionController,
  deleteQuestionController,
};

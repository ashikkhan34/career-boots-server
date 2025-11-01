import AppError from "../helper/AppError.js";
import { questionService } from "./quistion.service.js";
const createQuestionController = async (req, res, next) => {
    try {
        const question = await questionService.createQuestionService(req.body);
        res
            .status(201)
            .json({ success: true, message: "Question created", data: question });
    }
    catch (err) {
        next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
    }
};
const getAllQuestionsController = async (req, res, next) => {
    try {
        const questions = await questionService.getAllQuestionsService();
        if (!questions || questions.length === 0)
            return next(new AppError(404, "No questions found"));
        res
            .status(200)
            .json({ success: true, message: "Questions retrieved", data: questions });
    }
    catch (err) {
        next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
    }
};
const getAQuestionController = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!id)
            return next(new AppError(404, "ID is required"));
        const question = await questionService.getQuestionService(id);
        if (!question)
            return next(new AppError(404, "Question not found"));
        res
            .status(200)
            .json({ success: true, message: "Get question", data: question });
    }
    catch (err) {
        next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
    }
};
const updateQuestionController = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!id)
            return next(new AppError(404, "ID is required"));
        const question = await questionService.updateQuestionService(id, req.body);
        if (!question)
            return next(new AppError(404, "Question not found"));
        res
            .status(200)
            .json({ success: true, message: "Question updated", data: question });
    }
    catch (err) {
        next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
    }
};
const deleteQuestionController = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!id)
            return next(new AppError(404, "ID is required"));
        const question = await questionService.deleteQuestionService(id);
        if (!question)
            return next(new AppError(404, "Question not found"));
        res
            .status(200)
            .json({ success: true, message: "Question deleted", data: question });
    }
    catch (err) {
        next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
    }
};
export const questionController = {
    createQuestionController,
    getAllQuestionsController,
    getAQuestionController,
    updateQuestionController,
    deleteQuestionController,
};
//# sourceMappingURL=quistion.controller.js.map
import { sessionService } from "./session.service.js";
import AppError from "../helper/AppError.js";
const createSessionController = async (req, res, next) => {
    try {
        const session = await sessionService.createSessionService(req.body);
        res
            .status(201)
            .json({ success: true, message: "Session created", data: session });
    }
    catch (err) {
        next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
    }
};
const getAllSessionsController = async (req, res, next) => {
    try {
        const sessions = await sessionService.getAllSessionsService();
        if (!sessions || sessions.length === 0)
            return next(new AppError(404, "No sessions found"));
        res
            .status(200)
            .json({ success: true, message: "Sessions retrieved", data: sessions });
    }
    catch (err) {
        next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
    }
};
const getASessionController = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!id)
            return next(new AppError(404, "ID is required"));
        const session = await sessionService.getSessionService(id);
        if (!session)
            return next(new AppError(404, "Session not found"));
        res
            .status(200)
            .json({ success: true, message: "Get session", data: session });
    }
    catch (err) {
        next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
    }
};
const updateSessionController = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!id)
            return next(new AppError(404, "ID is required"));
        const session = await sessionService.updateSessionService(id, req.body);
        if (!session)
            return next(new AppError(404, "Session not found"));
        res
            .status(200)
            .json({ success: true, message: "Session updated", data: session });
    }
    catch (err) {
        next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
    }
};
const deleteSessionController = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!id)
            return next(new AppError(404, "ID is required"));
        const session = await sessionService.deleteSessionService(id);
        if (!session)
            return next(new AppError(404, "Session not found"));
        res
            .status(200)
            .json({ success: true, message: "Session deleted", data: session });
    }
    catch (err) {
        next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
    }
};
export const sessionController = {
    createSessionController,
    getAllSessionsController,
    getASessionController,
    updateSessionController,
    deleteSessionController,
};
//# sourceMappingURL=session.controller.js.map
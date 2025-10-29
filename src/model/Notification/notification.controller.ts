import type { NextFunction, Request, Response } from "express";
import { notificationService } from "./notification.service.js";
import AppError from "../helper/AppError.js";

const createNotificationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const notification = await notificationService.createNotificationService(
      req.body
    );
    res
      .status(201)
      .json({
        success: true,
        message: "Notification created",
        data: notification,
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

const getAllNotificationsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const notifications =
      await notificationService.getAllNotificationsService();
    if (!notifications || notifications.length === 0)
      return next(new AppError(404, "No notifications found"));

    res
      .status(200)
      .json({
        success: true,
        message: "Notifications retrieved",
        data: notifications,
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

const getANotificationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const notification = await notificationService.getNotificationService(id);
    if (!notification) return next(new AppError(404, "Notification not found"));

    res
      .status(200)
      .json({ success: true, message: "Get notification", data: notification });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const updateNotificationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const notification = await notificationService.updateNotificationService(
      id,
      req.body
    );
    if (!notification) return next(new AppError(404, "Notification not found"));

    res
      .status(200)
      .json({
        success: true,
        message: "Notification updated",
        data: notification,
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

const deleteNotificationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const notification = await notificationService.deleteNotificationService(
      id
    );
    if (!notification) return next(new AppError(404, "Notification not found"));

    res
      .status(200)
      .json({
        success: true,
        message: "Notification deleted",
        data: notification,
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

export const notificationController = {
  createNotificationController,
  getAllNotificationsController,
  getANotificationController,
  updateNotificationController,
  deleteNotificationController,
};

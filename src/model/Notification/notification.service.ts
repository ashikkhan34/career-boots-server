import { Types } from "mongoose";
import type { INotification } from "./Notification.interface.js";
import notificationModel from "./notification.model.js";

const createNotificationService = async (payload: INotification) => {
  const notification = await notificationModel.create(payload);
  return notification;
};

const getAllNotificationsService = async () => {
  const notifications = await notificationModel.find().sort({ createdAt: -1 });
  return notifications;
};

const getNotificationService = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid notification ID");
  const notification = await notificationModel.findById(id);
  return notification;
};

const updateNotificationService = async (
  id: string,
  payload: Partial<INotification>
) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid notification ID");
  const updatedNotification = await notificationModel.findByIdAndUpdate(
    id,
    payload,
    { new: true }
  );
  return updatedNotification;
};

const deleteNotificationService = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid notification ID");
  const deletedNotification = await notificationModel.findByIdAndDelete(id);
  return deletedNotification;
};

export const notificationService = {
  createNotificationService,
  getNotificationService,
  getAllNotificationsService,
  updateNotificationService,
  deleteNotificationService,
};

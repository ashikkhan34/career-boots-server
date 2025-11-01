import { Types } from "mongoose";
import notificationModel from "./notification.model.js";
const createNotificationService = async (payload) => {
    const notification = await notificationModel.create(payload);
    return notification;
};
const getAllNotificationsService = async () => {
    const notifications = await notificationModel.find().sort({ createdAt: -1 });
    return notifications;
};
const getNotificationService = async (id) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid notification ID");
    const notification = await notificationModel.findById(id);
    return notification;
};
const updateNotificationService = async (id, payload) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid notification ID");
    const updatedNotification = await notificationModel.findByIdAndUpdate(id, payload, { new: true });
    return updatedNotification;
};
const deleteNotificationService = async (id) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid notification ID");
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
//# sourceMappingURL=notification.service.js.map
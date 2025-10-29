import express from 'express'
import { validate } from '../middleware/validate.js';
import { notificationSchema } from './notification.validate.js';
import { notificationController } from './notification.controller.js';

const router = express.Router()

router.post("/create-notification", validate(notificationSchema), notificationController.createNotificationController);
router.get("/", notificationController.getAllNotificationsController);
router.get("/:id", notificationController.getANotificationController);
router.patch("/update/:id", validate(notificationSchema.partial()), notificationController.updateNotificationController);
router.delete("/delete/:id", notificationController.deleteNotificationController);

export const notificationRouter = router;
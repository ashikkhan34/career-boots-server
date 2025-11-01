import z from "zod";
// Zod schema for notifications
export const notificationSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    message: z.string().min(1, "Message is required"),
    type: z.enum(["session", "feedback", "system"]),
    read: z.boolean().optional(),
});
//# sourceMappingURL=notification.validate.js.map
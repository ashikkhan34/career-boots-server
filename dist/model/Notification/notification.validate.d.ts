import z from "zod";
export declare const notificationSchema: z.ZodObject<{
    userId: z.ZodString;
    message: z.ZodString;
    type: z.ZodEnum<{
        session: "session";
        feedback: "feedback";
        system: "system";
    }>;
    read: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>;
//# sourceMappingURL=notification.validate.d.ts.map
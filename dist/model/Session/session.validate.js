import z from "zod";
export const sessionSchema = z.object({
    title: z.string().min(1, "Title is required"),
    sessionType: z.enum(["one-on-one", "group"]),
    mentorId: z.string().min(1, "Mentor ID is required"),
    candidateIds: z.array(z.string()).optional(),
    questionIds: z.array(z.string()).optional(),
    scheduledAt: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date"),
    duration: z.number().min(1),
    status: z.enum(["upcoming", "ongoing", "completed", "cancelled"]).optional(),
    feedbackIds: z.array(z.string()).optional(),
    recordingLinks: z.array(z.object({
        type: z.enum(["audio", "video"]),
        url: z.string().url()
    })).optional()
});
//# sourceMappingURL=session.validate.js.map
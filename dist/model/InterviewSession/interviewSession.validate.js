import z from "zod";
export const interviewSessionSchema = z.object({
    host: z.string().min(1, "Host ID is required"),
    mentor: z.string().optional(),
    candidates: z.array(z.string()).min(1, "At least one candidate required"),
    questions: z.array(z.string()).optional(),
    scheduledAt: z
        .string()
        .refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
    duration: z.number().min(1),
    status: z.enum(["scheduled", "live", "completed", "cancelled"]).optional(),
    recordings: z
        .object({
        audioUrl: z.string().url().optional(),
        videoUrl: z.string().url().optional(),
        transcriptUrl: z.string().url().optional(),
    })
        .optional(),
    manualScores: z
        .array(z.object({
        scorerId: z.string().min(1),
        score: z.number().min(0).max(100),
        notes: z.string().optional(),
    }))
        .optional(),
    aiFeedback: z.string().optional(),
});
//# sourceMappingURL=interviewSession.validate.js.map
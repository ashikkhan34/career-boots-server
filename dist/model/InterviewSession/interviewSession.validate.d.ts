import z from "zod";
export declare const interviewSessionSchema: z.ZodObject<{
    host: z.ZodString;
    mentor: z.ZodOptional<z.ZodString>;
    candidates: z.ZodArray<z.ZodString>;
    questions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    scheduledAt: z.ZodString;
    duration: z.ZodNumber;
    status: z.ZodOptional<z.ZodEnum<{
        scheduled: "scheduled";
        live: "live";
        completed: "completed";
        cancelled: "cancelled";
    }>>;
    recordings: z.ZodOptional<z.ZodObject<{
        audioUrl: z.ZodOptional<z.ZodString>;
        videoUrl: z.ZodOptional<z.ZodString>;
        transcriptUrl: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>>;
    manualScores: z.ZodOptional<z.ZodArray<z.ZodObject<{
        scorerId: z.ZodString;
        score: z.ZodNumber;
        notes: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>>>;
    aiFeedback: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
//# sourceMappingURL=interviewSession.validate.d.ts.map
import z from "zod";
export declare const sessionSchema: z.ZodObject<{
    title: z.ZodString;
    sessionType: z.ZodEnum<{
        "one-on-one": "one-on-one";
        group: "group";
    }>;
    mentorId: z.ZodString;
    candidateIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    questionIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    scheduledAt: z.ZodString;
    duration: z.ZodNumber;
    status: z.ZodOptional<z.ZodEnum<{
        completed: "completed";
        cancelled: "cancelled";
        upcoming: "upcoming";
        ongoing: "ongoing";
    }>>;
    feedbackIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    recordingLinks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            audio: "audio";
            video: "video";
        }>;
        url: z.ZodString;
    }, z.z.core.$strip>>>;
}, z.z.core.$strip>;
//# sourceMappingURL=session.validate.d.ts.map
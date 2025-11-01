import z from "zod";
export declare const feedbackSchema: z.ZodObject<{
    sessionId: z.ZodString;
    mentorId: z.ZodString;
    candidateId: z.ZodString;
    rating: z.ZodNumber;
    strengths: z.ZodString;
    improvements: z.ZodString;
    overallFeedback: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
//# sourceMappingURL=feedback.validate.d.ts.map
import z from "zod";
export declare const mentorSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    experience: z.ZodOptional<z.ZodNumber>;
    resumeUrl: z.ZodOptional<z.ZodString>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
    expertise: z.ZodOptional<z.ZodArray<z.ZodString>>;
    availability: z.ZodOptional<z.ZodArray<z.ZodObject<{
        day: z.ZodString;
        startTime: z.ZodString;
        endTime: z.ZodString;
    }, z.z.core.$strip>>>;
    rating: z.ZodOptional<z.ZodNumber>;
    sessionHistory: z.ZodOptional<z.ZodArray<z.ZodString>>;
    totalCandidates: z.ZodOptional<z.ZodNumber>;
}, z.z.core.$strip>;
//# sourceMappingURL=mentor.validate.d.ts.map
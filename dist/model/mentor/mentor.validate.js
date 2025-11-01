import z from "zod";
// Zod schema for creating/updating mentor
export const mentorSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6).optional(),
    bio: z.string().max(500).optional(),
    skills: z.array(z.string()).optional(),
    experience: z.number().min(0).optional(),
    resumeUrl: z.string().url().optional(),
    isVerified: z.boolean().optional(),
    expertise: z.array(z.string()).optional(),
    availability: z
        .array(z.object({
        day: z.string(),
        startTime: z.string(),
        endTime: z.string(),
    }))
        .optional(),
    rating: z.number().min(0).max(5).optional(),
    sessionHistory: z.array(z.string()).optional(),
    totalCandidates: z.number().min(0).optional(),
});
//# sourceMappingURL=mentor.validate.js.map
import { z } from "zod";
// Common validation for creating/updating user
export const createUserSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }).optional(), // optional for OAuth users
    role: z.enum(["user", "mentor", "admin"]).optional(), // defaults to user if not provided
    bio: z.string().max(500).optional(),
    skills: z.array(z.string()).optional(),
    experience: z.number().min(0).max(50).optional(),
    resumeUrl: z.string().url().optional(),
    isVerified: z.boolean().optional()
});
// For updating user (password may be omitted)
export const updateUserSchema = z.object({
    name: z.string().min(2).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    role: z.enum(["user", "mentor", "admin"]).optional(),
    bio: z.string().max(500).optional(),
    skills: z.array(z.string()).optional(),
    experience: z.number().min(0).max(50).optional(),
    resumeUrl: z.string().url().optional(),
    isVerified: z.boolean().optional()
});
//# sourceMappingURL=user.validation.js.map
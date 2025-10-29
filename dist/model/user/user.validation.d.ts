import { z } from "zod";
export declare const createUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        user: "user";
        mentor: "mentor";
        admin: "admin";
    }>>;
    bio: z.ZodOptional<z.ZodString>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    experience: z.ZodOptional<z.ZodNumber>;
    resumeUrl: z.ZodOptional<z.ZodString>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        user: "user";
        mentor: "mentor";
        admin: "admin";
    }>>;
    bio: z.ZodOptional<z.ZodString>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    experience: z.ZodOptional<z.ZodNumber>;
    resumeUrl: z.ZodOptional<z.ZodString>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
//# sourceMappingURL=user.validation.d.ts.map
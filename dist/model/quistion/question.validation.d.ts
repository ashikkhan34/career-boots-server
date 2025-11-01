import z from "zod";
export declare const questionSchema: z.ZodObject<{
    title: z.ZodString;
    body: z.ZodString;
    difficulty: z.ZodEnum<{
        easy: "easy";
        medium: "medium";
        hard: "hard";
    }>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    type: z.ZodEnum<{
        behavioral: "behavioral";
        technical: "technical";
        system_design: "system_design";
    }>;
    sampleAnswer: z.ZodOptional<z.ZodString>;
    createdBy: z.ZodString;
}, z.z.core.$strip>;
//# sourceMappingURL=question.validation.d.ts.map
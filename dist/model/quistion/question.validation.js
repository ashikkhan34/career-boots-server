import z from "zod";
// Zod schema for question
export const questionSchema = z.object({
    title: z.string().min(1, "Title is required"),
    body: z.string().min(1, "Body is required"),
    difficulty: z.enum(['easy', 'medium', 'hard']),
    tags: z.array(z.string()).optional(),
    type: z.enum(['behavioral', 'technical', 'system_design']),
    sampleAnswer: z.string().optional(),
    createdBy: z.string().min(1, "Creator ID is required"),
});
//# sourceMappingURL=question.validation.js.map
import z from "zod";

export const feedbackSchema = z.object({
  sessionId: z.string().min(1, "Session ID is required"),
  mentorId: z.string().min(1, "Mentor ID is required"),
  candidateId: z.string().min(1, "Candidate ID is required"),
  rating: z.number().min(1).max(5),
  strengths: z.string().min(1),
  improvements: z.string().min(1),
  overallFeedback: z.string().optional(),
});
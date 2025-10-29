import type { Types } from "mongoose";

// interfaces/feedback.interface.ts
export interface IFeedback {
  sessionId: Types.ObjectId;
  mentorId: Types.ObjectId;
  candidateId: Types.ObjectId;
  rating: number; // 1–5
  strengths: string;
  improvements: string;
  overallFeedback?: string;
  createdAt?: Date;
}

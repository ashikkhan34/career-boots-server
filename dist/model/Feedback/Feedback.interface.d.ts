import type { Types } from "mongoose";
export interface IFeedback {
    sessionId: Types.ObjectId;
    mentorId: Types.ObjectId;
    candidateId: Types.ObjectId;
    rating: number;
    strengths: string;
    improvements: string;
    overallFeedback?: string;
    createdAt?: Date;
}
//# sourceMappingURL=Feedback.interface.d.ts.map
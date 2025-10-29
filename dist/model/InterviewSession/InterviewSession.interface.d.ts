import type { Types } from "mongoose";
export interface IInterviewSession {
    host: Types.ObjectId;
    mentor?: Types.ObjectId;
    candidates: Types.ObjectId[];
    questions: Types.ObjectId[];
    scheduledAt: Date;
    duration: number;
    status: 'scheduled' | 'live' | 'completed' | 'cancelled';
    recordings?: {
        audioUrl?: string;
        videoUrl?: string;
        transcriptUrl?: string;
    };
    manualScores?: {
        scorerId: Types.ObjectId;
        score: number;
        notes?: string;
    }[];
    aiFeedback?: string;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=InterviewSession.interface.d.ts.map
import type { Types } from "mongoose";

export interface IInterviewSession {
  host: Types.ObjectId; // user who created (could be mentor or user)
  mentor?: Types.ObjectId; // assigned mentor
  candidates: Types.ObjectId[]; // usually 1 candidate
  questions: Types.ObjectId[]; // question ids used in session
  scheduledAt: Date; // scheduled time
  duration: number; // minutes
  status: 'scheduled' | 'live' | 'completed' | 'cancelled';
  recordings?: {
    audioUrl?: string;
    videoUrl?: string;
    transcriptUrl?: string;
  };
  manualScores?: { scorerId: Types.ObjectId; score: number; notes?: string }[];
  aiFeedback?: string;
  createdAt: Date;
  updatedAt: Date;
}

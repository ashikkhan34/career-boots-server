import type { Types } from "mongoose";

// interfaces/session.interface.ts
export interface ISession {
  title: string;
  sessionType: "one-on-one" | "group";
  mentorId: Types.ObjectId;
  candidateIds: Types.ObjectId[];
  questionIds: Types.ObjectId[];
  scheduledAt: Date;
  duration: number; // minutes
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  feedbackIds?: Types.ObjectId[];
  recordingLinks?: {
    type: "audio" | "video";
    url: string;
  }[];
  createdAt?: Date;
}

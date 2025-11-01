import type { Types } from "mongoose";
export interface ISession {
    title: string;
    sessionType: "one-on-one" | "group";
    mentorId: Types.ObjectId;
    candidateIds: Types.ObjectId[];
    questionIds: Types.ObjectId[];
    scheduledAt: Date;
    duration: number;
    status: "upcoming" | "ongoing" | "completed" | "cancelled";
    feedbackIds?: Types.ObjectId[];
    recordingLinks?: {
        type: "audio" | "video";
        url: string;
    }[];
    createdAt?: Date;
}
//# sourceMappingURL=Session.interface.d.ts.map
export interface ISession {
    _id?: string;
    title: string;
    sessionType: "one-on-one" | "group";
    mentorId: string;
    candidateIds: string[];
    questionIds: string[];
    scheduledAt: Date;
    duration: number;
    status: "upcoming" | "ongoing" | "completed" | "cancelled";
    feedbackIds?: string[];
    recordingLinks?: {
        type: "audio" | "video";
        url: string;
    }[];
    createdAt?: Date;
}
//# sourceMappingURL=Session.interface.d.ts.map
import { Types } from "mongoose";
import type { IInterviewSession } from "./InterviewSession.interface.js";
export declare const interviewSessionService: {
    createInterviewSessionService: (payload: IInterviewSession) => Promise<import("mongoose").Document<unknown, {}, IInterviewSession, {}, {}> & IInterviewSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllInterviewSessionsService: () => Promise<(import("mongoose").Document<unknown, {}, IInterviewSession, {}, {}> & IInterviewSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getInterviewSessionService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IInterviewSession, {}, {}> & IInterviewSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateInterviewSessionService: (id: string, payload: Partial<IInterviewSession>) => Promise<(import("mongoose").Document<unknown, {}, IInterviewSession, {}, {}> & IInterviewSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteInterviewSessionService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IInterviewSession, {}, {}> & IInterviewSession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=InterviewSession.service.d.ts.map
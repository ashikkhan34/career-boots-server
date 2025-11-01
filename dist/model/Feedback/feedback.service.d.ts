import { Types } from "mongoose";
import type { IFeedback } from "./Feedback.interface.js";
export declare const feedbackService: {
    createFeedbackService: (payload: IFeedback) => Promise<import("mongoose").Document<unknown, {}, IFeedback, {}, {}> & IFeedback & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllFeedbackService: () => Promise<(import("mongoose").Document<unknown, {}, IFeedback, {}, {}> & IFeedback & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getFeedbackService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IFeedback, {}, {}> & IFeedback & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateFeedbackService: (id: string, payload: Partial<IFeedback>) => Promise<(import("mongoose").Document<unknown, {}, IFeedback, {}, {}> & IFeedback & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteFeedbackService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IFeedback, {}, {}> & IFeedback & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=feedback.service.d.ts.map
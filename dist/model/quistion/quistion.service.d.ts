import { Types } from "mongoose";
import type { IQuestion } from "./quistion.interface.js";
export declare const questionService: {
    createQuestionService: (payload: IQuestion) => Promise<import("mongoose").Document<unknown, {}, IQuestion, {}, {}> & IQuestion & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    getQuestionService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IQuestion, {}, {}> & IQuestion & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    getAllQuestionsService: () => Promise<(import("mongoose").Document<unknown, {}, IQuestion, {}, {}> & IQuestion & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    updateQuestionService: (id: string, payload: Partial<IQuestion>) => Promise<(import("mongoose").Document<unknown, {}, IQuestion, {}, {}> & IQuestion & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteQuestionService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IQuestion, {}, {}> & IQuestion & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=quistion.service.d.ts.map
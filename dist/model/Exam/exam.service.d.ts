import type { IExam } from "./exam.interface.js";
export declare const createExamService: (data: IExam) => Promise<import("mongoose").Document<unknown, {}, IExam, {}, {}> & IExam & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const getAllExamsService: () => Promise<(import("mongoose").Document<unknown, {}, IExam, {}, {}> & IExam & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
export declare const getExamByIdService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IExam, {}, {}> & IExam & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
export declare const deleteExamService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IExam, {}, {}> & IExam & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
//# sourceMappingURL=exam.service.d.ts.map
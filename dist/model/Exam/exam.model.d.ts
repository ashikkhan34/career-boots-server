import mongoose from "mongoose";
import type { IExam } from "./exam.interface.js";
export declare const ExamModel: mongoose.Model<IExam, {}, {}, {}, mongoose.Document<unknown, {}, IExam, {}, {}> & IExam & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=exam.model.d.ts.map
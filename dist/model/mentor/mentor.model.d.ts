import { Document } from "mongoose";
import type { IMentor } from "./mentor.interface.js";
export interface IMentorDocument extends IMentor, Document {
}
export declare const mentorModel: import("mongoose").Model<IMentorDocument, {}, {}, {}, Document<unknown, {}, IMentorDocument, {}, {}> & IMentorDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=mentor.model.d.ts.map
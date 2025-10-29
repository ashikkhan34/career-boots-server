import type { Types } from "mongoose";
export interface IQuestion {
    title: string;
    body: string;
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[];
    type: 'behavioral' | 'technical' | 'system_design';
    sampleAnswer?: string;
    createdBy: Types.ObjectId;
    createdAt: Date;
}
//# sourceMappingURL=quistion.interface.d.ts.map
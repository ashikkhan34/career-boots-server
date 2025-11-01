import type { Types } from "mongoose";
export interface IExam {
    userId: Types.ObjectId;
    subject: 'front-end' | 'backend' | 'mern-stack';
    question: string;
    answer: string;
    correct: boolean;
    options: string[];
    timeLimit: number;
}
//# sourceMappingURL=exam.interface.d.ts.map
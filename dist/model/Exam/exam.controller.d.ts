import type { Request, Response } from "express";
export declare const createExam: (req: Request, res: Response) => Promise<void>;
export declare const getAllExams: (req: Request, res: Response) => Promise<void>;
export declare const getExamById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteExam: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=exam.controller.d.ts.map
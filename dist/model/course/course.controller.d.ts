import type { Request, Response } from "express";
export declare const courseController: {
    createCourse: (req: Request, res: Response) => Promise<void>;
    getCourseById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getCourses: (req: Request, res: Response) => Promise<void>;
    updateCourse: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteCourse: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=course.controller.d.ts.map
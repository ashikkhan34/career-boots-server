import type { ICourse } from "./course.interface.js";
export declare const courseService: {
    createCourse: (data: ICourse) => Promise<import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getCourseById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    getCourses: () => Promise<(import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    updateCourse: (id: string, data: Partial<ICourse>) => Promise<(import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteCourse: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=course.service.d.ts.map
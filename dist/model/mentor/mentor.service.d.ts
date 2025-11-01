import type { IMentor } from "./mentor.interface.js";
export declare const mentorService: {
    createMentorService: (payload: IMentor) => Promise<import("mongoose").Document<unknown, {}, import("./mentor.model.js").IMentorDocument, {}, {}> & import("./mentor.model.js").IMentorDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getMentorService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, import("./mentor.model.js").IMentorDocument, {}, {}> & import("./mentor.model.js").IMentorDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    getAllMentorsService: () => Promise<(import("mongoose").Document<unknown, {}, import("./mentor.model.js").IMentorDocument, {}, {}> & import("./mentor.model.js").IMentorDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    updateMentorService: (id: string, payload: Partial<IMentor>) => Promise<(import("mongoose").Document<unknown, {}, import("./mentor.model.js").IMentorDocument, {}, {}> & import("./mentor.model.js").IMentorDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    deleteMentorService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, import("./mentor.model.js").IMentorDocument, {}, {}> & import("./mentor.model.js").IMentorDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=mentor.service.d.ts.map
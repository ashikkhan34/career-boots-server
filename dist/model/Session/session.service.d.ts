import { Types } from "mongoose";
import type { ISession } from "./Session.interface.js";
export declare const sessionService: {
    createSessionService: (payload: ISession) => Promise<import("mongoose").Document<unknown, {}, ISession, {}, {}> & ISession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllSessionsService: () => Promise<(import("mongoose").Document<unknown, {}, ISession, {}, {}> & ISession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getSessionService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ISession, {}, {}> & ISession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateSessionService: (id: string, payload: Partial<ISession>) => Promise<(import("mongoose").Document<unknown, {}, ISession, {}, {}> & ISession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteSessionService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ISession, {}, {}> & ISession & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=session.service.d.ts.map
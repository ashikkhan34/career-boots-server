import type { IUser } from "./user.interface.js";
export declare const userService: {
    createUserService: (payload: IUser) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAUserService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    getAllUserService: () => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    deleteUserService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateUserService: (id: string, payload: Partial<IUser>) => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=user.service.d.ts.map
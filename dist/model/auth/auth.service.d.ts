import type { ILoginData } from "./auth.interface.js";
export declare const authLoginService: (payload: ILoginData) => Promise<{
    user: import("mongoose").Document<unknown, {}, import("../user/user.interface.js").IUser, {}, {}> & import("../user/user.interface.js").IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    };
    token: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map
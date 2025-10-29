import type { IUser } from "../user/user.interface.js";
export interface IMentor extends IUser {
    role: "mentor";
    expertise: string[];
    availability?: {
        day: string;
        startTime: string;
        endTime: string;
    }[];
    rating?: number;
    sessionHistory?: string[];
    totalCandidates?: number;
}
//# sourceMappingURL=mentor.interface.d.ts.map
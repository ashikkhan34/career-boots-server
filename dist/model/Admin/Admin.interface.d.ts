import type { IUser } from "../user/user.interface.js";
export interface IAdmin extends IUser {
    role: "admin";
    permissions?: ("manageUsers" | "manageQuestions" | "manageSessions" | "viewAnalytics")[];
}
//# sourceMappingURL=Admin.interface.d.ts.map
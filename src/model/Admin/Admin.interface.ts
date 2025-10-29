import type { IUser } from "../user/user.interface.js";

export interface IAdmin extends IUser {
  role: "admin"; // fixed role
  permissions?: (
    | "manageUsers"
    | "manageQuestions"
    | "manageSessions"
    | "viewAnalytics"
  )[];
}

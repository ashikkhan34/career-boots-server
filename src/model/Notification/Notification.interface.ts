import type { Types } from "mongoose";

// interfaces/notification.interface.ts
export interface INotification {
  userId: Types.ObjectId;
  message: string;
  type: "session" | "feedback" | "system";
  read: boolean;
  createdAt?: Date;
}

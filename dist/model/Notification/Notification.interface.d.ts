import type { Types } from "mongoose";
export interface INotification {
    userId: Types.ObjectId;
    message: string;
    type: "session" | "feedback" | "system";
    read: boolean;
    createdAt?: Date;
}
//# sourceMappingURL=Notification.interface.d.ts.map
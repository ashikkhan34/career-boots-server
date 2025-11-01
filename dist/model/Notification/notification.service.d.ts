import { Types } from "mongoose";
import type { INotification } from "./Notification.interface.js";
export declare const notificationService: {
    createNotificationService: (payload: INotification) => Promise<import("mongoose").Document<unknown, {}, INotification, {}, {}> & INotification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    getNotificationService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, INotification, {}, {}> & INotification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    getAllNotificationsService: () => Promise<(import("mongoose").Document<unknown, {}, INotification, {}, {}> & INotification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    updateNotificationService: (id: string, payload: Partial<INotification>) => Promise<(import("mongoose").Document<unknown, {}, INotification, {}, {}> & INotification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteNotificationService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, INotification, {}, {}> & INotification & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=notification.service.d.ts.map
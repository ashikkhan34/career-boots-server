import { Schema, model, Types, Document } from "mongoose";
import type { INotification } from "./Notification.interface.js";


const NotificationSchema = new Schema<INotification>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ["session", "feedback", "system"], required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model<INotification>("Notification", NotificationSchema);

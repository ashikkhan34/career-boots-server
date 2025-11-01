import { Schema, model, Types, Document } from "mongoose";
const NotificationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ["session", "feedback", "system"], required: true },
    read: { type: Boolean, default: false },
}, { timestamps: true });
export default model("Notification", NotificationSchema);
//# sourceMappingURL=notification.model.js.map
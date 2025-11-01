import { Schema, model, Types, Document } from "mongoose";
const InterviewSessionSchema = new Schema({
    host: { type: Schema.Types.ObjectId, ref: "User", required: true },
    mentor: { type: Schema.Types.ObjectId, ref: "Mentor" },
    candidates: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    scheduledAt: { type: Date, required: true },
    duration: { type: Number, required: true },
    status: {
        type: String,
        enum: ["scheduled", "live", "completed", "cancelled"],
        default: "scheduled",
    },
    recordings: {
        audioUrl: { type: String },
        videoUrl: { type: String },
        transcriptUrl: { type: String },
    },
    manualScores: [
        {
            scorerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
            score: { type: Number, required: true },
            notes: { type: String },
        },
    ],
    aiFeedback: { type: String },
}, { timestamps: true });
export const InterviewSessionModel = model("InterviewSession", InterviewSessionSchema);
//# sourceMappingURL=InterviewSession.model.js.map
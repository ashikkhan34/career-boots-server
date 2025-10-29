import { Schema, model, Types, Document } from "mongoose";
import type { IFeedback } from "./Feedback.interface.js";

const FeedbackSchema = new Schema<IFeedback>(
  {
    sessionId: { type: Schema.Types.ObjectId, ref: "Session", required: true },
    mentorId: { type: Schema.Types.ObjectId, ref: "Mentor", required: true },
    candidateId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    strengths: { type: String, required: true },
    improvements: { type: String, required: true },
    overallFeedback: { type: String },
  },
  { timestamps: true }
);

export const FeedbackModel = model<IFeedback>("Feedback", FeedbackSchema);

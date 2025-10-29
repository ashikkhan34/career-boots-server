import { Schema, model, Types, Document } from "mongoose";
import type { ISession } from "./Session.interface.js";

const SessionSchema = new Schema<ISession>(
  {
    title: { type: String, required: true },
    sessionType: { type: String, enum: ["one-on-one","group"], required: true },
    mentorId: { type: Schema.Types.ObjectId, ref: "Mentor", required: true },
    candidateIds: [{ type: Schema.Types.ObjectId, ref: "User" }],
    questionIds: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    scheduledAt: { type: Date, required: true },
    duration: { type: Number, required: true }, // minutes
    status: { type: String, enum: ["upcoming","ongoing","completed","cancelled"], default: "upcoming" },
    feedbackIds: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
    recordingLinks: [
      {
        type: { type: String, enum: ["audio","video"] },
        url: { type: String }
      }
    ]
  },
  { timestamps: true }
);

export const SessionModel = model<ISession>("Session", SessionSchema);

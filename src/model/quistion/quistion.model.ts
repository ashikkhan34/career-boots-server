import { Schema, model, Types, Document } from "mongoose";
import type { IQuestion } from "./quistion.interface.js";

const QuestionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true, trim: true },
    body: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    tags: { type: [String], default: [] },
    type: { type: String, enum: ['behavioral', 'technical', 'system_design'], required: true },
    sampleAnswer: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const QuestionModel =  model<IQuestion>("Question", QuestionSchema);

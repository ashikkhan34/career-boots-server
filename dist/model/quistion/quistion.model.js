import { Schema, model, Types, Document } from "mongoose";
const QuestionSchema = new Schema({
    title: { type: String, required: true, trim: true },
    body: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    tags: { type: [String], default: [] },
    type: { type: String, enum: ['behavioral', 'technical', 'system_design'], required: true },
    sampleAnswer: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });
export const QuestionModel = model("Question", QuestionSchema);
//# sourceMappingURL=quistion.model.js.map
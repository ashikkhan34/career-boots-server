import mongoose, { Schema, model } from "mongoose";
const examSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    subject: {
        type: String,
        required: true,
        enum: ["front-end", "backend", "mern-stack"],
    },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    correct: { type: Boolean, required: true },
    options: { type: [String], required: true },
    timeLimit: { type: Number, default: 60 },
}, { timestamps: true });
export const ExamModel = model("Exam", examSchema);
//# sourceMappingURL=exam.model.js.map
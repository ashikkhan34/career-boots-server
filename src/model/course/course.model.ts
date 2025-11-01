import { Schema, model, Types, Document } from "mongoose";
import type { ICourse } from "./course.interface.js";

const CourseSchema = new Schema<ICourse>(
  {
    courseId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    image: { type: String, required: true },
    fee: { type: String, required: true },
    rating: { type: Number, default: 0 },
    totalRating: { type: Number, default: 0 },
    totalStudentEnroll: { type: Number, default: 0 },
    mentor: { type: Schema.Types.ObjectId, ref: "Mentor", required: true },
    courseStart: { type: String, required: true },
    duration: { type: Number, required: true },
    lectures: { type: Number, required: true },
    totalExam: { type: Number, default: 0 },
    totalProject: { type: Number, default: 0 },
    courseDetails: { type: String, required: true },
    courseOverview: { type: String, required: true },
    carriculam: [{ type: String }],
    courseIncludes: [
      {
        icon: { type: String },
        text: { type: String },
      },
    ],
    softwareIncludes: [{ type: String }],
    jobOptions: [{ type: String }],
  },
  { timestamps: true }
);

export const CourseModel = model<ICourse>("Course", CourseSchema);

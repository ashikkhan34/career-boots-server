import { Schema, model, Types, Document } from "mongoose";
const MentorSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String },
    role: { type: String, enum: ['mentor'], default: 'mentor' },
    bio: { type: String, default: "" },
    skills: { type: [String], default: [] },
    experience: { type: Number, default: 0 },
    image: { type: String },
    isVerified: { type: Boolean, default: false },
    expertise: { type: [String], default: [] },
    availability: [
        {
            day: { type: String },
            startTime: { type: String },
            endTime: { type: String },
        }
    ],
    rating: { type: Number, default: 0 },
    sessionHistory: [{ type: Types.ObjectId, ref: "Session" }],
    totalCandidates: { type: Number, default: 0 },
}, { timestamps: true });
export const mentorModel = model("Mentor", MentorSchema);
//# sourceMappingURL=mentor.model.js.map
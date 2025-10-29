import { Schema, model} from "mongoose";
import type { IUser } from "./user.interface.js";

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String }, 
    role: { type: String, enum: ['user', 'mentor', 'admin'], default: 'user' },
    bio: { type: String, default: "" },
    skills: { type: [String], default: [] },
    experience: { type: Number, default: 0 }, // in years
    resumeUrl: { type: String },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true } // createdAt, updatedAt automatically handled
);

export default model<IUser>("User", UserSchema);

import type { Types } from "mongoose";

export interface IQuestion {
  title: string;
  body: string; // full description
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[]; // e.g., ['react','algorithms']
  type: 'behavioral' | 'technical' | 'system_design';
  sampleAnswer?: string;
  createdBy: Types.ObjectId; // mentor/admin
  createdAt: Date;
}

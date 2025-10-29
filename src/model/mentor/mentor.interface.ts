import type { IUser } from "../user/user.interface.js";

export interface IMentor extends IUser{
  role: "mentor";
  expertise: string[];
  availability?: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
  rating?: number;
  sessionHistory?: string[]; // Session IDs
  totalCandidates?: number;
}

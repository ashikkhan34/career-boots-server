 export interface IUser {
  name: string;
  email: string;
  password: string; // absent for OAuth users
  role: 'user' | 'mentor' | 'admin';
  bio?: string;
  skills: string[];
  experience?: number; // years
  resumeUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  isVerified: boolean;
}

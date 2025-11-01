 export interface IUser {
  name: string;
  email: string;
  password: string; // absent for OAuth users
  role: 'user' | 'mentor' | 'admin';
  bio?: string;
  skills: string[];
  experience?: number; // years
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  isVerified: boolean;
}

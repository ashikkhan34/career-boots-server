export interface IUser {
    name: string;
    email: string;
    password: string;
    role: 'user' | 'mentor' | 'admin';
    bio?: string;
    skills: string[];
    experience?: number;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
    isVerified: boolean;
}
//# sourceMappingURL=user.interface.d.ts.map
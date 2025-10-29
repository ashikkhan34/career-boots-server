import mongoose from "mongoose";
import userModel from "../user/user.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        const existingAdmin = await userModel.findOne({
            email: "ashikkhan314167@gmail.com",
        });
        if (existingAdmin) {
            console.log("user already exit");
            process.exit(0);
        }
        const hashedPassword = await bcrypt.hash("Ashik@123", 10);
        const adminUser = await userModel.create({
            id: "admin12",
            name: "Ashik kahn",
            email: "ashikkhan314167@gmail.com",
            password: hashedPassword,
            role: "admin",
            status: "active",
            isDeleted: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        console.log("admin created", adminUser);
        process.exit(0);
    }
    catch (error) {
        console.error(error);
        process.exit(0);
    }
};
createAdmin();
//# sourceMappingURL=createAdmin.js.map
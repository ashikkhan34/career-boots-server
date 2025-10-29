import userModel from "../user/user.model.js";
import type { ILoginData } from "./auth.interface.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authLoginService = async (payload: ILoginData) => {
  const { email, password } = payload;

  const user = await userModel.findOne({ email });

  if (!user) throw new Error("user not found");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("invalid password");

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" }
  );
  return { user, token };
};

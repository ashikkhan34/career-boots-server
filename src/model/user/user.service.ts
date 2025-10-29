import type { IUser } from "./user.interface.js";
import userModel from "./user.model.js";
import bcrypt from "bcrypt";

const createUserService = async (payload: IUser) => {
  const hashedPassword = await bcrypt.hash(payload.password, 10);

  payload.password = hashedPassword;

  const createUser = await userModel.create(payload);
  return createUser;
};

const getAllUserService = async () => {
  const allUser = await userModel.find();
  return allUser;
};

const getAUserService = async (id: string) => {
  const user = await userModel.findById(id);
  return user;
};

const updateUserService = async (id: string, payload: Partial<IUser>) => {
  const updateUser = await userModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return updateUser;
};

const deleteUserService = async (id: string) => {
  const deleteUser = await userModel.findByIdAndDelete(id);
  return deleteUser;
};

export const userService = {
  createUserService,
  getAUserService,
  getAllUserService,
  deleteUserService,
  updateUserService,
};

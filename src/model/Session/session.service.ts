
import { Types } from "mongoose";
import type { ISession } from "./Session.interface.js";
import { SessionModel } from "./session.model.js";

const createSessionService = async (payload: ISession) => {
  const session = await SessionModel.create(payload);
  return session;
};

const getAllSessionsService = async () => {
  return SessionModel.find().sort({ scheduledAt: 1 });
};

const getSessionService = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid session ID");
  return SessionModel.findById(id)
    .populate("mentorId")
    .populate("candidateIds")
    .populate("questionIds")
    .populate("feedbackIds");
};

const updateSessionService = async (id: string, payload: Partial<ISession>) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid session ID");
  return SessionModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteSessionService = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid session ID");
  return SessionModel.findByIdAndDelete(id);
};

export const sessionService = {
  createSessionService,
  getAllSessionsService,
  getSessionService,
  updateSessionService,
  deleteSessionService,
};

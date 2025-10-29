
import { Types } from "mongoose";
import type { IInterviewSession } from "./InterviewSession.interface.js";
import { InterviewSessionModel } from "./InterviewSession.model.js";

const createInterviewSessionService = async (payload: IInterviewSession) => {
  const session = await InterviewSessionModel.create(payload);
  return session;
};

const getAllInterviewSessionsService = async () => {
  return InterviewSessionModel.find().sort({ scheduledAt: 1 });
};

const getInterviewSessionService = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid session ID");
  return InterviewSessionModel.findById(id)
    .populate("host")
    .populate("mentor")
    .populate("candidates")
    .populate("questions");
};

const updateInterviewSessionService = async (id: string, payload: Partial<IInterviewSession>) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid session ID");
  return InterviewSessionModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteInterviewSessionService = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid session ID");
  return InterviewSessionModel.findByIdAndDelete(id);
};

export const interviewSessionService = {
  createInterviewSessionService,
  getAllInterviewSessionsService,
  getInterviewSessionService,
  updateInterviewSessionService,
  deleteInterviewSessionService,
};

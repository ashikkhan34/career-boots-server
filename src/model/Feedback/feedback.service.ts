
import { Types } from "mongoose";
import type { IFeedback } from "./Feedback.interface.js";
import { FeedbackModel } from "./feedback.model.js";

const createFeedbackService = async (payload: IFeedback) => {
  const feedback = await FeedbackModel.create(payload);
  return feedback;
};

const getAllFeedbackService = async () => {
  return FeedbackModel.find()
    .populate("sessionId")
    .populate("mentorId")
    .populate("candidateId")
    .sort({ createdAt: -1 });
};

const getFeedbackService = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid feedback ID");
  return FeedbackModel.findById(id)
    .populate("sessionId")
    .populate("mentorId")
    .populate("candidateId");
};

const updateFeedbackService = async (id: string, payload: Partial<IFeedback>) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid feedback ID");
  return FeedbackModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteFeedbackService = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid feedback ID");
  return FeedbackModel.findByIdAndDelete(id);
};

export const feedbackService = {
  createFeedbackService,
  getAllFeedbackService,
  getFeedbackService,
  updateFeedbackService,
  deleteFeedbackService,
};

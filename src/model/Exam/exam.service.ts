import type { IExam } from "./exam.interface.js";
import { ExamModel } from "./exam.model.js";


// Create exam question
export const createExamService = async (data: IExam) => {
  return await ExamModel.create(data);
};

// Get all exam questions
export const getAllExamsService = async () => {
  return await ExamModel.find()
  .populate('userId')
};

// Get exam by ID
export const getExamByIdService = async (id: string) => {
  return await ExamModel.findById(id)
  .populate('userId')
};

// Delete exam
export const deleteExamService = async (id: string) => {
  return await ExamModel.findByIdAndDelete(id);
};

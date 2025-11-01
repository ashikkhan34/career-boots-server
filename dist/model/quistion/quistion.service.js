import { Types } from "mongoose";
import { QuestionModel } from "./quistion.model.js";
const createQuestionService = async (payload) => {
    const question = await QuestionModel.create(payload);
    return question;
};
const getAllQuestionsService = async () => {
    const questions = await QuestionModel.find()
        .populate("createdBy");
    return questions;
};
const getQuestionService = async (id) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid question ID");
    const question = await QuestionModel.findById(id);
    return question;
};
const updateQuestionService = async (id, payload) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid question ID");
    const updatedQuestion = await QuestionModel.findByIdAndUpdate(id, payload, { new: true });
    return updatedQuestion;
};
const deleteQuestionService = async (id) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid question ID");
    const deletedQuestion = await QuestionModel.findByIdAndDelete(id);
    return deletedQuestion;
};
export const questionService = {
    createQuestionService,
    getQuestionService,
    getAllQuestionsService,
    updateQuestionService,
    deleteQuestionService,
};
//# sourceMappingURL=quistion.service.js.map
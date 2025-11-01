import { ExamModel } from "./exam.model.js";
// Create exam question
export const createExamService = async (data) => {
    return await ExamModel.create(data);
};
// Get all exam questions
export const getAllExamsService = async () => {
    return await ExamModel.find();
};
// Get exam by ID
export const getExamByIdService = async (id) => {
    return await ExamModel.findById(id);
};
// Delete exam
export const deleteExamService = async (id) => {
    return await ExamModel.findByIdAndDelete(id);
};
//# sourceMappingURL=exam.service.js.map
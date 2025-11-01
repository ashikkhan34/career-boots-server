import bcrypt from "bcrypt";
import { Types } from "mongoose";
import { mentorModel } from "./mentor.model.js";
// Create a new mentor
const createMentorService = async (payload) => {
    if (payload.password) {
        const hashedPassword = await bcrypt.hash(payload.password, 10);
        payload.password = hashedPassword;
    }
    const newMentor = await mentorModel.create(payload);
    return newMentor;
};
// Get all mentors
const getAllMentorsService = async () => {
    const mentors = await mentorModel.find();
    return mentors;
};
// Get a mentor by ID
const getMentorService = async (id) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid mentor ID");
    const mentor = await mentorModel.findById(id).populate("sessionHistory");
    return mentor;
};
// Update mentor
const updateMentorService = async (id, payload) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid mentor ID");
    // If password needs to be updated, hash it
    if (payload.password) {
        const hashedPassword = await bcrypt.hash(payload.password, 10);
        payload.password = hashedPassword;
    }
    const updatedMentor = await mentorModel.findByIdAndUpdate(id, payload, { new: true });
    return updatedMentor;
};
// Delete mentor
const deleteMentorService = async (id) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid mentor ID");
    const deletedMentor = await mentorModel.findByIdAndDelete(id);
    return deletedMentor;
};
export const mentorService = {
    createMentorService,
    getMentorService,
    getAllMentorsService,
    updateMentorService,
    deleteMentorService,
};
//# sourceMappingURL=mentor.service.js.map
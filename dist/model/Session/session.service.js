import { Types } from "mongoose";
import { SessionModel } from "./session.model.js";
const createSessionService = async (payload) => {
    const session = await SessionModel.create(payload);
    return session;
};
const getAllSessionsService = async () => {
    return SessionModel.find().sort({ scheduledAt: 1 });
};
const getSessionService = async (id) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid session ID");
    return SessionModel.findById(id)
        .populate("mentorId")
        .populate("candidateIds")
        .populate("questionIds")
        .populate("feedbackIds");
};
const updateSessionService = async (id, payload) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid session ID");
    return SessionModel.findByIdAndUpdate(id, payload, { new: true });
};
const deleteSessionService = async (id) => {
    if (!Types.ObjectId.isValid(id))
        throw new Error("Invalid session ID");
    return SessionModel.findByIdAndDelete(id);
};
export const sessionService = {
    createSessionService,
    getAllSessionsService,
    getSessionService,
    updateSessionService,
    deleteSessionService,
};
//# sourceMappingURL=session.service.js.map
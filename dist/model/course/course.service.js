import { CourseModel } from "./course.model.js";
const createCourse = async (data) => {
    const course = await CourseModel.create(data);
    return course;
};
const getCourses = async () => {
    return await CourseModel.find().populate("mentor", "name email");
};
const getCourseById = async (id) => {
    return await CourseModel.findById(id).populate("mentor", "name email");
};
const updateCourse = async (id, data) => {
    return await CourseModel.findByIdAndUpdate(id, data, { new: true });
};
const deleteCourse = async (id) => {
    return await CourseModel.findByIdAndDelete(id);
};
export const courseService = {
    createCourse,
    getCourseById,
    getCourses,
    updateCourse,
    deleteCourse
};
//# sourceMappingURL=course.service.js.map
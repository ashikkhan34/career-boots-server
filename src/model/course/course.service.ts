import type { ICourse } from "./course.interface.js";
import { CourseModel } from "./course.model.js";


 const createCourse = async (data: ICourse) => {
  const course = await CourseModel.create(data);
  return course;
};

 const getCourses = async () => {
  return await CourseModel.find().populate("mentor", "name email");
};

 const getCourseById = async (id: string) => {
  return await CourseModel.findById(id).populate("mentor", "name email");
};

 const updateCourse = async (id: string, data: Partial<ICourse>) => {
  return await CourseModel.findByIdAndUpdate(id, data, { new: true });
};

 const deleteCourse = async (id: string) => {
  return await CourseModel.findByIdAndDelete(id);
};


export const courseService = {
    createCourse,
    getCourseById,
    getCourses,
    updateCourse,
    deleteCourse
}
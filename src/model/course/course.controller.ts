import type { Request, Response } from "express";
import { courseService } from "./course.service.js";


 const createCourse = async (req: Request, res: Response) => {
  try {
    const course = await courseService.createCourse(req.body);
    res.status(201).json(course);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

 const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await courseService.getCourses();
    res.json(courses);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

 const getCourseById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    if(!id){
        return res.status(404).json({
            message:'id is required',
            success:false
        })
    }
    const course = await courseService.getCourseById(id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

 const updateCourse = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    if(!id){
        return res.status(404).json({
            message:'id is required',
            success:false
        })
    }
    const course = await courseService.updateCourse(id, req.body);
    res.json(course);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

 const deleteCourse = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    if(!id){
        return res.status(404).json({
            message:'id is required',
            success:false
        })
    }
    await courseService.deleteCourse(id);
    res.json({ message: "Course deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const courseController = {
    createCourse,
    getCourseById,
    getCourses,
    updateCourse,
    deleteCourse
}

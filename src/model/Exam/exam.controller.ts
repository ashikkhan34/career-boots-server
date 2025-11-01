import type { Request, Response } from "express";
import {
  createExamService,
  deleteExamService,
  getAllExamsService,
  getExamByIdService,
} from "./exam.service.js";

// Create Exam
export const createExam = async (req: Request, res: Response) => {
  try {
    const exam = await createExamService(req.body);
    res.status(201).json(exam);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

// Get All Exams
export const getAllExams = async (req: Request, res: Response) => {
  try {
    const exams = await getAllExamsService();
    res.json(exams);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Get Exam by ID
export const getExamById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        message: "id is required",
        success: false,
      });
    }
    const exam = await getExamByIdService(id);
    if (!exam) return res.status(404).json({ message: "Exam not found" });
    res.json(exam);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Exam
export const deleteExam = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        message: "id is required",
        success: false,
      });
    }
    const deleted = await deleteExamService(id);
    if (!deleted) return res.status(404).json({ message: "Exam not found" });
    res.json({ message: "Exam deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

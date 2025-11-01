import { Router } from "express";
import {
  createExam,
  getAllExams,
  getExamById,
  deleteExam,
} from './exam.controller.js'

const router = Router();

router.post("/create-exam", createExam);
router.get("/", getAllExams);
router.get("/:id", getExamById);
router.delete("/delete/:id", deleteExam);

export const examRouter =  router;

import express from 'express'
import { validate } from '../middleware/validate.js';
import { interviewSessionSchema } from './interviewSession.validate.js';
import { interviewSessionController } from './InterviewSession.controller.js';
const router = express.Router()


router.post("/create-interview", validate(interviewSessionSchema), interviewSessionController.createInterviewSessionController);
router.get("/", interviewSessionController.getAllInterviewSessionsController);
router.get("/:id", interviewSessionController.getAnInterviewSessionController);
router.patch("/update/:id", validate(interviewSessionSchema.partial()), interviewSessionController.updateInterviewSessionController);
router.delete("/delete/:id", interviewSessionController.deleteInterviewSessionController);


export const interviewSessionRouter = router;
import express from 'express'
import { validate } from '../middleware/validate.js';
import { interviewSessionSchema } from './interviewSession.validate.js';
import { interviewSessionController } from './InterviewSession.controller.js';
const router = express.Router()


router.post("/", validate(interviewSessionSchema), interviewSessionController.createInterviewSessionController);
router.get("/", interviewSessionController.getAllInterviewSessionsController);
router.get("/:id", interviewSessionController.getAnInterviewSessionController);
router.patch("/:id", validate(interviewSessionSchema.partial()), interviewSessionController.updateInterviewSessionController);
router.delete("/:id", interviewSessionController.deleteInterviewSessionController);


export const interviewSessionRouter = router;
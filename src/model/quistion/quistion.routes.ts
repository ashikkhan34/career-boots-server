import express from 'express'
import { validate } from '../middleware/validate.js';
import { questionSchema } from './question.validation.js';
import { questionController } from './quistion.controller.js';

const router = express.Router()


router.post("/", validate(questionSchema), questionController.createQuestionController);
router.get("/", questionController.getAllQuestionsController);
router.get("/:id", questionController.getAQuestionController);
router.patch("/:id", validate(questionSchema.partial()), questionController.updateQuestionController);
router.delete("/:id", questionController.deleteQuestionController);

export const questionRouter = router;
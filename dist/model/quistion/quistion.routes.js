import express from 'express';
import { validate } from '../middleware/validate.js';
import { questionSchema } from './question.validation.js';
import { questionController } from './quistion.controller.js';
const router = express.Router();
router.post("/create-question", validate(questionSchema), questionController.createQuestionController);
router.get("/", questionController.getAllQuestionsController);
router.get("/:id", questionController.getAQuestionController);
router.patch("/update/:id", validate(questionSchema.partial()), questionController.updateQuestionController);
router.delete("/delete/:id", questionController.deleteQuestionController);
export const questionRouter = router;
//# sourceMappingURL=quistion.routes.js.map
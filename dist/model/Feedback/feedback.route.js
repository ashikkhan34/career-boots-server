import express from 'express';
import { validate } from '../middleware/validate.js';
import { feedbackSchema } from './feedback.validate.js';
import { feedbackController } from './feedback.controller.js';
const router = express.Router();
router.post("/create-feedback", validate(feedbackSchema), feedbackController.createFeedbackController);
router.get("/", feedbackController.getAllFeedbackController);
router.get("/:id", feedbackController.getFeedbackController);
router.patch("/update/:id", validate(feedbackSchema.partial()), feedbackController.updateFeedbackController);
router.delete("/delete/:id", feedbackController.deleteFeedbackController);
export const feedbackRouter = router;
//# sourceMappingURL=feedback.route.js.map
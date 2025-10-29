import express from 'express'
import { validate } from '../middleware/validate.js';
import { sessionSchema } from './session.validate.js';
import { sessionController } from './session.controller.js';

const router = express.Router()

router.post("/", validate(sessionSchema), sessionController.createSessionController);
router.get("/", sessionController.getAllSessionsController);
router.get("/:id", sessionController.getASessionController);
router.patch("/:id", validate(sessionSchema.partial()), sessionController.updateSessionController);
router.delete("/:id", sessionController.deleteSessionController);


export const sessionRouter = router
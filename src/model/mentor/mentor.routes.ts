import express from "express";
import { mentorController } from "./mentor.controller.js";
import { validate } from "../middleware/validate.js";
import { mentorSchema } from "./mentor.validate.js";

const router = express.Router();

// Create mentor
router.post(
  "/create-mentor",
  validate(mentorSchema),
  mentorController.createMentorController
);
router.get("/", mentorController.getAllMentorsController);
router.get("/:id", mentorController.getAMentorController);
router.patch(
  "/update/:id",
  validate(mentorSchema.partial()),
  mentorController.updateMentorController
);
router.delete("/delete/:id", mentorController.deleteMentorController);


export const mentorRouter = router
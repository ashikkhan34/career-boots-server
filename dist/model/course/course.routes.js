import express from "express";
import { courseController } from "./course.controller.js";
const router = express.Router();
router.post("/create-course", courseController.createCourse);
router.get("/", courseController.getCourses);
router.get("/:id", courseController.getCourseById);
router.put("/update/:id", courseController.updateCourse);
router.delete("/delete/:id", courseController.deleteCourse);
export const courseRouter = router;
//# sourceMappingURL=course.routes.js.map
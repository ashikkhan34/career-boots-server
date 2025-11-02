import express from "express";
import { chatWithAI } from "./chatController.js";
const router = express.Router();
router.post("/chat", chatWithAI);
export default router;
//# sourceMappingURL=chatRoutes.js.map
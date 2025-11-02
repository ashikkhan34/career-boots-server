import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config();
export const genAI = new GoogleGenerativeAI(process.env.GEMINIAI_API_KEY);
//# sourceMappingURL=geminiConfig.js.map
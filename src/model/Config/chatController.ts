import type { Request, Response } from "express";
import { genAI } from "./geminiConfig.js";

export const chatWithAI = async (req: Request, res: Response): Promise<void> => {
  try {
    const { message } = req.body;

    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(message);
    const reply = result.response.text();

    res.json({ reply });
  } catch (error: any) {
    console.error("Error in chatWithAI:", error);
    res.status(500).json({ error: error.message || "Something went wrong with Gemini API" });
  }
};

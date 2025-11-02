import { genAI } from "./geminiConfig.js";
export const chatWithAI = async (req, res) => {
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
    }
    catch (error) {
        console.error("Error in chatWithAI:", error);
        res.status(500).json({ error: error.message || "Something went wrong with Gemini API" });
    }
};
//# sourceMappingURL=chatController.js.map
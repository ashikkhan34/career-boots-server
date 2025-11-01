// import OpenAI from "openai";
export {};
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// export const generateQuestion = async (subject: string) => {
//   const prompt = `
//     Generate a ${subject} technical interview question in JSON format like 
//     { "id": "q1", "text": "Question text here" } 
//     without any extra text.
//   `;
//   const response = await openai.chat.completions.create({
//     model: "gpt-4",
//     messages: [{ role: "user", content: prompt }],
//   });
//   const content = response.choices[0]?.message?.content;
//   if (!content) throw new Error("Failed to generate question");
//   return JSON.parse(content);
// };
// export const evaluateAnswer = async (question: string, userAnswer: string) => {
//   const prompt = `
//     Question: ${question}
//     User Answer: ${userAnswer}
//     Is this answer correct? Reply with true or false.
//   `;
//   const response = await openai.chat.completions.create({
//     model: "gpt-4",
//     messages: [{ role: "user", content: prompt }],
//   });
//   const content = response?.choices?.[0]?.message?.content;
//   if (!content) {
//     throw new Error("Failed to evaluate answer");
//   }
//   const result = content.trim().toLowerCase();
//   return result === "true";
// };
//# sourceMappingURL=openAi.service.js.map
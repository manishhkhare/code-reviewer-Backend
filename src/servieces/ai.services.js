const { GoogleGenAI } = require('@google/genai');
require("dotenv").config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});
//  console.log(ai)
async function generateResponce(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: `You are an expert senior software engineer.

          Please review the following code thoroughly. Your review should include:

          - Identification of any bugs or logical errors.
          - Suggestions for improving readability and maintainability.
          - Notes on performance optimizations, if applicable.
          - Security considerations.
          - Best practices and conventions relevant to the language.

          Provide your feedback in clear, concise bullet points in Markdown format.

          If any improvements are needed, include corrected example code snippets in english.`,
              }
            });
 
  return response.text
}

module.exports = {generateResponce}




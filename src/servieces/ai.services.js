const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
 console.log(genAI)
async function generateResponce(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
   
  const result = await model.generateContent([
    `You are an expert senior software engineer.

    Please review the following code thoroughly. Your review should include:

    - Identification of any bugs or logical errors.
    - Suggestions for improving readability and maintainability.
    - Notes on performance optimizations, if applicable.
    - Security considerations.
    - Best practices and conventions relevant to the language.

    Provide your feedback in clear, concise bullet points in Markdown format.

    If any improvements are needed, include corrected example code snippets in english.

    Code:
    ${prompt}
    `
  ]);
  console.log(prompt)
  const response = result.response;
  const text = await response.text();
  return text;
}

module.exports = { generateResponce };

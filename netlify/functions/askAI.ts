import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

export async function handler(event: { body: string | null }) {
  try {
    const { prompt } = JSON.parse(event.body || "{}")

    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing prompt" }),
      }
    }

    const result = await model.generateContent(prompt)
    return {
      statusCode: 200,
      body: JSON.stringify({ text: result.response.text() }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: (err as Error).message }),
    }
  }
}
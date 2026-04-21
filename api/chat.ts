
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, ACHIEVEMENTS } from "../src/constants";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Gemini API key is not configured as an Environment Variable in Vercel." });
    }

    const ai = new GoogleGenAI({ apiKey });
    const resumeData = JSON.stringify({ PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, ACHIEVEMENTS });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are Pavan Tiwari's official AI assistant. Answer based on: ${resumeData}. Be professional and helpful.`,
      }
    });

    return res.status(200).json({ text: response.text });
  } catch (error) {
    console.error("Vercel AI Error:", error);
    return res.status(500).json({ error: "AI Failed to respond. Check server logs." });
  }
}

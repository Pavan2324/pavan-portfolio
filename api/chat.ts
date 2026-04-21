
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS } from "../constants";

// The resume data is kept on the server to prevent exposure and save bandwidth
const resumeDataString = `
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.title}
Headline: ${PERSONAL_INFO.headline}
Summary: ${PERSONAL_INFO.summary}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period})`).join(', ')}
Education: ${EDUCATION.map(e => `${e.degree} from ${e.institution} (${e.period})`).join(', ')}
Skills: ${SKILLS.map(s => `${s.category}: ${s.skills.join(', ')}`).join('; ')}
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Gemini API key is not configured as an Environment Variable." });
    }

    const ai = new GoogleGenAI(apiKey);
    const model = ai.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `You are an AI assistant representing Pavan Tiwari, a professional Data Scientist. 
          Your goal is to answer questions from potential recruiters or clients based on his resume data.
          Be professional, concise, and helpful. Use the following resume data to answer:
          ${resumeDataString}
          
          If a question is asked that isn't covered by the data, politely state that you represent Pavan and can only share details from his professional profile.
          `,
    });

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    return res.status(200).json({ text });
  } catch (error) {
    console.error("Vercel API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

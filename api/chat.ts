import { GoogleGenerativeAI } from "@google/generative-ai";
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, ACHIEVEMENTS } from "../constants";

const resumeDataString = JSON.stringify({
  personal: PERSONAL_INFO,
  experience: EXPERIENCE,
  education: EDUCATION,
  skills: SKILLS,
  projects: PROJECTS,
  achievements: ACHIEVEMENTS
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `You are an AI assistant representing Pavan Tiwari, a professional Applied AI Engineer and Senior Data Scientist. 
      Your goal is to answer questions from potential recruiters or clients based on his resume data.
      Be professional, concise, and helpful. Use the following resume data to answer:
      
      ${resumeDataString}
      
      If a question is asked that isn't covered by the data, politely state that you represent Pavan and can only share details from his professional profile.
      Keep your responses focused on his technical expertise, business impact (like the ₹170 Cr impact), and specialized skills in ML and GenAI.`
    });

    const result = await model.generateContent(message);
    const responseText = result.response.text();
    
    res.status(200).json({ response: responseText });
  } catch (error) {
    console.error("Gemini Server Error:", error);
    res.status(500).json({ error: "Failed to generate response from AI server." });
  }
}

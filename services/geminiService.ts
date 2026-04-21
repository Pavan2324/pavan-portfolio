

import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, ACHIEVEMENTS } from "../constants";

const resumeData = JSON.stringify({
  personal: PERSONAL_INFO,
  experience: EXPERIENCE,
  education: EDUCATION,
  skills: SKILLS,
  projects: PROJECTS,
  achievements: ACHIEVEMENTS
});

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey || apiKey === "your_api_key_here") {
      return "⚠️ Setup Needed: The Gemini API key is missing. If you are in AI Studio, add GEMINI_API_KEY to 'Secrets'. If you are on Vercel or another platform, add GEMINI_API_KEY to your Environment Variables.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are an AI assistant representing Pavan Tiwari, a professional Data Scientist. 
        Your goal is to answer questions from potential recruiters or clients based on his resume data.
        Be professional, concise, and helpful. Use the following resume data to answer:
        ${resumeData}
        
        If a question is asked that isn't covered by the data, politely state that you represent Pavan and can only share details from his professional profile.`
      }
    });

    return response.text || "I was unable to retrieve a response. Please try again later.";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes("API key not valid")) {
      return "❌ The API key is invalid. Please ensure GEMINI_API_KEY is correctly set in your deployment environment variables.";
    }
    
    return "I'm having trouble reasoning about this right now. Please check your connection or ensure the Gemini API key is correctly configured in your environment.";
  }
};

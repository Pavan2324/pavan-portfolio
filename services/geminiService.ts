

import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, ACHIEVEMENTS } from "../constants";

const resumeDataString = JSON.stringify({
  personal: PERSONAL_INFO,
  experience: EXPERIENCE,
  education: EDUCATION,
  skills: SKILLS,
  projects: PROJECTS,
  achievements: ACHIEVEMENTS
});

// Initialize the Gemini API client directly on the client side.
// In AI Studio Build, GEMINI_API_KEY is securely injected into the environment.
const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || "" 
});

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY is not defined in the environment.");
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: `You are an AI assistant representing Pavan Tiwari, a professional Applied AI Engineer and Senior Data Scientist. 
        Your goal is to answer questions from potential recruiters or clients based on his resume data.
        Be professional, concise, and helpful. Use the following resume data to answer:
        
        ${resumeDataString}
        
        If a question is asked that isn't covered by the data, politely state that you represent Pavan and can only share details from his professional profile.
        Keep your responses focused on his technical expertise, business impact (like the ₹170 Cr impact), and specialized skills in ML and GenAI.`,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini Client Error:", error);
    if (error instanceof Error && error.message.includes("API key not valid")) {
      return "The AI assistant is currently unavailable due to an invalid API key. Please contact Pavan Tiwari directly.";
    }
    return "I'm having trouble thinking right now. Please try again in a moment or contact Pavan directly through the links provided.";
  }
};


import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS } from "../constants";

const resumeDataString = `
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.title}
Headline: ${PERSONAL_INFO.headline}
Summary: ${PERSONAL_INFO.summary}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period})`).join(', ')}
Education: ${EDUCATION.map(e => `${e.degree} from ${e.institution} (${e.period})`).join(', ')}
Skills: ${SKILLS.map(s => `${s.category}: ${s.skills.join(', ')}`).join('; ')}
`;

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are an AI assistant representing Pavan Tiwari, a professional Data Scientist. 
        Your goal is to answer questions from potential recruiters or clients based on his resume data.
        Be professional, concise, and helpful. Use the following resume data to answer:
        ${resumeDataString}
        
        If a question is asked that isn't covered by the data, politely state that you represent Pavan and can only share details from his professional profile.
        `,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response right now. Please feel free to reach out to Pavan directly via email.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to my brain! Please try again later or contact Pavan directly.";
  }
};


import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS } from "./constants";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resumeDataString = `
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.title}
Headline: ${PERSONAL_INFO.headline}
Summary: ${PERSONAL_INFO.summary}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period})`).join(', ')}
Education: ${EDUCATION.map(e => `${e.degree} from ${e.institution} (${e.period})`).join(', ')}
Skills: ${SKILLS.map(s => `${s.category}: ${s.skills.join(', ')}`).join('; ')}
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Gemini - Securely handled on the server
  app.post("/api/chat", async (req, res) => {
    try {
      const { prompt } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured on the server." });
      }

      const ai = new GoogleGenAI(apiKey);
      const model = ai.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: `You are an AI assistant representing Pavan Tiwari, a professional Data Scientist. 
        Your goal is to answer questions from potential recruiters or clients based on his resume data.
        Be professional, concise, and helpful. Use the following resume data to answer:
        ${resumeDataString}
        
        If a question is asked that isn't covered by the data, politely state that you represent Pavan and can only share details from his professional profile.
        `
      });

      const response = await model.generateContent(prompt);
      const text = response.response.text();
      
      res.json({ text });
    } catch (error) {
      console.error("Gemini Server Error:", error);
      res.status(500).json({ error: "Failed to generate AI response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

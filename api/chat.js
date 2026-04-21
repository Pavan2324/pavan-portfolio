const { GoogleGenerativeAI } = require("@google/generative-ai");

const RESUME_CONTEXT = `
Name: Pavan Tiwari
Title: Applied AI Engineer | Senior Data Scientist
Location: Navsari, GJ, India
Email: tiwaripav9427@gmail.com
LinkedIn: https://www.linkedin.com/in/pavan-tiwari-80a7b31a5/
GitHub: https://github.com/Pavan2324

SUMMARY:
Applied AI Engineer with 5+ years of experience building and deploying large-scale Machine Learning
and Generative AI systems across manufacturing and finance domains. Delivered Rs.170 Cr business impact
through high-frequency time-series forecasting systems and automated 10+ FTE workloads via intelligent
ML pipelines. Designed enterprise-grade RAG-based LLM architectures for knowledge retrieval and
decision support.

EXPERIENCE:
1. AM/NS India — Senior Data Scientist / Applied AI Engineer (Apr 2021 - Present, 5 years)
   - Time series forecasting (XGBoost, ARIMA, LSTM) for power consumption — 7 FTEs saved, Rs.170 Cr impact.
   - Monthly liquidity forecasting — 3 FTEs saved, improved cash flow visibility.
   - Semantic job-resume matching engine using sentence embeddings, TF-IDF, cosine similarity.
   - GenAI document intelligence system using LLMs and LangChain — ~60% manual effort reduction.

2. Techno Labs — Data Science Intern (Oct 2020 - Mar 2021)
   - Data analysis and visualization with Python.
   - Applied ML and EDA for data-driven decision-making.

EDUCATION:
- PG Diploma in AI & ML — IIT Guwahati (2020-2021), CGPA: 7.92
- B.Tech in CSE — Oriental University, Indore (2016-2020), CGPA: 8.1

SKILLS:
Technical: Python, SQL, XGBoost, LightGBM, Scikit-learn, LSTM, TensorFlow, ARIMA, Prophet,
           LangChain, LlamaIndex, RAG, Agentic AI, FAISS, Pinecone, MLOps, AWS
Tools: Git, GitHub, Jupyter Notebook, VS Code, PyCharm, Crew AI, N8N Automation

PROJECTS:
1. Power Consumption Forecasting (XGBoost, LSTM, ARIMA) — Rs.170 Cr business impact.
2. Surface Defect Detection System (CNN, TensorFlow) — 8 defect types, 75% accuracy.
3. GenAI Document Query System (LangChain, RAG) — enterprise natural language retrieval.

ACHIEVEMENTS:
- Business Excellence Award for Surface Defect Detection System.
- Best Cost Saving Award for Power Forecasting (Rs.170 Cr optimization).
`;

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
    return res.status(400).json({ error: "Missing or empty prompt." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are an AI assistant representing Pavan Tiwari, a professional Applied AI Engineer
and Senior Data Scientist. Answer questions from potential recruiters or clients based ONLY on his resume data.
Be professional, concise, and helpful. If a question is not covered by the resume, politely say you can only
share details from his professional profile and suggest contacting him directly via email.

RESUME DATA:
${RESUME_CONTEXT}`,
    });

    const result = await model.generateContent(prompt.trim());
    const text = result.response.text();

    return res.status(200).json({ text });
  } catch (error) {
    console.error("Gemini API Error:", error?.message || error);
    return res.status(500).json({ error: "Failed to generate AI response." });
  }
};

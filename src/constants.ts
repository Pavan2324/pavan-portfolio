
import { ExperienceItem, EducationItem, SkillGroup, ProjectItem, AchievementItem } from '../types.js';

export const PERSONAL_INFO = {
  name: "Pavan Tiwari",
  title: "Applied AI Engineer | Senior Data Scientist",
  headline: "5+ years experienced Applied AI Engineer specializing in Machine Learning and Generative AI systems.",
  email: "tiwaripav9427@gmail.com",
  phone: "+91-8770602022",
  linkedin: "https://www.linkedin.com/in/pavan-tiwari-80a7b31a5/",
  github: "https://github.com/Pavan2324",
  location: "Navsari, GJ, India",
  summary: `Applied AI Engineer with 5+ years of experience building and deploying large-scale Machine Learning and Generative AI systems across manufacturing and finance domains. Delivered ₹170 Cr business impact through high-frequency time-series forecasting systems and automated 10+ FTE workloads via intelligent ML pipelines. Designed enterprise-grade RAG-based LLM architectures for knowledge retrieval and decision support. Strong expertise in production ML lifecycle, real-time data systems, and scalable AI architecture.`
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp1",
    company: "AM/NS India",
    role: "Senior Data Scientist / Applied AI Engineer",
    period: "Apr 2021 - Present",
    duration: "5 years",
    location: "Navsari, GJ, India",
    details: [
      "Developed and deployed time series forecasting models (XGBoost, ARIMA, LSTM) for power consumption prediction, reducing manual effort by 7 FTEs and contributing to ₹170 Cr profit optimization in FY2025.",
      "Built a monthly liquidity forecasting solution to predict cash inflows and outflows, reducing manual effort by 3 FTEs and improving cash flow visibility.",
      "Developed a semantic job–resume matching engine using sentence embedding, TF-IDF, and cosine similarity to evaluate candidate relevance.",
      "Developed a Generative AI–based document intelligence system using LLMs and LangChain, reducing manual document analysis effort by ~60%."
    ]
  },
  {
    id: "exp2",
    company: "Techno labs",
    role: "Data Science Intern",
    period: "Oct - Mar 2021",
    duration: "6 months",
    location: "India",
    details: [
      "Performed data analysis and visualization using Python, transforming complex datasets into actionable insights and business-friendly dashboards.",
      "Applied machine learning techniques and exploratory data analysis (EDA) to identify patterns and support data-driven decision-making.",
      "Presented analytical findings to stakeholders and collaborated with teams to deliver data-driven solutions."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu1",
    institution: "IIT, GUWAHATI",
    degree: "PG Diploma in AI&ML",
    period: "2020 - 2021",
    cgpa: "7.92"
  },
  {
    id: "edu2",
    institution: "Oriental University, Indore",
    degree: "Bachelor of Technology (CSE)",
    period: "2016 - 2020",
    cgpa: "8.1"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Power Consumption Forecasting",
    description: "Developed automated time series forecasting models reducing manual effort by 7 FTEs and contributing to ₹170 Cr profit optimization in FY2025.",
    details: ["XGBoost", "LSTM", "ARIMA"]
  },
  {
    id: "p2",
    title: "Surface Defect Detection System (SDDS)",
    description: "Developed deep learning–based Surface Defect Detection System using CNN and TensorFlow with transfer learning.",
    details: ["Classifying 8 defect types with 75% accuracy", "Reduced inspection turnaround time"]
  },
  {
    id: "p3",
    title: "Generative AI Document Query System with Agent",
    description: "Developed LLM-based document query system using Lang Chain, enabling natural language retrieval from enterprise documents.",
    details: ["LangChain", "RAG architecture", "Natural language querying"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "a1",
    title: "Won Business Excellence Award for developing Surface Defect Detection System (SDDS)."
  },
  {
    id: "a2",
    title: "Received Best Cost Saving Award for Power Forecasting solution contributing to ₹170 Cr profit optimization."
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Technical Skills",
    skills: [
      "Python", "SQL", "XGBoost", "LightGBM", "Scikit-learn", 
      "Deep Learning (LSTM, TensorFlow)", "Time Series (ARIMA, Prophet)", 
      "NLP/GenAI (spaCy, LangChain, LlamaIndex, RAG)", 
      "Agentic AI", "Vector DBs (FAISS, Pinecone)", "MLOPS", "AWS"
    ]
  },
  {
    category: "Tools & Automation",
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "PyCharm", "Antigravity", "Crew AI", "N8N Automation"]
  }
];

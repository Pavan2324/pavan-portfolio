import { ExperienceItem, EducationItem, SkillGroup, ProjectItem, AchievementItem } from '../types.js';

export const PERSONAL_INFO = {
  name: "Pavan Tiwari",
  title: "Senior Applied AI Engineer | GenAI & LLM Systems",
  headline: "5+ years experienced Senior Applied AI Engineer specializing in LLM/RAG architectures, Agentic AI, and production-grade ML systems.",
  email: "tiwaripav9427@gmail.com",
  phone: "+91-8770602022",
  linkedin: "https://www.linkedin.com/in/pavan-tiwari-80a7b31a5/",
  github: "https://github.com/Pavan2324",
  location: "Navsari, GJ, India",
  summary: `Senior Applied AI Engineer with 5+ years of experience architecting and deploying production-grade ML and Generative AI systems across manufacturing and finance domains. Generated ₹170 Cr business impact through high-frequency time-series forecasting; eliminated 10+ FTE of manual effort via end-to-end intelligent automation. Proven expertise in LLM/RAG architectures, agentic AI (LangChain, LangGraph, OpenAI SDK, MCP), and scalable MLOps on AWS.`
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
      "Spearheaded GenAI Document Intelligence platform with LangChain, LangGraph, and RAG (FAISS/ChromaDB); delivered semantic chunking, agentic retrieval loops, and LLM-based QA over enterprise knowledge bases — slashed manual analysis by 60%.",
      "Developed Iron Procurement Multi-step Agentic System (OpenAI SDK, MCP, FastAPI) — 6-step ReAct agent automating PDF parsing, 3-channel supplier evaluation, and split-order recommendations delivered via Excel & HTML email.",
      "Engineered EAF Power Consumption Forecasting System — XGBoost, Random Forest, and LSTM ensemble predicting 12×15-min MW blocks from 5-sec sensor data on AWS RDS; generated ₹170 Cr profit optimization in FY2025 and eliminated 7 FTE of manual workload.",
      "Architected Treasury Inflow Forecasting System across 5 financial streams (Collection Report, Forex Gain, Duty Drawback, FD Interest, Commodity Hedging) using ARIMA, 2-state HMM, and two-stage XGBoost; delivered P10/P50/P90 forecasts and eliminated 3 FTE of manual effort."
    ]
  },
  {
    id: "exp2",
    company: "Techno Labs",
    role: "Data Science Intern",
    period: "Oct 2020 - Mar 2021",
    duration: "6 months",
    location: "India",
    details: [
      "Applied supervised and unsupervised ML models to surface data patterns; built interactive Python dashboards and delivered data-driven insights to client stakeholders.",
      "Applied machine learning techniques and exploratory data analysis (EDA) to identify patterns and support data-driven decision-making.",
      "Presented analytical findings to stakeholders and collaborated with teams to deliver data-driven solutions."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu1",
    institution: "IIT, GUWAHATI",
    degree: "PG Diploma in Artificial Intelligence & Machine Learning",
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
    title: "Iron Procurement Agentic AI",
    description: "6-step ReAct multi-agent system for PDF parsing, 3-channel supplier comparison, and split-order recommendations delivered via Excel & HTML email — fully automated end-to-end procurement intelligence.",
    details: ["OpenAI SDK", "MCP", "FastAPI", "LangChain", "LangGraph", "AWS RDS"]
  },
  {
    id: "p2",
    title: "GenAI Document Intelligence with Agentic RAG",
    description: "LangGraph-orchestrated agentic RAG pipeline with semantic chunking and LLM-based QA over enterprise knowledge bases — reduced manual document analysis by 60%.",
    details: ["LangChain", "LangGraph", "RAG", "FAISS", "ChromaDB"]
  },
  {
    id: "p3",
    title: "EAF Power Bidding & Forecasting System",
    description: "Production ensemble forecaster predicting 12×15-min MW blocks from 5-sec sensor data with 30-min scheduling, weekly retraining, and self-healing PKL versioning — core driver of ₹170 Cr FY2025 impact.",
    details: ["XGBoost", "Random Forest", "LSTM", "PostgreSQL", "AWS"]
  },
  {
    id: "p4",
    title: "Treasury Inflow Forecasting System",
    description: "OOP 5-component forecaster with 2-state HMM regime detection, P10/P50/P90 quantile bands, dual-channel SMTP reporting, and self-healing model versioning — eliminated 3 FTE of manual effort.",
    details: ["ARIMA", "HMM", "XGBoost", "Python", "SMTP"]
  },
  {
    id: "p5",
    title: "Surface Defect Detection System (SDDS)",
    description: "Transfer learning-based vision classifier identifying 8 steel surface defect types at 75% accuracy — reduced inspection turnaround time and earned Business Excellence Award.",
    details: ["CNN", "TensorFlow", "Transfer Learning"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "a1",
    title: "Best Cost Saving Award — Power Forecasting contributed to ₹170 Cr profit optimization (FY2025); promoted for measurable business impact."
  },
  {
    id: "a2",
    title: "Business Excellence Award — SDDS improved steel quality inspection efficiency through deep learning-based automation."
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "GenAI / Agentic AI",
    skills: [
      "LangChain", "LangGraph", "OpenAI SDK", "Claude API",
      "Hugging Face", "LlamaIndex", "RAG", "ReAct",
      "MCP", "Tool Calling", "Multi-agent Systems", "CrewAI"
    ]
  },
  {
    category: "Vector DBs & Cloud",
    skills: [
      "FAISS", "Pinecone", "ChromaDB", "AstraDB",
      "AWS RDS", "AWS EC2", "AWS S3", "MLflow",
      "Drift Detection", "Automated Retraining"
    ]
  },
  {
    category: "ML / Deep Learning",
    skills: [
      "XGBoost", "Random Forest", "LightGBM", "Scikit-learn",
      "HMM", "LSTM", "CNN", "TensorFlow",
      "ARIMA", "SARIMAX", "Prophet"
    ]
  },
  {
    category: "Languages & Tools",
    skills: [
      "Python", "SQL", "PostgreSQL", "FastAPI",
      "React", "Git", "GitHub", "Jupyter Notebook",
      "VS Code", "N8N Automation"
    ]
  }
];


export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  description?: string;
  details?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  details?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  cgpa?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

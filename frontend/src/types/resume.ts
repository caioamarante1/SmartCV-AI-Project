
export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  linkedin: string;
  github: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  professionalObjective: string;
  experiences: Experience[];
  education: Education[];
  skills: string[];
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  institution: string;
  course: string;
  startDate: string;
  endDate: string;
  status: string;
}

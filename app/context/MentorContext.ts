import { createContext, useContext } from "react";

type MentorData = {
  fullName: string;
  professionalTitle: string;
  bio: string;
  location: string;
  skills: string[];
  experience: {
    position: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    description: string;
  }[];
  socialLinks: {
    github: string | null;
    linkedin: string | null;
    twitter: string | null;
    email: string;
  };
};

type MentorContextType = {
  setMentorData: (data: MentorData) => void;
};

const MentorContext = createContext<MentorContextType | undefined>(undefined);

export const useMentorContext = (): MentorContextType => {
  const context = useContext(MentorContext);
  if (!context) {
    throw new Error("useMentorContext must be used within a MentorProvider");
  }
  return context;
};

// Export MentorContext.Provider to wrap your app
export const MentorProvider = MentorContext.Provider;

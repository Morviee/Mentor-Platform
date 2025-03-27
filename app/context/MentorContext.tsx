"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Define the mentor data type
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
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  profilePicture?: string;
};

// Define context type
type MentorContextType = {
  mentorData: MentorData | null;
  setMentorData: (data: MentorData) => void;
};

// Create the context
const MentorContext = createContext<MentorContextType | undefined>(undefined);

// Create provider component
export function MentorProvider({ children }: { children: ReactNode }) {
  const [mentorData, setMentorData] = useState<MentorData | null>(null);

  useEffect(() => {
    // Ensure this runs only on the client side
    console.log("MentorProvider mounted");
  }, []);

  return (
    <MentorContext.Provider value={{ mentorData, setMentorData }}>
      {children}
    </MentorContext.Provider>
  );
}

// Hook for using the context
export function useMentorContext() {
  const context = useContext(MentorContext);
  if (context === undefined) {
    throw new Error("useMentorContext must be used within a MentorProvider");
  }
  return context;
}
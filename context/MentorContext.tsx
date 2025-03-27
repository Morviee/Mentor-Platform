import React, { createContext, useContext, useState, ReactNode } from "react";

interface Mentor {
  id: number;
  name: string;
  expertise: string[];
}

interface MentorContextType {
  mentors: Mentor[];
  addMentor: (mentor: Mentor) => void;
}

const MentorContext = createContext<MentorContextType | undefined>(undefined);

export const MentorProvider = ({ children }: { children: ReactNode }) => {
  const [mentors, setMentors] = useState<Mentor[]>([]);

  const addMentor = (mentor: Mentor) => {
    setMentors((prev) => [...prev, mentor]);
  };

  return (
    <MentorContext.Provider value={{ mentors, addMentor }}>
      {children}
    </MentorContext.Provider>
  );
};

export const useMentorContext = () => {
  const context = useContext(MentorContext);
  if (!context) {
    throw new Error("useMentorContext must be used within a MentorProvider");
  }
  return context;
};

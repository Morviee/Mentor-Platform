"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Mentor {
  fullName: string;
  professionalTitle: string;
  location?: string;
  bio: string;
  profileImage?: string;
  resumeFile?: string;
  experiences?: Array<{
    title: string;
    company: string;
    startDate: string;
    endDate?: string;
    description?: string;
  }>;
  educations?: Array<{
    degree: string;
    institution: string;
    startDate: string;
    endDate?: string;
    description?: string;
  }>;
  techStack?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    devops?: string[];
  };
  mentorshipAreas?: {
    career?: string[];
    technical?: string[];
    project?: string[];
    soft?: string[];
  };
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}

const MentorProfilePage = ({ params }: { params: { id: string } }) => {
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/mentors/${params.id}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch mentor.");
        }

        const data = await response.json();
        setMentor(data.data);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
      }
    };

    fetchMentor();
  }, [params.id]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  if (!mentor) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Mentor Profile</h1>

        {/* Basic Information */}
        <p><strong>Full Name:</strong> {mentor.fullName}</p>
        <p><strong>Professional Title:</strong> {mentor.professionalTitle}</p>
        <p><strong>Location:</strong> {mentor.location || "N/A"}</p>
        <p><strong>Bio:</strong> {mentor.bio}</p>

        {/* Profile Image */}
        {mentor.profileImage && (
          <div className="mb-4">
            <p><strong>Profile Image:</strong></p>
            <img src={mentor.profileImage} alt="Profile" className="w-32 h-32 rounded-full" />
          </div>
        )}

        {/* Resume File */}
        {mentor.resumeFile && (
          <div className="mb-4">
            <p><strong>Resume:</strong></p>
            <a href={mentor.resumeFile} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View Resume
            </a>
          </div>
        )}

        {/* Experiences */}
        {mentor.experiences && mentor.experiences.length > 0 && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Experiences</h2>
            {mentor.experiences.map((experience, index) => (
              <div key={index} className="mb-2">
                <p><strong>Title:</strong> {experience.title}</p>
                <p><strong>Company:</strong> {experience.company}</p>
                <p><strong>Start Date:</strong> {experience.startDate}</p>
                <p><strong>End Date:</strong> {experience.endDate || "Present"}</p>
                <p><strong>Description:</strong> {experience.description || "N/A"}</p>
              </div>
            ))}
          </div>
        )}

        {/* Educations */}
        {mentor.educations && mentor.educations.length > 0 && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Educations</h2>
            {mentor.educations.map((education, index) => (
              <div key={index} className="mb-2">
                <p><strong>Degree:</strong> {education.degree}</p>
                <p><strong>Institution:</strong> {education.institution}</p>
                <p><strong>Start Date:</strong> {education.startDate}</p>
                <p><strong>End Date:</strong> {education.endDate || "Present"}</p>
                <p><strong>Description:</strong> {education.description || "N/A"}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        {mentor.techStack && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
            <p><strong>Frontend:</strong> {mentor.techStack.frontend?.join(", ") || "N/A"}</p>
            <p><strong>Backend:</strong> {mentor.techStack.backend?.join(", ") || "N/A"}</p>
            <p><strong>Database:</strong> {mentor.techStack.database?.join(", ") || "N/A"}</p>
            <p><strong>DevOps:</strong> {mentor.techStack.devops?.join(", ") || "N/A"}</p>
          </div>
        )}

        {/* Mentorship Areas */}
        {mentor.mentorshipAreas && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Mentorship Areas</h2>
            <p><strong>Career:</strong> {mentor.mentorshipAreas.career?.join(", ") || "N/A"}</p>
            <p><strong>Technical:</strong> {mentor.mentorshipAreas.technical?.join(", ") || "N/A"}</p>
            <p><strong>Project:</strong> {mentor.mentorshipAreas.project?.join(", ") || "N/A"}</p>
            <p><strong>Soft Skills:</strong> {mentor.mentorshipAreas.soft?.join(", ") || "N/A"}</p>
          </div>
        )}

        {/* Social Links */}
        {mentor.socialLinks && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Social Links</h2>
            {mentor.socialLinks.github && <p><strong>GitHub:</strong> <a href={mentor.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{mentor.socialLinks.github}</a></p>}
            {mentor.socialLinks.linkedin && <p><strong>LinkedIn:</strong> <a href={mentor.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{mentor.socialLinks.linkedin}</a></p>}
            {mentor.socialLinks.twitter && <p><strong>Twitter:</strong> <a href={mentor.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{mentor.socialLinks.twitter}</a></p>}
            <p><strong>Email:</strong> {mentor.socialLinks.email}</p>
          </div>
        )}

        <button
          onClick={() => router.push("/mentor")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Mentor Form
        </button>
      </div>
    </div>
  );
};

export default MentorProfilePage;
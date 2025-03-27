"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Student {
  fullName: string;
  email: string;
  age: number;
  course: string;
}

const StudentProfilePage = ({ params }: { params: { id: string } }) => {
  const [student, setStudent] = useState<Student | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/students/${params.id}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch student.");
        }

        const data = await response.json();
        setStudent(data.data);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
      }
    };

    fetchStudent();
  }, [params.id]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Student Profile</h1>
        <p><strong>Full Name:</strong> {student.fullName}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <button
          onClick={() => router.push("/profile")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Profile Form
        </button>
      </div>
    </div>
  );
};

export default StudentProfilePage;
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const studentSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  age: z.number({ invalid_type_error: "Age must be a number" }).min(18, "You must be at least 18 years old"),
  course: z.string().min(1, "Course is required"),
});

type StudentFormData = z.infer<typeof studentSchema>;

const ProfilePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = async (data: StudentFormData) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create student.");
      }

      const result = await response.json();
      router.push(`/profile/${result.data._id}`);
    } catch (error: any) {
      alert(error.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">Student Profile</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <Input
            type="text"
            {...register("fullName")}
            placeholder="Enter your full name"
            disabled={loading}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            disabled={loading}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Age</label>
          <Input
            type="number"
            {...register("age", { valueAsNumber: true })}
            placeholder="Enter your age"
            disabled={loading}
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Course</label>
          <Input
            type="text"
            {...register("course")}
            placeholder="Enter your course"
            disabled={loading}
          />
          {errors.course && (
            <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full bg-[#9f1239] text-white" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default ProfilePage;
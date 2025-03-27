"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const mentorSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  professionalTitle: z.string().min(1, "Professional title is required"),
  location: z.string().optional(),
  bio: z.string().min(1, "Bio is required"),
  profileImage: z.string().optional(),
  resumeFile: z.string().optional(),
  experiences: z
    .array(
      z.object({
        title: z.string().min(1, "Title is required"),
        company: z.string().min(1, "Company is required"),
        startDate: z.string().min(1, "Start date is required"),
        endDate: z.string().optional(),
        description: z.string().optional(),
      })
    )
    .optional(),
  educations: z
    .array(
      z.object({
        degree: z.string().min(1, "Degree is required"),
        institution: z.string().min(1, "Institution is required"),
        startDate: z.string().min(1, "Start date is required"),
        endDate: z.string().optional(),
        description: z.string().optional(),
      })
    )
    .optional(),
  techStack: z
    .object({
      frontend: z.array(z.string()).optional(),
      backend: z.array(z.string()).optional(),
      database: z.array(z.string()).optional(),
      devops: z.array(z.string()).optional(),
    })
    .optional(),
  mentorshipAreas: z
    .object({
      career: z.array(z.string()).optional(),
      technical: z.array(z.string()).optional(),
      project: z.array(z.string()).optional(),
      soft: z.array(z.string()).optional(),
    })
    .optional(),
  socialLinks: z.object({
    github: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    email: z.string().email("Invalid email address"),
  }),
});

type MentorFormData = z.infer<typeof mentorSchema>;

const MentorPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MentorFormData>({
    resolver: zodResolver(mentorSchema),
  });

  const { fields: experienceFields, append: addExperience } = useFieldArray({
    control,
    name: "experiences",
  });

  const { fields: educationFields, append: addEducation } = useFieldArray({
    control,
    name: "educations",
  });

  const onSubmit = async (data: MentorFormData) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/mentors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create mentor.");
      }

      const result = await response.json();
      router.push(`/mentor/${result.data._id}`);
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
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl"
      >
        <h1 className="text-2xl font-bold mb-4">Mentor Profile</h1>

        {/* Full Name */}
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

        {/* Professional Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Professional Title</label>
          <Input
            type="text"
            {...register("professionalTitle")}
            placeholder="Enter your professional title"
            disabled={loading}
          />
          {errors.professionalTitle && (
            <p className="text-red-500 text-sm mt-1">{errors.professionalTitle.message}</p>
          )}
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <Input
            type="text"
            {...register("location")}
            placeholder="Enter your location"
            disabled={loading}
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            {...register("bio")}
            placeholder="Enter your bio"
            className="w-full border rounded p-2"
            disabled={loading}
          />
          {errors.bio && (
            <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
          )}
        </div>

        {/* Social Links */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            type="email"
            {...register("socialLinks.email")}
            placeholder="Enter your email"
            disabled={loading}
          />
          {errors.socialLinks?.email && (
            <p className="text-red-500 text-sm mt-1">{errors.socialLinks.email.message}</p>
          )}
        </div>

        {/* Experiences */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Experiences</label>
          {experienceFields.map((field, index) => (
            <div key={field.id} className="mb-2">
              <Input
                type="text"
                {...register(`experiences.${index}.title`)}
                placeholder="Title"
                className="mb-1"
              />
              <Input
                type="text"
                {...register(`experiences.${index}.company`)}
                placeholder="Company"
                className="mb-1"
              />
              <Input
                type="text"
                {...register(`experiences.${index}.startDate`)}
                placeholder="Start Date"
                className="mb-1"
              />
              <Input
                type="text"
                {...register(`experiences.${index}.endDate`)}
                placeholder="End Date"
                className="mb-1"
              />
              <textarea
                {...register(`experiences.${index}.description`)}
                placeholder="Description"
                className="w-full border rounded p-2"
              />
            </div>
          ))}
          <Button
            type="button"
            onClick={() => addExperience({ title: "", company: "", startDate: "" })}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Experience
          </Button>
        </div>

        {/* Educations */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Educations</label>
          {educationFields.map((field, index) => (
            <div key={field.id} className="mb-2">
              <Input
                type="text"
                {...register(`educations.${index}.degree`)}
                placeholder="Degree"
                className="mb-1"
              />
              <Input
                type="text"
                {...register(`educations.${index}.institution`)}
                placeholder="Institution"
                className="mb-1"
              />
              <Input
                type="text"
                {...register(`educations.${index}.startDate`)}
                placeholder="Start Date"
                className="mb-1"
              />
              <Input
                type="text"
                {...register(`educations.${index}.endDate`)}
                placeholder="End Date"
                className="mb-1"
              />
              <textarea
                {...register(`educations.${index}.description`)}
                placeholder="Description"
                className="w-full border rounded p-2"
              />
            </div>
          ))}
          <Button
            type="button"
            onClick={() => addEducation({ degree: "", institution: "", startDate: "" })}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Education
          </Button>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-[#9f1239] text-white" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default MentorPage;
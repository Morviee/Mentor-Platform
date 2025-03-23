"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Upload, Check, Plus, Trash2, Github, Linkedin, Twitter, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ThemeProvider } from "../../components/theme-provider"

export default function MentorForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 6

  // Form state
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  // Experience fields
  const [experiences, setExperiences] = useState([
    { title: "", company: "", startDate: "", endDate: "", description: "" },
  ])

  // Education fields
  const [educations, setEducations] = useState([
    { degree: "", institution: "", startDate: "", endDate: "", description: "" },
  ])

  // Tech stack fields
  const [techStack, setTechStack] = useState({
    frontend: ["React", "Next.js"],
    backend: ["Node.js"],
    database: ["MongoDB"],
    devops: ["Docker"],
  })

  // Mentorship areas
  const [mentorshipAreas, setMentorshipAreas] = useState({
    career: ["Resume & Portfolio Review"],
    technical: ["Frontend Architecture"],
    project: ["Code Reviews"],
    soft: ["Communication"],
  })

  // Handle profile image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle resume upload
  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setResumeFile(file)
    }
  }

  // Add new experience field
  const addExperience = () => {
    setExperiences([...experiences, { title: "", company: "", startDate: "", endDate: "", description: "" }])
  }

  // Remove experience field
  const removeExperience = (index: number) => {
    const updatedExperiences = [...experiences]
    updatedExperiences.splice(index, 1)
    setExperiences(updatedExperiences)
  }

  // Add new education field
  const addEducation = () => {
    setEducations([...educations, { degree: "", institution: "", startDate: "", endDate: "", description: "" }])
  }

  // Remove education field
  const removeEducation = (index: number) => {
    const updatedEducations = [...educations]
    updatedEducations.splice(index, 1)
    setEducations(updatedEducations)
  }

  // Update experience field
  const updateExperience = (index: number, field: string, value: string) => {
    const updatedExperiences = [...experiences]
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value }
    setExperiences(updatedExperiences)
  }

  // Update education field
  const updateEducation = (index: number, field: string, value: string) => {
    const updatedEducations = [...educations]
    updatedEducations[index] = { ...updatedEducations[index], [field]: value }
    setEducations(updatedEducations)
  }

  // Add skill to tech stack
  const addSkill = (category: string, skill: string) => {
    if (skill.trim() === "") return

    setTechStack({
      ...techStack,
      [category]: [...techStack[category as keyof typeof techStack], skill],
    })

    // Clear the input
    const input = document.getElementById(`${category}-skill-input`) as HTMLInputElement
    if (input) input.value = ""
  }

  // Remove skill from tech stack
  const removeSkill = (category: string, index: number) => {
    const updatedSkills = [...techStack[category as keyof typeof techStack]]
    updatedSkills.splice(index, 1)

    setTechStack({
      ...techStack,
      [category]: updatedSkills,
    })
  }

  // Add mentorship area
  const addMentorshipArea = (category: string, area: string) => {
    if (area.trim() === "") return

    setMentorshipAreas({
      ...mentorshipAreas,
      [category]: [...mentorshipAreas[category as keyof typeof mentorshipAreas], area],
    })

    // Clear the input
    const input = document.getElementById(`${category}-area-input`) as HTMLInputElement
    if (input) input.value = ""
  }

  // Remove mentorship area
  const removeMentorshipArea = (category: string, index: number) => {
    const updatedAreas = [...mentorshipAreas[category as keyof typeof mentorshipAreas]]
    updatedAreas.splice(index, 1)

    setMentorshipAreas({
      ...mentorshipAreas,
      [category]: updatedAreas,
    })
  }

  // Handle next step
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    } else {
      // Submit form
      console.log("Form submitted")
      // Redirect to profile page or confirmation page
      router.push("/")
    }
  }

  // Handle previous step
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Process form data here
    console.log("Form submitted")
    // Redirect to profile page
    router.push("/")
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8fafc]">
        {/* Header */}
        <header className="relative h-64 bg-gradient-to-r from-[#be123c] to-[#f43f5e] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-[#f8fafc] skew-y-[-1deg] transform origin-bottom-right translate-y-8"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 mb-4">Mentor Profile Setup</h1>
            <p className="text-lg md:text-xl text-white relative z-10 max-w-2xl">
              Create your professional mentor profile
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-black ${
                    index + 1 === currentStep
                      ? "bg-[#be123c] text-white"
                      : index + 1 < currentStep
                        ? "bg-[#9f1239] text-white"
                        : "bg-white"
                  }`}
                >
                  {index + 1 < currentStep ? <Check className="w-4 h-4" /> : <span>{index + 1}</span>}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-[#be123c] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span>Basic Info</span>
              <span>Experience</span>
              <span>Education</span>
              <span>Tech Stack</span>
              <span>Mentorship</span>
              <span>Social</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-8">
                <h2 className="text-2xl font-bold mb-6 border-b-3 border-black pb-2">Basic Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <Label htmlFor="name" className="block font-bold mb-2">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="e.g. Sarah Johnson"
                        className="border-2 border-black"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="title" className="block font-bold mb-2">
                        Professional Title
                      </Label>
                      <Input
                        id="title"
                        type="text"
                        placeholder="e.g. Senior Frontend Developer"
                        className="border-2 border-black"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="location" className="block font-bold mb-2">
                        Location
                      </Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="e.g. San Francisco, CA"
                        className="border-2 border-black"
                      />
                    </div>

                    <div className="mb-6">
                      <Label className="block font-bold mb-2">Professional Titles/Badges</Label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge className="bg-[#be123c] text-white border-2 border-black">Full Stack Developer</Badge>
                        <Badge className="bg-[#f43f5e] text-white border-2 border-black">UI/UX Designer</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Input
                          id="badge"
                          type="text"
                          placeholder="Add a professional title"
                          className="border-2 border-black flex-1"
                        />
                        <Button type="button" className="bg-[#9f1239] text-white border-2 border-black">
                          <Plus className="w-4 h-4 mr-1" /> Add
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <Label className="block font-bold mb-2">Profile Photo</Label>
                      <div className="flex flex-col items-center">
                        <div className="w-48 h-48 bg-[#f43f5e] border-3 border-black rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] mb-4">
                          {profileImage ? (
                            <Image
                              src={profileImage || "/placeholder.svg"}
                              alt="Profile Preview"
                              width={300}
                              height={300}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Upload className="w-12 h-12 text-white" />
                            </div>
                          )}
                        </div>
                        <Label
                          htmlFor="profile-image"
                          className="bg-[#be123c] text-white font-semibold px-4 py-2 border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all cursor-pointer"
                        >
                          <Upload className="w-4 h-4 mr-2 inline-block" />
                          Upload Photo
                        </Label>
                        <Input
                          id="profile-image"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="bio" className="block font-bold mb-2">
                        Short Bio
                      </Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself and your expertise..."
                        className="border-2 border-black h-32"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Professional Experience */}
            {currentStep === 2 && (
              <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-8">
                <h2 className="text-2xl font-bold mb-6 border-b-3 border-black pb-2 text-white">
                  Professional Experience
                </h2>

                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="mb-8 bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Position {index + 1}</h3>
                      {index > 0 && (
                        <Button
                          type="button"
                          variant="outline"
                          className="border-2 border-black"
                          onClick={() => removeExperience(index)}
                        >
                          <Trash2 className="w-4 h-4 mr-1" /> Remove
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor={`title-${index}`} className="block font-bold mb-1">
                          Job Title
                        </Label>
                        <Input
                          id={`title-${index}`}
                          type="text"
                          placeholder="e.g. Senior Frontend Developer"
                          className="border-2 border-black"
                          value={exp.title}
                          onChange={(e) => updateExperience(index, "title", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`company-${index}`} className="block font-bold mb-1">
                          Company
                        </Label>
                        <Input
                          id={`company-${index}`}
                          type="text"
                          placeholder="e.g. TechGiant Inc."
                          className="border-2 border-black"
                          value={exp.company}
                          onChange={(e) => updateExperience(index, "company", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor={`start-date-${index}`} className="block font-bold mb-1">
                          Start Date
                        </Label>
                        <Input
                          id={`start-date-${index}`}
                          type="text"
                          placeholder="e.g. Jan 2020"
                          className="border-2 border-black"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(index, "startDate", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`end-date-${index}`} className="block font-bold mb-1">
                          End Date
                        </Label>
                        <Input
                          id={`end-date-${index}`}
                          type="text"
                          placeholder="e.g. Present"
                          className="border-2 border-black"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(index, "endDate", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor={`description-${index}`} className="block font-bold mb-1">
                        Description
                      </Label>
                      <Textarea
                        id={`description-${index}`}
                        placeholder="Describe your responsibilities and achievements..."
                        className="border-2 border-black"
                        value={exp.description}
                        onChange={(e) => updateExperience(index, "description", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  className="bg-white text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
                  onClick={addExperience}
                >
                  <Plus className="w-4 h-4 mr-1" /> Add Another Position
                </Button>
              </div>
            )}

            {/* Step 3: Education */}
            {currentStep === 3 && (
              <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-8">
                <h2 className="text-2xl font-bold mb-6 border-b-3 border-black pb-2 text-white">Education</h2>

                {educations.map((edu, index) => (
                  <div
                    key={index}
                    className="mb-8 bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Education {index + 1}</h3>
                      {index > 0 && (
                        <Button
                          type="button"
                          variant="outline"
                          className="border-2 border-black"
                          onClick={() => removeEducation(index)}
                        >
                          <Trash2 className="w-4 h-4 mr-1" /> Remove
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor={`degree-${index}`} className="block font-bold mb-1">
                          Degree
                        </Label>
                        <Input
                          id={`degree-${index}`}
                          type="text"
                          placeholder="e.g. Master of Computer Science"
                          className="border-2 border-black"
                          value={edu.degree}
                          onChange={(e) => updateEducation(index, "degree", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`institution-${index}`} className="block font-bold mb-1">
                          Institution
                        </Label>
                        <Input
                          id={`institution-${index}`}
                          type="text"
                          placeholder="e.g. Stanford University"
                          className="border-2 border-black"
                          value={edu.institution}
                          onChange={(e) => updateEducation(index, "institution", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor={`edu-start-date-${index}`} className="block font-bold mb-1">
                          Start Date
                        </Label>
                        <Input
                          id={`edu-start-date-${index}`}
                          type="text"
                          placeholder="e.g. 2016"
                          className="border-2 border-black"
                          value={edu.startDate}
                          onChange={(e) => updateEducation(index, "startDate", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`edu-end-date-${index}`} className="block font-bold mb-1">
                          End Date
                        </Label>
                        <Input
                          id={`edu-end-date-${index}`}
                          type="text"
                          placeholder="e.g. 2018"
                          className="border-2 border-black"
                          value={edu.endDate}
                          onChange={(e) => updateEducation(index, "endDate", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor={`edu-description-${index}`} className="block font-bold mb-1">
                        Description
                      </Label>
                      <Textarea
                        id={`edu-description-${index}`}
                        placeholder="Describe your specialization, thesis, achievements..."
                        className="border-2 border-black"
                        value={edu.description}
                        onChange={(e) => updateEducation(index, "description", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  className="bg-white text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
                  onClick={addEducation}
                >
                  <Plus className="w-4 h-4 mr-1" /> Add Another Education
                </Button>
              </div>
            )}

            {/* Step 4: Tech Stack */}
            {currentStep === 4 && (
              <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-8">
                <h2 className="text-2xl font-bold mb-6 border-b-3 border-black pb-2">Tech Stack</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                    <h3 className="font-bold text-lg mb-3 text-black">Frontend</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {techStack.frontend.map((skill, index) => (
                        <Badge key={index} className="bg-white text-black border border-black flex items-center gap-1">
                          {skill}
                          <button
                            type="button"
                            className="ml-1 rounded-full w-4 h-4 bg-black text-black flex items-center justify-center text-xs"
                            onClick={() => removeSkill("frontend", index)}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        id="frontend-skill-input"
                        type="text"
                        placeholder="Add a frontend skill"
                        className="border-2 border-black flex-1"
                      />
                      <Button
                        type="button"
                        className="bg-white text-black border-2 border-black"
                        onClick={() => {
                          const input = document.getElementById("frontend-skill-input") as HTMLInputElement
                          addSkill("frontend", input.value)
                        }}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                    <h3 className="font-bold text-lg mb-3 text-black">Backend</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {techStack.backend.map((skill, index) => (
                        <Badge key={index} className="bg-white text-black border border-black flex items-center gap-1">
                          {skill}
                          <button
                            type="button"
                            className="ml-1 rounded-full w-4 h-4 bg-black text-black flex items-center justify-center text-xs"
                            onClick={() => removeSkill("backend", index)}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        id="backend-skill-input"
                        type="text"
                        placeholder="Add a backend skill"
                        className="border-2 border-black flex-1"
                      />
                      <Button
                        type="button"
                        className="bg-white text-black border-2 border-black"
                        onClick={() => {
                          const input = document.getElementById("backend-skill-input") as HTMLInputElement
                          addSkill("backend", input.value)
                        }}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                    <h3 className="font-bold text-lg mb-3 text-black">Database</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {techStack.database.map((skill, index) => (
                        <Badge key={index} className="bg-white text-black border border-black flex items-center gap-1">
                          {skill}
                          <button
                            type="button"
                            className="ml-1 rounded-full w-4 h-4 bg-black text-black flex items-center justify-center text-xs"
                            onClick={() => removeSkill("database", index)}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        id="database-skill-input"
                        type="text"
                        placeholder="Add a database skill"
                        className="border-2 border-black flex-1"
                      />
                      <Button
                        type="button"
                        className="bg-white text-black border-2 border-black"
                        onClick={() => {
                          const input = document.getElementById("database-skill-input") as HTMLInputElement
                          addSkill("database", input.value)
                        }}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                    <h3 className="font-bold text-lg mb-3 text-black">DevOps</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {techStack.devops.map((skill, index) => (
                        <Badge key={index} className="bg-white text-black border border-black flex items-center gap-1">
                          {skill}
                          <button
                            type="button"
                            className="ml-1 rounded-full w-4 h-4 bg-black text-white flex items-center justify-center text-xs"
                            onClick={() => removeSkill("devops", index)}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        id="devops-skill-input"
                        type="text"
                        placeholder="Add a DevOps skill"
                        className="border-2 border-black flex-1"
                      />
                      <Button
                        type="button"
                        className="bg-white text-black border-2 border-black"
                        onClick={() => {
                          const input = document.getElementById("devops-skill-input") as HTMLInputElement
                          addSkill("devops", input.value)
                        }}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Mentorship Areas */}
            {currentStep === 5 && (
              <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-8">
                <h2 className="text-2xl font-bold mb-6 border-b-3 border-black pb-2 text-black">Mentorship Areas</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                    <h3 className="font-bold text-xl mb-3">Career Development</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mentorshipAreas.career.map((area, index) => (
                        <Badge
                          key={index}
                          className="bg-white text-black border border-black flex items-center gap-1"
                        >
                          {area}
                          <button
                            type="button"
                            className="ml-1 rounded-full w-4 h-4 bg-black text-white flex items-center justify-center text-xs"
                            onClick={() => removeMentorshipArea("career", index)}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        id="career-area-input"
                        type="text"
                        placeholder="Add a career development area"
                        className="border-2 border-black flex-1"
                      />
                      <Button
                        type="button"
                        className="bg-white text-black border-2 border-black"
                        onClick={() => {
                          const input = document.getElementById("career-area-input") as HTMLInputElement
                          addMentorshipArea("career", input.value)
                        }}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                    <h3 className="font-bold text-xl mb-3">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mentorshipAreas.technical.map((area, index) => (
                        <Badge
                          key={index}
                          className="bg-white text-black border border-black flex items-center gap-1"
                        >
                          {area}
                          <button
                            type="button"
                            className="ml-1 rounded-full w-4 h-4 bg-black text-white flex items-center justify-center text-xs"
                            onClick={() => removeMentorshipArea("technical", index)}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        id="technical-area-input"
                        type="text"
                        placeholder="Add a technical skill area"
                        className="border-2 border-black flex-1"
                      />
                      <Button
                        type="button"
                        className="bg-white text-black border-2 border-black"
                        onClick={() => {
                          const input = document.getElementById("technical-area-input") as HTMLInputElement
                          addMentorshipArea("technical", input.value)
                        }}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                    <h3 className="font-bold text-xl mb-3">Project Guidance</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mentorshipAreas.project.map((area, index) => (
                        <Badge
                          key={index}
                          className="bg-white text-black border border-black flex items-center gap-1"
                        >
                          {area}
                          <button
                            type="button"
                            className="ml-1 rounded-full w-4 h-4 bg-black text-white flex items-center justify-center text-xs"
                            onClick={() => removeMentorshipArea("project", index)}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        id="project-area-input"
                        type="text"
                        placeholder="Add a project guidance area"
                        className="border-2 border-black flex-1"
                      />
                      <Button
                        type="button"
                        className="bg-white text-black border-2 border-black"
                        onClick={() => {
                          const input = document.getElementById("project-area-input") as HTMLInputElement
                          addMentorshipArea("project", input.value)
                        }}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                    <h3 className="font-bold text-xl mb-3">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mentorshipAreas.soft.map((area, index) => (
                        <Badge
                          key={index}
                          className="bg-white text-black border border-black flex items-center gap-1"
                        >
                          {area}
                          <button
                            type="button"
                            className="ml-1 rounded-full w-4 h-4 bg-black text-white flex items-center justify-center text-xs"
                            onClick={() => removeMentorshipArea("soft", index)}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        id="soft-area-input"
                        type="text"
                        placeholder="Add a soft skill area"
                        className="border-2 border-black flex-1"
                      />
                      <Button
                        type="button"
                        className="bg-white text-black border-2 border-black"
                        onClick={() => {
                          const input = document.getElementById("soft-area-input") as HTMLInputElement
                          addMentorshipArea("soft", input.value)
                        }}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Social & Contact */}
            {currentStep === 6 && (
              <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-8">
                <h2 className="text-2xl font-bold mb-6 border-b-3 border-black pb-2 text-black">Social & Contact</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <Label htmlFor="github" className="flex items-center font-bold mb-2 text-Black">
                        <Github className="w-5 h-5 mr-2" /> GitHub Profile
                      </Label>
                      <Input
                        id="github"
                        type="url"
                        placeholder="https://github.com/yourusername"
                        className="border-2 border-black"
                      />
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="linkedin" className="flex items-center font-bold mb-2 text-black">
                        <Linkedin className="w-5 h-5 mr-2" /> LinkedIn Profile
                      </Label>
                      <Input
                        id="linkedin"
                        type="url"
                        placeholder="https://linkedin.com/in/yourusername"
                        className="border-2 border-black"
                      />
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="twitter" className="flex items-center font-bold mb-2 text-black">
                        <Twitter className="w-5 h-5 mr-2" /> Twitter Profile
                      </Label>
                      <Input
                        id="twitter"
                        type="url"
                        placeholder="https://twitter.com/yourusername"
                        className="border-2 border-black"
                      />
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="email" className="flex items-center font-bold mb-2 text-black">
                        <Mail className="w-5 h-5 mr-2" /> Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="border-2 border-black"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <Label className="block font-bold mb-2 text-white">Resume Upload</Label>
                      <div className="flex flex-col items-center bg-white border-2 border-black p-6 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                        {resumeFile ? (
                          <div className="text-center mb-4">
                            <p className="font-semibold">{resumeFile.name}</p>
                            <p className="text-sm text-gray-500">{(resumeFile.size / 1024).toFixed(2)} KB</p>
                          </div>
                        ) : (
                          <div className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded mb-4">
                            <Upload className="w-12 h-12 text-gray-500" />
                          </div>
                        )}
                        <Label
                          htmlFor="resume-file"
                          className="bg-[#be123c] text-white font-semibold px-4 py-2 border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all cursor-pointer"
                        >
                          <Upload className="w-4 h-4 mr-2 inline-block" />
                          {resumeFile ? "Change Resume" : "Upload Resume"}
                        </Label>
                        <Input
                          id="resume-file"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={handleResumeUpload}
                        />
                        <p className="text-sm text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="testimonials" className="block font-bold mb-2 text-white">
                        Testimonials
                      </Label>
                      <Textarea
                        id="testimonials"
                        placeholder="Add testimonials from your mentees (one per line)"
                        className="border-2 border-black h-32"
                      />
                      <p className="text-sm text-white mt-1">Format: Quote | Name | Position</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                className="border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Previous
              </Button>

              <Button
                type={currentStep === totalSteps ? "submit" : "button"}
                className="bg-[#be123c] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
                onClick={currentStep === totalSteps ? undefined : handleNext}
              >
                {currentStep === totalSteps ? (
                  <>Submit Profile</>
                ) : (
                  <>
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </main>

        <footer className="bg-black text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="font-bold">© {new Date().getFullYear()} Mentor Profile Setup</p>
            <p className="mt-2">Connect, learn, and grow with tech professionals worldwide</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}


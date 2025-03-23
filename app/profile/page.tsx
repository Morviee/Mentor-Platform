"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    bio: "",
    skills: "",
    interests: "",
    education: "",
    idUpload: null as File | null,
    profilePicture: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfile((prev) => ({ ...prev, [e.target.name]: e.target.files![0] }));
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
        
      <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl border-2 border-black text-center">
        <h2 className="text-3xl font-extrabold text-[#be123c]">Create Your Profile</h2>
        <p className="text-gray-600 mt-2">Showcase your skills and interests</p>

        <form className="mt-6 space-y-4">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center">
            <label className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full border-2 border-dashed border-black cursor-pointer overflow-hidden">
              {profile.profilePicture instanceof File ? (
                <img
                  src={URL.createObjectURL(profile.profilePicture)}
                  alt="Profile"
                  className="w-24 h-24 object-cover rounded-full"
                />
              ) : (
                <Upload className="text-gray-600" />
              )}
              <input type="file" name="profilePicture" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          <Input type="text" name="fullName" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]" onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]" onChange={handleChange} />
          <Textarea name="bio" placeholder="Tell us about yourself" className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]" onChange={handleChange} />
          <Input type="text" name="skills" placeholder="Skills (e.g., JavaScript, Design)" className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]" onChange={handleChange} />
          <Input type="text" name="interests" placeholder="Interests (e.g., AI, Web Development)" className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]" onChange={handleChange} />
          <Input type="text" name="education" placeholder="Education (e.g., Bachelor's in CS)" className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]" onChange={handleChange} />
          
          {/* ID Upload */}
          <div className="flex flex-col items-center">
            <label className="w-full p-3 flex items-center justify-center bg-gray-200 rounded-lg border-2 border-dashed border-black cursor-pointer">
              {profile.idUpload instanceof File ? (
                <span className="text-gray-600">{profile.idUpload.name}</span>
              ) : (
                <span className="text-gray-600">Upload ID</span>
              )}
              <input type="file" name="idUpload" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          <Button className="w-full bg-[#be123c] text-white py-3 rounded-lg border-2 border-black shadow-lg hover:bg-[#9f0f34] transition">
            Save Profile
          </Button>
        </form>
      </div>
    </div>
    </>
  );
}

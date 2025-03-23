"use client"


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "../components/Navbar";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
        <Navbar/>
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border-2 border-black text-center">
        <h2 className="text-3xl font-extrabold text-[#be123c]">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>
        <p className="text-gray-600 mt-2">
          {isSignUp ? "Join us by filling the details below." : "Sign in to continue."}
        </p>

        <form className="mt-6 space-y-4">
          {isSignUp && (
            <Input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]" />
          )}
          <Input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]" />
          <Input type="password" placeholder="Password" className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]" />
          
          <Button className="w-full bg-[#be123c] text-white py-3 rounded-lg border-2 border-black shadow-lg hover:bg-[#9f0f34] transition">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
        
        <p className="mt-6 text-sm text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[#be123c] font-semibold hover:underline ml-1"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}


import { Users, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-3 border-black shadow-[0_4px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-[#be123c] flex items-center justify-center mr-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]">
                <Users className="text-black" />
              </div>
              <span className="text-xl font-bold text-black">TechHub</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium text-black hover:text-[#be123c] transition-colors border-b-2 border-[#be123c]">
              Communities
            </a>
            <a href="/mentors" className="font-medium text-black hover:text-[#be123c] transition-colors">Mentors</a>
            <a href="/profile" className="font-medium text-black hover:text-[#be123c] transition-colors">Profile</a>
            <a href="/about" className="font-medium text-black hover:text-[#be123c] transition-colors">About</a>
          </div>

          {/* Search, Notifications, and Profile */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button variant="ghost" size="icon" className="rounded-full text-black hover:bg-[#fecdd3] hover:text-[#be123c]">
              <Search className="h-5 w-5 text-black" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="rounded-full text-black hover:bg-[#fecdd3] hover:text-[#be123c] relative">
              <Bell className="h-5 w-5 text-black" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#be123c]"></span>
            </Button>

            {/* Sign Up & Log In Buttons */}
            <div className="hidden md:flex space-x-4">
              <a href="/auth">
              <Button className="bg-[#be123c] text-white px-6 py-2 rounded-lg border-2 border-black shadow-lg hover:bg-[#9f0f34] transition">
                  Log In
                </Button>
              </a>
              <a href="/authb">
                <Button className="bg-[#be123c] text-white px-6 py-2 rounded-lg border-2 border-black shadow-lg hover:bg-[#9f0f34] transition">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
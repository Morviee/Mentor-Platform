"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Users,
  MessageSquare,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Sparkles,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/Navbar"

export default function LandingPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8fafc]">
        {/* Header */}
        <Navbar/>
        <header className="relative h-screen md:h-[85vh] bg-gradient-to-r from-[#be123c] to-[#f43f5e] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-[#f8fafc] skew-y-[-1deg] transform origin-bottom-right translate-y-8"></div>

          {/* Navigation */}
            

          {/* Hero Section */}
          <div className="container mx-30 px-4 h-[calc(100%-80px)] flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <Badge className="bg-white text-[#be123c] border-2 border-black mb-4 text-sm px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]">
                  Empowering Women Through Mentorship
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Find Your Mentor, <br />
                  <span className="relative">
                    Build Your Future
                    <svg
                      className="absolute -bottom-3 left-0 w-full"
                      viewBox="0 0 300 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10C50.5 4 148.5 -2.5 298 4.5" stroke="white" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="text-xl text-white mb-8 max-w-lg">
                  Connect with successful women mentors in your field, join supportive communities, and access resources
                  to accelerate your career growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/mentors" passHref>
                  <Button className="bg-white text-[#be123c] font-semibold border-3 border-black rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] transition-all text-lg px-8 py-6">
                    Find a Mentor <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/mentor/mentor-form" passHref>
                  <Button className="bg-transparent text-white font-semibold border-3 border-white rounded-md hover:bg-white/10 transition-all text-lg px-8 py-6">
                    Become a Mentor
                  </Button>
                  </Link>
                </div>

                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden ml-3">
                        <Image
                          src={`/placeholder.svg?height=100&width=100&text=${i}`}
                          alt={`User ${i}`}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="ml-4 text-white">
                    <p className="font-bold">2,500+ women</p>
                    <p className="text-sm">found their mentors this month</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block relative">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#9f1239] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#f43f5e] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                <div className="relative">
                <div className="bg-white mx-2 ml-6 md:ml-12 border-3 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=500&text=Mentorship"
                  alt="Women in mentorship"
                  width={300}
                  height={500}
                  className="object-cover"
                />
              </div>


                  <div className="absolute -bottom-6 -left-6 bg-white border-3 border-black rounded-lg p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-[#f43f5e] fill-[#f43f5e]" />
                      <Star className="h-5 w-5 text-[#f43f5e] fill-[#f43f5e]" />
                      <Star className="h-5 w-5 text-[#f43f5e] fill-[#f43f5e]" />
                      <Star className="h-5 w-5 text-[#f43f5e] fill-[#f43f5e]" />
                      <Star className="h-5 w-5 text-[#f43f5e] fill-[#f43f5e]" />
                    </div>
                    <p className="font-medium mt-1 text-black">"Found my dream mentor in just 3 days!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Stats Section */}
          {/* <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] text-center">
                  <h3 className="text-4xl font-bold text-[#be123c]">10k+</h3>
                  <p className="font-medium mt-2">Active Mentors</p>
                </div>
                <div className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] text-center">
                  <h3 className="text-4xl font-bold text-[#be123c]">25k+</h3>
                  <p className="font-medium mt-2">Mentees</p>
                </div>
                <div className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] text-center">
                  <h3 className="text-4xl font-bold text-[#be123c]">50+</h3>
                  <p className="font-medium mt-2">Industries</p>
                </div>
                <div className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] text-center">
                  <h3 className="text-4xl font-bold text-[#be123c]">95%</h3>
                  <p className="font-medium mt-2">Success Rate</p>
                </div>
              </div>
            </div>
          </section> */}

          {/* How It Works */}
          <section className="py-16 bg-[#f8fafc]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="bg-[#f43f5e] text-white border-2 border-black mb-4 text-sm px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]">
                  Simple Process
                </Badge>
                <h2 className="text-4xl font-bold mb-4 text-black">How MentorHer Works</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Our platform makes it easy to find the perfect mentor and start your journey to success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] relative">
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#be123c] border-3 border-black rounded-full flex items-center justify-center text-white font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                    1
                  </div>
                  <div className="h-40 bg-[#f8fafc] border-2 border-black rounded-lg mb-4 flex items-center justify-center">
                    <Search className="h-16 w-16 text-[#be123c]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">Find Your Mentor</h3>
                  <p className="text-gray-600">
                    Browse our diverse community of experienced mentors and filter by industry, expertise, and
                    availability.
                  </p>
                </div>

                <div className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] relative">
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#f43f5e] border-3 border-black rounded-full flex items-center justify-center text-white font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                    2
                  </div>
                  <div className="h-40 bg-[#f8fafc] border-2 border-black rounded-lg mb-4 flex items-center justify-center">
                    <MessageSquare className="h-16 w-16 text-[#f43f5e]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">Connect & Schedule</h3>
                  <p className="text-gray-600">
                    Reach out to mentors, discuss your goals, and schedule one-on-one sessions that fit your calendar.
                  </p>
                </div>

                <div className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] relative">
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#9f1239] border-3 border-black rounded-full flex items-center justify-center text-white font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                    3
                  </div>
                  <div className="h-40 bg-[#f8fafc] border-2 border-black rounded-lg mb-4 flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-[#9f1239]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">Grow & Succeed</h3>
                  <p className="text-gray-600">
                    Learn from your mentor's experience, implement their advice, and track your progress over time.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
              <Link href="/mentors" passHref>
                <Button className="bg-[#be123c] text-white font-semibold border-3 border-black rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] transition-all text-lg px-8 py-6">
                  Start Your Journey Today
                </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-gradient-to-r from-[#be123c] to-[#f43f5e]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="bg-white text-[#be123c] border-2 border-black mb-4 text-sm px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]">
                  Platform Benefits
                </Badge>
                <h2 className="text-4xl font-bold mb-4 text-white">Why Choose MentorHer</h2>
                <p className="text-xl text-white max-w-2xl mx-auto">
                  Our platform is designed specifically for women, with features that address the unique challenges
                  women face in their careers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] flex">
                  <div className="mr-4 bg-[#f8fafc] border-2 border-black rounded-full p-3 h-fit">
                    <Users className="h-6 w-6 text-[#be123c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Women-Focused Community</h3>
                    <p className="text-gray-600">
                      Connect with a supportive network of women who understand your unique challenges and are committed
                      to helping you succeed.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] flex">
                  <div className="mr-4 bg-[#f8fafc] border-2 border-black rounded-full p-3 h-fit">
                    <CheckCircle2 className="h-6 w-6 text-[#be123c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Verified Mentors</h3>
                    <p className="text-gray-600">
                      All our mentors go through a thorough verification process to ensure you're connecting with
                      qualified professionals.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] flex">
                  <div className="mr-4 bg-[#f8fafc] border-2 border-black rounded-full p-3 h-fit">
                    <Calendar className="h-6 w-6 text-[#be123c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      Book sessions that fit your busy schedule, with options for early morning, evening, and weekend
                      availability.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] flex">
                  <div className="mr-4 bg-[#f8fafc] border-2 border-black rounded-full p-3 h-fit">
                    <MessageSquare className="h-6 w-6 text-[#be123c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Discussion Forums</h3>
                    <p className="text-gray-600">
                      Participate in topic-specific forums to ask questions, share experiences, and learn from the
                      collective wisdom of our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Mentors */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="bg-[#be123c] text-white border-2 border-black mb-4 text-sm px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]">
                  Meet Our Experts
                </Badge>
                <h2 className="text-4xl font-bold mb-4 text-black">Featured Mentors</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Learn from accomplished women who are leaders in their fields and passionate about helping others
                  succeed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-black">
                {[
                  {
                    name: "Sarah Johnson",
                    title: "Tech Executive",
                    company: "Google",
                    expertise: ["Leadership", "Tech Strategy", "Career Growth"],
                    image: "/placeholder.svg?height=400&width=400&text=SJ",
                  },
                  {
                    name: "Maria Rodriguez",
                    title: "Finance Director",
                    company: "JP Morgan",
                    expertise: ["Financial Planning", "Investment", "Negotiation"],
                    image: "/placeholder.svg?height=400&width=400&text=MR",
                  },
                  {
                    name: "Aisha Patel",
                    title: "Marketing VP",
                    company: "Nike",
                    expertise: ["Brand Strategy", "Digital Marketing", "Team Management"],
                    image: "/placeholder.svg?height=400&width=400&text=AP",
                  },
                  {
                    name: "Zoe Chen",
                    title: "Startup Founder",
                    company: "TechNova",
                    expertise: ["Entrepreneurship", "Fundraising", "Product Development"],
                    image: "/placeholder.svg?height=400&width=400&text=ZC",
                  },
                ].map((mentor, index) => (
                  <div
                    key={index}
                    className="bg-white border-3 border-black rounded-lg overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-[-4px] transition-transform duration-300"
                  >
                    <div className="h-48 relative overflow-hidden bg-[#f43f5e]">
                      <Image src={mentor.image || "/placeholder.svg"} alt={mentor.name} fill className="object-cover" />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-[#be123c] text-white border border-black">Top Mentor</Badge>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                      <p className="text-[#be123c] font-medium">{mentor.title}</p>
                      <p className="text-sm text-gray-600 mb-3">{mentor.company}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {mentor.expertise.map((skill, i) => (
                          <Badge key={i} className="bg-[#f8fafc] text-[#9f1239] border border-[#9f1239]">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full bg-[#be123c] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
              <Link href="/mentors" passHref>
                <Button className="bg-white text-[#be123c] font-semibold border-3 border-black rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] transition-all text-lg px-8 py-4">
                  Browse All Mentors <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-[#f8fafc]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="bg-[#f43f5e] text-white border-2 border-black mb-4 text-sm px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]">
                  Success Stories
                </Badge>
                <h2 className="text-4xl font-bold mb-4 text-black">What Our Members Say</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Hear from women who have transformed their careers with the help of MentorHer.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
                {[
                  {
                    quote:
                      "My mentor helped me navigate a challenging career transition and negotiate a 30% salary increase. I couldn't have done it without her guidance.",
                    name: "Jessica T.",
                    role: "Product Manager",
                    image: "/placeholder.svg?height=100&width=100&text=JT",
                  },
                  {
                    quote:
                      "The community forums gave me the confidence to speak up in meetings and advocate for myself. I've since been promoted twice in 18 months!",
                    name: "Michelle K.",
                    role: "Marketing Director",
                    image: "/placeholder.svg?height=100&width=100&text=MK",
                  },
                  {
                    quote:
                      "As a woman in tech, I often felt isolated. MentorHer connected me with other women facing similar challenges and mentors who helped me thrive.",
                    name: "Priya S.",
                    role: "Software Engineer",
                    image: "/placeholder.svg?height=100&width=100&text=PS",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white border-3 border-black rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]"
                  >
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-[#f43f5e] fill-[#f43f5e]" />
                      <Star className="h-5 w-5 text-[#f43f5e] fill-[#f43f5e]" />
                      <Star className="h-5 w-5 text-[#f43f5e] fill-[#f43f5e]" />
                      <Star className="h-5 w-5 text-[#f43f5e] fill-[#f43f5e]" />
                      <Star className="h-5 w-5 text-[#f43f5e] fill-[#f43f5e]" />
                    </div>
                    <p className="italic mb-6 text-gray-700">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#be123c] mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-[#be123c]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
                <p className="text-xl text-white mb-8">
                  Join thousands of women who are advancing their careers with the support of mentors who understand
                  their journey.
                </p>

                <div className="bg-white border-3 border-black rounded-lg p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
                  <h3 className="text-2xl font-bold mb-4 text-black">Sign Up for Early Access</h3>
                  <p className="text-gray-600 mb-6">
                    Be among the first to connect with our exclusive network of mentors.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="border-2 border-black flex-1 py-6 text-lg"
                    />
                    <Button className="bg-[#be123c] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all py-6 px-8 text-lg">
                      Get Started
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 mt-4">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-8">
                  <div className="flex items-center text-white">
                    <CheckCircle2 className="h-6 w-6 mr-2" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle2 className="h-6 w-6 mr-2" />
                    <span>Cancel anytime</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle2 className="h-6 w-6 mr-2" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community Highlights */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="bg-[#be123c] text-white border-2 border-black mb-4 text-sm px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]">
                  Community
                </Badge>
                <h2 className="text-4xl font-bold mb-4 text-black">Join the Conversation</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Participate in discussions, share your experiences, and learn from other women in our vibrant
                  community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
                {[
                  {
                    title: "Leadership Circle",
                    description: "Discussions on leadership styles, managing teams, and advancing to executive roles.",
                    members: 1250,
                    posts: 320,
                    image: "/placeholder.svg?height=200&width=400&text=Leadership",
                  },
                  {
                    title: "Tech Women Unite",
                    description:
                      "Support group for women in technology sharing resources, job opportunities, and technical knowledge.",
                    members: 2840,
                    posts: 560,
                    image: "/placeholder.svg?height=200&width=400&text=Tech",
                  },
                  {
                    title: "Work-Life Balance",
                    description:
                      "Strategies for balancing career ambitions with personal life and family responsibilities.",
                    members: 1780,
                    posts: 420,
                    image: "/placeholder.svg?height=200&width=400&text=Balance",
                  },
                ].map((group, index) => (
                  <div
                    key={index}
                    className="bg-white border-3 border-black rounded-lg overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-[-4px] transition-transform duration-300"
                  >
                    <div className="h-40 relative">
                      <Image src={group.image || "/placeholder.svg"} alt={group.title} fill className="object-cover" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{group.title}</h3>
                      <p className="text-gray-600 mb-4">{group.description}</p>

                      <div className="flex justify-between mb-4">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1 text-gray-600" />
                          <span className="text-sm font-medium">{group.members.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1 text-gray-600" />
                          <span className="text-sm font-medium">{group.posts.toLocaleString()}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-[#be123c] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                        Join Group
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button className="bg-white text-[#be123c] font-semibold border-3 border-black rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] transition-all text-lg px-8 py-4">
                  Explore All Communities <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-white border-2 border-[#be123c] rounded-full h-8 w-8 flex items-center justify-center mr-2">
                    <Sparkles className="h-4 w-4 text-[#be123c]" />
                  </div>
                  <span className="font-bold text-xl">MentorHer</span>
                </div>
                <p className="text-gray-400 mb-4">Empowering women through mentorship, community, and resources.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-[#f43f5e]">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#f43f5e]">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#f43f5e]">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#f43f5e]">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Platform</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Browse Mentors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Resources
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Accessibility
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 mt-8 text-center">
              <p className="text-gray-400">© {new Date().getFullYear()} MentorHer. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}


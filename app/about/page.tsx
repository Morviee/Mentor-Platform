"use client"

import { ThemeProvider } from "../components/theme-provider"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  MessageSquare,
  Calendar,
  Award,
  Heart,
  Lightbulb,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react"
import Navbar from "../components/Navbar"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8fafc]">
        {/* Header */}
        <Navbar/>
        <header className="relative h-80 bg-gradient-to-r from-[#be123c] to-[#f43f5e] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-[#f8fafc] skew-y-[-1deg] transform origin-bottom-right translate-y-8"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black relative z-10 mb-4">About Our Platform</h1>
            <p className="text-lg md:text-xl text-black relative z-10 max-w-2xl">
              Building bridges between tech professionals through vibrant communities and meaningful connections.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {/* Mission & Vision */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 inline-block relative text-black">
                  Our Mission & Vision
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-[#be123c]"></div>
                </h2>
                <p className="text-lg mb-6 text-black">
                  We're on a mission to create the most vibrant, inclusive, and valuable tech communities in the world.
                  We believe that knowledge sharing and collaboration are the foundations of innovation and growth in
                  the tech industry.
                </p>
                <p className="text-lg mb-6 text-black">
                  Our vision is a world where every tech professional has access to supportive communities that
                  accelerate their learning, career growth, and ability to create meaningful impact through technology.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge className="bg-[#f4d7dc] text-black border-2 border-black px-4 py-2 text-base">
                    <Heart className="w-4 h-4 mr-2" /> Inclusive
                  </Badge>
                  <Badge className="bg-[#f4d7dc] text-black border-2 border-black px-4 py-2 text-base">
                    <Lightbulb className="w-4 h-4 mr-2" /> Innovative
                  </Badge>
                  <Badge className="bg-[#f4d7dc] text-black border-2 border-black px-4 py-2 text-base">
                    <Globe className="w-4 h-4 mr-2" /> Global
                  </Badge>
                  <Badge className="bg-[#f4d7dc] text-black border-2 border-black px-4 py-2 text-base">
                    <Shield className="w-4 h-4 mr-2" /> Trusted
                  </Badge>
                </div>
              </div>
              <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border-2 border-black">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Tech community collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Key Statistics */}
          <section className="mb-20">
            <div className="bg-[#9f1239] border-3 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] text-center">
                  <div className="w-16 h-16 bg-[#be123c] border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-black">250K+</h3>
                  <p className="text-lg font-medium">Active Members</p>
                </div>
                <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] text-center">
                  <div className="w-16 h-16 bg-[#f43f5e] border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-black">1.2M+</h3>
                  <p className="text-lg font-medium text-black">Discussions</p>
                </div>
                <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] text-center">
                  <div className="w-16 h-16 bg-[#fbbf24] border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-black">5K+</h3>
                  <p className="text-lg font-medium text-black">Events Hosted</p>
                </div>
                <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] text-center">
                  <div className="w-16 h-16 bg-[#be123c] border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-black">120+</h3>
                  <p className="text-lg font-medium text-black">Tech Communities</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center inline-block relative text-black">
              Our Story
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#f43f5e]"></div>
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black"></div>

              {/* Timeline items */}
              <div className="space-y-24 relative">
                {/* 2018 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] inline-block">
                      <h3 className="text-2xl font-bold mb-2 text-black">2018</h3>
                      <h4 className="text-xl font-semibold mb-3 text-black">The Beginning</h4>
                      <p className="text-base text-black">
                        Started as a small forum for web developers to share knowledge and solve problems together. Our
                        founder, Alex Chen, created the platform after struggling to find supportive communities for
                        developers transitioning into new technologies.
                      </p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-[#be123c] border-3 border-black rounded-full">
                    <span className="font-bold text-white">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* 2020 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-[#f43f5e] border-3 border-black rounded-full">
                    <span className="font-bold text-white">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                    <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] inline-block">
                      <h3 className="text-2xl font-bold mb-2 text-black">2020</h3>
                      <h4 className="text-xl font-semibold mb-3 text-black">Expansion & Growth</h4>
                      <p className="text-base text-black">
                        Expanded to support multiple tech communities beyond web development. Introduced virtual events
                        during the pandemic, connecting tech professionals worldwide when in-person networking wasn't
                        possible.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2022 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] inline-block">
                      <h3 className="text-2xl font-bold mb-2 text-black">2022</h3>
                      <h4 className="text-xl font-semibold mb-3 text-black">Community-Led Evolution</h4>
                      <p className="text-base text-black">
                        Transitioned to a community-led model where experienced members could create and moderate their
                        own specialized communities. Launched our mentorship program connecting industry veterans with
                        newcomers.
                      </p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-[#9f1239] border-3 border-black rounded-full">
                    <span className="font-bold text-white">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* 2024 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-[#fbbf24] border-3 border-black rounded-full">
                    <span className="font-bold text-black">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] inline-block">
                      <h3 className="text-2xl font-bold mb-2 text-black">2024</h3>
                      <h4 className="text-xl font-semibold mb-3 text-black">Today & Beyond</h4>
                      <p className="text-base text-black">
                        Now one of the largest tech community platforms with specialized groups for every technology
                        stack and role. Continuing to innovate with AI-powered matching to connect members with the most
                        relevant communities for their interests and career goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Meet the Team */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center inline-block relative text-black">
              Meet Our Team
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#9f1239]"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Team Member 1 */}
              <div className="bg-white border-3 border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden hover:translate-y-[-4px] transition-transform duration-300">
                <div className="h-64 relative overflow-hidden bg-[#be123c]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Alex Chen - Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1 text-black">Alex Chen</h3>
                  <p className=" mb-3 text-black">Founder & CEO</p>
                  <p className="text-sm mb-4">
                    Former software engineer with a passion for community building. Alex founded the platform to create
                    the supportive environment he wished he had early in his career.
                  </p>
                  <div className="flex gap-2">
                    <Badge className="bg-[#f43f5e] text-white border border-black">Leadership</Badge>
                    <Badge className="bg-[#9f1239] text-white border border-black">Vision</Badge>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white border-3 border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden hover:translate-y-[-4px] transition-transform duration-300">
                <div className="h-64 relative overflow-hidden bg-[#f43f5e]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Maya Rodriguez - CTO"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1 text-black">Maya Rodriguez</h3>
                  <p className="text-gray-700 mb-3">CTO</p>
                  <p className="text-sm mb-4 text-black">
                    Full-stack developer turned technology leader. Maya oversees our platform architecture and ensures
                    we're using the right technologies to support our growing communities.
                  </p>
                  <div className="flex gap-2">
                    <Badge className="bg-[#be123c] text-white border border-black">Engineering</Badge>
                    <Badge className="bg-[#fbbf24] text-black border border-black">Architecture</Badge>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white border-3 border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden hover:translate-y-[-4px] transition-transform duration-300">
                <div className="h-64 relative overflow-hidden bg-[#9f1239]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="David Kim - Head of Community"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1 text-black">David Kim</h3>
                  <p className=" mb-3 text-black">Head of Community</p>
                  <p className="text-sm mb-4 text-black">
                    Community management expert with experience at major tech companies. David ensures our communities
                    remain healthy, engaging, and valuable for all members.
                  </p>
                  <div className="flex gap-2">
                    <Badge className="bg-[#f43f5e] text-white border border-black">Moderation</Badge>
                    <Badge className="bg-[#be123c] text-white border border-black">Engagement</Badge>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white border-3 border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden hover:translate-y-[-4px] transition-transform duration-300">
                <div className="h-64 relative overflow-hidden bg-[#fbbf24]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Sarah Johnson - Head of Product"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-gray-700 mb-3">Head of Product</p>
                  <p className="text-sm mb-4">
                    Product leader with a background in UX design. Sarah works closely with our community to understand
                    their needs and translate them into platform features.
                  </p>
                  <div className="flex gap-2">
                    <Badge className="bg-[#9f1239] text-white border border-black">Product</Badge>
                    <Badge className="bg-[#f43f5e] text-white border border-black">UX</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-white text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                View Full Team
              </Button>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <div className="bg-[#f43f5e] border-3 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
              <h2 className="text-3xl font-bold mb-10 text-center text-white">How It Works</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] relative">
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#be123c] border-2 border-black rounded-full flex items-center justify-center font-bold text-lg text-white">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-4 pt-2">Discover Communities</h3>
                  <p className="mb-4 text-black">
                    Browse our diverse range of tech communities based on your interests, skills, and career goals. Use
                    filters to find the perfect match.
                  </p>
                  <div className="h-40 relative rounded overflow-hidden border-2 border-black mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Discover communities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-[#be123c]" />
                      <span>120+ specialized communities</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-[#be123c]" />
                      <span>Advanced search and filtering</span>
                    </li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] relative">
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#9f1239] border-2 border-black rounded-full flex items-center justify-center font-bold text-lg text-white">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-4 pt-2">Join & Participate</h3>
                  <p className="mb-4">
                    Become a member of communities that interest you. Introduce yourself, join discussions, ask
                    questions, and share your knowledge.
                  </p>
                  <div className="h-40 relative rounded overflow-hidden border-2 border-black mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Join and participate"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-[#be123c]" />
                      <span>Simple one-click joining</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-[#be123c]" />
                      <span>Active discussion threads</span>
                    </li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] relative">
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#fbbf24] border-2 border-black rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-4 pt-2">Grow & Connect</h3>
                  <p className="mb-4">
                    Build your network, attend virtual events, find mentors, and even become a community leader as you
                    grow within the platform.
                  </p>
                  <div className="h-40 relative rounded overflow-hidden border-2 border-black mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Grow and connect"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-[#be123c]" />
                      <span>Regular virtual events</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-[#be123c]" />
                      <span>Leadership opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center inline-block relative">
              What Our Members Say
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#be123c]"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-black mr-3">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Michael Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-gray-600">Frontend Developer</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="italic mb-4">
                  "Joining the React Developers community completely changed my career trajectory. The knowledge sharing
                  and networking opportunities helped me land my dream job at a top tech company."
                </p>
                <Badge className="bg-[#f43f5e] text-white border border-black">React Developers Community</Badge>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-black mr-3">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Priya Patel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Priya Patel</h4>
                    <p className="text-sm text-gray-600">Data Scientist</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="italic mb-4">
                  "The Data Scientists community has been invaluable for my professional growth. I've learned
                  cutting-edge techniques, received feedback on my projects, and even found collaborators."
                </p>
                <Badge className="bg-[#9f1239] text-white border border-black">Data Scientists Community</Badge>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-black mr-3">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="James Wilson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">James Wilson</h4>
                    <p className="text-sm text-gray-600">DevOps Engineer</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="italic mb-4">
                  "The DevOps Professionals community has saved me countless hours of troubleshooting. Having access to
                  experts who've solved similar problems is incredibly valuable in my role."
                </p>
                <Badge className="bg-[#fbbf24] text-black border border-black">DevOps Professionals Community</Badge>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-[#be123c] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                Read More Testimonials
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <div className="bg-white border-3 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-2 border-black mb-4 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-3 bg-[#f43f5e] font-bold text-left hover:no-underline text-white">
                    Is membership free?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 border-t-2 border-black">
                    Yes, basic membership is completely free. We offer premium tiers with additional features like
                    exclusive events, advanced networking tools, and priority support, but most users find the free tier
                    more than sufficient for their needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-2 border-black mb-4 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-3 bg-[#be123c] font-bold text-left hover:no-underline text-white">
                    How do I start my own community?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 border-t-2 border-black">
                    Members with at least 3 months of active participation can apply to start their own community. We
                    review applications to ensure the proposed community fills a need and has a clear focus. Once
                    approved, we provide tools and guidance to help you build and moderate your community.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-2 border-black mb-4 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-3 bg-[#9f1239] font-bold text-left hover:no-underline text-white">
                    How are communities moderated?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 border-t-2 border-black">
                    Each community has dedicated volunteer moderators who enforce community-specific guidelines and our
                    platform-wide code of conduct. Our staff also provides oversight and support to ensure all
                    communities maintain a positive, inclusive, and productive environment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-2 border-black mb-4 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-3 bg-[#fbbf24] font-bold text-left hover:no-underline text-black">
                    Can companies create official communities?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 border-t-2 border-black">
                    Yes, we partner with technology companies to host official communities for their products and
                    services. These verified communities provide direct access to product teams and official support
                    channels. Contact our partnerships team to learn more about establishing an official company
                    community.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-2 border-black rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-3 bg-[#f43f5e] font-bold text-left hover:no-underline text-white">
                    How can I report inappropriate behavior?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 border-t-2 border-black">
                    We take community safety seriously. You can report inappropriate content or behavior directly
                    through the platform using the report button available on all posts and profiles. Reports are
                    reviewed by our trust and safety team, usually within 24 hours.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Partners Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center inline-block relative">
              Our Partners
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#9f1239]"></div>
            </h2>

            <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
              We collaborate with leading tech companies and organizations to bring exclusive resources, events, and
              opportunities to our community members.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
                <div
                  key={partner}
                  className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] flex items-center justify-center"
                >
                  <div className="h-16 w-full relative">
                    <Image
                      src={`/placeholder.svg?height=100&width=200&text=Partner ${partner}`}
                      alt={`Technology Partner ${partner}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button className="bg-[#9f1239] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                Become a Partner
              </Button>
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <div className="bg-gradient-to-r from-[#be123c] to-[#f43f5e] border-3 border-black p-10 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Join Our Community?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-white">
                Connect with like-minded tech professionals, expand your knowledge, and accelerate your career growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/communities">
                  <Button className="bg-black text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] transition-all px-8 py-6 text-lg">
                    Explore Communities <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-white text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all px-8 py-6 text-lg">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-black text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="font-bold">© {new Date().getFullYear()} Tech Community Hub</p>
            <p className="mt-2">Connect, learn, and grow with tech professionals worldwide</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}


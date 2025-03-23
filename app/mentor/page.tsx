"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeProvider } from "../components/theme-provider"
import Navbar from "../components/Navbar"

export default function MentorProfile() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8fafc]">
        {/* Header */}
        <Navbar/>
        <header className="relative h-64 bg-gradient-to-r from-[#be123c] to-[#f43f5e] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-[#f8fafc] skew-y-[-1deg] transform origin-bottom-right translate-y-8"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 mb-4">Sarah Johnson</h1>
            <p className="text-lg md:text-xl text-white relative z-10 max-w-2xl">
              Professional developer and mentor helping others level up their skills and careers
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 -mt-25">
          {/* Profile Card */}
          <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative">
                <div className="w-48 h-40 bg-white] border-3 border-black rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] m-8">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Mentor Profile"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#f4eced] border-2 border-black rounded-full p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]">
                  <Badge className="bg-white text-black font-bold border-2 border-black">PRO MENTOR</Badge>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Sarah Johnson</h1>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                  <Badge className="bg-[#f43f5e] text-white font-semibold border border-black">
                    Full Stack Developer
                  </Badge>
                  <Badge className="bg-[#f43f5e] text-white font-semibold border border-black">UI/UX Designer</Badge>
                  <Badge className="bg-[#f43f5e] text-white font-semibold border border-black">Tech Lead</Badge>
                </div>
                <p className="text-lg mb-4">
                  Passionate about building beautiful, functional web applications and mentoring the next generation of
                  developers.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button className="bg-white text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                    Book a Session
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
                  >
                    View Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#f43f5e] text-white font-semibold px-4 py-2 border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
            >
              <MapPin className="w-5 h-5" />
              <span>San Francisco, CA</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Current Position */}
            <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-bold mb-4 border-b-3 border-black pb-2 text-black">Current Position</h2>
              <div className="mb-4 text-black">
                <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
                <p className="text-lg font-semibold">TechGiant Inc.</p>
                <p className="italic">2020 - Present</p>
                <p className="mt-2">
                  Leading a team of 5 developers to build and maintain the company's flagship product. Responsible for
                  architecture decisions and mentoring junior developers.
                </p>
              </div>
              <div className="text-black">
                <h3 className="text-xl font-bold">Tech Lead</h3>
                <p className="text-lg font-semibold">InnovateCorp</p>
                <p className="italic">2018 - 2020</p>
                <p className="mt-2">
                  Managed the development of a customer-facing application with over 100,000 monthly active users.
                  Implemented CI/CD pipelines and improved performance by 40%.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-bold mb-4 border-b-3 border-black pb-2 text-black">Education</h2>
              <div className="mb-4 text-black">
                <h3 className="text-xl font-bold">Master of Computer Science</h3>
                <p className="text-lg font-semibold">Stanford University</p>
                <p className="italic">2016 - 2018</p>
                <p className="mt-2">
                  Specialized in Human-Computer Interaction and Machine Learning. Thesis: "Improving User Experience
                  Through Predictive Algorithms"
                </p>
              </div>
              <div className="text-black">
                <h3 className="text-xl font-bold">Bachelor of Science in Computer Engineering</h3>
                <p className="text-lg font-semibold">MIT</p>
                <p className="italic">2012 - 2016</p>
                <p className="mt-2">
                  Graduated with honors. Active member of the Web Development Club and AI Research Group.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b-3 border-black pb-2">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] text-center">
                <h3 className="font-bold text-lg text-white">Frontend</h3>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  <Badge className="bg-white text-black border border-black">React</Badge>
                  <Badge className="bg-white text-black border border-black">Next.js</Badge>
                  <Badge className="bg-white text-black border border-black">TypeScript</Badge>
                  <Badge className="bg-white text-black border border-black">Tailwind</Badge>
                </div>
              </div>
              <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] text-center">
                <h3 className="font-bold text-lg text-white">Backend</h3>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  <Badge className="bg-white text-black border border-black">Node.js</Badge>
                  <Badge className="bg-white text-black border border-black">Express</Badge>
                  <Badge className="bg-white text-black border border-black">Python</Badge>
                  <Badge className="bg-white text-black border border-black">Django</Badge>
                </div>
              </div>
              <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] text-center">
                <h3 className="font-bold text-lg text-white">Database</h3>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  <Badge className="bg-white text-black border border-black">MongoDB</Badge>
                  <Badge className="bg-white text-black border border-black">PostgreSQL</Badge>
                  <Badge className="bg-white text-black border border-black">Firebase</Badge>
                  <Badge className="bg-white text-black border border-black">Redis</Badge>
                </div>
              </div>
              <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] text-center">
                <h3 className="font-bold text-lg text-white">DevOps</h3>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  <Badge className="bg-white text-black border border-black">Docker</Badge>
                  <Badge className="bg-white text-black border border-black">AWS</Badge>
                  <Badge className="bg-white text-black border border-black">CI/CD</Badge>
                  <Badge className="bg-white text-black border border-black">Vercel</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Mentorship Areas */}
          <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b-3 border-black pb-2 text-white">Mentorship Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                <h3 className="font-bold text-xl mb-2">Career Development</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Resume & Portfolio Review</li>
                  <li>Interview Preparation</li>
                  <li>Career Transition Strategies</li>
                  <li>Salary Negotiation</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                <h3 className="font-bold text-xl mb-2">Technical Skills</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Frontend Architecture</li>
                  <li>React & Next.js Best Practices</li>
                  <li>Performance Optimization</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                <h3 className="font-bold text-xl mb-2">Project Guidance</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Code Reviews</li>
                  <li>Architecture Planning</li>
                  <li>Technical Decision Making</li>
                  <li>Project Management</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                <h3 className="font-bold text-xl mb-2">Soft Skills</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Communication</li>
                  <li>Team Leadership</li>
                  <li>Time Management</li>
                  <li>Work-Life Balance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-10">
            <h2 className="text-2xl font-bold mb-6 border-b-3 border-black pb-2 text-white">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                <p className="italic mb-4">
                  "Sarah's guidance was instrumental in helping me land my first developer job. Her technical expertise
                  and career advice were exactly what I needed!"
                </p>
                <p className="font-bold">- Alex Chen, Junior Developer</p>
              </div>
              <div className="bg-white border-2 border-black p-4 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
                <p className="italic mb-4">
                  "Working with Sarah helped me understand complex React concepts that I had been struggling with for
                  months. She has a gift for explaining difficult topics in simple terms."
                </p>
                <p className="font-bold">- Jamie Rodriguez, Frontend Developer</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b-3 border-black pb-2">Get in Touch</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-[#be123c]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-[#be123c]"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block font-bold mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full p-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-[#be123c]"
                  placeholder="What do you want to discuss?"
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Message</label>
                <textarea
                  className="w-full p-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-[#be123c] h-32"
                  placeholder="Tell me more about what you need help with..."
                ></textarea>
              </div>
              <Button className="bg-[#be123c] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                Send Message
              </Button>
            </form>
          </div>
        </main>

        <footer className="bg-black text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="font-bold">© {new Date().getFullYear()} Mentor Profile</p>
            <p className="mt-2">Connect, learn, and grow with tech professionals worldwide</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}


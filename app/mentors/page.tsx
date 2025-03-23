"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Star, X, MapPin } from "lucide-react"
import Navbar from "../components/Navbar";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "../components/theme-provider"

// Sample mentor data
const mentors = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Frontend Developer",
    company: "TechGiant Inc.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 42,
    location: "San Francisco, CA",
    expertise: ["React", "Next.js", "UI/UX Design"],
    experience: "8+ years",
    availability: "Evenings & Weekends",
    bio: "Passionate about building beautiful, functional web applications and mentoring the next generation of developers.",
    tags: ["Frontend", "React", "UI/UX", "JavaScript"],
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Backend Engineer",
    company: "DataSystems Co.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviews: 38,
    location: "New York, NY",
    expertise: ["Node.js", "Python", "Database Design"],
    experience: "6+ years",
    availability: "Weekends",
    bio: "Specialized in building scalable backend systems and databases. Love to share knowledge about system architecture.",
    tags: ["Backend", "Node.js", "Python", "Databases"],
  },
  {
    id: 3,
    name: "Priya Patel",
    title: "Full Stack Developer",
    company: "InnovateTech",
    image: "/placeholder.svg?height=400&width=400",
    rating: 5.0,
    reviews: 51,
    location: "Austin, TX",
    expertise: ["MERN Stack", "TypeScript", "AWS"],
    experience: "10+ years",
    availability: "Flexible",
    bio: "Full stack developer with expertise in modern JavaScript frameworks. Passionate about teaching and mentoring.",
    tags: ["Full Stack", "MERN", "TypeScript", "AWS"],
  },
  {
    id: 4,
    name: "James Wilson",
    title: "DevOps Engineer",
    company: "CloudSolutions",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 29,
    location: "Seattle, WA",
    expertise: ["Docker", "Kubernetes", "CI/CD"],
    experience: "7+ years",
    availability: "Weekdays",
    bio: "Helping teams implement DevOps best practices. Specialized in containerization and deployment automation.",
    tags: ["DevOps", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    title: "Mobile App Developer",
    company: "AppWorks",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 45,
    location: "Miami, FL",
    expertise: ["React Native", "iOS", "Android"],
    experience: "5+ years",
    availability: "Evenings",
    bio: "Mobile app developer with a passion for creating intuitive user experiences. Specialized in cross-platform development.",
    tags: ["Mobile", "React Native", "iOS", "Android"],
  },
  {
    id: 6,
    name: "David Kim",
    title: "AI/ML Engineer",
    company: "FutureTech",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 33,
    location: "Boston, MA",
    expertise: ["Machine Learning", "Python", "TensorFlow"],
    experience: "9+ years",
    availability: "Weekends",
    bio: "AI specialist focused on practical applications of machine learning. Enjoy breaking down complex concepts for beginners.",
    tags: ["AI", "Machine Learning", "Python", "TensorFlow"],
  },
  {
    id: 7,
    name: "Olivia Taylor",
    title: "UX/UI Designer",
    company: "DesignHub",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 47,
    location: "Portland, OR",
    expertise: ["UI Design", "User Research", "Figma"],
    experience: "6+ years",
    availability: "Flexible",
    bio: "Designer with a focus on user-centered design processes. Passionate about creating accessible and beautiful interfaces.",
    tags: ["Design", "UI/UX", "Figma", "User Research"],
  },
  {
    id: 8,
    name: "Marcus Johnson",
    title: "Blockchain Developer",
    company: "ChainWorks",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviews: 31,
    location: "Chicago, IL",
    expertise: ["Ethereum", "Smart Contracts", "Web3"],
    experience: "4+ years",
    availability: "Evenings & Weekends",
    bio: "Blockchain enthusiast and developer. Specialized in smart contract development and decentralized applications.",
    tags: ["Blockchain", "Ethereum", "Smart Contracts", "Web3"],
  },
]

// All unique tags from mentors for filtering
const allTags = Array.from(new Set(mentors.flatMap((mentor) => mentor.tags)))
const experienceLevels = ["Any Experience", "1-3 years", "4-6 years", "7+ years"]
const availabilityOptions = ["Any Availability", "Weekdays", "Evenings", "Weekends", "Flexible"]

export default function MentorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [experience, setExperience] = useState("Any Experience")
  const [availability, setAvailability] = useState("Any Availability")
  const [filteredMentors, setFilteredMentors] = useState(mentors)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter mentors based on search and filters
  useEffect(() => {
    let result = mentors

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (mentor) =>
          mentor.name.toLowerCase().includes(term) ||
          mentor.title.toLowerCase().includes(term) ||
          mentor.bio.toLowerCase().includes(term) ||
          mentor.tags.some((tag) => tag.toLowerCase().includes(term)),
      )
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter((mentor) => selectedTags.some((tag) => mentor.tags.includes(tag)))
    }

    // Filter by experience
    if (experience !== "Any Experience") {
      if (experience === "1-3 years") {
        result = result.filter(
          (mentor) => Number.parseInt(mentor.experience) >= 1 && Number.parseInt(mentor.experience) <= 3,
        )
      } else if (experience === "4-6 years") {
        result = result.filter(
          (mentor) => Number.parseInt(mentor.experience) >= 4 && Number.parseInt(mentor.experience) <= 6,
        )
      } else if (experience === "7+ years") {
        result = result.filter((mentor) => Number.parseInt(mentor.experience) >= 7)
      }
    }

    // Filter by availability
    if (availability !== "Any Availability") {
      result = result.filter((mentor) => mentor.availability.includes(availability))
    }

    setFilteredMentors(result)
  }, [searchTerm, selectedTags, experience, availability])

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("")
    setSelectedTags([])
    setExperience("Any Experience")
    setAvailability("Any Availability")
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F9F9F9]">
        {/* Header */}
        <Navbar/>
        <header className="relative h-64 bg-gradient-to-r from-[#be123c] to-[#f43f5e] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-[#F9F9F9] skew-y-[-1deg] transform origin-bottom-right translate-y-8"></div>
          {/* <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black relative z-10 mb-4 justify-center">Find Your Perfect Mentor</h1>
            <p className="text-lg md:text-xl text-black relative z-10 max-w-2xl">
              Connect with experienced professionals who can guide you on your journey to success.
            </p>
          </div> */}
          <div className="flex flex-col items-center justify-center text-center h-[100px] md:h-[400px] pt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-black relative z-10 mb-2 ">
                Find Your Perfect Mentor
            </h1>
            <p className="text-lg md:text-xl relative z-10 max-w-2xl text-black">
                Connect with experienced professionals who can guide you on your journey to success.
            </p>
            </div>

        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Search and Filter Section */}
          <div className="bg-white border-3 border-black p-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search by name, expertise, or keywords..."
                  className="pl-10 border-2 border-black"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button className="bg-[#f43f5e] text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                      <Filter className="w-4 h-4 mr-2" /> Filters{" "}
                      {selectedTags.length > 0 && `(${selectedTags.length})`}
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="border-l-3 border-black text-black">
                    <SheetHeader>
                      <SheetTitle>Filter Mentors</SheetTitle>
                      <SheetDescription>Narrow down mentors based on your preferences</SheetDescription>
                    </SheetHeader>

                    <div className="py-6 space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-black">Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                          {allTags.map((tag) => (
                            <Badge
                              key={tag}
                              className={`cursor-pointer ${
                                selectedTags.includes(tag)
                                  ? "text-black border border-black"
                                  : "bg-gray-100 text-gray-800 border border-gray-300"
                              }`}
                              onClick={() => toggleTag(tag)}
                            >
                              {tag}
                              {selectedTags.includes(tag) && <X className="w-3 h-3" />}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-black">Experience Level</h3>
                        <Select value={experience} onValueChange={setExperience}>
                          <SelectTrigger className="border-2 border-black">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceLevels.map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-black">Availability</h3>
                        <Select value={availability} onValueChange={setAvailability}>
                          <SelectTrigger className="border-2 border-black">
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            {availabilityOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <Button onClick={clearFilters} variant="outline" className="w-full border-2 border-black text-black">
                        Clear All Filters
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>

                <Select defaultValue="newest">
                  <SelectTrigger className="border-2 border-black w-[180px] text-black">
                    <SelectValue placeholder="Sort by text-black" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="experience">Most Experienced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedTags.length > 0 || experience !== "Any Experience" || availability !== "Any Availability") && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-black">Active Filters:</span>

                {selectedTags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-white text-black border border-black flex items-center gap-1"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                    <X className="w-3 h-3 cursor-pointer" />
                  </Badge>
                ))}

                {experience !== "Any Experience" && (
                  <Badge
                    className="bg-white text-black border border-black flex items-center gap-1"
                    onClick={() => setExperience("Any Experience")}
                  >
                    {experience}
                    <X className="w-3 h-3 cursor-pointer" />
                  </Badge>
                )}

                {availability !== "Any Availability" && (
                  <Badge
                    className="bg-white text-black border border-black flex items-center gap-1"
                    onClick={() => setAvailability("Any Availability")}
                  >
                    {availability}
                    <X className="w-3 h-3 cursor-pointer" />
                  </Badge>
                )}

                <Button variant="ghost" className="text-sm h-7 px-2" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
            )}
          </div>

          {/* Featured Mentors */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-black">Featured Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
              {mentors.slice(0, 3).map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-white border-3 border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden hover:translate-y-[-4px] transition-transform duration-300"
                >
                  <div className="h-48 relative overflow-hidden bg-white">
                    <Image src={mentor.image || "/placeholder.svg"} alt={mentor.name} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{mentor.name}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <span className="ml-1 font-semibold">{mentor.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-1">{mentor.title}</p>
                    <p className="text-gray-600 text-sm mb-3 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" /> {mentor.location}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {mentor.expertise.map((skill, index) => (
                        <Badge key={index} className="bg-white text-black border border-black">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm mb-4 line-clamp-2">{mentor.bio}</p>
                    <Link href={`/mentors/${mentor.id}`}>
                      <Button className="w-full bg-[#f43f5e] text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Mentors */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-black">All Mentors</h2>
              <p className="text-gray-600">{filteredMentors.length} mentors found</p>
            </div>

            {filteredMentors.length === 0 ? (
              <div className="bg-white border-3 border-black p-8 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] text-center">
                <h3 className="text-xl font-bold mb-2 text-black">No mentors found</h3>
                <p className="mb-4">Try adjusting your filters or search term</p>
                <Button
                  onClick={clearFilters}
                  className="bg-white text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="bg-white border-3 border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden hover:translate-y-[-4px] transition-transform duration-300"
                  >
                    <div className="flex p-5">
                      <div className="w-20 h-20 relative mr-4 rounded-lg overflow-hidden border-2 border-black">
                        <Image
                          src={mentor.image || "/placeholder.svg"}
                          alt={mentor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-bold">{mentor.name}</h3>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 fill-current text-yellow-500" />
                            <span className="ml-1 font-semibold">{mentor.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm">{mentor.title}</p>
                        <p className="text-gray-600 text-xs flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" /> {mentor.location}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {mentor.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} className="bg-white text-black border border-black text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {mentor.tags.length > 3 && (
                          <Badge className="bg-gray-100 text-gray-800 border border-gray-300 text-xs">
                            +{mentor.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm mb-4 line-clamp-2">{mentor.bio}</p>
                      <div className="flex gap-2">
                        <Link href={`/mentors/${mentor.id}`} className="flex-1">
                          <Button className="w-full bg-[#f43f5e] text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                            View Profile
                          </Button>
                        </Link>
                        <Button className="bg-white text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                          Book
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredMentors.length > 0 && (
              <div className="flex justify-center mt-10">
                <div className="flex border-2 border-black rounded overflow-hidden">
                  <Button variant="ghost" className="border-r-2 border-black rounded-none h-10">
                    Previous
                  </Button>
                  <Button variant="ghost" className="bg-white border-r-2 border-black rounded-none h-10 text-black">
                    1
                  </Button>
                  <Button variant="ghost" className="border-r-2 border-black rounded-none h-10 text-black">
                    2
                  </Button>
                  <Button variant="ghost" className="border-r-2 border-black rounded-none h-10 text-black">
                    3
                  </Button>
                  <Button variant="ghost" className="rounded-none h-10">
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </main>

        <footer className="bg-black text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="font-bold">© {new Date().getFullYear()} Mentor Connect</p>
            <p className="mt-2">Find the perfect mentor to accelerate your career</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}


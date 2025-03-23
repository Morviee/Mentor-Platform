"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Search, Users, MessageSquare, Calendar, X, Filter } from "lucide-react"
import Navbar from "../components/Navbar"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "../components/theme-provider"

// Sample community data
const communities = [
  {
    id: 1,
    name: "React Developers",
    image: "/placeholder.svg?height=400&width=400",
    description: "A community for React developers to share knowledge, ask questions, and collaborate on projects.",
    shortDescription: "Connect with React developers worldwide",
    members: 12580,
    posts: 4325,
    events: 18,
    category: "Frontend",
    tags: ["React", "JavaScript", "Web Development"],
    activity: "Very Active",
    featured: true,
    recentTopics: [
      "React 18 new features discussion",
      "Best practices for React hooks",
      "State management solutions comparison",
    ],
    moderators: [
      { name: "Sarah Johnson", role: "Lead Moderator", image: "/placeholder.svg?height=100&width=100" },
      { name: "Michael Chen", role: "Events Coordinator", image: "/placeholder.svg?height=100&width=100" },
    ],
    rules: [
      "Be respectful and kind to other members",
      "No self-promotion or spam",
      "Keep discussions relevant to React and frontend development",
      "Share code using proper formatting",
    ],
  },
  {
    id: 2,
    name: "Python Enthusiasts",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A community dedicated to Python programming language. Discuss libraries, frameworks, best practices, and more.",
    shortDescription: "Everything Python - from beginners to experts",
    members: 18750,
    posts: 6240,
    events: 24,
    category: "Backend",
    tags: ["Python", "Django", "Flask", "Data Science"],
    activity: "Very Active",
    featured: true,
    recentTopics: [
      "Python 3.11 performance improvements",
      "Django vs Flask for web development",
      "Best libraries for data visualization",
    ],
    moderators: [
      { name: "David Kim", role: "Lead Moderator", image: "/placeholder.svg?height=100&width=100" },
      { name: "Priya Patel", role: "Content Curator", image: "/placeholder.svg?height=100&width=100" },
    ],
    rules: [
      "Be respectful to all members",
      "No spamming or excessive self-promotion",
      "Use code blocks when sharing code",
      "Keep discussions relevant to Python",
    ],
  },
  {
    id: 3,
    name: "DevOps Professionals",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Connect with DevOps engineers and SREs. Discuss CI/CD pipelines, infrastructure as code, containerization, and cloud platforms.",
    shortDescription: "For professionals in DevOps and SRE roles",
    members: 8420,
    posts: 2840,
    events: 12,
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "CI/CD", "AWS", "Azure"],
    activity: "Active",
    featured: true,
    recentTopics: [
      "Kubernetes best practices for production",
      "Terraform vs Pulumi comparison",
      "GitOps workflow implementation strategies",
    ],
    moderators: [
      { name: "James Wilson", role: "Lead Moderator", image: "/placeholder.svg?height=100&width=100" },
      { name: "Elena Rodriguez", role: "Events Coordinator", image: "/placeholder.svg?height=100&width=100" },
    ],
    rules: [
      "Be respectful and professional",
      "No vendor promotion without disclosure",
      "Share knowledge and help others",
      "Use appropriate channels for different topics",
    ],
  },
  {
    id: 4,
    name: "UI/UX Designers",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A community for UI/UX designers to share work, get feedback, discuss design trends, and collaborate on projects.",
    shortDescription: "Connect with fellow designers and improve your craft",
    members: 9650,
    posts: 3120,
    events: 15,
    category: "Design",
    tags: ["UI Design", "UX Design", "Figma", "Design Systems"],
    activity: "Active",
    featured: false,
    recentTopics: [
      "Design systems implementation strategies",
      "Figma vs Adobe XD comparison",
      "Accessibility in modern web design",
    ],
    moderators: [
      { name: "Olivia Taylor", role: "Lead Moderator", image: "/placeholder.svg?height=100&width=100" },
      { name: "Marcus Johnson", role: "Design Critique Lead", image: "/placeholder.svg?height=100&width=100" },
    ],
    rules: [
      "Be constructive in feedback",
      "Respect intellectual property",
      "No self-promotion without contribution",
      "Use appropriate channels for different topics",
    ],
  },
  {
    id: 5,
    name: "Data Scientists",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A community for data scientists, analysts, and ML engineers to discuss techniques, tools, and best practices.",
    shortDescription: "Explore the world of data science and machine learning",
    members: 11240,
    posts: 3850,
    events: 20,
    category: "Data Science",
    tags: ["Machine Learning", "Data Analysis", "Python", "TensorFlow"],
    activity: "Very Active",
    featured: false,
    recentTopics: [
      "Large language models implementation strategies",
      "Feature engineering best practices",
      "Data visualization techniques comparison",
    ],
    moderators: [
      { name: "Alex Chen", role: "Lead Moderator", image: "/placeholder.svg?height=100&width=100" },
      { name: "Sophia Williams", role: "Research Coordinator", image: "/placeholder.svg?height=100&width=100" },
    ],
    rules: [
      "Share knowledge and help others",
      "Respect intellectual property",
      "No promotion of paid services without disclosure",
      "Use appropriate tags for different topics",
    ],
  },
  {
    id: 6,
    name: "Mobile Developers",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A community for iOS, Android, and cross-platform mobile developers to share knowledge and collaborate.",
    shortDescription: "For all things mobile development",
    members: 10320,
    posts: 3540,
    events: 16,
    category: "Mobile",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    activity: "Active",
    featured: false,
    recentTopics: [
      "SwiftUI vs UIKit comparison",
      "React Native performance optimization",
      "App Store submission best practices",
    ],
    moderators: [
      { name: "Ryan Park", role: "Lead Moderator", image: "/placeholder.svg?height=100&width=100" },
      { name: "Jasmine Lee", role: "iOS Specialist", image: "/placeholder.svg?height=100&width=100" },
    ],
    rules: [
      "Be respectful to all members",
      "No excessive self-promotion",
      "Share code with proper formatting",
      "Keep discussions relevant to mobile development",
    ],
  },
  {
    id: 7,
    name: "Blockchain Developers",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A community for blockchain and Web3 developers to discuss technologies, frameworks, and best practices.",
    shortDescription: "Explore blockchain and Web3 development",
    members: 7840,
    posts: 2650,
    events: 14,
    category: "Blockchain",
    tags: ["Ethereum", "Smart Contracts", "Web3", "Solidity"],
    activity: "Moderate",
    featured: false,
    recentTopics: [
      "Smart contract security best practices",
      "Layer 2 solutions comparison",
      "NFT marketplace development",
    ],
    moderators: [
      { name: "Marcus Johnson", role: "Lead Moderator", image: "/placeholder.svg?height=100&width=100" },
      { name: "Aisha Khan", role: "Smart Contract Specialist", image: "/placeholder.svg?height=100&width=100" },
    ],
    rules: [
      "No promotion of specific tokens or NFTs",
      "Be respectful and professional",
      "Share knowledge and help others",
      "Keep discussions technical and educational",
    ],
  },
  {
    id: 8,
    name: "Cloud Architects",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A community for cloud architects and engineers to discuss AWS, Azure, GCP, and multi-cloud strategies.",
    shortDescription: "For professionals working with cloud technologies",
    members: 9120,
    posts: 3240,
    events: 18,
    category: "Cloud",
    tags: ["AWS", "Azure", "GCP", "Serverless"],
    activity: "Active",
    featured: false,
    recentTopics: [
      "Multi-cloud strategy implementation",
      "Serverless architecture patterns",
      "Cost optimization techniques",
    ],
    moderators: [
      { name: "Thomas Wilson", role: "Lead Moderator", image: "/placeholder.svg?height=100&width=100" },
      { name: "Lisa Chen", role: "AWS Specialist", image: "/placeholder.svg?height=100&width=100" },
    ],
    rules: [
      "No vendor promotion without disclosure",
      "Be respectful and professional",
      "Share knowledge and help others",
      "Use appropriate channels for different cloud providers",
    ],
  },
]

// All unique categories from communities for filtering
const allCategories = Array.from(new Set(communities.map((community) => community.category)))
const activityLevels = ["Any Activity", "Very Active", "Active", "Moderate"]

export default function CommunitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [activityLevel, setActivityLevel] = useState("Any Activity")
  const [filteredCommunities, setFilteredCommunities] = useState(communities)
  const [selectedCommunity, setSelectedCommunity] = useState<(typeof communities)[0] | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter communities based on search and filters
  const filterCommunities = () => {
    let result = communities

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (community) =>
          community.name.toLowerCase().includes(term) ||
          community.description.toLowerCase().includes(term) ||
          community.tags.some((tag) => tag.toLowerCase().includes(term)),
      )
    }

    // Filter by category
    if (selectedCategory !== "All Categories") {
      result = result.filter((community) => community.category === selectedCategory)
    }

    // Filter by activity level
    if (activityLevel !== "Any Activity") {
      result = result.filter((community) => community.activity === activityLevel)
    }

    setFilteredCommunities(result)
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    filterCommunities()
  }

  // Handle category selection change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    filterCommunities()
  }

  // Handle activity level selection change
  const handleActivityChange = (value: string) => {
    setActivityLevel(value)
    filterCommunities()
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All Categories")
    setActivityLevel("Any Activity")
    setFilteredCommunities(communities)
  }

  // Open community details
  const openCommunityDetails = (community: (typeof communities)[0]) => {
    setSelectedCommunity(community)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8fafc]">
        {/* Header */}
        <Navbar/>
        <header className="relative h-64 bg-gradient-to-r from-[#be123c] to-[#f43f5e] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-[#f8fafc] skew-y-[-1deg] transform origin-bottom-right translate-y-8"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 mb-4">Tech Communities</h1>
            <p className="text-lg md:text-xl text-white relative z-10 max-w-2xl">
              Join vibrant tech communities, share knowledge, and connect with like-minded professionals.
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
                  placeholder="Search communities by name, description, or tags..."
                  className="pl-10 border-2 border-black"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

              <div className="flex gap-2">
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button className="bg-[#f8a5b6] text-black font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                      <Filter className="w-4 h-4 mr-2" /> Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="border-l-3 border-black">
                    <SheetHeader>
                      <SheetTitle>Filter Communities</SheetTitle>
                      <SheetDescription>Find the perfect community for your interests</SheetDescription>
                    </SheetHeader>

                    <div className="py-6 space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Category</h3>
                        <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                          <SelectTrigger className="border-2 border-black">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="All Categories">All Categories</SelectItem>
                            {allCategories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Activity Level</h3>
                        <Select value={activityLevel} onValueChange={handleActivityChange}>
                          <SelectTrigger className="border-2 border-black">
                            <SelectValue placeholder="Select activity level" />
                          </SelectTrigger>
                          <SelectContent>
                            {activityLevels.map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <Button onClick={clearFilters} variant="outline" className="w-full border-2 border-black">
                        Clear All Filters
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>

                <Select defaultValue="members">
                  <SelectTrigger className="border-2 border-black w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="members">Most Members</SelectItem>
                    <SelectItem value="activity">Most Active</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== "All Categories" || activityLevel !== "Any Activity") && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium">Active Filters:</span>

                {selectedCategory !== "All Categories" && (
                  <Badge
                    className="bg-[#be123c] text-white border border-black flex items-center gap-1"
                    onClick={() => handleCategoryChange("All Categories")}
                  >
                    {selectedCategory}
                    <X className="w-3 h-3 cursor-pointer" />
                  </Badge>
                )}

                {activityLevel !== "Any Activity" && (
                  <Badge
                    className="bg-[#f43f5e] text-white border border-black flex items-center gap-1"
                    onClick={() => handleActivityChange("Any Activity")}
                  >
                    {activityLevel}
                    <X className="w-3 h-3 cursor-pointer" />
                  </Badge>
                )}

                <Button variant="ghost" className="text-sm h-7 px-2" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
            )}
          </div>

          {/* Featured Communities */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {communities
                .filter((c) => c.featured)
                .map((community) => (
                  <div
                    key={community.id}
                    className="bg-white border-3 border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden hover:translate-y-[-4px] transition-transform duration-300"
                  >
                    <div className="h-40 relative overflow-hidden bg-[#f8a5b6]">
                      <Image
                        src={community.image || "/placeholder.svg"}
                        alt={community.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-[#be123c] text-white border border-black">{community.category}</Badge>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{community.name}</h3>
                      <p className="text-sm mb-4 line-clamp-2">{community.shortDescription}</p>

                      <div className="flex justify-between mb-4">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1 text-gray-600" />
                          <span className="text-sm font-medium">{community.members.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1 text-gray-600" />
                          <span className="text-sm font-medium">{community.posts.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-gray-600" />
                          <span className="text-sm font-medium">{community.events}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {community.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} className="bg-[#fecdd3] text-black border border-black">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="w-full bg-[#9f1239] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
                            onClick={() => openCommunityDetails(community)}
                          >
                            Join Community
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">{selectedCommunity?.name}</DialogTitle>
                            <DialogDescription>{selectedCommunity?.description}</DialogDescription>
                          </DialogHeader>

                          <div className="mt-4">
                            <Tabs defaultValue="about">
                              <TabsList className="border-2 border-black">
                                <TabsTrigger value="about">About</TabsTrigger>
                                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                                <TabsTrigger value="rules">Rules</TabsTrigger>
                                <TabsTrigger value="moderators">Moderators</TabsTrigger>
                              </TabsList>

                              <TabsContent value="about" className="mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="text-lg font-semibold mb-2">Community Details</h4>
                                    <div className="bg-[#f8fafc] border-2 border-black p-4 rounded-lg">
                                      <div className="flex justify-between mb-2">
                                        <span className="font-medium">Category:</span>
                                        <Badge className="bg-[#be123c] text-white border border-black">
                                          {selectedCommunity?.category}
                                        </Badge>
                                      </div>
                                      <div className="flex justify-between mb-2">
                                        <span className="font-medium">Members:</span>
                                        <span>{selectedCommunity?.members.toLocaleString()}</span>
                                      </div>
                                      <div className="flex justify-between mb-2">
                                        <span className="font-medium">Activity Level:</span>
                                        <span>{selectedCommunity?.activity}</span>
                                      </div>
                                      <div className="flex justify-between mb-2">
                                        <span className="font-medium">Total Posts:</span>
                                        <span>{selectedCommunity?.posts.toLocaleString()}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="font-medium">Upcoming Events:</span>
                                        <span>{selectedCommunity?.events}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-lg font-semibold mb-2">Topics & Tags</h4>
                                    <div className="bg-[#f8fafc] border-2 border-black p-4 rounded-lg">
                                      <div className="flex flex-wrap gap-2 mb-4">
                                        {selectedCommunity?.tags.map((tag, index) => (
                                          <Badge key={index} className="bg-[#fecdd3] text-black border border-black">
                                            {tag}
                                          </Badge>
                                        ))}
                                      </div>
                                      <p className="text-sm text-gray-600">
                                        These tags represent the main topics discussed in this community.
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-6">
                                  <Button className="w-full bg-[#be123c] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                                    Join This Community
                                  </Button>
                                </div>
                              </TabsContent>

                              <TabsContent value="discussions" className="mt-4">
                                <h4 className="text-lg font-semibold mb-3">Recent Discussions</h4>
                                <div className="space-y-3">
                                  {selectedCommunity?.recentTopics.map((topic, index) => (
                                    <div key={index} className="bg-[#f8fafc] border-2 border-black p-4 rounded-lg">
                                      <div className="flex justify-between">
                                        <h5 className="font-medium">{topic}</h5>
                                        <Badge className="bg-[#f43f5e] text-white border border-black">Active</Badge>
                                      </div>
                                      <div className="flex justify-between mt-2 text-sm text-gray-600">
                                        <span>32 replies</span>
                                        <span>Last post: 2 hours ago</span>
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className="mt-6 flex justify-between">
                                  <Button variant="outline" className="border-2 border-black">
                                    View All Discussions
                                  </Button>
                                  <Button className="bg-[#be123c] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                                    Join to Participate
                                  </Button>
                                </div>
                              </TabsContent>

                              <TabsContent value="rules" className="mt-4">
                                <h4 className="text-lg font-semibold mb-3">Community Guidelines</h4>
                                <div className="bg-[#f8fafc] border-2 border-black p-4 rounded-lg">
                                  <ul className="space-y-3">
                                    {selectedCommunity?.rules.map((rule, index) => (
                                      <li key={index} className="flex items-start">
                                        <span className="bg-[#be123c] text-white font-bold w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                          {index + 1}
                                        </span>
                                        <span>{rule}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  <p className="mt-4 text-sm text-gray-600">
                                    By joining this community, you agree to follow these guidelines. Violations may
                                    result in removal from the community.
                                  </p>
                                </div>

                                <div className="mt-6">
                                  <Button className="w-full bg-[#be123c] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                                    I Understand and Accept the Rules
                                  </Button>
                                </div>
                              </TabsContent>

                              <TabsContent value="moderators" className="mt-4">
                                <h4 className="text-lg font-semibold mb-3">Community Moderators</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {selectedCommunity?.moderators.map((mod, index) => (
                                    <div
                                      key={index}
                                      className="bg-[#f8fafc] border-2 border-black p-4 rounded-lg flex items-center"
                                    >
                                      <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-black mr-3">
                                        <Image
                                          src={mod.image || "/placeholder.svg"}
                                          alt={mod.name}
                                          fill
                                          className="object-cover"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="font-medium">{mod.name}</h5>
                                        <p className="text-sm text-gray-600">{mod.role}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className="mt-6">
                                  <Button className="w-full bg-[#be123c] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all">
                                    Join This Community
                                  </Button>
                                </div>
                              </TabsContent>
                            </Tabs>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* All Communities */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Communities</h2>
              <p className="text-gray-600">{filteredCommunities.length} communities found</p>
            </div>

            {filteredCommunities.length === 0 ? (
              <div className="bg-white border-3 border-black p-8 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] text-center">
                <h3 className="text-xl font-bold mb-2">No communities found</h3>
                <p className="mb-4">Try adjusting your filters or search term</p>
                <Button
                  onClick={clearFilters}
                  className="bg-[#be123c] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCommunities.map((community) => (
                  <div
                    key={community.id}
                    className="bg-white border-3 border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden hover:translate-y-[-4px] transition-transform duration-300"
                  >
                    <div className="p-5">
                      <div className="flex items-start mb-3">
                        <div className="w-12 h-12 relative rounded-lg overflow-hidden border-2 border-black mr-3 bg-[#f8a5b6]">
                          <Image
                            src={community.image || "/placeholder.svg"}
                            alt={community.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-lg font-bold">{community.name}</h3>
                            <Badge className="bg-[#be123c] text-white border border-black">{community.category}</Badge>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-3 h-3 mr-1" />
                            <span>{community.members.toLocaleString()} members</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm mb-3 line-clamp-2">{community.shortDescription}</p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {community.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} className="bg-[#fecdd3] text-black border border-black text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {community.tags.length > 3 && (
                          <Badge className="bg-gray-100 text-gray-800 border border-gray-300 text-xs">
                            +{community.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="flex-1 bg-[#9f1239] text-white font-semibold border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
                              onClick={() => openCommunityDetails(community)}
                            >
                              Join
                            </Button>
                          </DialogTrigger>
                        </Dialog>

                        <Button
                          variant="outline"
                          className="flex-1 border-2 border-black"
                          onClick={() => openCommunityDetails(community)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredCommunities.length > 0 && (
              <div className="flex justify-center mt-10">
                <div className="flex border-2 border-black rounded overflow-hidden">
                  <Button variant="ghost" className="border-r-2 border-black rounded-none h-10">
                    Previous
                  </Button>
                  <Button variant="ghost" className="bg-[#be123c] text-white border-r-2 border-black rounded-none h-10">
                    1
                  </Button>
                  <Button variant="ghost" className="border-r-2 border-black rounded-none h-10">
                    2
                  </Button>
                  <Button variant="ghost" className="border-r-2 border-black rounded-none h-10">
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
            <p className="font-bold">© {new Date().getFullYear()} Tech Community Hub</p>
            <p className="mt-2">Connect, learn, and grow with tech professionals worldwide</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}


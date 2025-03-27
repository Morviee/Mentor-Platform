// "use client"

// import { useState } from "react"
// import { Clock } from "lucide-react"
// import Calendar from "react-calendar"
// import "react-calendar/dist/lendar.css"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import Navbar from "../../components/Navbar"

// export default function BookSession() {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null)
//   const [selectedTime, setSelectedTime] = useState<string>("")
//   const [sessionType, setSessionType] = useState<string>("one-time")

//   // Sample available time slots
//   const availableTimeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

//   return (
//     <div className="min-h-screen bg-white text-black">
//       {/* Navbar */}
//       <div className="sticky top-0 z-50 bg-white shadow-md">
//         <Navbar />
//       </div>

//       <div className="max-w-4xl mx-auto p-4 md:p-8">
//         {/* Page Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold mb-2">Book a Session with Sarah Johnson</h1>
//           <p className="text-gray-700">Tech Leadership Mentor • 15+ years experience • 4.9 ★ (127 reviews)</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {/* Mentor Profile Card */}
//           <Card className="md:col-span-1 bg-gray-100 shadow-lg">
//             <CardContent className="pt-6">
//               <div className="aspect-square rounded-lg overflow-hidden mb-4">
//                 <img
//                   src="/placeholder.svg?height=300&width=300"
//                   alt="Mentor profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3 className="font-bold text-xl mb-1">Sarah Johnson</h3>
//               <p className="text-gray-800 font-medium mb-2">Senior Tech Leader at TechCorp</p>
//               <p className="text-gray-600 text-sm mb-4">
//                 Specialized in helping women navigate leadership roles in tech companies and overcome career obstacles.
//               </p>
//               <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
//                 <span>$120 / hour</span>
//                 <span>Available now</span>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Booking Form */}
//           <Card className="md:col-span-2 bg-gray-100 shadow-lg">
//             <CardHeader>
//               <CardTitle>Select Session Details</CardTitle>
//               <CardDescription>Choose your preferred date, time, and session type</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Tabs defaultValue="date" className="mb-6">
//                 <TabsList className="grid grid-cols-3 mb-4">
//                   <TabsTrigger value="date">Date & Time</TabsTrigger>
//                   <TabsTrigger value="type">Session Type</TabsTrigger>
//                   <TabsTrigger value="details">Details</TabsTrigger>
//                 </TabsList>

//                 {/* Date & Time Tab */}
//                 <TabsContent value="date">
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="text-sm font-medium mb-3">Select a Date</h3>
//                       <Calendar
//                         onChange={(date) => setSelectedDate(date as Date)}
//                         value={selectedDate}
//                         minDate={new Date()} // Prevent selecting past dates
//                         className="border rounded-lg"
//                       />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-medium mb-3 flex items-center">
//                         <Clock className="h-4 w-4 mr-2 text-gray-600" />
//                         Select a Time
//                       </h3>
//                       <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
//                         {availableTimeSlots.map((time) => (
//                           <Button
//                             key={time}
//                             variant="outline"
//                             className={`${
//                               selectedTime === time
//                                 ? "bg-black text-white hover:bg-gray-800"
//                                 : "bg-white text-black border-gray-300 hover:bg-gray-200"
//                             }`}
//                             onClick={() => setSelectedTime(time)}
//                             disabled={!selectedDate}
//                           >
//                             {time}
//                           </Button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </TabsContent>

//                 {/* Session Type Tab */}
//                 <TabsContent value="type">
//                   <div className="space-y-4">
//                     <RadioGroup value={sessionType} onValueChange={setSessionType} className="space-y-3">
//                       <div className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
//                         <RadioGroupItem value="one-time" id="one-time" className="mt-1" />
//                         <div className="grid gap-1.5">
//                           <Label htmlFor="one-time" className="font-medium">
//                             One-time Session
//                           </Label>
//                           <p className="text-sm text-gray-500">
//                             A single 60-minute session to discuss specific challenges or questions
//                           </p>
//                           <p className="text-gray-800 font-medium">$120</p>
//                         </div>
//                       </div>

//                       <div className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
//                         <RadioGroupItem value="package" id="package" className="mt-1" />
//                         <div className="grid gap-1.5">
//                           <Label htmlFor="package" className="font-medium">
//                             4-Session Package
//                           </Label>
//                           <p className="text-sm text-gray-500">
//                             Four 60-minute sessions over 2 months for ongoing mentorship and support
//                           </p>
//                           <p className="text-gray-800 font-medium">
//                             $400 <span className="text-green-600 text-sm">(Save 17%)</span>
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
//                         <RadioGroupItem value="intensive" id="intensive" className="mt-1" />
//                         <div className="grid gap-1.5">
//                           <Label htmlFor="intensive" className="font-medium">
//                             Career Intensive
//                           </Label>
//                           <p className="text-sm text-gray-500">
//                             A 90-minute deep dive session with pre-work and follow-up resources
//                           </p>
//                           <p className="text-gray-800 font-medium">$180</p>
//                         </div>
//                       </div>
//                     </RadioGroup>
//                   </div>
//                 </TabsContent>

//                 {/* Details Tab */}
//                 <TabsContent value="details">
//                   <div className="space-y-4">
//                     <div className="grid gap-2">
//                       <Label htmlFor="topics" className="text-sm font-medium">
//                         What topics would you like to discuss?
//                       </Label>
//                       <Textarea
//                         id="topics"
//                         placeholder="Share what you'd like to focus on during your session..."
//                         className="min-h-[100px]"
//                       />
//                     </div>

//                     <div className="grid gap-2">
//                       <Label htmlFor="goals" className="text-sm font-medium">
//                         What are your goals for this mentorship session?
//                       </Label>
//                       <Textarea
//                         id="goals"
//                         placeholder="What specific outcomes are you hoping to achieve?"
//                         className="min-h-[100px]"
//                       />
//                     </div>
//                   </div>
//                 </TabsContent>
//               </Tabs>
//             </CardContent>
//             <CardFooter className="flex flex-col sm:flex-row gap-3 border-t pt-6">
//               <Button variant="outline" className="w-full sm:w-auto bg-white text-black hover:bg-gray-200">
//                 Cancel
//               </Button>
//               <Button
//                 className="w-full sm:w-auto bg-black text-white hover:bg-gray-800"
//                 disabled={!selectedDate || !selectedTime}
//               >
//                 Confirm Booking
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// // }
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BookSessionPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const mentorId = searchParams.get("mentorId");

  const handleBooking = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/sessions/book-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentEmail: "student@example.com", // Replace with actual email
          mentorId,
          date,
          time,
          sessionType: "video",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("Session booked successfully!");
        setTimeout(() => router.push(`/mentors/session/${data.session._id}`), 2000);
      } else {
        const error = await response.json();
        setMessage(error.message);
      }
    } catch (error) {
      console.error("Error booking session:", error);
      setMessage("An error occurred while booking the session.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Book a Session</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <button onClick={handleBooking} className="bg-blue-500 text-white px-4 py-2 rounded">
        Book Session
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
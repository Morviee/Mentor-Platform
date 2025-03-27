

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Navbar from "../components/Navbar";

// export default function AuthPage() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const router = useRouter(); // Initialize useRouter

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const endpoint = isSignUp
//       ? "http://localhost:5000/api/auth/signup"
//       : "http://localhost:5000/api/auth/login";

//     const payload = isSignUp
//       ? { fullName: formData.fullName, email: formData.email, password: formData.password }
//       : { email: formData.email, password: formData.password };

//     try {
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(isSignUp ? "Sign-up successful!" : "Login successful!");
//         console.log("Response Data:", data);

//         // Save token to localStorage (for login)
//         if (!isSignUp) {
//           localStorage.setItem("token", data.token);
//           router.push("/"); // Redirect to home page after login
//         }
//       } else {
//         alert(data.message || "Something went wrong!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex min-h-screen items-center justify-center bg-white px-4">
//         <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border-2 border-black text-center">
//           <h2 className="text-3xl font-extrabold text-[#be123c]">
//             {isSignUp ? "Create an Account" : "Welcome Back"}
//           </h2>
//           <p className="text-gray-600 mt-2">
//             {isSignUp ? "Join us by filling the details below." : "Sign in to continue."}
//           </p>

//           <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//             {isSignUp && (
//               <Input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]"
//               />
//             )}
//             <Input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]"
//             />
//             <Input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:ring-[#be123c] focus:border-[#be123c]"
//             />

//             <Button
//               type="submit"
//               className="w-full bg-[#be123c] text-white py-3 rounded-lg border-2 border-black shadow-lg hover:bg-[#9f0f34] transition"
//             >
//               {isSignUp ? "Sign Up" : "Sign In"}
//             </Button>
//           </form>

//           <p className="mt-6 text-sm text-gray-600">
//             {isSignUp ? "Already have an account?" : "Don't have an account?"}
//             <button
//               onClick={() => setIsSignUp(!isSignUp)}
//               className="text-[#be123c] font-semibold hover:underline ml-1"
//             >
//               {isSignUp ? "Sign In" : "Sign Up"}
//             </button>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Plus } from "lucide-react"
import Navbar from "../components/Navbar"

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })
  const [rememberMe, setRememberMe] = useState(false)

  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const endpoint = isSignUp ? "http://localhost:5000/api/auth/signup" : "http://localhost:5000/api/auth/login"

    const payload = isSignUp
      ? { fullName: formData.fullName, email: formData.email, password: formData.password }
      : { email: formData.email, password: formData.password }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (response.ok) {
        alert(isSignUp ? "Sign-up successful!" : "Login successful!")
        console.log("Response Data:", data)

        // Save token to localStorage (for login)
        if (!isSignUp) {
          localStorage.setItem("token", data.token)
          router.push("/") // Redirect to home page after login
        }
      } else {
        alert(data.message || "Something went wrong!")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="flex flex-col md:flex-row">
            {/* Left side with illustration */}
            <div className="relative flex items-center justify-center bg-gray-100 p-8 md:w-1/2">
              <div className="relative h-64 w-64">
                {/* Abstract shapes illustration */}
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-orange-400">
                  <div className="absolute left-1/4 top-1/4 h-1 w-1 rounded-full bg-black"></div>
                  <div className="absolute left-1/3 top-1/4 h-1 w-1 rounded-full bg-black"></div>
                  <div className="absolute bottom-1/4 left-1/4 h-2 w-4 rounded-full bg-black"></div>
                </div>
                <div className="absolute left-1/4 top-0 h-48 w-24 bg-purple-600">
                  <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-white"></div>
                  <div className="absolute left-2/3 top-1/4 h-2 w-2 rounded-full bg-white"></div>
                  <div className="absolute bottom-1/4 left-1/3 h-1 w-8 rounded-full bg-black"></div>
                </div>
                <div className="absolute right-1/4 top-1/4 h-36 w-20 bg-black">
                  <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-white"></div>
                  <div className="absolute left-2/3 top-1/4 h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="absolute right-0 top-1/3 h-32 w-32 rounded-r-full bg-yellow-400">
                  <div className="absolute left-1/4 top-1/2 h-2 w-2 rounded-full bg-black"></div>
                  <div className="absolute left-0 top-1/2 h-1 w-16 bg-black"></div>
                </div>
              </div>
            </div>

            {/* Right side with form */}
            <div className="flex flex-col justify-center p-8 md:w-1/2">
              <div className="mx-auto mb-6 flex h-8 w-8 items-center justify-center">
                <Plus className="h-6 w-6 text-black" />
              </div>

              <h2 className="mb-1 text-center text-2xl font-bold text-gray-900">
                {isSignUp ? "Create an Account" : "Welcome back!"}
              </h2>
              <p className="mb-6 text-center text-sm text-gray-500">
                {isSignUp ? "Join us by filling the details below." : "Please enter your details"}
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {isSignUp && (
                  <div>
                    <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input
                      id="fullName"
                      type="text"
                      name="fullName"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full border-gray-300 focus:border-black focus:ring-black"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <label htmlFor="remember" className="ml-2 text-xs text-gray-600">
                      Remember for 30 days
                    </label>
                  </div>
                  <button type="button" className="text-xs text-gray-500 hover:text-gray-700">
                    Forgot password?
                  </button>
                </div>

                <Button type="submit" className="w-full rounded-md bg-black py-2 text-white hover:bg-gray-800">
                  {isSignUp ? "Sign Up" : "Log in"}
                </Button>
              </form>

              <p className="mt-6 text-center text-xs text-gray-600">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button onClick={() => setIsSignUp(!isSignUp)} className="font-medium text-black hover:underline">
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use `useParams` to access params
import { io } from "socket.io-client";
import { useRouter } from "next/navigation";

const socket = io("http://localhost:5000"); // Replace with your backend URL

const DiscussionPage = () => {
  const params = useParams(); // Use `useParams` to get the params object
  const communityId = params.communityId; // Access `communityId` from params
  const [posts, setPosts] = useState<{ content: string; createdAt: string }[]>([]);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/communities/${communityId}/posts`);
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();

    socket.emit("joinRoom", communityId);

    socket.on("newPost", (post) => {
      setPosts((prev) => [...prev, post]);
    });

    return () => {
      socket.emit("leaveRoom", communityId);
      socket.off();
    };
  }, [communityId]);

  const handlePost = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/communities/${communityId}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: "64f9c0f5e4b0f5a1b2c3d4e5", content: message }), // Replace with actual user ID
      });

      if (response.ok) {
        const data = await response.json();
        socket.emit("newPost", data.post); // Emit the new post to other users
        setPosts((prev) => [...prev, data.post]); // Update the posts state immediately
        setMessage(""); // Clear the input field
      } else {
        const error = await response.json();
        console.error("Failed to add post:", error.message);
      }
    } catch (error) {
      console.error("Failed to post message:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Discussion</h1>
        <div className="h-64 overflow-y-auto border rounded p-2 mb-4">
          {posts.map((post, index) => (
            <p key={index} className="text-gray-800">
              {post.content} <span className="text-gray-500 text-sm">({new Date(post.createdAt).toLocaleString()})</span>
            </p>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded p-2"
          />
          <button onClick={handlePost} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
            Post
          </button>
        </div>
        <button
          onClick={() => router.push("/communities")}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back to Communities
        </button>
      </div>
    </div>
  );
};

export default DiscussionPage;
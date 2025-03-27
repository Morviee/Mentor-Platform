"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Community {
  _id: string;
  name: string;
  description: string;
}

const CommunityListPage = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/communities");
        const data = await response.json();
        setCommunities(data.data);
      } catch (error) {
        console.error("Failed to fetch communities:", error);
      }
    };

    fetchCommunities();
  }, []);

  const handleJoinCommunity = async (communityId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/communities/${communityId}/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: "64f9c0f5e4b0f5a1b2c3d4e5" }), // Replace with actual user ID
      });

      if (response.ok) {
        alert("Successfully joined the community!");
        router.push(`/communities/${communityId}/discussions`);
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (error) {
      console.error("Failed to join community:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Communities</h1>
      <div className="w-full max-w-3xl">
        {communities.map((community) => (
          <div key={community._id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-bold">{community.name}</h2>
            <p className="text-gray-600">{community.description}</p>
            <button
              onClick={() => handleJoinCommunity(community._id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Join Community
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityListPage;
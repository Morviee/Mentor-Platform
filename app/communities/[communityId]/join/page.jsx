"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CommunityJoinPage = ({ params }) => {
  const [community, setCommunity] = useState(null);
  const [joined, setJoined] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/communities/${params.communityId}`);
        const data = await response.json();
        setCommunity(data.data);
      } catch (error) {
        console.error("Failed to fetch community:", error);
      }
    };

    fetchCommunity();
  }, [params.communityId]);

  const handleJoinCommunity = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/communities/${params.communityId}/join`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: "currentUserId" }), // Replace with actual user ID
      });

      if (!response.ok) {
        throw new Error("Failed to join community");
      }

      setJoined(true);
    } catch (error) {
      console.error("Failed to join community:", error);
    }
  };

  if (!community) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">{community.name}</h1>
      <p className="text-gray-600 mb-4">{community.description}</p>
      <button
        onClick={joined ? () => router.push(`/communities/${params.communityId}/discussions`) : handleJoinCommunity}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {joined ? "Join Discussion" : "Join Community"}
      </button>
    </div>
  );
};

export default CommunityJoinPage;
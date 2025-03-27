"use client";

import React, { useState } from "react";

const ChatbotPage = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    setLoading(true);
    setAnswer(""); // Clear previous answer

    try {
      const response = await fetch("http://localhost:5000/api/chatbot/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (response.ok) {
        const data = await response.json();
        setAnswer(data.answer);
      } else {
        const error = await response.json();
        console.error("Error:", error.message);
        setAnswer("Sorry, I couldn't process your question.");
      }
    } catch (error) {
      console.error("Error:", error);
      setAnswer("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">MentorHer Chatbot</h1>
      <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-md">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything about MentorHer..."
          className="w-full border rounded p-2 mb-4"
          rows={4}
        />
        <button
          onClick={handleAsk}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask"}
        </button>
        {answer && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <p className="text-gray-800">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotPage;
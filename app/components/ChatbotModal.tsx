"use client";

import React, { useState } from "react";

const ChatbotModal = ({ onClose }: { onClose: () => void }) => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    // Add the user's question to the chat
    setMessages((prev) => [...prev, { sender: "user", text: question }]);
    setLoading(true);
    setQuestion(""); // Clear the input field

    try {
      const response = await fetch("http://localhost:5000/api/chatbot/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, { sender: "bot", text: data.answer }]);
      } else {
        const error = await response.json();
        console.error("Error:", error.message);
        setMessages((prev) => [...prev, { sender: "bot", text: "Sorry, I couldn't process your question." }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: "An error occurred. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg w-80">
      <div className="flex flex-col h-96">
        {/* Header */}
        <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-lg font-bold">MentorHer Chatbot</h2>
          <button onClick={onClose} className="text-white font-bold">✖</button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                message.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
              }`}
            >
              {message.text}
            </div>
          ))}
          {loading && <div className="text-gray-500">Thinking...</div>}
        </div>

        {/* Input Field */}
        <div className="p-4 border-t flex items-center space-x-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded p-2"
          />
          <button
            onClick={handleAsk}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
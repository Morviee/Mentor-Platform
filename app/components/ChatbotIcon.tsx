"use client";

import React, { useState } from "react";
import ChatbotModal from "./ChatbotModal";

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        💬
      </div>
      {isOpen && <ChatbotModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatbotIcon;
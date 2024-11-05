'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';


export default function DashboardPage({ agentConfig }: { agentConfig: any }) {
  const searchParams = useSearchParams();
  const agentName = searchParams.get('agent') || 'AI Agent';
  const [message, setMessage] = useState('');

  const suggestedQuestions = [
    "How much revenue did Apple make last year?",
    "Is McDonald's profitable?",
    "What's the current stock price of Tesla?"
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Agent Icon */}
      <div className="mt-32 mb-4 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex flex-col items-center justify-center">
          <span className="text-xl text-gray-600">{agentConfig.name[0]?.toUpperCase()}</span>
        
        </div>
        <span className="text-sm text-gray-600">{agentConfig.name}</span>
      </div>

      {/* Welcome Message */}
      <div className="mb-20 text-2xl text-gray-700">
        How can I help you today?
      </div>

      {/* Suggested Questions */}
      <div className="flex flex-wrap gap-4 justify-center max-w-2xl px-4">
        {suggestedQuestions.map((question, index) => (
          <button
            key={index}
            className="bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 border border-gray-100"
          >
            {question}
          </button>
        ))}
      </div>

      {/* Message Input */}
      <div className="fixed bottom-8 w-full max-w-2xl px-4">
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message..."
            className="w-full p-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 shadow-sm"
          />
          <button 
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-md hover:bg-gray-600"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 
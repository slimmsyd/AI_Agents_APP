'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatContainerProps {
  isOpen: boolean;
  onClose: () => void;
  agentId: string;
}

export default function ChatContainer({ isOpen, onClose, agentId }: ChatContainerProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: newMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.post(
        'https://www.huemanapi.com/chat',
        {
          agent_id: agentId,
          message: newMessage,
        },
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response.data.response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Chat History</h2>
          <Link href="/" className="text-sm font-semibold">Home</Link>
          <button
            onClick={onClose}
            className= " !bg-transparent text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* AI Agents Section */}
        <div className="border-b p-4">
          <h3 className="text-md  mb-3">AI Agents</h3>
          <div className="space-y-2">
            {/* AI agents will be dynamically rendered here */}
          </div>
        </div>

        {/* Recent Conversations Section */}
        <div className="border-b p-4">
          <h3 className="text-md  mb-3">Recent Conversations</h3>
          <div className="space-y-2">
            {/* Recent conversations will be dynamically rendered here */}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.role === 'user' ? 'ml-auto bg-blue-500 text-white' : 'mr-auto bg-gray-200'
              } rounded-lg p-3 max-w-[80%]`}
            >
              {message.content}
            </div>
          ))}
          {isLoading && (
            <div className="mr-auto bg-gray-200 rounded-lg p-3">
              Thinking...
            </div>
          )}
        </div>

        {/* Input */}
      
      </div>
    </div>
  );
}
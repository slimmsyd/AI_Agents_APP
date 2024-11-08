'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useChatContext } from '@/app/contexts/ChatContext';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatContainerProps {
  isOpen: boolean;
  onClose: () => void;
  agentId?: string;
  agentIDs: {
    my_agents: Array<{
      instruction: string;
      name: string;
      uid: string;
    }>;
  };
  selectingNewAgent: (agentId: string) => void;
}

export default function ChatContainer({ isOpen, onClose, agentId, agentIDs, selectingNewAgent }: ChatContainerProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [userID, setUserID] = useState<string | null>(null);
  const { responses, setResponses, conversation, setConversation } = useChatContext();

  const settingUserID = () => {
    const userID = localStorage.getItem('user_id');
    if(userID) {
      setUserID(userID);
    }
  }
useEffect(() => {
  // console.log("Logging the agent IDs", agentIDs);
  console.log("Logging the conversation object:", conversation);
  settingUserID();

}, [agentIDs, conversation]);





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
          <Link href="/ai/agent" className="text-lg font-semibold">Chat Dashboard</Link>
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
        <div className="border-b p-4 max-h-[200px] overflow-y-auto">
          <h3 className="text-md mb-3">AI Agents</h3>
          <div className="space-y-2">
            {agentIDs?.my_agents ? agentIDs.my_agents.map((agent) => (
              <button
                key={agent.uid}
                onClick={() => {
                  setResponses([]);
                  selectingNewAgent(agent.uid);
                  router.push(`/ai/agent/${userID}/${agent.uid}`);
                }}
                className={`bg-transparent w-full text-left p-1 rounded hover:bg-gray-100 ${
                  agent.uid === agentId ? 'bg-gray-100' : ''
                }`}
              >
                {agent.name || 'Unnamed Agent'}
              </button>
            )) : <p>No agents available</p>}
          </div>
        </div>

        {/* Recent Conversations Section */}
        <div className="border-b p-4 overflow-y-auto">
          <h3 className="text-md mb-3">Recent Conversations</h3>
          <div className="space-y-2">
            {conversation ? (
              <button
                key={conversation.id}
                className={`bg-transparent w-full text-left p-1 rounded hover:bg-gray-100 ${
                  conversation.id === agentId ? 'bg-gray-100' : ''
                }`}
              >
                {conversation.messages[0].agent_id || 'Unnamed Agent'}
              </button>
            ) : (
              <p>No conversations available</p>
            )}
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
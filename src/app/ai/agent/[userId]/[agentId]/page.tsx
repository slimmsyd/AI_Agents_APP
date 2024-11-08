'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingComponent from '@/app/components/loadingComponent';
import ChatContainer from '../../../components/ChatContainer';
import DashboardPage from '../../../dashboard/page';
import axios from 'axios';

import { use } from 'react';

export default function Page({
  params,
}: {
  params: { userId: string; agentId: string };
}) {
  // Unwrap params with React.use()
  const { userId, agentId } = use(params);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true); // Set to true by default for conversation view
  const [conversation, setConversation] = useState(null);
  const [agentIDs, setAgentIDs] = useState<{instruction: string; name: string; uid: string;}[]>([]);
  const [selectedAgent, setSelectedAgent] = useState(null);





  const selectingNewAgent = (agentId: string) => {
    setSelectedAgent(agentId);
    localStorage.setItem("currentAgent", agentId);
  }


  // Fetch conversation history
  useEffect(() => {
    const fetchConversation = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) return;

      try {
        const response = await axios.get(
          `https://www.huemanapi.com/agents/${userId}/${agentId}/chat/${conversation}`,
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          }
        );

        console.log("Logging the response", response.data)

        if (response.data) {
          setConversation(response.data);
        }
      } catch (error) {
        console.error("Error fetching conversation:", error);
      }
    };

    if (userId && agentId) {
      fetchConversation();
    }
  }, [userId, agentId, conversation]);



  useEffect(() => {
    const currentAgent = localStorage.getItem("currentAgent");
    if(currentAgent) {
      setSelectedAgent(currentAgent);
    }
  }, []);




  // Fetch agents list (similar to original file)
  useEffect(() => {
    const fetchAgents = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) return;

      try {
        const response = await axios.get('https://www.huemanapi.com/my_agents', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        
        if(response.data) {
          setAgentIDs(response.data);
        }
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="relative">
      <DashboardPage />
      <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-[50px] left-4 bg-gray-700 text-white p-4 rounded-full shadow-lg hover:bg-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      <ChatContainer 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        // agentId={params.id}
        agentIDs={agentIDs}
        selectingNewAgent={selectingNewAgent}
        // conversationId={params.id}
      />
    </div>
  );
}
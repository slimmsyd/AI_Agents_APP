'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingComponent from '@/app/components/loadingComponent';
import ChatContainer from '../components/ChatContainer';

import DashboardPage from '../dashboard/page';
import axios from 'axios';
import { resolve } from 'path';


export default function AgentPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [agentConfig, setAgentConfig] = useState({
    name: '',
    description: '',
    instructions: '',
    temperature: 0.7,
  });
  const [isChatOpen, setIsChatOpen] = useState(false);

  const[response, setResponse] = useState(null);
  const [agentID, setAgentID] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [agentIDs, setAgentIDs] = useState<{ my_agents: {instruction: string; name: string; uid: string;}[]}>({my_agents: []});

  const [userId, setUserId] = useState<string | null>(null);

  const [isPublicAccess, setIsPublicAccess] = useState(false);
  const [publicAgentData, setPublicAgentData] = useState(null);

  const settingUserID = () => {
    const userID = localStorage.getItem("user_id");
    if (userID) {
      setUserId(userID);
    }
  };
  const selectingNewAgent = (agentId: string) => {
    setSelectedAgent(agentId);
    localStorage.setItem("currentAgent", agentId);
  }

  useEffect(() => {
    settingUserID();
    setResponse([]);
  }, []);


  useEffect(() => {
 
    const agentResponse = localStorage.getItem("agentReponse");
    if(agentResponse) {
      setResponse(JSON.parse(agentResponse));
      setAgentID(JSON.parse(agentResponse).agent_id);
    }


  }, [])

  // Fetch all conversations for the user
  useEffect(() => {
    const fetchConversations = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) return;

      try {
        const response = await axios.get('https://www.huemanapi.com/agent_conversations', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        

        console.log("Logging the the all conversations", response.data)
        if (response.data) {
          console.log("Conversations:", response.data);
          // Handle the conversations data as needed
        }
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };

    fetchConversations();
  }, []);

  //Gather hte list of agents 
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
          // setShowDashboard(true);
          setAgentIDs(response.data);
        }
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    fetchAgents();
  }, []);

  useEffect(() => {
    const checkAccess = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const pathParts = window.location.pathname.split('/');
      const sharedAgentId = pathParts[pathParts.length - 1];
      
      if (!accessToken && sharedAgentId) {
        setIsPublicAccess(true);
        try {
          const response = await axios.get(`https://www.huemanapi.com/public_agent/${sharedAgentId}`);
          setPublicAgentData(response.data);
        } catch (error) {
          console.error("Error fetching public agent:", error);
          router.push('/login'); // Redirect to login if fetch fails
        }
      }
    };

    checkAccess();
  }, []);

  if (isPublicAccess && publicAgentData) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-sm mb-8">
          <h1 className="text-2xl font-bold mb-4">{publicAgentData.name}</h1>
          <p className="text-gray-600 mb-4">{publicAgentData.description}</p>
          <div className="border-t pt-4">
            <p className="text-sm text-gray-500">
              To interact with this agent, please 
              <button 
                onClick={() => router.push('/login')}
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                log in
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const accessToken = localStorage.getItem('accessToken');


    setIsLoading(true);

    const endpoint = "https://www.huemanapi.com/create_agent"



    try {
      const response = await axios.post(endpoint, {
        agent_name: agentConfig.name,
        instructions: agentConfig.instructions
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      const data = response.data;
      const newAgentId = data.AGENT_ID;

      const updatedAgentIDs = { ...agentIDs, my_agents: [...agentIDs.my_agents, {instruction: agentConfig.instructions, name: agentConfig.name, uid: newAgentId}] };
      setAgentIDs(updatedAgentIDs)

      setIsLoading(false);
      setShowDashboard(false); // Always keep dashboard false on /ai/agent route
      setResponse(data);
      setAgentID(data.AGENT_ID);
      localStorage.setItem("agentID", data.AGENT_ID);
      localStorage.setItem("agentReponse", JSON.stringify(data));
      console.log("Logging the data", data)

      router.push(`/ai/agent/${userId}/${data.AGENT_ID}`);

    } catch (error) {
      console.error("Error creating agent", error)
      setIsLoading(false);
    }

  }



  
 
  useEffect(() => {

        
  }, [isLoading]);





  return (

    showDashboard ? (   
      <div className="relative">
        <DashboardPage 
        />
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-[50px] left-4 bg-gray-700 text-white p-4 rounded-full z-20 shadow-lg hover:bg-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
        <ChatContainer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} agentId={agentID} agentIDs={agentIDs}
        selectingNewAgent={selectingNewAgent}
        />
      </div>
    ) : (
      <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">

<button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-[50px] left-4 bg-gray-700 text-white p-4 rounded-full z-20 shadow-lg hover:bg-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
        <ChatContainer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} agentId={agentID} agentIDs={agentIDs}
        selectingNewAgent={selectingNewAgent}
        />
        <div className="w-full max-w-4xl flex flex-col items-center flex-grow">
        <div className="mt-32 mb-12 text-2xl text-gray-700 font-medium">
          Create Your Custom AI Agent
        </div>

        {/* Agent Configuration Form */}

        {isLoading ? (
          <div className="w-full max-w-2xl flex items-center justify-center  p-6 rounded-lg shadow-sm mb-8">
            <LoadingComponent />
          </div>
        ) : (
          <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-sm mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Agent Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Agent Name
                </label>
                <input
                  type="text"
                  value={agentConfig.name}
                  onChange={(e) => setAgentConfig({...agentConfig, name: e.target.value})}
                  placeholder="e.g., Research Assistant"
                  className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* Agent Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={agentConfig.description}
                  onChange={(e) => setAgentConfig({...agentConfig, description: e.target.value})}
                  placeholder="Brief description of what your agent does"
                  className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* Agent Instructions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instructions
                </label>
                <textarea
                  value={agentConfig.instructions}
                  onChange={(e) => setAgentConfig({...agentConfig, instructions: e.target.value})}
                  placeholder="Detailed instructions for your agent..."
                  rows={4}
                  className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* Temperature Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Temperature: {agentConfig.temperature}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={agentConfig.temperature}
                  onChange={(e) => setAgentConfig({...agentConfig, temperature: parseFloat(e.target.value)})}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>More Focused</span>
                  <span>More Creative</span>
                </div>
              </div>

              {/* Create Button */}
              <button 
                type="submit"
                className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-gray-600 transition-colors"
              >
                Create Agent
              </button>
            </form>
          </div>
        )}

  



  


      
    
        </div>
      </div>
    )
  );
}

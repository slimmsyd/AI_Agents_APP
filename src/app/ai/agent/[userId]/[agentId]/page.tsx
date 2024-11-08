"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/app/components/loadingComponent";
import ChatContainer from "../../../components/ChatContainer";
import DashboardPage from "../../../dashboard/page";
import axios from "axios";
import { useChatContext } from "@/app/contexts/ChatContext";

export default function Page({}: {}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true); // Set to true by default for conversation view
  const { responses, setResponses, conversation, setConversation } = useChatContext();
  // const [agentIDs, setAgentIDs] = useState<{ {instruction: string; name: string; uid: string;}[]}>({my_agents: []});

  const [agentIDs, setAgentIDs] = useState<{
    my_agents: { instruction: string; name: string; uid: string }[];
  }>({ my_agents: [] });
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [agentConversations, setAgentConversations] = useState([]);

  const [userId, setUserId] = useState<string | null>(null);
  const [agentId, setAgentId] = useState<string | null>(null);

  const settingUserID = () => {
    const userID = localStorage.getItem("user_id");
    if (userID) {
      setUserId(userID);
    }
  };

  const settingAgentID = () => {
    const agentID = localStorage.getItem("currentAgent");
    if (agentID) {
      setAgentId(agentID);
    }
  };

  useEffect(() => {
    settingUserID();
    settingAgentID();
  }, []);


  const selectingNewAgent = (agentId: string) => {
    setSelectedAgent(agentId);
    localStorage.setItem("currentAgent", agentId);
  };

  useEffect(() => {
    const currentAgent = localStorage.getItem("currentAgent");
    if (currentAgent) {
      setSelectedAgent(currentAgent);
    }
  }, []);

  // Fetch agents list (similar to original file)
  useEffect(() => {
    const fetchAgents = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) return;

      try {
        const response = await axios.get(
          "https://www.huemanapi.com/my_agents",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );


        if (response.data) {
          setAgentIDs(response.data);
        }
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    fetchAgents();
  }, []);

  // Add this function to transform conversation messages to our Response format
  const transformConversationToResponses = (conversation: any) => {
    if (!conversation?.messages) return [];
    
    const transformedMessages = [];
    
    // Process messages in pairs (user + assistant)
    for (let i = 0; i < conversation.messages.length; i++) {
      const currentMsg = conversation.messages[i];
      
      if (currentMsg.role === 'user') {
        // Create a response object combining user question and assistant response
        transformedMessages.push({
          question: currentMsg.message,
          response: conversation.messages[i + 1]?.message || '',
          id: currentMsg.timestamp,
          sender: currentMsg.sender,
          sender_id: currentMsg.sender_id,
          timestamp: currentMsg.timestamp,
          agent: conversation.agent
        });
      }
    }
    
    return transformedMessages;
  };

  // Update the useEffect that fetches conversations
  useEffect(() => {
    const fetchAgentConversations = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) return;

      try {
        const response = await axios.get(
          "https://www.huemanapi.com/agent_conversations",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );


        

        if (response.data?.conversations) {
          console.log("Logging the response", response.data);
          // Find the conversation where any message matches the agentId
          const currentConversation = response.data.conversations.find(
            (conv: any) => conv.messages.some((msg: any) => msg.agent_id === agentId)
          );


          if (currentConversation) {
            setConversation(currentConversation);
            // Transform and set the responses
            const transformedResponses = transformConversationToResponses(currentConversation);
            setResponses(transformedResponses);
          }
        }
      } catch (error) {
        console.error("Error fetching agent conversations:", error);
      }
    };

    if (userId && agentId) {
      fetchAgentConversations();
    }
  }, [userId, agentId]);

  useEffect(() => {
  }, [agentIDs]);

  return (
    <div className="relative">
      <DashboardPage />
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-[50px] z-20 left-4 bg-gray-700 text-white p-4 rounded-full shadow-lg hover:bg-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
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

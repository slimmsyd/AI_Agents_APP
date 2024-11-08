import React, { createContext, useContext, useState } from 'react';

interface Response {
  question: string;
  response: string;
  id: string;
}

interface ChatContextType {
  responses: Response[];
  setResponses: React.Dispatch<React.SetStateAction<Response[]>>;
  userId: string | null;
  setUserID: React.Dispatch<React.SetStateAction<string | null>>;
  conversation: {
    id: string;
    messages: Array<{
      role: string;
      message: string;
      agent_id?: string;
      timestamp: string;
      sender: string;
      sender_id: string;
    }>;
  } | null;
  setConversation: React.Dispatch<React.SetStateAction<{
    id: string;
    messages: Array<{
      role: string;
      message: string;
      agent_id?: string;
      timestamp: string;
      sender: string;
      sender_id: string;
    }>;
  } | null>>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [responses, setResponses] = useState<Response[]>([]);

  const [userId, setUserID] = useState<string | null>(null);
// ... existing state declarations ...
  const [conversation, setConversation] = useState<{
    id: string;
    messages: Array<{
      role: string;
      message: string;
      agent_id?: string;
      timestamp: string;
      sender: string;
      sender_id: string;
    }>;
    agent?: {
      name: string;
      instruction: string;
      uid: string;
    };
  } | null>(null);
  return (  
    <ChatContext.Provider value={{ responses, setResponses, userId, setUserID, conversation, setConversation }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}
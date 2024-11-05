'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingComponent from '@/app/components/loadingComponent';

import DashboardPage from '../dashboard/page';


export default function AgentPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);
  const [agentConfig, setAgentConfig] = useState({
    name: '',
    description: '',
    instructions: '',
    temperature: 0.7,
  });

  const handleCreateAgent = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setShowDashboard(true);
    }, 3000);

    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Navigate to dashboard


    // router.push(`/ai/dashboard?agent=${encodeURIComponent(agentConfig.name)}`);
  };

  useEffect(() => {

    console.log("Logging the isloading", isLoading);
        
  }, [isLoading]);



  return (

    showDashboard ? (   
      <DashboardPage 
        agentConfig={agentConfig}
      />
    ) : (
      <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
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
            <form onSubmit={handleCreateAgent} className="space-y-6">
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

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type PollOption = {
  id: string;
  text: string;
  votes: number;
};

type Poll = {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  createdAt: string;
  options: PollOption[];
  totalVotes: number;
};

export default function PollDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [poll, setPoll] = useState<Poll | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    // Mock data - would be replaced with API call
    const mockPoll: Poll = {
      id: params.id,
      title: params.id === '1' ? 'Favorite Programming Language' : 
             params.id === '2' ? 'Best Frontend Framework' : 'Remote Work Preferences',
      description: 'Please select your preference from the options below.',
      createdBy: 'John Doe',
      createdAt: '2023-06-15',
      options: [
        { id: 'opt1', text: params.id === '1' ? 'JavaScript' : 
                         params.id === '2' ? 'React' : 'Full Remote', votes: 42 },
        { id: 'opt2', text: params.id === '1' ? 'Python' : 
                         params.id === '2' ? 'Vue' : 'Hybrid (3 days remote)', votes: 28 },
        { id: 'opt3', text: params.id === '1' ? 'Java' : 
                         params.id === '2' ? 'Angular' : 'Hybrid (2 days remote)', votes: 15 },
        { id: 'opt4', text: params.id === '1' ? 'TypeScript' : 
                         params.id === '2' ? 'Svelte' : 'Full Office', votes: 35 },
      ],
      totalVotes: 120,
    };
    
    // Simulate API call
    setTimeout(() => {
      setPoll(mockPoll);
      setLoading(false);
    }, 500);
  }, [params.id]);

  const handleVote = () => {
    if (!selectedOption || !poll) return;
    
    // In a real app, this would be an API call
    console.log(`Voted for option ${selectedOption} in poll ${poll.id}`);
    
    // Update local state to reflect the vote
    setPoll(prev => {
      if (!prev) return null;
      
      const updatedOptions = prev.options.map(option => {
        if (option.id === selectedOption) {
          return { ...option, votes: option.votes + 1 };
        }
        return option;
      });
      
      return {
        ...prev,
        options: updatedOptions,
        totalVotes: prev.totalVotes + 1
      };
    });
    
    setHasVoted(true);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <p>Loading poll...</p>
        </div>
      </div>
    );
  }

  if (!poll) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Poll Not Found</h1>
          <p className="mb-4">The poll you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => router.push('/polls')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Back to Polls
          </button>
        </div>
      </div>
    );
  }

  const calculatePercentage = (votes: number) => {
    if (poll.totalVotes === 0) return 0;
    return Math.round((votes / poll.totalVotes) * 100);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => router.push('/polls')}
        className="mb-4 text-blue-600 hover:underline flex items-center"
      >
        ← Back to Polls
      </button>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-2">{poll.title}</h1>
        <p className="text-gray-600 mb-6">{poll.description}</p>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500">Created by {poll.createdBy} on {poll.createdAt}</p>
          <p className="text-sm text-gray-500">{poll.totalVotes} total votes</p>
        </div>
        
        <div className="space-y-4">
          {poll.options.map((option) => (
            <div key={option.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {!hasVoted && (
                    <input
                      type="radio"
                      id={option.id}
                      name="poll-option"
                      value={option.id}
                      checked={selectedOption === option.id}
                      onChange={() => setSelectedOption(option.id)}
                      className="mr-3"
                    />
                  )}
                  <label htmlFor={option.id} className="font-medium">{option.text}</label>
                </div>
                <span className="text-gray-600">{calculatePercentage(option.votes)}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${calculatePercentage(option.votes)}%` }}
                ></div>
              </div>
              
              <p className="text-xs text-gray-500 mt-1">{option.votes} votes</p>
            </div>
          ))}
        </div>
        
        {!hasVoted && (
          <button
            onClick={handleVote}
            disabled={!selectedOption}
            className={`mt-6 px-4 py-2 rounded text-white ${selectedOption ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} transition-colors`}
          >
            Submit Vote
          </button>
        )}
        
        {hasVoted && (
          <div className="mt-6 p-4 bg-green-50 text-green-800 rounded-lg">
            Thank you for voting! Your vote has been recorded.
          </div>
        )}
      </div>
    </div>
  );
}
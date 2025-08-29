'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Poll = {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  createdAt: string;
  votesCount: number;
};

export default function PollsPage() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - would be replaced with API call
    const mockPolls: Poll[] = [
      {
        id: '1',
        title: 'Favorite Programming Language',
        description: 'What is your favorite programming language to work with?',
        createdBy: 'John Doe',
        createdAt: '2023-06-15',
        votesCount: 145
      },
      {
        id: '2',
        title: 'Best Frontend Framework',
        description: 'Which frontend framework do you prefer for web development?',
        createdBy: 'Jane Smith',
        createdAt: '2023-06-10',
        votesCount: 89
      },
      {
        id: '3',
        title: 'Remote Work Preferences',
        description: 'How often do you prefer to work remotely?',
        createdBy: 'Alex Johnson',
        createdAt: '2023-06-05',
        votesCount: 212
      },
    ];
    
    // Simulate API call
    setTimeout(() => {
      setPolls(mockPolls);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Available Polls</h1>
        <Link 
          href="/polls/create"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Create New Poll
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p>Loading polls...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {polls.map((poll) => (
            <Link key={poll.id} href={`/polls/${poll.id}`}>
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer h-full">
                <h2 className="text-xl font-semibold mb-2">{poll.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{poll.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mt-auto">
                  <span>By {poll.createdBy}</span>
                  <span>{poll.votesCount} votes</span>
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  Created on {poll.createdAt}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
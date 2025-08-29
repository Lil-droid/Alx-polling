'use client';

import { useState } from 'react';

export default function ProfilePage() {
  // Mock user data - would come from authentication context in a real app
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinedDate: 'January 2023',
    pollsCreated: 12,
    pollsVoted: 48
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">User Profile</h1>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          
          <div className="border-t pt-4 mt-4">
            <p className="text-sm text-gray-600">Member since: {user.joinedDate}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 border-t pt-4">
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600">Polls Created</p>
              <p className="text-2xl font-bold">{user.pollsCreated}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600">Polls Voted</p>
              <p className="text-2xl font-bold">{user.pollsVoted}</p>
            </div>
          </div>
          
          <div className="border-t pt-4 flex justify-end">
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              onClick={() => console.log('Edit profile clicked')}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
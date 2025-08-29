'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type PollOption = {
  id: string;
  text: string;
};

export default function CreatePollPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState<PollOption[]>([
    { id: '1', text: '' },
    { id: '2', text: '' },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionChange = (id: string, value: string) => {
    setOptions(options.map(option => 
      option.id === id ? { ...option, text: value } : option
    ));
  };

  const addOption = () => {
    const newId = (options.length + 1).toString();
    setOptions([...options, { id: newId, text: '' }]);
  };

  const removeOption = (id: string) => {
    if (options.length <= 2) return; // Minimum 2 options required
    setOptions(options.filter(option => option.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!title.trim()) {
      alert('Please enter a poll title');
      return;
    }
    
    if (options.length < 2) {
      alert('Please add at least 2 options');
      return;
    }
    
    if (options.some(option => !option.text.trim())) {
      alert('Please fill in all options');
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real app, this would be an API call
    console.log('Creating poll:', { title, description, options });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/polls');
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create a New Poll</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Poll Title *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a question for your poll"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description (Optional)
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add more context to your poll"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Poll Options *
          </label>
          
          <div className="space-y-3">
            {options.map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => handleOptionChange(option.id, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Option ${option.id}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => removeOption(option.id)}
                  className="ml-2 text-gray-400 hover:text-red-500"
                  disabled={options.length <= 2}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          
          <button
            type="button"
            onClick={addOption}
            className="mt-3 text-sm text-blue-600 hover:text-blue-800"
          >
            + Add Another Option
          </button>
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => router.push('/polls')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Creating...' : 'Create Poll'}
          </button>
        </div>
      </form>
    </div>
  );
}
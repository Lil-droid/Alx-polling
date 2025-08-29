import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Welcome to</span>
          <span className="block text-blue-600">Alx Polling</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
          Create polls, share with others, and gather responses in real-time.
          A simple and effective way to collect opinions and make decisions.
        </p>
        
        <div className="mt-10 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <Link
              href="/polls"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              View Polls
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link
              href="/polls/create"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
            >
              Create Poll
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-4">Create</div>
            <p className="text-gray-600">Design custom polls with multiple options and detailed descriptions.</p>
          </div>
          
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-4">Share</div>
            <p className="text-gray-600">Distribute your polls to friends, colleagues, or the public.</p>
          </div>
          
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-4">Analyze</div>
            <p className="text-gray-600">View real-time results and insights from your poll responses.</p>
          </div>
         </div>
       </main>

    </div>
  );
}

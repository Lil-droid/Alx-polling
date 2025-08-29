import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6">
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              Home
            </Link>
            <Link href="/polls" className="text-gray-400 hover:text-gray-500">
              Polls
            </Link>
            <Link href="/auth/login" className="text-gray-400 hover:text-gray-500">
              Login
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Alx Polling. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
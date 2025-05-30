
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">easysocial</span>
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center">
                Features
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center">
                Integrations
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center">
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center">
                Partnerships
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Language selector */}
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
                🌐 Eng
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Login button */}
            <Link href="/login" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              Login
            </Link>

            {/* Get Started button */}
            <Link 
              href="/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Started for FREE
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

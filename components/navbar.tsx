'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname ,useRouter } from 'next/navigation';
import { FaUserCircle } from 'react-icons/fa';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Dynamic nav links based on login status
  const getNavLinks = () => {
    const baseLinks = [
      { name: 'Home', path: '/' },
      { name: 'Tests', path: '/tests' },
      { name: 'Contact', path: '/contact' },
    ];
    
    // Only show Results when logged in
    if (isLoggedIn) {
      // Insert Results after Tests
      baseLinks.splice(2, 0, { name: 'Results', path: '/results' });
    }
    
    return baseLinks;
  };

  const navLinks = getNavLinks();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="text-blue-500 font-bold text-2xl">
                <span className="text-orange-600">Samgra</span>
                <span className="text-black">CS</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === link.path ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4 ml-6">
                {/* User profile icon */}
                <div className="relative">
                <button 
  className="flex items-center focus:outline-none"
  onClick={() => router.push('/profile')}
>
  <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white">
    <FaUserCircle className="h-5 w-5" />
  </div>
</button>
                </div>
                <button 
                  onClick={handleLogout}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-6">
                <button 
                  onClick={handleLogin}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Log in
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Sign up
                </button>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          {isLoggedIn ? (
            <div className="flex items-center px-2 space-x-2">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>
              <button 
                onClick={handleLogout}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex items-center px-2 space-x-2">
              <button 
                onClick={handleLogin}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
              >
                Log in
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ProfileSidebar = ({ user }) => {
  // Default user data if none provided
  const defaultUser = {
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    avatar: '/api/placeholder/80/80',
    role: 'Student',
    subscription: {
      plan: 'Premium',
      validUntil: '2025-07-15',
      features: ['Unlimited Tests', 'Study Materials', 'Personalized Feedback']
    },
    stats: {
      testsTaken: 42,
      testsCompleted: 38,
      avgScore: 78,
      highestScore: 95
    },
    progress: 68
  };

  // Use provided user data or default
  const userData = user || defaultUser;
  
  // Active section state for mobile view
  const [activeSection, setActiveSection] = useState('profile');

  const navItems = [
    { id: 'profile', label: 'My Profile', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    )},
    { id: 'tests', label: 'My Tests', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
      </svg>
    )},
    { id: 'materials', label: 'Study Materials', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M7 4a1 1 0 00-1 1v1h5v1H5a1 1 0 00-1 1v1h7v1H4a1 1 0 00-1 1v1h8v1H2a1 1 0 00-1 1v3a1 1 0 001 1h16a1 1 0 001-1v-3a1 1 0 00-1-1h-2v-1h2a1 1 0 001-1v-1a1 1 0 00-1-1h-2V9h2a1 1 0 001-1V7a1 1 0 00-1-1h-1V5a1 1 0 00-1-1H7z" />
      </svg>
    )},
    { id: 'subscription', label: 'Subscription', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
      </svg>
    )},
    { id: 'help', label: 'Help & Support', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
    )},
    { id: 'settings', label: 'Settings', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    )}
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      {/* User Profile Header */}
      <div className="bg-blue-600 px-6 py-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src={userData.avatar} 
              alt={userData.name} 
              className="h-16 w-16 rounded-full border-2 border-white"
            />
            <div className="absolute bottom-0 right-0 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <p className="text-blue-100">{userData.email}</p>
            <span className="inline-block px-2 py-1 mt-2 text-xs font-medium bg-blue-700 rounded-full">
              {userData.role}
            </span>
          </div>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Performance</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-sm text-gray-500">Tests Taken</p>
            <p className="text-2xl font-bold text-blue-600">{userData.stats.testsTaken}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <p className="text-sm text-gray-500">Avg. Score</p>
            <p className="text-2xl font-bold text-green-600">{userData.stats.avgScore}%</p>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-gray-700">Course Progress</p>
            <p className="text-sm font-medium text-gray-700">{userData.progress}%</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${userData.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Subscription Info */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Subscription</h3>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            {userData.subscription.plan}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Valid until: <span className="font-medium">{new Date(userData.subscription.validUntil).toLocaleDateString()}</span>
        </p>
        <ul className="mt-2 space-y-1">
          {userData.subscription.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Navigation Section */}
      <div className="px-4 py-2">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link 
              href={`/account/${item.id}`} 
              key={item.id}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === item.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="mr-3 text-gray-500">{item.icon}</span>
              {item.label}
              
              {/* Show count badge for tests */}
              {item.id === 'tests' && (
                <span className="ml-auto inline-block py-0.5 px-2 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  {userData.stats.testsTaken}
                </span>
              )}
              
              {/* Arrow icon */}
              <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Quick Actions Footer */}
      <div className="px-6 py-4 bg-gray-50">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h3>
        <div className="flex flex-col space-y-2">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50">
            Take Practice Test
          </button>
          <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            Schedule Coaching Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
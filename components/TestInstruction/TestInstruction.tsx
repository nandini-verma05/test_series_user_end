'use client';

import React, { useState } from 'react';
import { FaClock, FaListUl,  FaLanguage, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const TestInstruction = () => {
  const [showSyllabus, setShowSyllabus] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const router = useRouter();

  const toggleSyllabus = () => {
    setShowSyllabus(!showSyllabus);
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const handleStartTest = () => {
    router.push('/test/questions');
  };

  // Test information
  const testInfo = {
    name: "Scholarship Test",
    isFree: true,
    questions: 15,
    marks: 60,
    duration: "15 mins",
    language: "English",
    rules: [
      "Once the test starts, you cannot pause it.",
      "Each question has a time limit of 1 minute.",
      "You cannot go back to previous questions.",
      "Ensure stable internet connection throughout the test.",
      "Any form of malpractice will lead to disqualification."
    ],
    syllabus: [
      "Basic Mathematics - Algebra, Geometry",
      "Logical Reasoning - Pattern Recognition, Analogies",
      "Verbal Ability - Reading Comprehension, Vocabulary",
      "General Knowledge - Current Affairs, Science & Technology",
      "Data Interpretation - Graphs, Charts Analysis"
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      {/* Navigation */}
      <div className="flex items-center mb-8">
        <button 
          className="mr-4 text-gray-500" 
          onClick={() => router.push('/')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span className="mr-4 text-gray-500">Plus</span>
        <span className="font-medium text-gray-700">Scholarship Test</span>
      </div>

      {/* Test Tag and Title */}
      <div className="mb-8">
        <span className="bg-gray-400 text-white px-3 py-1 rounded-md text-sm font-medium">FREE</span>
        <span className="ml-3 text-lg text-gray-600">Test</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-8">Scholarship Test</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side content */}
        <div className="flex-1">
          {/* Test details */}
          <div className="flex mb-8 flex-wrap">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center mr-4 mb-4">
              <div className="mr-3 text-gray-600">
                <FaClock />
              </div>
              <div>
                <div className="font-medium">{testInfo.questions} Q's · {testInfo.marks} marks</div>
                <div className="text-sm text-gray-500">{testInfo.duration}</div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex items-center mb-4">
              <div className="mr-3 text-gray-600">
                <FaLanguage />
              </div>
              <div>
                <div className="font-medium">Languages</div>
                <div className="text-sm text-gray-500">{testInfo.language}</div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap mb-8 gap-4">
            <button 
              onClick={handleStartTest}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center w-full md:w-auto"
            >
              Take test
            </button>
            
            <button 
              onClick={toggleInstructions}
              className="border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-md flex items-center justify-center w-full md:w-auto"
            >
              <FaListUl className="mr-2" /> Instructions
              {showInstructions ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>
          </div>

          {/* Instructions section */}
          {showInstructions && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-medium mb-4">Instructions:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {testInfo.rules.map((rule, index) => (
                  <li key={index} className="text-gray-700">{rule}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Syllabus section */}
          <div className="mb-8">
            <button 
              onClick={toggleSyllabus}
              className="flex items-center text-lg font-medium text-gray-800 mb-2"
            >
              Syllabus
              {showSyllabus ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>
            
            {showSyllabus && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  {testInfo.syllabus.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Scholarship banner */}
        <div className="w-full md:w-1/3">
          <div className="bg-amber-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-amber-800 mr-2">♦</span>
              <h3 className="text-amber-800 font-bold">SCHOLARSHIP TEST</h3>
            </div>
            
            <div className="text-amber-800">
              <h2 className="text-3xl font-bold mb-2">20 Lakh +</h2>
              <p className="text-2xl font-bold">learners have availed scholarship</p>
            </div>
            
            <div className="mt-4">
              <img 
                src="/api/placeholder/250/200" 
                alt="Student using mobile app" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestInstruction;
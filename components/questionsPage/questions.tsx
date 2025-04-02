// questionpage.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Question {
  id: number;
  text: string;
  formula?: string;
  points: {
    correct: number;
    incorrect: number;
  };
  options: {
    id: string;
    text: string;
    formula?: string;
  }[];
}

interface QuestionPageProps {
  timeRemaining?: string;
  testName: string;
  questions: Question[];
  currentQuestionIndex: number;
}

const QuestionPage: React.FC<QuestionPageProps> = ({
  timeRemaining = "14 : 39",
  testName = "Scholarship Test",
  questions,
  currentQuestionIndex = 0,
}) => {
  const router = useRouter();
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [markedQuestions, setMarkedQuestions] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };
  
  const handleMarkQuestion = () => {
    if (!markedQuestions.includes(currentQuestionIndex)) {
      setMarkedQuestions([...markedQuestions, currentQuestionIndex]);
    } else {
      setMarkedQuestions(markedQuestions.filter(q => q !== currentQuestionIndex));
    }
  };
  
  const handleSaveAndNext = () => {
    if (selectedOption && !answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
    
    if (currentQuestionIndex < totalQuestions - 1) {
      router.push(`/questions/${currentQuestionIndex + 2}`);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      router.push(`/questions/${currentQuestionIndex}`);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-blue-500 font-bold text-2xl">
            <span className="text-blue-600">una</span>
            <span className="text-green-500">cademy</span>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="text-gray-600 font-medium">{timeRemaining}</div>
          <div className="border-l pl-8 flex items-center">
            <span className="bg-gray-100 p-2 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="font-medium">{testName}</span>
          </div>
          <button className="bg-white border border-gray-300 rounded-md px-4 py-2 font-medium hover:bg-gray-50">
            End test
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Main content */}
        <div className="flex-1 p-8">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-lg font-medium text-gray-800">Question {currentQuestion.id}</h2>
                <p className="text-sm text-gray-500">+{currentQuestion.points.correct} marks, -{currentQuestion.points.incorrect} mark</p>
              </div>
              <button className="flex items-center text-gray-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1-1V8a1 1 0 00-1-1V6z" clipRule="evenodd" />
                </svg>
                Report
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-800 mb-2">{currentQuestion.text}</p>
              {currentQuestion.formula && (
                <div className="text-gray-800 font-serif my-4">
                  {currentQuestion.formula}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {currentQuestion.options.map((option) => (
                <div 
                  key={option.id}
                  className={`border rounded-lg p-4 flex items-center hover:bg-gray-50 cursor-pointer ${
                    selectedOption === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => handleOptionSelect(option.id)}
                >
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                    selectedOption === option.id ? 'border-blue-500' : 'border-gray-300'
                  }`}>
                    {selectedOption === option.id && (
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                  <div className="font-serif">{option.formula || option.text}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between">
            <button 
              onClick={handlePrevious}
              className="bg-gray-100 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
            >
              Previous
            </button>
            
            <div className="flex space-x-4">
              <button 
                onClick={handleMarkQuestion}
                className="flex items-center justify-center border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                Mark
              </button>
              
              <button 
                onClick={handleSaveAndNext}
                className="bg-green-500 text-white px-8 py-3 rounded-md font-medium hover:bg-green-600 transition"
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="w-72 border-l bg-white p-6">
          <h3 className="font-medium text-lg mb-4">Questions</h3>
          <button className="text-gray-700 mb-6 hover:text-blue-600">Attempt all</button>
          
          <div className="flex flex-wrap gap-y-4 mb-6">
            <div className="flex items-center mr-6">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm">{answeredQuestions.length} answered</span>
            </div>
            <div className="flex items-center mr-6">
              <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
              <span className="text-sm">{markedQuestions.length} marked</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full border border-gray-300 mr-2"></span>
              <span className="text-sm">{totalQuestions - answeredQuestions.length} unanswered</span>
            </div>
          </div>
          
          <div className="grid grid-cols-5 gap-2">
            {[...Array(totalQuestions)].map((_, index) => {
              const isAnswered = answeredQuestions.includes(index);
              const isMarked = markedQuestions.includes(index);
              const isCurrent = index === currentQuestionIndex;
              
              let buttonClass = "flex items-center justify-center w-10 h-10 rounded-md border ";
              
              if (isAnswered) {
                buttonClass += "bg-green-500 text-white border-green-500 ";
              } else if (isMarked) {
                buttonClass += "bg-yellow-400 text-gray-800 border-yellow-400 ";
              } else if (isCurrent) {
                buttonClass += "border-blue-500 text-blue-600 ";
              } else {
                buttonClass += "border-gray-300 hover:border-gray-400 ";
              }
              
              return (
                <Link href={`/questions/${index + 1}`} key={index}>
                  <a className={buttonClass}>
                    {index + 1}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;

// Example usage on a page:

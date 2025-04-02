'use client';

import React from 'react';
import Link from 'next/link';

// Individual card component
const ExamCard = ({ title, subtitle, icon, href }) => {
  return (
    <Link href={href || '#'}>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="text-green-500 mb-4">
          {icon}
        </div>
        <h3 className="text-gray-700 text-xl font-medium text-center mb-2">{title}</h3>
        {subtitle && <p className="text-gray-500 text-center">{subtitle}</p>}
      </div>
    </Link>
  );
};

// Document icon SVG
const DocumentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="9" y1="15" x2="15" y2="15"></line>
    <line x1="9" y1="11" x2="15" y2="11"></line>
    <line x1="9" y1="19" x2="11" y2="19"></line>
    <circle cx="12" cy="13" r="4" stroke="none" fill="#4ADE80" opacity="0.4"></circle>
  </svg>
);

// Building icon SVG (for institution exams)
const BuildingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
    <line x1="12" y1="2" x2="12" y2="4" stroke="#4ADE80"></line>
    <line x1="10" y1="7" x2="14" y2="7" stroke="#4ADE80"></line>
  </svg>
);

// School icon SVG (for school exams)
const SchoolIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
    <path d="M8 10h8" stroke="#4ADE80"></path>
    <path d="M8 14h6" stroke="#4ADE80"></path>
  </svg>
);

// Main component for displaying all exam cards
const Exam = () => {
  const exams = [
   
    {
      title: "NTA UGC NET",
      subtitle: "National Testing Agency",
      icon: <DocumentIcon />,
      href: "/exams/nta-ugc-net"
    },
    {
      title: "GATE",
      subtitle: "Graduate Aptitude Test in Engineering",
      icon: <BuildingIcon />,
      href: "/exams/gate"
    },
    {
      title: "KVS PGT CS",
      subtitle: "Kendriya Vidyalaya Sangathan",
      icon: <BuildingIcon />,
      href: "/exams/kvs-pgt-cs"
    },
    {
      title: "CUET",
      subtitle: "Common University Entrance Test",
      icon: <SchoolIcon />,
      href: "/exams/cuet"
    },
    {
      title: "CBSE Class 10",
      subtitle: "Secondary School Examination",
      icon: <SchoolIcon />,
      href: "/exams/cbse-class-10"
    },
    {
      title: "CBSE Class 12",
      subtitle: "Senior Secondary Examination",
      icon: <SchoolIcon />,
      href: "/exams/cbse-class-12"
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam, index) => (
            <ExamCard 
              key={index}
              title={exam.title}
              subtitle={exam.subtitle}
              icon={exam.icon}
              href={exam.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exam;
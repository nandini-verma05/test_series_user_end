'use client';

import React from 'react';
import TestCard from '../components/TestCard/TestCard';
import Link from 'next/link';
import Header from '../components/header';
import Exam from '../components/exam';
import ProfileSidebar from '@/components/profile';



const bannerImage = '/image/test_banner.jfif';
const testslug = 'samgra cs-prodigy-neet-ug-2022';

export default function HomePage() {
  return (

    <div>
      <Header />
      <Exam />
      <ProfileSidebar />
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      gap: '2rem'
    }}>
      <h1>Available Tests</h1>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '1rem' 
      }}>
        <Link href={`/test/${testslug}`} style={{ textDecoration: 'none' }}>
          <div style={{ cursor: 'pointer' }}>
            <TestCard
              image={bannerImage}
              name="SAMAGRA CSProdigy: NEET-UG 2022 aspirants"
              tag="FREE"
              schedule="Test 1 • Apr 25, 3:00 PM"
              testslug={testslug}
            />
          </div>
        </Link>
        
        {/* You can add more test cards here */}
      </div>
    </main>
    </div>
  );
}
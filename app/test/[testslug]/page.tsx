"use client";
import React from "react";
import TestInstructions from "@/components/TestInstruction/TestInstruction"; // Adjust path if needed
import { useParams, useRouter } from 'next/navigation';

// ✅ Define a proper TypeScript interface
interface TestDetails {
  category: string;
  name: string;
  testTime: string;
  startTime: string;
  numQuestions: number;
  rules: string[];
  description: string;
  syllabus: string[];
}

export default function TestDescriptionPage() {
  const params = useParams();
  const router = useRouter();
  const testSlug = params?.testslug as string;
  
  // ✅ Now testData has proper type safety
  const testData: Record<string, TestDetails> = {
    "Samagra cs -prodigy-neet-ug-2022": {
      category: "MINOR TEST",
      name: "Samagra cs  Prodigy : NEET - UG 2022 aspirants",
      testTime: "90 Minutes",
      startTime: "Started on 25 Apr 2021",
      numQuestions: 45,
      rules: [
        "Ensure you have a stable internet connection.",
        "Do not open other browser tabs or applications during the test.",
        "The test has negative marking for incorrect answers.",
        "Time is tracked automatically. Ensure you submit before time runs out.",
        "All questions must be attempted.",
        "Contact support immediately if you face technical issues."
      ],
      description: "This test is designed for NEET-UG 2022 aspirants...",
      syllabus: [
        "Physics: ...",
        "Chemistry: ...",
        "Biology (Zoology): ...",
        "Biology (Botany): ..."
      ],
    },
  };
  
  console.log(testSlug);
  const currentTest = testData[testSlug];
  console.log(currentTest);
  
  if (!currentTest) {
    return <div>Loading test details...</div>;
  }
  
  // Redirect to questions page
  const handleStartTest = () => {
    router.push(`/test/${testSlug}/questions/1`);
  };
  
  return (
    <div style={{ padding: "1rem" }}>
      <TestInstructions
        category={currentTest.category}
        name={currentTest.name}
        testTime={currentTest.testTime}
        startTime={currentTest.startTime}
        numQuestions={currentTest.numQuestions}
        rules={currentTest.rules}
        description={currentTest.description}
        syllabus={currentTest.syllabus}
        onStartTest={handleStartTest}
        buttonText="Begin Assessment"
      />
    </div>
  );
}
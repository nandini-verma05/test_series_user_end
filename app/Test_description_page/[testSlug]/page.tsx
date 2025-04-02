"use client";

import React from "react";
import { useParams } from "next/navigation"; // Correct way to get dynamic route parameters
import TestInstructions from "@/components/TestInstruction/TestInstruction"; // Ensure correct import path

// Define test data
const testData: Record<
  string,
  {
    category: string;
    name: string;
    testTime: string;
    startTime: string;
    numQuestions: number;
    rules: string[];
    description: string;
    syllabus: string[];
  }
> = {
  "samagra cs -prodigy-neet-ug-2022": {
    category: "MINOR TEST",
    name: "samagra cs Prodigy : NEET - UG 2022 aspirants",
    testTime: "90 Minutes",
    startTime: "Started on 25 Apr 2021",
    numQuestions: 45,
    rules: [
      "Ensure you have a stable internet connection.",
      "Do not open other browser tabs or applications during the test.",
      "The test has negative marking for incorrect answers.",
      "Time is tracked automatically. Ensure you submit before time runs out.",
      "All questions must be attempted.",
      "Contact support immediately if you face technical issues.",
    ],
    description: `This test is designed for NEET-UG 2022 aspirants. The syllabus includes topics from Physics, Chemistry, and Biology. Be prepared to answer all questions within the given time frame.`,
    syllabus: [
      "Physics: Kinematics, Laws of Motion, Work, Power & Energy",
      "Chemistry: Atomic Structure, Chemical Bonding, Thermodynamics",
      "Biology (Zoology): Animal Kingdom, Human Physiology",
      "Biology (Botany): Plant Physiology, Genetics",
    ],
  },
  // Add more test data here
};

const TestDescriptionPage: React.FC = () => {
  const params = useParams();
  const testSlug = params?.testSlug as string | undefined; // Extract the test slug safely

  if (!testSlug || !testData[testSlug]) {
    return <div style={{ padding: "1rem", textAlign: "center" }}>Loading test instructions...</div>;
  }

  const currentTest = testData[testSlug];

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
        onStartTest={() => console.log("Start test for:", testSlug)}
        buttonText="Begin Assessment"
      />
    </div>
  );
};

export default TestDescriptionPage;

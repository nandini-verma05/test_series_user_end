// app/test/[slug]/questions/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import QuestionPage from '@/components/questionsPage/questions';

// Sample questions for NEET-UG test
const testQuestions = {
  'samagra cs -prodigy-neet-ug-2022': [
    {
      id: 1,
      text: "The potential energy of a particle in a force field is given by U(x) = kx². The force acting on the particle is:",
      points: { correct: 4, incorrect: 1 },
      options: [
        { id: "a", text: "F = -2kx" },
        { id: "b", text: "F = 2kx" },
        { id: "c", text: "F = -kx²" },
        { id: "d", text: "F = kx²" },
      ]
    },
    {
      id: 2,
      text: "Convert the given CT signal into DT signal when",
      formula: "f_s = 4\\Pi z\nx(t) = \\cos(100\\pi t)",
      points: { correct: 4, incorrect: 1 },
      options: [
        { id: "a", formula: "\\cos(2\\pi n)" },
        { id: "b", formula: "\\cos(50\\pi n)" },
        { id: "c", formula: "\\cos(25\\pi n)" },
        { id: "d", formula: "\\cos(100\\pi n)" },
      ]
    },
    // Add more questions as needed
  ]
  // You can add more tests here
};

export default function QuestionPageWrapper() {
  const params = useParams();
  const testSlug = params.slug as string;
  const questionId = typeof params.id === 'string' ? parseInt(params.id) : 1;
  const currentQuestionIndex = questionId - 1;
  
  // Get questions for this specific test
 // const questions = testQuestions[testSlug] || [];
  
  return (
    <QuestionPage
      testName={testSlug === 'samagra cs-prodigy-neet-ug-2022' ? "NEET-UG 2022 Test" : "Scholarship Test"}
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
    />
  );
}
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

interface TestCardProps {
  image?: string;
  name: string;
  tag?: string;
  schedule: string;
  testslug: string;
  instructions?: string;
}

const TestCard: React.FC<TestCardProps> = ({ 
  image, 
  name, 
  tag, 
  schedule, 
  testslug,
  instructions 
}) => {
  const testUrl = `/test/${testslug}`;
  
  return (
    <Link href={testUrl} className="testCardLink">
      <div className="testCard">
        <div className="testCardInner">
          <div className="testCardContent">
            <h3 className="testCardName">{name}</h3>
            {tag && <span className="testCardTag">{tag}</span>}
            <p className="testCardSchedule">{schedule}</p>
          </div>
          {image && (
            <div className="testCardImageContainer">
              <Image 
                src={image} 
                alt={name} 
                width={120} 
                height={120} 
                className="testCardImage" 
              />
            </div>
          )}
        </div>
        {instructions && (
          <div className="testCardInstructions">
            <p>{instructions}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default TestCard;
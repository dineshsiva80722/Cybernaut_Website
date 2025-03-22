'use client';
import React, { useState } from 'react';

interface Language {
  name: string;
  subItems?: string[];
}

function AccordionItem({
  language,
  isOpen,
  onClick
}: {
  language: Language;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="rounded-lg my-2 rounded-b-none border-b-[0.2rem]  border-b-blue-600">
      <button
        className={`w-full px-6 py-4  rounded-lg flex items-center justify-between transition-colors duration-200 ${isOpen ? 'bg-white' : 'bg-white hover:bg-gray-50'
          }`}
        onClick={onClick}
      >
        <div className="flex justify-between  w-full items-center gap-3">
          <span className="text-lg font-medium  text-gray-900">{language.name}</span>

          <svg
            className={`w-5 h-5 rotate-90 text-blue-500 transform transition-transform duration-200 ease-out ${isOpen ? 'rotate-90' : ''
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
      <hr />
      <div
        className={`transition-all duration-200 ease-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white">
          {language.subItems?.map((item, index) => (
            <div
              key={index}
              className="px-5 py-3   text-gray-400   rounded-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThreeCourses() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const languages: Language[] = [
    {
      name: 'Frontend Fundamentals & Git:',
      subItems: ['Learn HTML for structuring web pages, CSS for styling with Flexbox, Grid, and responsive design, and Git/GitHub for version control and collaboration. Get introduced to JavaScript fundamentals, including variables, functions, DOM manipulation, and event handling. Deploy static sites using GitHub Pages and React apps with Vercel/Netlify.'],
    }, 
    {
      name: 'JavaScript Advanced Concepts, Node.js, and TailwindCSS:',
      subItems: ['Master JavaScript ES6+ features, asynchronous programming, and the Fetch API. Learn Node.js for backend development, work with Express.js to build REST APIs, and test APIs using Postman. Explore React basics, including components, props, state management, and lifecycle methods. Style efficiently using Tailwind CSS for utility-based responsive design.'],
    },
    {
      name: 'Advanced React, Zustand, TypeScript, Database, and ShadCN:', 
      subItems: ['Learn advanced React concepts like React Router for navigation and Context API for global state management. Use Zustand for lightweight state management and TypeScript for type-safe development. Work with databases by integrating MongoDB with Node.js for data storage and retrieval. Build modern UI components using ShadCN.'],
    },
  ];

  return (
    <div className="min-h-[30rem]  items-center justify-center p-8">
      <div className='py-4'>
      <h1 className="text-xl font-semibold">What you Learn</h1>
      {/* <p className='text-md text-gray-600'>Whether your're a beginner or have prior experience, our course will equip you with the knowledge and skills needed to excel in the world of STACK development.</p> */}
      </div>
      <div className="mx-auto rounded-xl overflow-hidden">
        {languages.map((language, index) => (
          <AccordionItem
            key={index}
            language={language}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ThreeCourses;
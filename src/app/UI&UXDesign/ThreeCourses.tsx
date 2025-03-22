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
              className="px-6 py-3   text-gray-400   rounded-lg"
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
      name: 'User Interface and User Experience',
      subItems: ['This module introduces students to the principles of user-centered design, helping them create intuitive and aesthetically pleasing digital experiences. They will explore key topics such as usability, wireframing, prototyping, and interaction design. Through real-world case studies and hands on projects, students will develop the ability to design and evaluate user-friendly interfaces. By the end of the module, they will have a strong foundation in UI/UX design, enabling them to craft seamless and engaging digital experiences.'],
    },
    {
      name: 'Figma',
      subItems: ['This module focuses on mastering Figma, a powerful cloud based design tool used for UI/UX design and prototyping. Students will learn how to create wireframes, interactive prototypes, and design systems efficiently. They will explore features like auto-layout, components, and collaboration tools to streamline the design workflow. By the end of the module, students will be proficient in using Figma to create professional-grade designs, enhancing their ability to work in design teams and real-world projects.'],
    },
    {
      name: 'Adobe Illustartor', 
      subItems: ['In this module, students will learn the fundamentals of Adobe Illustrator, a leading vector graphics software for digital design. They will explore essential tools and techniques for creating logos, illustrations, icons and branding materials. The module covers topics such as typography, color theory and advanced vector manipulation. By the end of this course, students will have the skills to produce high-quality vector graphics, empowering them to work on creative projects across various industries.'],
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
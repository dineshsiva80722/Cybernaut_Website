// 'use client';
// import React, { useState } from 'react';

// interface Language {
//   name: string;
//   subItems?: string[];
// }

// function AccordionItem({
//   language,
//   isOpen,
//   onClick
// }: {
//   language: Language;
//   isOpen: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <div className="rounded-lg my-2 rounded-b-none border-b-[0.2rem]  border-b-blue-600">
//       <button
//         className={`w-full px-6 py-4  rounded-lg flex items-center justify-between transition-colors duration-200 ${isOpen ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
//           }`}
//         onClick={onClick}
//       >
//         <div className="flex justify-between  w-full items-center gap-3">
//           <span className="text-lg font-medium  text-gray-900">{language.name}</span>

//           <svg
//             className={`w-5 h-5 rotate-90 text-blue-500 transform transition-transform duration-200 ease-out ${isOpen ? 'rotate-90' : ''
//               }`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </div>
//       </button>
//       <div
//         className={`transition-all duration-200 ease-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
//           }`}
//       >
//         <div className="bg-blue-50">
//           {language.subItems?.map((item, index) => (
//             <div
//               key={index}
//               className="px-14 py-3   text-gray-600   rounded-lg"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ThreeCourses() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const languages: Language[] = [
//     {
//       name: 'C++',
//       subItems: ['This module introduces students to the fundamental principles of computer science while building a strong foundation in C++. Students will explore core concepts such as data structures, algorithms, memory management, and object-oriented programming. By the end of this module, they will have a solid grasp of C++ fundamentals and computational thinking.'],
//     },
//     {
//       name: 'Python',
//       subItems: ['This module is designed to equip students with practical coding skills using Python. They will work on hands-on projects that simulate real-world applications, covering topics like automation, machine learning, and web development. By the end of this module, students will have built multiple projects, strengthening their ability to apply Python in various domains.'],
//     },
//     {
//       name: 'Java', 
//       subItems: ['In this module, students will develop their problem-solving skills using Java. They will learn how to approach coding challenges efficiently, implement algorithms, and optimize solutions. Through hands-on practice, they will gain confidence in tackling logical problems and competitive programming questions, preparing them for technical interviews and coding competitions.'],
//     },
//   ];

//   return (
//     <div className="min-h-[30rem]  items-center justify-center p-8">
//       <div className='py-4'>
//       <h1 className="text-xl font-semibold">What you Learn</h1>
//       <p className='text-md text-gray-600'>Whether your're a beginner or have prior experience, our course will equip you with the knowledge and skills needed to excel in the world of STACK development.</p>
//       </div>
//       <div className="mx-auto rounded-xl overflow-hidden">
//         {languages.map((language, index) => (
//           <AccordionItem
//             key={index}
//             language={language}
//             isOpen={openIndex === index}
//             onClick={() => setOpenIndex(openIndex === index ? null : index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ThreeCourses;
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { StaticImageData } from 'next/image';

interface BlogCardProps {
  title: string;
  date: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, imageUrl }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-[0px_26px_40px_rgba(43,_45,_54,_0.05)] transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
        <div className='flex justify-between'>
          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
            Read more
            <ArrowRight className="w-4 h-4 ml-2 mt-1 transition-transform group-hover:translate-x-1" />
          </div>
          <div className="flex items-center text-gray-500 ">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


const timelineContent: {
  [year: string]: { cards: { image: string | StaticImageData ; title: string; description: string }[] };
} = {
  '2021': {
    cards: [
      {
        image: "https://res.cloudinary.com/dn60aovto/image/upload/v1742451517/club_var5za.png",
        title: 'Beginning as a Club',
        description: 'Cybernaut started as a college club by a visionary and two tech enthusiasts, mentoring SRM students, growing into a thriving community.',
      },
      {
        image: "https://res.cloudinary.com/dn60aovto/image/upload/v1742451512/techcommunity_gahdpd.png",
        title: 'Developed into a Tech Community',
        description: 'Seeing the gap between education and workforce needs, we grew into a developer community, enriching students learning experiences.',
      },
    ],
  },
  '2022': {
    cards: [
      {
        image: "https://res.cloudinary.com/dn60aovto/image/upload/v1742451509/company_fdpnyc.png",
        title: 'Became a Company',
        description: 'Cybernaut has grown into an Edu-tech company, combining theory and practical skills through advanced programs to help learners gain real-world knowledge and succeed.',
      },
    ],
  },
  '2023': {
    cards: [
      {
        image: "https://res.cloudinary.com/dn60aovto/image/upload/v1742451515/award_pkgtaw.png",
        title: 'Awarded Young Entrepreneurship',
        description: 'In 2022, our efforts were recognized with the Young Entrepreneurship Award by SRM, validating our commitment to transforming education.',
      },
    ],
  },
  '2024': {
    cards: [
      {
        image: "https://res.cloudinary.com/dn60aovto/image/upload/v1742451514/recognition_p5oiro.png",
        title: 'National Recognition',
        description: 'Our dedication and innovation have earned us MSME, MCA, Startup India, and ISO certifications, showcasing our commitment to quality and excellence.',
      },
    ],
  },
  '2025': {
    cards: [
      {
        image: "https://res.cloudinary.com/dn60aovto/image/upload/v1742453360/2025_jaxgkz.jpg",
        title: 'Our Reach',
        description: `We're proud to share that Cybernaut has partnered with SSN College of Engineering as the official UI & UX elective paper & Industrial training partner! `,
      },
    ],
  },
};

export default function Journey() {
  const [selectedYear, setSelectedYear] = useState('2021');
  const [animationKey, setAnimationKey] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const years = ['2021', '2022', '2023', '2024','2025'];

  const handleYearChange = (year: string) => {
    if (year === selectedYear) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedYear(year);
      setAnimationKey(prev => prev + 1);
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 300);
  };

  useEffect(() => {
    // Reset animation state when component mounts
    setIsAnimating(false);
  }, []);

  return (
    <section className="bg-[#f5f9ff] px-4 py-20 md:px-6 lg:px-8 mx-auto xl:container">
      <div className="hidden lg:block mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Our Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As your business grows, Sagstainable grows with you. Our platform's flexibility allows you to adapt and scale without compromising
            on performance or sustainability.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? 'default' : 'outline'}
              onClick={() => handleYearChange(year)}
              className={`px-6 py-2 ${selectedYear === year ? 'bg-blue-500 text-white' : 'bg-white'}`}
            >
              {year}
            </Button>
          ))}
        </div>

        <div key={animationKey} className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
          {selectedYear === '2021' ? (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {timelineContent[selectedYear].cards.map((card, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden  mx-auto w-full shadow-none    border-none animate-in fade-in slide-in-from-bottom-5 duration-500" 
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative h-[300px] w-full">
                      <div className="absolute top-2 right-2 rounded-md px-2 py-1 z-10">
                        {selectedYear}
                      </div>
                      <Image
                        width={660}
                        height={300}
                        src={card.image }
                        alt={card.title}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-600">{card.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
              {timelineContent[selectedYear]?.cards.length > 0 ? (
                timelineContent[selectedYear].cards.map((card, index) => (
                  <Card 
                    key={index} 
                    className="overflow-hidden bg-white shadow-lg mx-auto w-full max-w-5xl animate-in fade-in slide-in-from-bottom-5 duration-500"
                  >
                    <CardContent className="p-0">
                    <div className="relative h-[300px] w-full">
                      <div className="absolute top-2 right-2 bg-white rounded-md px-2 py-1 z-10">
                        {selectedYear}
                      </div>

                      <Image
                        width={1000}
                        height={300}
                        src={card.image || '/placeholder.svg'}
                        alt={card.title}
                        className="object-fill mx-auto"
                      />

                    </div>
                    <div className="p-6 pt-10">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-600">{card.description}</p>
                    </div>
                  </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">
                  No data available for the year {selectedYear}.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      
     
    </section>
  );
}
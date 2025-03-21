import React from 'react';
import Image from 'next/image';
import What from '@/app/Home/assets/All/Images/whatsapp/What.jpg'
import { BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const WhatWeDo = () => {
  return (
    <div className="container mx-auto">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* About section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <Image
              width={500}
              height={500}
              src='https://res.cloudinary.com/dn60aovto/image/upload/v1742391211/What_tu8dmd.jpg'
              alt="Students in a classroom"
              className="w-full h-[35rem] rounded-2xl object-cover shadow-lg transition-transform duration-200"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
            <div className="space-y-5">
              {/* About Us heading */}
              <h3 className="text-blue-500 font-medium">About Us</h3>

              {/* Main heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                EdTech Platform for<br />Skill Development
              </h2>

              {/* Description */}
              <p className="text-gray-600">
                Cybernaut Edu-Tech empowers learners with hands-on training,
                future-ready tools, and expert guidance to excel in top tech companies
                like MAANG.
              </p>

              {/* Feature cards */}
              <div className="space-y-4 pt-1">
                {/* Card 1 */}
                <div className="bg-gray-50 p-4 rounded-lg border-2 border-t-[#00A3FF] border-b-[#00A3FF] border-l-[#00A3FF] border-r-[#00A3FF]">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2  rounded-md">
                      <BookOpen className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Innovative Learning</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Hands-on training, AI-driven tools, and real-world projects to
                        build future-ready skills and industry expertise.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className=" bg-gray-50 flex items-center justify-center">
                  <div className="relative w-full  overflow-hidden">
                    <div className="p-[3px]  bg-gradient-to-b from-[#00A3FF] via-[#00A3FF] to-[#00A3FF]/10 rounded-2xl">
                      <div className=" p-1 rounded-2xl bg-white">
                        <div className="flex flex-col md:flex-row items-start  gap-6 ">
                          <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                            <Presentation size={15} className="text-blue-500" />
                          </div>
                          <div>
                            <h2 className=" font-bold text-gray-800 py-3">Innovative Learning</h2>
                            <p className="text-sm text-gray-600 mt-1">
                              Hands-on training, AI-driven tools, and real-world projects to
                              build future-ready skills and industry expertise.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* Card 2 */}

                <div className="bg-gray-50 p-4 rounded-lg border-2 border-t-[#00A3FF] border-b-[#00A3FF] border-l-[#00A3FF] border-r-[#00A3FF]">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2 rounded-md">
                      <Briefcase className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Career Success</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Partnered with 50+ institutions, shaping the next-gen tech
                        leaders with guidance for MAANG and top-tier opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative top-5">
                <div className="">
                  <Link href="/Aboutus">
                  <button className='my-4 flex items-center gap-2 justify-center px-6 py-4 rounded-full bg-gradient-to-r from-[#13D8FB] to-[#00A3FF] text-white'>
                    View More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

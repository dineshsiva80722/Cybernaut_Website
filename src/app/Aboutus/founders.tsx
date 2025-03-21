'use client';
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { useState, useEffect } from 'react';
import FounderCard from '@/app/Aboutus/Mobile-UI/FounderCard'
import AnimatedTooltip from '@/components/ui/animated-tooltip'
import { NumberTicker } from "@/components/magicui/number-ticker";
import { StaticImageData } from 'next/image';

const people : { id: number; name: string; designation: string; image: string | StaticImageData; }[] = [
  {
    id: 1,
    name: "N.R.Bharani Dharan",
    designation: "Grapic Designer",
    image: "https://res.cloudinary.com/dn60aovto/image/upload/v1742386633/Bharanik_lkp0mm.png"
  },
  {
    id: 2,
    name: "Mohan",
    designation: "Data Analyst",
    image: "https://res.cloudinary.com/dn60aovto/image/upload/v1742386634/Motta_sbzvjc.png"
  },
  {
    id: 3,
    name: "Dinesh",
    designation: "Web Developer",
    image: "https://res.cloudinary.com/dn60aovto/image/upload/v1742386634/Dinrsh_gnoytj.png"
  },
  {
    id: 4,
    name: "Chezhaiyan",
    designation: "Web Developer",
    image: "https://res.cloudinary.com/dn60aovto/image/upload/v1742386633/ChALIYAN_ahfzsr.png"
  }

];

const images = ["https://res.cloudinary.com/dn60aovto/image/upload/v1742450995/JS_hkszd9.png", "https://res.cloudinary.com/dn60aovto/image/upload/v1742451262/Manish_q6qmq6.png"]; // Array of images

const founders = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextImage();
      }
      console.log(images);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isHovered]);

  return (
    <>
      <div className='hidden'>
        <h1 className='lg:text-3xl text-2xl flex items-center  font-bold text-center my-2 '>MEET OUR <span className='text-blue-500'>FOUNDERS</span></h1>
        <p className='lg:text-lg mx-auto my-8 lg:px-[130px] lg:w-11/12 w-10/12 lg:text-center text-start xl:container '>Unlock your potential with our advanced educational tools and top-tier training. Join 10,000+ successful learners and enhance your skills with Tech Trio, Full Stack, UI & UX, and more. Find the perfect program for your career goals today.</p>
        <div>
          <section className=''>
            <Card className="relative mx-auto w-[70rem]  h-[35rem] z-40 rounded-[3rem] lg:block hidden bg-[#00A3FF]/10 lg:border-b-blue-500 border-b-0 border-r-2  border-t-2 border-l-2 overflow-hidden border-blue-500 p-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start  lg:justify-between">
                <div className="space-y-6 lg:max-w-[60%] hidden lg:block p-5">
                  <h2 className="text-xl text-gray-600 font-medium">Founder & CEO</h2>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                    Jayasurya Gnanavel
                  </h1>
                  <p className="text-lg text-justify  leading-relaxed text-gray-800">
                    Jaya Surya is a passionate philomath from India, dedicated to teaching, inspiring, and shaping future leaders.
                    Specializing in career and business strategy, he guides youth in discovering their purpose and pursuing it confidently.
                    With a mission to empower the next generation, he encourages bold thinking, decisive action, and impactful leadership.
                  </p>
                </div>
                <div className="lg:flex hidden justify-center items-center space-y-8 ">
                  <div className="relative w-[300px] h-[354px] transition-all duration-400 hover:scale-110 rounded-lg overflow-hidden">
                    <div className="first-content h-full w-full flex justify-center items-center transition-all duration-400">
                      <Image
                        width={300}
                        height={354}
                        src='https://res.cloudinary.com/dn60aovto/image/upload/v1742450995/JS_hkszd9.png'
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex hidden justify-start items-center relative -left-[2.3rem] top-[3.7rem] pb-4  w-[30rem] h-28  rounded-br-[3rem] rounded-bl-[3rem]  shadow-[0.1rem_0.1rem_0_0] shadow-blue-500 z-30">
                <Button className='bg-blue-500  p-8 px-10  rounded-full text-lg mx-10'>Let's Contect</Button>
                <div className=' lg:flex hidden justify-center  items-center flex-col relative -left-5 w-full '>
                  <div className="flex flex-row items-start relative justify-start w-[14rem]">
                    <AnimatedTooltip items={people} />
                  </div>
                  <div className="flex">
                    <p className="text-lg w-[15rem] text-gray-800">
                      Students Trained <span className="text-2xl font-bold">30K+</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute hidden lg:block bottom-0 left-[29.8rem] top-[22rem] right-0 w-[60rem] h-28  rounded-t-[3rem] mx-auto shadow-[-0.1rem_-0.1rem_0_0] rounded-tr-none rounded-bl-none shadow-blue-500">
              </div>

            </Card>
            <div className='lg:flex hidden justify-around gap-0 mx-auto relative  -top-[12.9rem] left-[15.5rem] bg-white w-[41rem] h-52 rounded-tl-[3rem]  z-40'>
              <div className='w-[20rem] m-5 h-44 rounded-[2rem] border-2 border-blue-500 p-5 '>
                <h1 className='text-sm font-bold '>Young Entrepreneurship Award</h1>
                <h1 className='text-sm py-3'>Recognized for visionary leadership and innovation in education.</h1>
                <h1 className='text-3xl font-bold py-2'>
                  <NumberTicker
                    value={98}
                    className="whitespace-pre-wrap text-3xl font-bold tracking-tighter text-black dark:text-white"
                  />

                  %</h1>
              </div>
              <div className='w-[20rem] m-5 h-44 rounded-[2rem]  border-2 border-blue-500 p-5'>
                <h1 className='text-md font-bold '>Training 50,000+ Students</h1>
                <h1 className='text-sm py-3'>Empowered thousands with skills for career success.</h1>
                <h1 className='text-3xl font-bold py-2'>
                  <NumberTicker
                    value={98}
                    className="whitespace-pre-wrap text-3xl font-bold tracking-tighter text-black dark:text-white"
                  />
                  %
                </h1>
              </div>
            </div>
          </section>
          <section className='relative hidden lg:block -top-20'>
            <Card className="relative mx-auto w-[70rem] bg-zinc-500  h-[37rem] z-40 rounded-[3rem] border-b-white border-b-0 border-r-2  border-t-2 border-l-2 overflow-hidden bg-transparent border-blue-500 p-8">
              <div className="flex flex-col gap-8  lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:w-[400px]">
                  <div className="flex justify-center items-center space-y-8">
                    <div className="relative w-[300px] h-[354px] transition-all duration-400 hover:scale-110 rounded-lg overflow-hidden">
                      <div className="first-content h-full w-full flex justify-center items-center transition-all duration-400">
                        <Image
                          width={300}
                          height={354}
                          src="https://res.cloudinary.com/dn60aovto/image/upload/v1742451262/Manish_q6qmq6.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 lg:max-w-[60%] ">
                  <h2 className="text-2xl font-medium">Co-Founder & President</h2>
                  <h1 className="text-4xl py-3 font-bold tracking-tight lg:text-5xl">
                    Manish Kumar
                  </h1>
                  <p className="text-lg text-justify leading-relaxed text-gray-800">
                    B. Manish Kumar, President and UI/UX Designer at Cybernaut, combines design expertise with strategic vision. His commitment to quality drives innovation and supports the company’s growth, shaping Cybernaut’s journey toward long-term success and excellence in education and technology.
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-center pb-20 items-center bottom-[0.1rem] -right-1  w-[30rem] h-24 rounded-br-[3rem]  rounded-bl-[3rem] shadow-[-0.1rem_0.1rem_0_0] shadow-blue-500">
                <div className=' flex justify-center items-center flex-col w-1/3 h-20'>
                  <div className="flex flex-row items-start  relative   justify-start  w-[14rem]">
                    <AnimatedTooltip items={people} />
                  </div>
                  <div className="flex">
                    <p className="text-lg w-[13rem] text-gray-800">
                      Students Trained <span className="text-2xl font-bold">30K+</span>
                    </p>
                  </div>
                </div>
                <Button className='p-8 px-8 bg-blue-500 rounded-full text-lg mx-10 '>Let's Contect</Button>
              </div>
              <div className="absolute bottom-0 top-[25rem] -left-[0.1rem] w-[40rem] h-28  rounded-t-[3rem] mx-auto shadow-[0.1rem_-0.1rem_0_0] rounded-tl-none rounded-tr-[2rem]  rounded-bl-none shadow-blue-500">
              </div>
            </Card>
            <div className='flex justify-center mx-auto relative -top-[11.8rem] -left-[15.3rem] z-40 bg-white w-[40.5rem] h-52 rounded-tr-[2rem]'>
              <div className='w-[18rem] m-5 h-44 rounded-[2rem] p-5 border-2 border-blue-500  absolute left-0 top-0 right-0 bottom-0'>
                <h1 className='text-sm font-bold '>Young Entrepreneurship Award</h1>
                <h1 className='text-sm py-3'>Recognized for visionary leadership and innovation in education.</h1>
                <h1 className='text-2xl font-bold py-2'>
                  <NumberTicker
                    value={98}
                    className="whitespace-pre-wrap text-3xl font-bold tracking-tighter text-black dark:text-white"
                  />
                  %</h1>
              </div>
              <div className='w-[18rem] m-5 h-44 rounded-[2rem] p-5 border-2 border-blue-500 absolute right-0'>
                <h1 className='text-md font-bold '>Training 50,000+ Students</h1>
                <h1 className='text-sm py-3'>Empowered thousands with skills for career success.</h1>
                <h1 className='text-2xl font-bold py-2'>
                  <NumberTicker
                    value={98}
                    className="whitespace-pre-wrap text-3xl font-bold tracking-tighter text-black dark:text-white"
                  />
                  %</h1>
              </div>
            </div>
          </section>
        </div>
        <div className='flex lg:hidden justify-center mx-auto  bg-sky-100 w-12/12 min-h-96'>
          <div className='flex justify-center w-full mx-auto bg-gray-100/0'>
            <FounderCard />
          </div>
        </div>
      </div>


      {/* ================================================================================================================ */}
      <section className='min-h-screen py-20'>
        <div className='flex flex-col justify-center  space-y-5 mx-auto py-10'>
          <h1 className='lg:text-3xl text-2xl   text-center  font-bold my-2 gap-2 '>MEET OUR FOUNDERS </h1>
          <p className='text-center max-w-3xl mx-auto'>
            Unlock your potential with our advanced educational tools and top-tier training. Join 10,000+ successful learners and enhance your skills with Tech Trio, Full Stack, UI & UX, and more. Find the perfect program for your career goals today.
          </p>
        </div>
        <div className=" px-10 flex flex-col md:flex-row items-center justify-between gap-5  mx-auto">
          {/* Left Content */}
          <div className="w-full md:w-1/2 min-h-96 flex items-center justify-center   ">
            <div className='w-[33rem] min-h-80  space-y-2'>
              <h1 className="text-3xl md:text-2xl lg:text-2xl font-bold    text-[#1F1F3D]">
                Hello, I'm Jayasurya Gnanavel
              </h1>
              <h2 className="text-xl md:text-xl text-[#00A3FF] font-semibold">
                Founder & CEO
              </h2>
              <p className="text-gray-600 text-md leading-relaxed ">
                Jaya Surya is a passionate philomath from India, dedicated to teaching, inspiring, and shaping future leaders. Specializing in career and business strategy, he guides youth in discovering their purpose and pursuing it confidently. With a mission to empower the next generation, he encourages bold thinking, decisive action, and impactful leadership.
              </p>
              <div className="flex flex-row items-start relative justify-start w-[14rem]">
                <AnimatedTooltip items={people} />
              </div>
              <div className='flex justify-between items-center'>
                <p className="text-lg w-[15rem] py-2 text-gray-800">
                  Students Trained <span className="text-2xl font-bold">30K+</span>
                </p>
                <div className=' flex gap-2 justify-center'>
                  <a href="https://www.instagram.com/jsgnanaveloff?igsh=cjhzdWpjNHRrcTRx">
                    <span className='Instagram bg-[#F6F6F6] w-8 h-8 flex justify-center items-center   rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2A254D" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" /><path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clipRule="evenodd" /></svg>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/jayasurya-gnanavel-b96300197">
                    <span className='Linked In bg-[#F6F6F6] w-8 h-8 flex justify-center items-center   rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#2A254D"><path fillRule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" clipRule="evenodd" /><path d="M7.2 8.809H4V19.5h3.2z" /></g></svg>
                    </span>
                  </a>
                </div>
              </div>
              <a href="https://www.linkedin.com/in/jayasurya-gnanavel-b96300197">

                <Button className='p-8 px-8 bg-blue-500 rounded-full text-lg  '>Get in Touch</Button>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[30rem] space-y-6  flex  justify-center ">
            <div className='relative  w-[29rem] min-h-96'>
              <div className='w-80 h-80 bg-blue-200 rounded-[2rem] absolute -right-5 -bottom-1'>
              </div>
              <Image
                width={300}
                height={354}
                src="https://res.cloudinary.com/dn60aovto/image/upload/v1742450995/JS_hkszd9.png"
                alt="Profile"
                className="rounded-[2rem] w-[30rem] relative z-10 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="min-h-screen px-10 flex flex-col md:flex-row items-center justify-between gap-5  mx-auto">

          <div className="w-full md:w-1/2 h-[30rem] space-y-6  flex  justify-center ">
            <div className='relative  w-[29rem] min-h-96'>
              <div className='w-80 h-80 bg-blue-200 rounded-[2rem] absolute -left-5 -bottom-5'>
              </div>
              <Image
                width={300}
                height={354}
                src="https://res.cloudinary.com/dn60aovto/image/upload/v1742451262/Manish_q6qmq6.png"
                alt="Profile"
                className="rounded-[2rem] w-[30rem] h-[30rem] relative z-10 object-cover"
              />
            </div>
          </div>


          <div className="w-full md:w-1/2 min-h-96 flex items-center justify-center   ">
            <div className='w-[33rem] min-h-80  space-y-3'>
              <h1 className="text-3xl md:text-2xl lg:text-2xl font-bold    text-[#1F1F3D]">
                Hello, I’m Manish Kumar
              </h1>
              <h2 className="text-xl md:text-xl text-[#00A3FF] font-semibold">
                Co-Founder & President
              </h2>
              <p className="text-gray-600 text-md leading-relaxed ">
                B. Manish Kumar, President and UI/UX Designer at Cybernaut, combines design expertise with strategic vision. His commitment to quality drives innovation and supports the company’s growth, shaping Cybernaut’s journey toward long-term success and excellence in education and technology.              </p>
              <div className="flex flex-row items-start relative justify-start w-[14rem]">
                <AnimatedTooltip items={people} />
              </div>
              <div className='flex justify-between items-center space--'>
                <p className="text-lg w-[15rem] py-2 text-gray-800">
                  Students Trained <span className="text-2xl font-bold">10K+</span>
                </p>
                <div className=' flex gap-2 justify-center'>
                  <a href="https://www.instagram.com/i.n.t.e.r.n.e.t.m.o.n.s.t.e.r?igsh=anV2OTdhM2hyaDBp">
                    <span className='Facebook bg-[#F6F6F6] w-8 h-8 flex justify-center items-center   rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2A254D" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" /><path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clipRule="evenodd" /></svg>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/manish-kumar-b-175a701b0">
                    <span className='Linked In bg-[#F6F6F6] w-8 h-8 flex justify-center items-center   rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#2A254D"><path fillRule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" clipRule="evenodd" /><path d="M7.2 8.809H4V19.5h3.2z" /></g></svg>
                    </span>
                  </a>
                  {/* <span className='Twitter bg-[#F6F6F6] w-8 h-8 flex justify-center items-center   rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2A254D" d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12" /></svg>
                  </span>
                  <span className='Facebook bg-[#F6F6F6] w-8 h-8 flex justify-center items-center   rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2A254D" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" /><path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clipRule="evenodd" /></svg>
                  </span> */}
                </div>
              </div>
              <a href="https://www.linkedin.com/in/manish-kumar-b-175a701b0">

                <Button className='p-8 px-8 bg-blue-500 rounded-full text-lg  '>Get in Touch</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default founders;
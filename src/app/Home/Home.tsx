'use client';
import { gsap } from 'gsap';
import Image from 'next/image';
import Slider from "react-slick";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import Founder from '@/app/Home/Mobile-Components/Founder_img';
import AnimatedTooltip from '@/components/ui/animated-tooltip'
import React, { useEffect, useState, useRef, useCallback } from 'react';
import './css/MOU.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



gsap.registerPlugin(ScrollTrigger);

function HeroIllustration() {
    const [micSvgTranslateY, setMicSvgTranslateY] = useState(0);
    const [micSvgTranslateX, setMicSvgTranslateX] = useState(0);
    const [micSvg2TranslateX, setMicSvg2TranslateX] = useState(0);
    const [scrollTranslate, setScrollTranslate] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < 500) {
                setMicSvgTranslateY(0);
                setMicSvgTranslateX(0);
            } else if (scrollPosition < 1000) {
                setMicSvgTranslateY(250);
                setMicSvgTranslateX(0);
            } else if (scrollPosition < 1800) {
                setMicSvgTranslateY(250);
                setMicSvgTranslateX(400);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const translateX = Math.min(scrollY * 0.2, 700);
            setMicSvg2TranslateX(translateX);

            if (scrollY < 400) {
                setScrollTranslate(0);
            } else if (scrollY < 500) {
                setScrollTranslate(500);
            } else if (scrollY < 600) {
                setScrollTranslate(600);
            } else if (scrollY < 700) {
                setScrollTranslate(700);
            } else if (scrollY < 800) {
                setScrollTranslate(800);
            } else if (scrollY < 900) {
                setScrollTranslate(900);
            } else if (scrollY < 1000) {
                setScrollTranslate(1000);
            } else {
                setScrollTranslate(1100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const getBorderClass = () => {
        if (scrollTranslate <= 500) return 'border-blue-500 bg-blue-100';
        if (scrollTranslate <= 1000) return 'border-orange-500 bg-orange-100';
        return 'border-green-500 bg-green-100';
    };

    const sliderImages = [
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742388576/teaching2_cbsc8b.jpg',
       'https://res.cloudinary.com/dn60aovto/image/upload/v1742386630/Herosection1_ixcwp8.jpg',
       'https://res.cloudinary.com/dn60aovto/image/upload/v1742386630/Herosection2_pg9smu.jpg',
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386631/Herosection4_fpza5i.jpg',
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386632/herosection5_bycxql.jpg',
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386632/Herosection6_zicjax.jpg',
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386631/Herosection4_fpza5i.jpg',
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386630/Mou_2_oxpf57.jpg',
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386631/Mou_4_jemwd3.jpg',
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386635/Mou_11_irulgg.jpg',
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386630/Community4_uropla.jpg',
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386629/Communit3_pev1so.jpg',
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386630/community2_nu8zpz.jpg',
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386634/Community1_sbfhwy.jpg'
    ];

    const getImageSrc = () => {
        if (scrollTranslate <= 500) return [sliderImages[0], sliderImages[3], sliderImages[5], sliderImages[6], sliderImages[2], sliderImages[4], sliderImages[1]];
        if (scrollTranslate <= 1000) return [sliderImages[8], sliderImages[7], sliderImages[9]];
        return [sliderImages[10], sliderImages[11], sliderImages[12], sliderImages[13]];
    };


    return (
        <div className="flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-16 relative ">

            <div className={`min-w-[42rem]   lg:min-w-[30rem] h-[420px] lg:max-w-xs sm:max-w-md  xl:max-w-[30rem] aspect-square overflow-hidden shadow-2xl border-2 z-20  rounded-2xl lg:rounded-[50px] relative -top-10 lg:top-0 lg:left-20 ${getBorderClass()}`}>
                <Slider
                    dots={false}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3000}
                    arrows={false}
                    afterChange={(index: number) => setCurrentSlide(index)}
                >
                    {getImageSrc().map((image, index) => (
                        <div key={index} className="relative rounded-2xl w-full h-[27rem] overflow-hidden">
                            <Image
                                src={image}
                                alt={`Event Image ${index + 1}`}
                                className="object-cover "
                                fill
                            />
                        </div>
                    ))}
                </Slider>

                <div
                    className='absolute top-4 sm:top-10 text-red-500 right-4 sm:right-20'
                    style={{
                        transform: `translate(${-micSvgTranslateX}px, ${micSvgTranslateY}px)`,
                        transition: 'transform 0.5s ease-out',
                        willChange: 'transform'
                    }}
                >
                </div>
            </div>
            <div className={`absolute lg:w-[470px] right-2 rounded-[70px]  top-5 h-[420px]  ${getBorderClass()}`}>

            </div>
        </div>
    );
}

const getBackgroundColor = (scrollTranslate: number) => {
    if (scrollTranslate === 0) return 'bg-blue-200';
    if (scrollTranslate === 200) return 'bg-orange-200';
    if (scrollTranslate === 300) return 'bg-green-200';
    return 'bg-white';
};

const getBorderColor = (scrollTranslate: number) => {
    if (scrollTranslate === 0) return 'border-blue-400 bg-blue-50/50';
    if (scrollTranslate === 200) return 'border-orange-400 bg-orange-50/50';
    if (scrollTranslate === 300) return 'border-green-400 bg-green-50/50';
    return 'bg-white';
};

const getTextColor = (scrollTranslate: number) => {
    if (scrollTranslate === 0) return 'text-blue-500';
    if (scrollTranslate === 200) return 'text-orange-500';
    if (scrollTranslate === 300) return 'text-green-500';
    return 'text-blue-500';
};

// Function to get content based on scrollTranslate
const getContent = (scrollTranslate: number) => {
    if (scrollTranslate === 0) {
        return "Boost Up and Build Your Tech Career with our Courses ";
    } else if (scrollTranslate === 200) {
        return "Reboot Campus Innovation: Your Hub for Tech World!";
    } else if (scrollTranslate === 300) {
        return " Join CDSC: The Hidden Order of Tech Clans";
    }
    return "Unlock your potential with our advanced educational tools and top-tier training.";
};

export default function Home() {
    const [wordIndex, setWordIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const [scrollTranslate, setScrollTranslate] = useState(0);
    const heroRef = useRef(null);
    const [activeTab, setActiveTab] = useState('tab1');
    const [autoContentIndex, setAutoContentIndex] = useState(0);
    const autoContents = [
        "Boost Up and Build Your Tech Career with our Courses ",
        "Reboot Campus Innovation: Your Go-To Hub for Tech World!",
        "Join CDSC: The Hidden Order of Tech Clans"
    ];

    const [bodycontent, setBodyContent] = useState(0); // Initialize with 0   
    const bodycontents = [
        "Learn to code, build innovative solutions, and shape the digital future. Every line you write brings you closer to new possibilities and powers the next big breakthrough. Step into the world of tech—your adventure begins now!",
        "At Cybernaut Edu-Tech, we empower students to code, create, and innovate with industry-leading tools. Together, let's shape the future of learning and technology!",
        "Connect with tech minds, access exclusive resources, and level up your skills. At CDSC, innovation isn’t just learned—it’s built. Ready to enter the next era of tech?"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBodyContent((prevIndex) => (prevIndex + 1) % bodycontents.length);
        }, 3000); // Change content every 3 seconds

        return () => clearInterval(interval);
    }, []);


    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY;

        if (scrollPosition < 500) {
            setWordIndex(0);
            setScrollTranslate(0);
        } else if (scrollPosition < 1000) {
            setWordIndex(1);
            setScrollTranslate(200);
        } else if (scrollPosition < 1800) {
            setWordIndex(2);
            setScrollTranslate(300);
        } else {
            setScrollTranslate(300);
        }
    }, []);

    useEffect(() => {
        setIsClient(true);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const [content, setContent] = useState('Learn to code, build innovative solutions, and shape the digital future. Every line you write brings you closer to new possibilities and powers the next big breakthrough. Step into the world of tech—your adventure begins now!');
    const [isAnimating, setIsAnimating] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newContent = content;

            if (scrollPosition < 500) {
                newContent = 'Learn to code, build innovative solutions, and shape the digital future. Every line you write brings you closer to new possibilities and powers the next big breakthrough. Step into the world of tech—your adventure begins now!';
            } else if (scrollPosition < 1000) {
                newContent = `At Cybernaut Edu-Tech, we empower students to code, create, and innovate with industry-leading tools. Together, let's shape the future of learning and technology!`;
            } else {
                newContent = `Connect with tech minds, access exclusive resources, and level up your skills. At CDSC, innovation isn’t just learned—it’s built. Ready to enter the next era of tech?`;
            }

            if (newContent !== content) {
                setIsAnimating(true);
                setTimeout(() => {
                    setContent(newContent);
                    setIsAnimating(false);
                }, 300);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [content]);

    useEffect(() => {
        const interval = setInterval(() => {
            setAutoContentIndex((prevIndex) => (prevIndex + 1) % autoContents.length);
        }, 3000); // Change content every 3 seconds

        return () => clearInterval(interval);
    }, []);



    const people: { id: number; name: string; designation: string; image: string | StaticImageData }[] = [
        {
            id: 1,
            name: "N.R.Bharani Dharan",
            designation: "Grapic Designer",
            image: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742386633/Bharanik_lkp0mm.png'
        },
        {
            id: 2,
            name: "Mohan",
            designation: "Data Analyst",
            image: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742386634/Motta_sbzvjc.png'
        },
        {
            id: 3,
            name: "Dinesh",
            designation: "Web Developer",
            image: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742386634/Dinrsh_gnoytj.png'
        },
        {
            id: 4,
            name: "Chezhaiyan",
            designation: "Web Developer",
            image: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742386633/ChALIYAN_ahfzsr.png'
        }

    ];

    return (
        <>

            {/* Desktop View */}
            <div className="min-h-20 container mx-auto hidden pb-20 lg:block">
                <section className='container mx-auto min-h-[140rem]  relative top-20'>
                    <main className='w-[91rem]  mx-auto  h-[40rem] rounded-xl sticky top-20 overflow-hidden p-5 shadow-[0px_-80px_50px_5px_#F8F8F8]'>
                        {/* Main content area */}

                        <div className="grid md:grid-cols-2 lg:grid-cols-2   gap-8 items-center">

                            <div className='h-[26rem] w-[46rem] p-5 pt-14 ml-12 space-y-6 '>
                                <p style={{ lineHeight: '60px' }} className="text-2xl md:text-3xl w-full text-start lg:text-[45px] font-bold transition-all duration-300 ease-in-out">
                                    {getContent(scrollTranslate)}
                                </p>
                                <div className=" w-full">
                                    <div className="transform  overflow-hidden">
                                        <h1
                                            className={`
                                                               text-[18px]  text-gray-500
                                                               transform transition-all duration-300 ease-in-out
                                                               ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}
                                                             `}
                                        >
                                            {content}

                                        </h1>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <button className="overflow-hidden w-28 md:w-40 p-2   md:px-6 py-3 bg-sky-100 text-black border-none rounded-full text-base md:text-lg font-medium cursor-pointer relative z-10 group">
                                        Contact us
                                        <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                                        <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                                        <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                                        <Link href="/contact">
                                            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute text-white top-3 left-6 z-10 text-lg">Contact us</span>
                                        </Link>                          
                                    </button>
                                    <Link href="/Program">
                                    <button className="inline-flex items-center px-4  md:px-6 py-3 border border-transparent text-sm md:text-lg font-medium rounded-full text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                        Explore Solutions
                                    </button>
                                    </Link>
                                </div>


                                <div className="flex w-6/12 items-center justify-start">
                                    <div className='w-1/2 h-16 space-y-3'>
                                        <h6 className='text-[16px] w-60 font-medium text-gray-400'>Students Trusted on</h6>
                                        <div className="flex flex-row items-start  relative   justify-start  w-[15rem] gap-2">
                                            <AnimatedTooltip items={people} />
                                            <h1 className='pl-5 font-bold text-[25px]'>1L+</h1>
                                        </div>
                                    </div>
                                    <div className='w-1/2 h-16 space-y-3'>
                                        <h6 className='text-[16px] text-end font-medium text-gray-400'>Students Trained</h6>
                                        <h1 className='pl-5 text-end font-bold text-[25px]'>75K+</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <HeroIllustration />
                            </div>


                            <section className={`absolute left-96 right-0 top-0 mx-auto w-52 h-32 mt-5  place-content-center rounded-3xl z-50 transition-all duration-500 ease-in-out ${getBackgroundColor(scrollTranslate)}`}
                                style={{ transform: `translateY(${scrollTranslate * 1}px)` }}
                            >
                                <div id="animatedBox" className={`relative w-52 h-28 bg-white mx-auto place-content-center rounded-3xl b border-2 ${getBorderColor(scrollTranslate)} z-50 left-5 top-3 transition-all duration-500 ease-in-out`}>
                                    <div className='text-md mx-auto  px-1 font-normal  text-gray-600 p-2'>
                                        {/* <h1>Cybernaut Edu-Tech</h1> */}
                                        <h1 className='text-[0.8rem] p-4 '> <span className={`font-semibold  ${getTextColor(scrollTranslate)}`}>{['Connecting Minds, Collaborating on Ideas, and Creating the Future', 'Sharing Our Knowledge to Inspire Growth and Innovation', 'Connecting Minds, Collaborating on Ideas, and Creating the Future'][wordIndex]}</span></h1>
                                        {/* <h1 className='text-[0.8rem]'> <span className={`font-semibold ${getTextColor(scrollTranslate)}`}>{['', 'Followers', 'Workers'][wordIndex]}</span></h1> */}
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className='w-screen relative t -left-10 h-20 bg-gradient-to-b from-white/10 via-white/90 to-white'>

                        </div>
                        <div style={{
                            transform: `translateY(${scrollTranslate * -1.9}px)`,
                            transition: 'transform 0.3s ease-out'
                        }}
                            className={`w-10/12 my-5 -z-10 rounded-r-[25rem] border-[0.2rem]  border-l-transparent border-b-transparent left-0 pt-20 h-[135.1rem] absolute top-16 ${getBorderColor(scrollTranslate)}`}>
                        </div>
                    </main>

                </section>
            </div>

            <div className="w-full min-h-screen hidden md:block lg:hidden bg-gray-50">
                {/* Tablet View */}
                <section className='md:block w-full min-h-screen'>
                    <div className="relative w-full">
                        <div className="relative top-10 left-0 right-0 p-10">
                            <div className="container mx-auto">
                                <div className="items-center max-w-4xl mx-auto">
                                    <div className='w-full  py-5 p-5'>
                                        <p
                                            style={{ lineHeight: '1.2' }}
                                            className="text-2xl md:text-2xl h-20 tracking-wide py-5 text-start lg:text-5xl font-extrabold transition-all duration-300 ease-in-out"
                                        >
                                            {autoContents[autoContentIndex]}
                                        </p>
                                        <div className="h-36 w-full py-1">
                                            <div className="transform overflow-hidden">
                                                <h1
                                                    className={`
                                                          text-lg text-gray-500
                                                            transform transition-all duration-300 ease-in-out
                                                             ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}
                                                                `}
                                                >
                                                    {bodycontents[bodycontent]}
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="py-2 flex gap-4">
                                            <button className="overflow-hidden w-28 md:w-32 p-2 h-12 bg-sky-100 text-black border-none rounded-full text-base md:text-lg font-medium cursor-pointer relative z-10 group">
                                                Contact us
                                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                                                <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute text-white top-2.5 left-5 z-10">Contact us</span>
                                            </button>
                                            <button className="inline-flex items-center px-4 md:px-6 py-3 border border-transparent text-sm md:text-base font-medium rounded-full text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                                Explore Solutions
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <HeroIllustration />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* Mobile View */}
            <section className='block md:hidden w-full min-h-screen mt-10'>
                <div className="heading pb-5 p-4">
                    <div className='w-full py-5 min-h-[13rem] '>
                        <p
                            style={{ lineHeight: '1.2' }}
                            className="text-lg  h-20 tracking-wide py-3 text-start lg:text-5xl font-extrabold transition-all duration-300 ease-in-out"
                        >
                            {autoContents[autoContentIndex]}
                        </p>
                        <div className="h-32 w-full">
                            <div className="transform overflow-hidden">
                                <h1
                                    className={`
                                                          text-sm text-gray-500
                                                            transform transition-all duration-300 ease-in-out
                                                             ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}
                                                                `}
                                >
                                    {bodycontents[bodycontent]}
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 ">
                        <button className='lg:w-80 w-1/2 h-10 text-xs border bg-sky-500 text-white border-sky-500 rounded-sm py-2'>
                            get started
                        </button>
                        <button className='lg:w-80 w-1/2 h-10 text-sm border border-sky-500 rounded-sm py-2'>
                            Explore Solutions
                        </button>
                    </div>

                    <div className="flex w-12/12 items-center justify-start pt-3">
                        <div className='w-1/2 h-16 space-y-3'>
                            <h6 className='text-sm w-60 font-medium text-gray-400'>Students Trusted on</h6>
                            <div className="flex flex-row items-start  relative   justify-start  w-[15rem] gap-2">
                                <AnimatedTooltip items={people} />
                                <h1 className='pl-5 font-bold text-[25px]'>1L+</h1>
                            </div>
                        </div>
                        <div className='w-1/2 h-16 space-y-3'>
                            <h6 className='text-sm text-end font-medium text-gray-400'>Students Trained</h6>
                            <h1 className='pl-5 text-end font-bold text-[25px]'>75K+</h1>
                        </div>
                    </div>
                </div>

                <div className="w-full h-96 relative items-center justify-center flex">
                    <div className="lg:w-80 h-72 relative left-5 top-5 mx-auto rounded-xl bg-sky-300"></div>
                    <div className="w-80   absolute border-2 overflow-hidden border-sky-300 mx-auto rounded-xl bg-white">
                        <div className='relative '>
                            <Image
                                src="https://res.cloudinary.com/dn60aovto/image/upload/v1742386632/JS_fp6d5p.png"
                                alt="Founder"
                                width={100}
                                height={100}
                                className="-mt-3 mx-auto w-full z-0 object-cover"
                            />
                            <div className="absolute left-0 -top-4 mx-auto lg:w-full z-60">
                                <Founder />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
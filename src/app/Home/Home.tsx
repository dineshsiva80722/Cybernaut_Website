'use client';

import { gsap } from "gsap";
import Image from 'next/image';
import Slider from "react-slick";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import AnimatedTooltip from '@/components/ui/animated-tooltip'
import React, { useEffect, useState, useCallback } from 'react';
import './css/MOU.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight } from 'lucide-react';



gsap.registerPlugin(ScrollTrigger);
function HeroIllustration() {
    const [micSvgTranslateY, setMicSvgTranslateY] = useState(0);
    const [micSvgTranslateX, setMicSvgTranslateX] = useState(0);
    const [scrollTranslate, setScrollTranslate] = useState(0);
    const [, setCurrentSlide] = useState(0)


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
            // const translateX = Math.min(scrollY * 0.2, 700);

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
        'https://res.cloudinary.com/dn60aovto/image/upload/v1742386634/Community1_sbfhwy.jpg'
    ];

    const getImageSrc = () => {
        if (scrollTranslate <= 500) return [sliderImages[0], sliderImages[3], sliderImages[5], sliderImages[6], sliderImages[2], sliderImages[4], sliderImages[1]];
        if (scrollTranslate <= 1000) return [sliderImages[8], sliderImages[7], sliderImages[9]];
        return [sliderImages[10], sliderImages[11], sliderImages[12]];
    };



    return (
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-16 relative ">
            <div className={` lg:max-w-xs sm:max-w-md  xl:max-w-[30rem] mr-12 aspect-square overflow-hidden shadow-2xl border-2 z-20  rounded-2xl lg:rounded-[50px] relative -top-10 lg:top-0 lg:left-20 ${getBorderClass()}`}>
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
                        <div key={index} className="relative rounded-2xl min-w-[23rem] h-[30rem] overflow-hidden">
                            <Image
                                src={image}
                                alt={`Event Image ${index + 1}`}
                                className="object-cover h-full "
                                width={550}
                                height={300}
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
            <div className={`absolute rounded-[50px] min-w-[25rem] h-[30rem] -right-5 top-6  sm:max-w-md  ${getBorderClass()}`}>

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
    const [scrollTranslate, setScrollTranslate] = useState(0);
    const [autoContentIndex, setAutoContentIndex] = useState(0);
    const autoContents = [
        "Boost Up and Build Your Tech Career with our Courses ",
        "Reboot Campus Innovation: Your Go-To Hub for Tech World!",
        "Join Cybernaut Developers Student Community: The Hidden Order of Tech Clans"
    ];

    const [bodycontent, setBodyContent] = useState(0); // Initialize with 0   
    const bodycontents = [
        "Learn to code, build innovative solutions, and shape the digital future. Every line you write brings you closer to new possibilities and powers the next big breakthrough. Step into the world of tech—your adventure begins now!",
        "At Cybernaut Edu-Tech, we empower students to code, create, and innovate with industry-leading tools. Together, let's shape the future of learning and technology!",
        "Connect with tech minds, access exclusive resources, and level up your skills. At CDSC, innovation isn’t just learned—it’s built. Ready to enter the next era of tech?"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBodyContent((prevIndex) => (prevIndex + 1));
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
                setContent(newContent);
                setIsAnimating(false);

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
            name: "Anitha",
            designation: "Grapic Designer",
            image: 'https://res.cloudinary.com/dn60aovto/image/upload/v1745684466/iamge_5_p6bhi7.jpg'
        },
        {
            id: 2,
            name: "Rajkumar",
            designation: "Data Analyst",
            image: 'https://res.cloudinary.com/dn60aovto/image/upload/v1745684466/image_3_ak86ua.jpg'
        },
        {
            id: 3,
            name: "Kavitha",
            designation: "Web Developer",
            image: 'https://res.cloudinary.com/dn60aovto/image/upload/v1745684468/image_4_klk704.jpg'
        },
        {
            id: 4,
            name: "MohanKumar",
            designation: "Web Developer",
            image: 'https://res.cloudinary.com/dn60aovto/image/upload/v1745684469/image_1_ozdukk.jpg'
        }

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setAutoContentIndex((prevIndex) => (prevIndex + 1) % autoContents.length);
                setBodyContent((prevIndex) => (prevIndex + 1) % bodycontents.length);
                setIsAnimating(false);
            }, 300);
        }, 3000); // Change content every 9 seconds

        return () => clearInterval(interval);
    }, []);
    // slider
    const [, setCurrentSlide] = useState(0)
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

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setAutoContentIndex((prev) => (prev + 1) % autoContents.length);
                setBodyContent((prev) => (prev + 1) % bodycontents.length);
                setIsAnimating(false);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    // mic animeation

    const [scrollY, setScrollY] = useState(0);
    const [, setCurrentQuote] = useState(0);

    const quotes = [
        "Connecting Minds, Collaborating on Ideas, and Creating the Future",
        "Sharing Our Knowledge to Inspire Growth and Innovation",
        "Building Tomorrow's Solutions Through Creative Collaboration"
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 2) % quotes.length);
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    // Calculate smooth vertical movement
    const moveDistance = Math.min(scrollY * 0.3, 450); // Stop at 800px

    return (
        <>
            {/* Desktop View */}
            <div className="container mx-auto hidden lg:block w-full max-w-[90vw] min-h-screen px-4 pb-40">
                <section className="container mx-auto min-h-[140rem] relative top-24 w-full">
                    <main className="mx-auto h-auto w-12/12 rounded-xl sticky top-24 place-content-center overflow-hidden shadow-[0px_-80px_50px_5px_#F8F8F8]">                        <div className="flex items-center justify-center w-full">
                        <div className="min-h-auto w-1/2 space-y-4">
                            <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl w-[35rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] text-start font-semibold md:font-medium lg:font-semibold xl:font-bold transition-all duration-300 ease-in-out">
                                <span className="text-[clamp(1.5rem,4vw,2.5rem)]">
                                    {getContent(scrollTranslate)}
                                </span>
                            </h1>
                            <div className="w-full">
                                <div className="transform py-5 overflow-hidden">
                                    <h1 className="text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] w-[35rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] text-gray-500 transition-all duration-300 ease-in-out">
                                        {content}
                                    </h1>
                                </div>
                            </div>
                            <div className='max-w-[25vw] md:max-w-[20vw] lg:max-w-[25vw] xl:max-w-[30vw] overflow-hidden space-y-3'>
                                <div className="flex w-full max-w-[50vw] md:max-w-[45vw] lg:max-w-[50vw] xl:max-w-[60vw] items-center justify-between">
                                    <div className="w-1/2">
                                        <button className="overflow-hidden w-24 md:w-32 lg:w-36 xl:w-40 p-2 px-6 py-2 bg-sky-100 text-black border-none rounded-full text-sm md:text-base lg:text-lg xl:text-xl font-medium cursor-pointer relative z-10 group">
                                            Contact us
                                            <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                                            <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                                            <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                                            <Link href="/contact">
                                                <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute text-white top-2 left-8 z-10 text-lg">Contact us</span>
                                            </Link>
                                        </button>
                                    </div>
                                    <div className="">
                                        <Link href="/Program">
                                            <button className="flex justify-center cursor-pointer min-w-36 md:min-w-40 lg:min-w-44 xl:min-w-48 py-2 rounded-full text-white bg-[#2A2A2A] px-5">
                                                Explore Solutions
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex w-full max-w-[45vw] md:max-w-[40vw] lg:max-w-[45vw] xl:max-w-[50vw] items-center justify-start">
                                    <div className="w-1/2">
                                        <h6 className="text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-medium text-gray-400">Students Trusted on</h6>
                                        <div className="flex flex-row items-start justify-start w-[12rem] md:w-[10rem] lg:w-[12rem] xl:w-[14rem] gap-2">
                                            <AnimatedTooltip items={people} />
                                            <h1 className="pl-5 font-bold text-[22px] md:text-[20px] lg:text-[22px] xl:text-[24px]">1L+</h1>
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-16 space-y-3 text-end">
                                        <h6 className="text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-medium text-gray-400">Students Trained</h6>
                                        <h1 className="pl-5 font-bold text-[22px] md:text-[20px] lg:text-[22px] xl:text-[24px]">75K+</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden relative right-10 md:block">
                            <HeroIllustration />
                        </div>
                    </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
                            <div className="absolute top-0 left-60 md:left-40 lg:left-60  z-50 right-0 mx-auto w-full">
                                <div className="relative w-full max-w-md mx-auto" style={{
                                    transform: `translateY(${moveDistance}px)`,
                                    transition: 'transform 0.4s ease-out'
                                }}>
                                    <div className={`relative rounded-2xl p-6 shadow-xl w-52 h-28 ${getBackgroundColor(scrollTranslate)}`}>
                                        <div id="animatedBox" className={`relative w-52 h-28 bg-white mx-auto place-content-center rounded-3xl border-2 ${getBorderColor(scrollTranslate)} z-50 left-0 top-0 transition-all duration-500 ease-in-out`}>
                                            <div className='text-md mx-auto px-1 font-normal text-gray-600 p-2'>
                                                <h1 className='text-[0.8rem] p-4'><span className={`font-semibold ${getTextColor(scrollTranslate)}`}>{['Connecting Minds, Collaborating on Ideas, and Creating the Future', 'Sharing Our Knowledge to Inspire Growth and Innovation', 'Connecting Minds, Collaborating on Ideas, and Creating the Future'][wordIndex]}</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-screen relative -left-15 -bottom-5 h-28 bg-gradient-to-b from-white/10 via-white/90 to-white"></div>
                        <div style={{
                            transform: `translateY(${scrollTranslate * -1.9}px)`,
                            transition: 'transform 0.3s ease-out'
                        }} className={`w-10/12 md:w-9/12 lg:w-10/12 xl:w-11/12 my-5 -z-10 rounded-r-[25rem] border-[0.2rem] border-l-transparent border-b-transparent -left-32 pt-20 h-[135.1rem] absolute top-10 ${getBorderColor(scrollTranslate)}`}>
                        </div>
                    </main>
                </section>
            </div>

            {/*Tablet View */}
            <section className="hidden md:block lg:hidden w-full min-h-screen">
                <div className="relative w-full ">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

                    <div className="relative py-16 mt-10 px-8">
                        <div className="container mx-auto">
                            <div className="max-w-4xl mx-auto">
                                <div className="space-y-8">
                                    {/* Main Content */}
                                    <div className="space-y-10">
                                        <h1
                                            style={{ lineHeight: '1.2' }}
                                            className={`text-[clamp(2rem, 2.5vw, 3rem)]  min-h-2  tracking-wide py-3 text-start lg:text-5xl font-extrabold transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                                                }`}
                                        >
                                            {autoContents[autoContentIndex]}
                                        </h1>

                                        <div className="min-h-20">
                                            <p
                                                className={`text-[clamp(1rem, 1.5vw, 1.5rem)] text-gray-600 transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                                                    }`}
                                            >
                                                {bodycontents[bodycontent]}
                                            </p>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-wrap gap-4">
                                            <button className="group relative overflow-hidden px-8 py-3 bg-sky-50 text-sky-600 rounded-full text-base font-medium cursor-pointer transition-all duration-300 hover:text-white">
                                                <span className="relative z-10">Contact us</span>
                                                <div className="absolute inset-0 h-full w-full transform scale-x-0 origin-left transition-transform duration-500 ease-out bg-gradient-to-r from-sky-400 to-sky-600 group-hover:scale-x-100"></div>
                                            </button>

                                            <button className="inline-flex items-center px-8 py-3 text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2">
                                                Explore Solutions
                                                <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="mt-16 relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-purple-100 transform -skew-y-6 rounded-3xl -z-10"></div>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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
                                                    <div key={index} className="relative rounded-2xl min-w-[20rem] h-[30rem] overflow-hidden">
                                                        <Image
                                                            src={image}
                                                            alt={`Event Image ${index + 1}`}
                                                            className="object-cover w-full h-full "
                                                            width={200}
                                                            height={200}
                                                        />
                                                    </div>
                                                ))}
                                            </Slider>
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile View */}
            <section className='block md:hidden container  mt-10'>
                <div className="heading pb-5 p-4">
                    <div className='w-full py-5 min-h-[13rem] '>
                        <p
                            style={{ lineHeight: '1.2' }}
                            className={`text-[26px] min-h-32 tracking-wide py-3 text-start lg:text-5xl font-extrabold transform transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 ' : 'opacity-100'}`}
                        >
                            {autoContents[autoContentIndex]}
                        </p>
                        <div className="min-h-32 w-full">
                            <div className="transform overflow-hidden">
                                <h1
                                    className={`
                                        text-md text-gray-500
                                        transform transition-all duration-300 ease-in-out
                                        ${isAnimating ? 'opacity-0' : 'opacity-100'}
                                                 `}
                                >
                                    {bodycontents[bodycontent]}
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 ">

                        <button className='lg:w-80 w-1/2 h-10 text-xs border bg-sky-500 text-white border-sky-500 rounded-sm py-2'>
                            <Link href="/contact">
                                Get started
                            </Link>
                        </button>
                        <button className='lg:w-80 w-1/2 h-10 text-sm border border-sky-500 rounded-sm py-2'>
                            <Link href="/Program">
                                Explore Solutions
                            </Link>
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

                <div className="w-full min-h-60 relative items-center justify-center flex">
                    <div className="w-10/12 h-72 relative left-5  top-2 mx-auto rounded-xl bg-sky-300"></div>
                    <div className="w-11/12 h-[18rem] absolute border-2 overflow-hidden border-sky-300 mx-auto rounded-xl bg-white">

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
                                <div key={index} className="relative rounded-2xl min-w-[20rem] h-[20rem] overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={`Event Image ${index + 1}`}
                                        className="object-cover w-full h-full "
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}


'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ThreeCourses from './ThreeCourses';
import Keybenifits from './Keybenifits';
import Samplecertificate from './Samplecertificate';
import StartCourse from './Start-course';
import Testimonials from './Testimonials';
import Fqas from './FQAs';
import gsap from 'gsap';
import OurProject from './OurProject';
import { NumberTicker } from "@/components/magicui/number-ticker";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Numberbox from "./Numberbox"
import { User, Star, StarHalf, BarChart3 } from 'lucide-react';
import Contact from '@/app/Home/contact'
import Footer from '@/app/Home/footer'

const content = {
    title: 'Full Stack Development',
    description: 'Our Full Stack Web Development course equips you with essential skills in front-end and back-end development, database design, server-side scripting, and more, preparing you for a successful career as a web developer.',
    enrolled: 1000,
    rating: 4.75,
    level: 'beginner',
    enrollmentMessage: 'To learn this Course online',
    courseDescription: "Our Full Stack Web Development course is designed to provide you with the essential skills needed to succeed as a web developer. Covering both front-end and back-end development, you will learn key technologies like HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. The program is structured to guide you through the entire process of building dynamic, interactive web applications, from designing user interfaces to integrating databases and handling server-side scripting. By the end of the course, you will be well-equipped with the technical expertise and problem-solving abilities required to excel in the competitive world of web development. Start your journey to becoming a full stack developer today!",
    buttons: {
        enrollNow: 'Enroll Now',
    },
    navItems: [
        { name: 'Home >', link: '/' },
        { name: 'Programs >', link: '/Program' },
        { name: 'Full Stack Development', link: '/FullStackDevelopment' },
    ],
    stats: {
        enrolled: 'Enrolled ' + 1000,
        rating: '(4.75)',
    },
    joinMessage: 'Join the Most Popular Tech Trio Course now!',
};

const WebDevelopment = () => {
    const [showCourses, setShowCourses] = useState(false);
    const [showDescription, setShowDescription] = useState(true);
    const [showBenefits, setShowBenefits] = useState(false);
    const [showCertification, setShowCertification] = useState(false);
    const [showRequirements, setShowRequirements] = useState(false);
    const [showTestimonials, setShowTestimonials] = useState(false);
    const [showFAQs, setShowFAQs] = useState(false);

    const descriptionRef = useRef<HTMLDivElement>(null);
    const coursesRef = useRef<HTMLDivElement>(null);
    const benefitsRef = useRef<HTMLDivElement>(null);
    const certificationRef = useRef<HTMLDivElement>(null);
    const requirementsRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const faqsRef = useRef<HTMLDivElement>(null);

    const handleModulesClick = () => {
        setShowCourses(true);
        setShowDescription(false);
        setShowBenefits(false);
        setShowCertification(false);
        setShowRequirements(false);
        setShowTestimonials(false);
        setShowFAQs(false);
        coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDescriptionClick = () => {
        setShowDescription(true);
        setShowCourses(false);
        setShowBenefits(false);
        setShowCertification(false);
        setShowRequirements(false);
        setShowTestimonials(false);
        setShowFAQs(false);
        descriptionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleBenefitsClick = () => {
        setShowBenefits(true);
        setShowCourses(false);
        setShowDescription(false);
        setShowCertification(false);
        setShowRequirements(false);
        setShowTestimonials(false);
        setShowFAQs(false);
        benefitsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCertificationClick = () => {
        setShowCertification(true);
        setShowCourses(false);
        setShowDescription(false);
        setShowBenefits(false);
        setShowRequirements(false);
        setShowTestimonials(false);
        setShowFAQs(false);
        certificationRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleRequirementsClick = () => {
        setShowRequirements(true);
        setShowCourses(false);
        setShowDescription(false);
        setShowBenefits(false);
        setShowCertification(false);
        setShowTestimonials(false);
        setShowFAQs(false);
        requirementsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleTestimonialsClick = () => {
        setShowTestimonials(true); // Show testimonials
        setShowCourses(false);
        setShowDescription(false);
        setShowBenefits(false);
        setShowCertification(false);
        setShowRequirements(false);
        setShowFAQs(false);
        testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFAQsClick = () => {
        setShowFAQs(true); // Show FAQs
        setShowCourses(false);
        setShowDescription(false);
        setShowBenefits(false);
        setShowCertification(false);
        setShowRequirements(false);
        setShowTestimonials(false);
        faqsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const path = usePathname()

    const [visibleOption, setVisibleOption] = useState(0);
    const options = ['Description', 'Modules', 'Benefits', 'Certification', 'Requirements', 'Testimonials', 'FAQs'];

    const handleScroll = (event: React.UIEvent) => {
        const { scrollTop, clientHeight } = event.currentTarget;
        const scrollHeight = event.currentTarget.scrollHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
            setVisibleOption(prev => Math.min(prev + 1, options.length - 1)); // Move to next option
        } else if (scrollTop === 0) {
            setVisibleOption(prev => Math.max(prev - 1, 0)); // Move to previous option
        }
    };
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pin = gsap.to(sectionRef.current, {
            translateX: "-600vw", // Adjusted for 7 sections (100vw * 6)
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "+=3500",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        return () => {
            pin.scrollTrigger?.kill();
            pin.kill();
        };
    }, []);


    return (
        <section className=''>
            <section className='mt-[70px]'>
            <div
                className='flex flex-col lg:flex-row justify-between w-full min-h-[ 569px]'
                style={{ backgroundImage: `url('https://res.cloudinary.com/dn60aovto/image/upload/v1742460377/Fullstack_kc5hsw.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                    {/* Left side content */}
                    <div className='w-full lg:w-1/2 flex items-start justify-center p-5 lg:p-24'>
                        <div className='relative lg:-top-10 w-full'>
                            {/* Navigation */}
                            <div className='flex justify-start h-10 overflow-x-auto lg:overflow-visible'>
                                <div className="flex space-x-1 gap-5">
                                    {content.navItems.map(({ link, name }) => (
                                        <Link
                                            key={link}
                                            href={link}
                                            className={cn(
                                                'text-sm font-medium transition-all hover:text-black whitespace-nowrap',
                                                path === link ? 'text-white' : 'text-white'
                                            )}
                                        >
                                            {name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Course info */}
                            <div className='relative top-14 text-white'>
                                <h1 className='w-[40rem] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>{content.title}</h1>
                                <p className='py-1 w-[50rem] text-base lg:text-lg'>{content.description}</p>

                                {/* Stats */}
                                <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center py-5 text-white gap-3 sm:gap-5'>
                                    <span className='flex items-center justify-center gap-1 text-sm sm:text-base'>
                                        <User className="w-4 h-4 sm:w-5 sm:h-5" />
                                        {content.stats.enrolled}
                                    </span>
                                    <div className="flex flex-wrap items-center gap-1 sm:gap-0">
                                        <div className="flex">
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                            <StarHalf className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                                        </div>
                                        <span className="text-xs sm:text-sm pr-2 sm:pr-5">{content.stats.rating}</span>
                                        <span className='flex items-center gap-1 justify-center text-sm sm:text-base'>
                                            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                                            {content.level}
                                        </span>
                                    </div>
                                </div>

                                <Button className='mt-2 w-32 sm:w-40 h-10 sm:h-12 text-blue-500 text-sm sm:text-base' variant='outline'>
                                    {content.buttons.enrollNow}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right side form */}
                    <div className='w-full lg:w-1/2 flex justify-center lg:justify-end p-5 '>
                        <div className="w-full sm:w-[25rem] h-[400px] rounded-lg shadow p-4 sm:p-6 bg-white relative overflow-hidden mx-auto lg:mr-20 mb-10 lg:mb-0 lg:mt-[60px]">
                            <div className="flex flex-col justify-center items-center">
                                <h2 className="text-lg sm:text-xl text-center font-semibold text-zinc-500">
                                    {content.enrollmentMessage}
                                </h2>
                            </div>

                            <form className="w-full mt-4 space-y-4 sm:space-y-2.5 place-content-center">
                                <div>
                                    <input
                                        className="outline-none h-[36px] border-2 rounded-md px-2 w-full text-slate-500 focus:border-blue-300"
                                        placeholder="Name"
                                        id="Name"
                                        name="Name"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className="outline-none h-[36px] border-2 rounded-md px-2 text-slate-500 w-full focus:border-blue-300"
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                    />
                                </div>
                                <div>
                                    <Numberbox />
                                </div>
                                <div>
                                    <input
                                        className="outline-none h-[36px] border-2 rounded-md px-2 text-slate-500 w-full focus:border-blue-300"
                                        placeholder="Education Qualification"
                                        id="education"
                                        name="education"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className="outline-none h-[36px] border-2 rounded-md px-2 text-slate-500 w-full focus:border-blue-300"
                                        placeholder="Current Profile"
                                        id="currentprofile"
                                        name="currentprofile"
                                        type="text"
                                        required
                                    />
                                </div>

                                <button
                                    className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white"
                                    id="login"
                                    name="login"
                                    type="submit"
                                >
                                    Enroll Now
                                </button>

                                <p className="flex justify-center gap-2 space-x-1 bg-[#EAF7FF] py-1 rounded-md text-[#00A3FF] text-xs sm:text-sm">
                                    <NumberTicker
                                        value={1450}
                                        className="whitespace-pre-wrap font-semibold text-base sm:text-lg tracking-tighter text-[#00A3FF]"
                                    />
                                    enrolled in this course
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className='flex w-11/12 mx-auto h-12 bg-gray-100 sticky -my-12 rounded-t-lg top-[70px] z-10'>
                <ul className='flex w-full justify-start px-2 overflow-auto scroll-smooth lg:space-x-0 space-x-5 font-semibold'>
                    <style jsx>{`ul::-webkit-scrollbar {height:1px;}`}</style>
                    <button className={`w-32 h-10 text-center text-sm ${showDescription ? 'text-blue-600 border-b-2 lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleDescriptionClick}>Description</button>
                    <button className={`w-32 h-10 text-center text-sm ${showCourses ? 'text-blue-600 border-b-2 lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleModulesClick}>Modules</button>
                    <button className={`w-32 h-10 text-center text-sm ${showBenefits ? 'text-blue-600 border-b-2 lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleBenefitsClick}>Benefits</button>
                    <button className={`w-32 h-10 text-center text-sm ${showCertification ? 'text-blue-600 border-b-2 lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleCertificationClick}>Certification</button>
                    <button className={`w-32 h-10 text-center text-sm ${showRequirements ? 'text-blue-600 border-b-2 lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleRequirementsClick}>Requirements</button>
                    <button className={`w-32 h-10 text-center text-sm ${showTestimonials ? 'text-blue-600 border-b-2 lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleTestimonialsClick}>Testimonials</button>
                    <button className={`w-32 h-10 text-center text-sm ${showFAQs ? 'text-blue-600 border-b-2 lg:bg-blue-100 border-blue-600' : ''}`} onClick={handleFAQsClick}>FAQs</button>
                </ul>
            </div>  

            <section className='w-full min-h-[40rem] relative'>
                <div className='lg:w-11/12 bg-[#f5f5f5] shadow-xl mx-auto overflow-hidden rounded-lg'>
                    <div className=" bg-gray-100 flex items-center justify-center p-4">
                        <div ref={descriptionRef} className="w-full  flex flex-col md:flex-row justify-around gap-6  p-4">
                            <div className="w-full md:w-1/2 place-content-center p-4 md:p-8">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">Course Description</h1>
                                <p className="text-xs sm:text-sm md:text-base pt-3 md:pt-5 text-gray-600 text-justify">{content.courseDescription}</p>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                                <div className="w-full h-40 sm:h-48 md:h-60 lg:h-72 rounded-lg bg-gray-300 flex items-center justify-center">
                                    {/* <ImageIcon className="w-12 h-12 text-gray-500" /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={coursesRef} className="w-ful min-h-[20rem]">
                        <ThreeCourses />
                    </div>

                    <div ref={benefitsRef} className="w-ful min-h-[20rem]">
                        <Keybenifits />
                    </div>

                    <div ref={certificationRef} className="w-ful place-content-center">
                        <Samplecertificate />
                    </div>

                    <div ref={requirementsRef} className="w-ful pt-10 place-content-center">
                        <StartCourse />
                    </div>

                    <div className="w-full flex flex-col items-center justify-center p-4">
                        <div className="flex flex-col md:flex-row justify-between items-center w-full  p-4 md:p-5 gap-6 rounded-lg  bg-transparent ">
                            <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-12 ">
                                <h1 className="text-3xl md:text-5xl font-bold">{content.joinMessage}</h1>
                            </div>

                            <div className="w-full md:w-1/2 flex items-center justify-center">
                                <Button
                                    variant="outline"
                                    className="w-full md:w-60 h-12 bg-blue-500 text-white hover:bg-blue-600 shadow-[4px_4px_2px_1px_#3DE4EB] transition-all"
                                >
                                    Enroll Now
                                </Button>
                            </div>
                        </div>
                    </div>


                    <div ref={requirementsRef} className="w-ful pt-10 place-content-center">
                        <OurProject />
                    </div>

                    <div ref={testimonialsRef} className="w-ful pt-10 place-content-center">
                        <Testimonials />
                    </div>

                    <div ref={faqsRef} className="w-ful pt-10 place-content-center">
                        <Fqas />
                    </div>
                    <div ref={faqsRef} className="w-ful pt-10 place-content-center">
                        <Contact />
                    </div>
                    <div ref={faqsRef} className="w-ful pt-10 place-content-center">
                        <Footer />
                    </div>



                </div>
            </section>
        </section>
    )
}

export default WebDevelopment;

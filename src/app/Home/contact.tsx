'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Dancing_Script } from 'next/font/google';
import Link from 'next/link';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

function Contact() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                alert('Thank you for subscribing!');
            } else {
                alert('Failed to subscribe. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
            setEmail('');
        }
    };

    useEffect(() => {
        // Check if script already exists to prevent multiple injections
        if (!document.querySelector('script[src="https://featurable.com/assets/bundle.js"]')) {
            const script = document.createElement("script");
            script.src = "https://featurable.com/assets/bundle.js";
            script.defer = true;
            script.setAttribute("charset", "UTF-8");
            document.body.appendChild(script);
        }
    }, []);



    return (
        <>
        <section className='min-h-80 py-20 w-full'>

            <div className='w-10/12 h-32 mx-auto'>
                <div className=' text-center leading-relaxed animate-fade-in space-y-1'>
                    <h1 className='font-bold text-3xl'> Don't just take our word for it,</h1>
                    <h1 className='text-3xl  text-blue-500 font-bold '>Hear from our students.</h1>
                    <h1 className='text-md  text-gray-500'>Our student's success stories speak volumes about the quality of our programs and mentorship.</h1>
                </div>
            </div>
            <div
                suppressHydrationWarning
                id="featurable-b7323408-197d-4e2d-90e8-054cd79c232e"
                data-featurable-async
                className='min-h-20 w-full'
            ></div>
        </section>
            {/* <FeaturableWidget /> */}
            <section className='relative h-[40rem]  justify-center items-center py-8 md:py-16 px-4 bg-white overflow-hidden'>
                <div className='relative w-full max-w-6xl mx-auto'>
                    <div className='relative w-full lg:h-96 flex shadow-md rounded-2xl bg-white flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 overflow-hidden'>
                        {/* Background Image */}
                        {/* <div className="absolute inset-0 w-full h-full">
                            <Image
                                src={Bgimage}
                                alt="Background Pattern"
                                fill
                                sizes="100vw"
                                priority
                                className="w-full h-full object-cover opacity-10"
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="absolute inset-0"></div>
                        </div> */}

                        {/* Left Section */}
                        <div className='relative w-full lg:w-1/2 p-6 md:p-8 lg:p-12 rounded-3xl transition-shadow duration-300 '>
                            <div className='max-w-md mx-auto space-y-6 md:space-y-4  '>
                                <div className="space-y-6">
                                    <h1 className={`${dancingScript.className} text-3xl md:text-4xl lg:text-5xl text-blue-600 leading-relaxed animate-fade-in`}>
                                        Get your quality
                                    </h1>
                                    <div className="space-y-2">
                                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent'>
                                            Skills Certificate
                                        </h2>
                                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800'>
                                            from the Cybernaut
                                        </h2>
                                    </div>
                                </div>


                                <Link href="/Program">
                                    <button className='group w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r  mt-5 from-[#13D8FB] to-[#00A3FF] px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-200/50 transform hover:-translate-y-0.5 transition-all duration-200'>
                                        Get Started Now
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                    </button>
                                </Link>

                                <div className="flex items-center gap-3 text-gray-500">
                                    <GraduationCap className="w-5 h-5 text-blue-500" />
                                    <span className="text-sm md:text-base">Join 5000+ certified professionals</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className='relative w-full lg:w-1/2 p-6 md:p-8 lg:p-12 backdrop-blur-sm rounded-3xl transition-shadow duration-300'>
                            <div className='max-w-md mx-auto space-y-4'>
                                <div className="space-y-2">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Subscribe to Our Newsletter</h3>
                                    <p className="text-gray-600 md:text-lg">Stay updated with our latest courses and opportunities</p>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-4">

                                    <div className="relative group">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="w-full px-6 py-4 rounded-xl bg-white/80 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none text-base md:text-lg group-hover:border-blue-300"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 text-base md:text-lg"
                                    >
                                        {isLoading ? 'Sending...' : 'Subscribe Now'}
                                    </button>

                                </form>


                                <p className="text-sm md:text-base text-gray-500 text-center">
                                    Join 5,000+ subscribers who are already learning with us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 1s ease-out;
                }
            `}</style>
        </>
    );
}

export default Contact;
import React, { useState, useEffect, useRef } from 'react';

import Image from 'next/image';

const slides = [
    {
        url: "https://res.cloudinary.com/dn60aovto/image/upload/v1742450995/JS_hkszd9.png", // Replace with the actual URL
        title: "Jayasurya",
        Role:"Founder",
        description: "“Jayasurya Gnanavel transforms education, training 2000+ students and making Cybernaut a global leader.”"
    },
    {
        url: "https://res.cloudinary.com/dn60aovto/image/upload/v1742451262/Manish_q6qmq6.png", // Replace with the actual URL
        title: "Manish",
        Role:"Co-Founder",
        description: "“B. Manish Kumar leads Cybernaut, using his design skills to drive innovation and success.”"
    }
];

function FounderCard() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging) {
                setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                );
            }
        
        }, 5000);

        return () => clearInterval(interval);
    }, [isDragging]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
        setScrollLeft(currentIndex);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;

        if (Math.abs(walk) > 100) {
            if (walk > 0 && currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
                setIsDragging(false);
            } else if (walk < 0 && currentIndex < slides.length - 1) {
                setCurrentIndex(currentIndex + 1);
                setIsDragging(false);
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="h-[36rem]">
                <div
                    ref={sliderRef}
                    className="relative h-[30rem] md:w-[40rem] w-80 m-5  cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Image Container */}
                    <div className="w-full  h-full rounded-xl overflow-hidden relative">
                        <Image
                            src={slides[currentIndex].url} // Use the URL from the slides array
                            alt={slides[currentIndex].title} // Use the title for the alt text
                            layout="fill" // This will make the image cover the container
                            objectFit="cover" // This will maintain the aspect ratio
                            className="transition-transform duration-300"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

                        {/* Navigation Buttons */}
                        {/* <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition-all"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button> */}
                        {/* <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition-all"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button> */}

                        {/* Description */}
                        <div className="absolute bottom-0 left-0  right-0 p-6 bg-gradient-to-b from-transparent via-white to-white text-black">
                            <h2 className="text-xl text-center  pt-32  font-bold mb-2">
                                {slides[currentIndex].title}
                            </h2>
                            <h1 className='text-center bg-white shadow-sm py-2 text-blue-500 rounded-sm w-40 items-center mx-auto'>{slides[currentIndex].Role}</h1>
                            <p className="text-sm text-center md:text-base">
                                {slides[currentIndex].description}
                            </p>
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-5 h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-blue-600 w-[3rem]'
                                    : 'bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FounderCard;
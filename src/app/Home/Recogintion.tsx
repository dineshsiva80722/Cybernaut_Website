// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


// export default function Recognition() {
//     const accreditations = [
//         {
//             name: "Ministry of Corporate Affairs",
//             logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447782/MCA_pcbwgr.svg',
//             alt: "Ministry of Corporate Affairs logo",
//         },
//         {
//             name: "Department for Promotion of Industry and Internal Trade",
//             logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447819/DPIIT_tpe47d.png',
//             alt: "DPIIT logo",
//         },
//         {
//             name: "Startup India",
//             logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447840/stqrtupindia_hagbxo.png',
//             alt: "Startup India logo",
//         },
//         {
//             name: "ISO 9001:2015",
//             logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447858/ISO_p9sebu.png',
//             alt: "ISO 9001:2015 Certified logo",

//         },
//     ];



//     return (
//         <section className=" lg:bg-blue-50 container px-4 mt-10 md:py-10 mx-auto">
//             <div className="container mx-auto">
//                 <div className="space-y-12">
//                     <div className="space-y-6">
//                         {/* <h3 className="text-2xl font-semibold text-center text-zinc-800">
//                             We are accredited by
//                         </h3> */}
//                         <TextGenerateEffect
//                             words="We are accredited by"
//                             className="text-3xl text-center text-[#141515] font-bold mb-4 "
//                         />
//                         <div className="flex flex-wrap justify-center py-10 ">
//                             {accreditations.map((accreditation, index) => (
//                                 <Card key={index} className="bg-transparent border-none shadow-none ">
//                                     <CardContent className="">
//                                         <Image
//                                             src={accreditation.logo}
//                                             alt={accreditation.alt}
//                                             className="h-auto w-60 hover:scale-110 transition-transform duration-500 object-contain"
//                                             width={150}
//                                             height={100}
//                                         />
//                                     </CardContent>
//                                 </Card>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Card, CardContent } from "@/components/ui/card";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface Accreditation {
    logo: string;
    alt: string;
}

const Recognition: React.FC = () => {
    const accreditations: Accreditation[] = [
        {
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447782/MCA_pcbwgr.svg',
            alt: 'Ministry of Corporate Affairs logo'
        },
        {
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447819/DPIIT_tpe47d.png',
            alt: 'Department for Promotion of Industry and Internal Trade logo'
        },
        {
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447840/stqrtupindia_hagbxo.png',
            alt: 'Startup India logo'
        },
        {
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447858/ISO_p9sebu.png',
            alt: 'ISO 9001:2015 Certified logo'
        }
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "bottom 90%",
                end: "center center",
                scrub: true,
                markers: false
            }
        });

        // Animate the container
        tl.fromTo(
            containerRef.current,
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            }
        );

        // Animate each card with staggered left-to-right and right-to-left effect
        cardRefs.current.forEach((card, index) => {
            if (card) {
                // First two cards animate from left to right
                if (index < 2) {
                    tl.fromTo(
                        card,
                        {
                            opacity: 0,
                            x: -100
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            delay: index * 0.2
                        }
                    );
                }
                // Last two cards animate from right to left
                else {
                    tl.fromTo(
                        card,
                        {
                            opacity: 0,
                            x: 100
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            delay: (index - 2) * 0.2
                        }
                    );
                }
            }
        });

        return () => {
            tl.kill();
        };
    }, [containerRef, cardRefs]);

    return (
        <section className="lg:bg-blue-50 container px-4 mt-10 md:py-10 mx-auto">
            <div className="container mx-auto">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <TextGenerateEffect
                            words="We are accredited by"
                            className="text-3xl text-center text-[#141515] font-bold mb-4"
                        />
                        <div 
                            ref={containerRef}
                            className="flex flex-wrap gap-5 justify-center py-10"
                        >
                            {accreditations.map((accreditation, index) => (
                                <Card 
                                    key={index}
                                    ref={(el: HTMLDivElement | null) => {
                                        if (el) {
                                            cardRefs.current[index] = el;
                                        }
                                    }}
                                    className="bg-transparent border-none shadow-none"
                                >
                                    <CardContent className="p-0">
                                        <Image
                                            src={accreditation.logo}
                                            alt={accreditation.alt}
                                            className="h-auto w-60 hover:scale-110 transition-transform duration-500 object-contain"
                                            width={150}
                                            height={100}
                                        />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recognition;
// import React, { useState } from 'react';
// import Image from 'next/image';
// import image1 from '@/app/Home/assets/DSA.png'

// const Vision = () => {
//     const [expandedSection, setExpandedSection] = useState<string | null>(null);

//     const handleToggle = (section: string) => {
//         setExpandedSection(expandedSection === section ? null : section);
//     };

//     return (
//         <section>
//             <div className="lg:hidden block w-screen min-h-96 p-5 bg-[#f5f5f5]">
//                 <h1 className='text-xl tracking-wide w-11/12 h-20 font-semibold'>
//                     CDSC (Cybernaut Developers Student Community)
//                 </h1>

//                 <div className="flex w-full gap-5 min-h-64 flex-col">
//                     <div className='bg-white w-full h-16 rounded-sm flex items-center justify-center' onClick={() => handleToggle('vision')}>
//                         <h1>Our Vision</h1>
//                     </div>
//                     {expandedSection === 'vision' && (
//                         <div className="w-80 mx-auto transition-all duration-300 ease-in-out bg-gray-200">
//                             {/* Replace with your actual images */}
//                             <Image src={image1} alt="Vision Image 1" />
//                             {/* <Image src="/path/to/your/image2.jpg" alt="Vision Image 2" /> */}
//                         </div>
//                     )}

//                     <div className='bg-white w-full h-16 rounded-sm flex items-center justify-center' onClick={() => handleToggle('mission')}>
//                         <h1>Our Mission</h1>
//                     </div>
//                     {expandedSection === 'mission' && (
//                         <div className="w-96 bg-gray-200">
//                             {/* Replace with your actual images */}
//                             <Image src="/path/to/your/image3.jpg" alt="Mission Image 1" />
//                             <Image src="/path/to/your/image4.jpg" alt="Mission Image 2" />
//                         </div>
//                     )}

//                     <div className='bg-white w-full h-16 rounded-sm flex items-center justify-center' onClick={() => handleToggle('activities')}>
//                         <h1>Core Activities</h1>
//                     </div>
//                     {expandedSection === 'activities' && (
//                         <div className="w-96 bg-gray-200">
//                             {/* Replace with your actual images */}
//                             <Image src="/path/to/your/image5.jpg" alt="Activities Image 1" />
//                             <Image src="/path/to/your/image6.jpg" alt="Activities Image 2" />
//                         </div>
//                     )}
//                 </div>
//                 <button className='w-full h-16 text-sm border bg-sky-500 text-white border-sky-500 rounded-sm py-2'>
//                     Become a member
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default Vision;

import React, { useState } from 'react';
import Image from 'next/image';
import image1 from '@/app/Home/assets/DSA.png';

const Vision = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const handleToggle = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <section>
            <div className="lg:hidden block w-screen min-h-96 p-5 bg-[#f5f5f5]">
                <h1 className='text-xl tracking-wide w-11/12 h-20 font-semibold'>
                    CDSC (Cybernaut Developers Student Community)
                </h1>

                <div className="flex w-full gap-5 min-h-64 flex-col">
                    <div className='bg-white w-full h-16 rounded-sm flex items-center justify-center' onClick={() => handleToggle('vision')}>
                        <h1>Our Vision</h1>
                    </div>
                    <div className={`w-80 mx-auto transition-all duration-300 ease-in-out ${expandedSection === 'vision' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        {expandedSection === 'vision' && (
                            <div className=" bg-gray-200">
                                <Image src={image1} alt="Vision Image 1" />
                            </div>
                        )}
                    </div>

                    <div className='bg-white w-full h-16 rounded-sm flex items-center justify-center' onClick={() => handleToggle('mission')}>
                        <h1>Our Mission</h1>
                    </div>
                    <div className={`w-80 mx-auto transition-all duration-300 ease-in-out ${expandedSection === 'mission' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        {expandedSection === 'mission' && (
                            <div className="bg-gray-200">
                                <Image src={image1} alt="Vision Image 1" />
                            </div>
                        )}
                    </div>

                    <div className='bg-white w-full h-16 rounded-sm flex items-center justify-center' onClick={() => handleToggle('activities')}>
                        <h1>Core Activities</h1>
                    </div>
                    <div className={`w-80 mx-auto transition-all duration-300 ease-in-out ${expandedSection === 'activities' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        {expandedSection === 'activities' && (
                            <div className="bg-gray-200">
                                <Image src={image1} alt="Vision Image 1" />
                            </div>
                        )}
                    </div>
                </div>
                <button className='w-full h-16 text-sm border bg-sky-500 text-white border-sky-500 rounded-sm py-2'>
                    Become a member
                </button>
            </div>
        </section>
    );
};

export default Vision;
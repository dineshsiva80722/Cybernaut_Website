
// 'use client';

// import React from 'react';

// import Image from "next/image";
// import { useRouter } from 'next/navigation';
// import {  Linkedin, Instagram } from 'lucide-react';

// const footerData = {
//   address: {
//     line1: "43/a, Nehru Nagar, Rayanur,",
//     line2: "Thoronakkalpatti, Karur,",
//     line3: "Tamil Nadu 639003"
//   },
//   socialLinks: [
//     // { icon: <Facebook size={20} className='text-blue-500' />, href: "https://www.instagram.com/cybernautofficial" },
//     { icon: <Linkedin size={20} className='text-blue-500' />, href: "https://www.linkedin.com/company/cybernautedu-tech/" },
//     // { icon: <Twitter size={20} className='text-blue-500' />, href: "https://twitter.com/cybernaut" },
//     { icon: <Instagram size={20} className='text-blue-500' />, href: "https://www.instagram.com/cybernautofficial" }
//   ],
//   sections: [
//     {
//       title: "About Us",
//       links: [
//         { label: "Programs we offer", href: "/Aboutus#offers" },
//         { label: "For Colleges", href: "/Aboutus#offers" },
//         { label: "For companies", href: "/Aboutus#offers" },
//         { label: "Why partner with us", href: "/Aboutus#partner" }
//       ]
//     },
//     {
//       title: "Programs",
//       links: [
//         { label: "Tech Trio", href: "/TechTrio" },
//         { label: "UI/UX Design", href: "/UI&UXDesign" },
//         { label: "Full Stack", href: "/FullStackDevelopment" },
//         { label: "MetaZen", href: "/MetaZen" }
//       ]
//     },
//     {
//       title: "Products",
//       links: [
//         { label: "Resume Crafts", href: "#" }
//       ]
//     },
//     {
//       title: "Events",
//       links: [
//         { label: "Workshops", href: "#" },
//         { label: "Webinars", href: "#" },
//         { label: "Bootcamps", href: "#" },
//         { label: "Contests", href: "#" },
//         { label: "Competitions", href: "#" }
//       ]
//     }
//   ]
// };

// const Footer = () => {
//   const router = useRouter();

//   const handleNavigation = (href: string) => {
//     router.push(href);
//   };

//   return (
//     <section>
//       <div className='bg-[#2A2A2A] relative min-h-[25rem] md:w-full p-2 mx-auto xl:container'>
//         <div className='md:flex justify-around gap-5 py-4 p-10 mt-5'>
//           <div className='min-h-40 min-w-60 space-y-10'>
//             <Image 
//              width={100}
//              height={100}
//              src="https://res.cloudinary.com/dn60aovto/image/upload/v1742450216/footerlogo_qrovod.png"
//              alt="Cybernaut Logo"
//              className='w-60 h-16' />

//             <h3 className='text-white w-full'>
//               {footerData.address.line1}<br className='hidden md:block' />
//               {footerData.address.line2}<br className='hidden md:block' />
//               {footerData.address.line3}
//             </h3>
//             <div className='flex gap-2 justify-start'>
//               {footerData.socialLinks.map((social, index) => (
//                 <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className='bg-[#F6F6F6] w-7 h-7 flex justify-center items-center rounded-full'>
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className='flex relative left-10 w-[47rem]  min-h-40'>
//             <div className='w-full flex justify-center gap-3'>
//               {footerData.sections.map((section, index) => (
//                 <div key={index} className='about-us px-5 space-y-2'>
//                   <h2 className='text-white font-bold text-lg'>{section.title}</h2>
//                   {section.links.map((link, linkIndex) => (
//                     <button
//                       key={linkIndex}
//                       onClick={() => handleNavigation(link.href)}
//                       className='block text-white text-sm hover:text-gray-300 transition-colors'
//                     >
//                       {link.label}
//                     </button>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className='gap-5 w-80 mx-10 min-h-40'>
//             <div className='flex gap-10 min-h-40'>
//               <div className='w-full flex justify-center ' >
//                 <div className='about-us  space-y-4'>
//                   <h2 className='text-white font-bold text-lg'>Policies</h2>
//                   <h2 className='text-white text-sm'>Privacy Policy</h2>
//                   <h2 className='text-white text-sm'>Refund Policy</h2>
//                   <h2 className='text-white text-sm'>Terms & Conditions</h2>
//                 </div>
//                 <div className='Programs space-y-4'>
//                   <h2 className='text-white font-bold text-lg'>Contact Us</h2>
//                   <h2 className='text-white text-sm'>
//                     <a href="mailto:contact@cybernaut.co.in" className='hover:underline'>contact@cybernaut.co.in</a>
//                   </h2>
//                   <h2 className='text-white text-sm'>
//                     <a href="tel:+916382055035" className='hover:underline'>+91 63820 55035</a>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className='hidden flex-col items-center relative -top-10 justify-center p-5 float-end'>
//               <div className='flex flex-col space-y-3'>
//                 <h1 className='text-white font-bold text-lg'>Have any questions?</h1>
//                 <button className="overflow-hidden w-8 md:w-40 p-2 md:px-6 py-3 bg-sky-100 text-black border-none rounded-full text-base md:text-lg font-medium cursor-pointer relative z-10 group">
//                   Chat with us on whatsapp
//                   <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
//                   <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
//                   <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
//                   <a href="https://wa.me/916382055035" className='hover:underline'>
//                     <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute text-white top-3 left-6 z-10 text-lg">Book a Call</span>
//                   </a>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='border-t border-white items-center justify-center flex absolute left-0 right-0 mx-auto bottom-0 h-10'>
//           <h2 className='text-gray-400 flex text-sm justify-center'>&copy;2024 Cybernaut edu tech. All Right Reserved</h2>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;



'use client';

import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Linkedin, Instagram } from 'lucide-react';

const footerData = {
  address: {
    line1: "43/a, Nehru Nagar, Rayanur,",
    line2: "Thoronakkalpatti, Karur,",
    line3: "Tamil Nadu 639003"
  },
  socialLinks: [
    { icon: <Linkedin size={20} className='text-blue-500' />, href: "https://www.linkedin.com/company/cybernautedu-tech/" },
    { icon: <Instagram size={20} className='text-blue-500' />, href: "https://www.instagram.com/cybernautofficial" }
  ],
  sections: [
    {
      title: "About Us",
      links: [
        { label: "Programs we offer", href: "/Aboutus#offers" },
        { label: "For Colleges", href: "/Aboutus#offers" },
        { label: "For companies", href: "/Aboutus#offers" },
        { label: "Why partner with us", href: "/Aboutus#partner" }
      ]
    },
    {
      title: "Programs",
      links: [
        { label: "Tech Trio", href: "/TechTrio" },
        { label: "UI/UX Design", href: "/UI&UXDesign" },
        { label: "Full Stack", href: "/FullStackDevelopment" },
        { label: "MetaZen", href: "/MetaZen" }
      ]
    },
    {
      title: "Products",
      links: [
        { label: "Resume Crafts", href: "#" }
      ]
    },
    {
      title: "Events",
      links: [
        { label: "Workshops", href: "#" },
        { label: "Webinars", href: "#" },
        { label: "Bootcamps", href: "#" },
        { label: "Contests", href: "#" },
        { label: "Competitions", href: "#" }
      ]
    }
  ]
};

const Footer = () => {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <section className="w-full">
      <div className='bg-[#2A2A2A] relative min-h-[25rem] w-full'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-10'>
            {/* Logo and Address Section */}
            <div className='lg:col-span-3 space-y-6'>
              <Image 
                width={240}
                height={64}
                src="https://res.cloudinary.com/dn60aovto/image/upload/v1742450216/footerlogo_qrovod.png"
                alt="Cybernaut Logo"
                className='w-60 h-16 object-contain' 
              />
              <h3 className='text-white text-sm'>
                {footerData.address.line1}<br />
                {footerData.address.line2}<br />
                {footerData.address.line3}
              </h3>
              <div className='flex gap-3'>
                {footerData.socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='bg-[#F6F6F6] w-8 h-8 flex justify-center items-center rounded-full hover:bg-white transition-colors'
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <div className='lg:col-span-6'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {footerData.sections.map((section, index) => (
                  <div key={index} className='space-y-3'>
                    <h2 className='text-white font-bold text-lg'>{section.title}</h2>
                    <div className='space-y-2'>
                      {section.links.map((link, linkIndex) => (
                        <button
                          key={linkIndex}
                          onClick={() => handleNavigation(link.href)}
                          className='block text-white text-sm hover:text-gray-300 transition-colors'
                        >
                          {link.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies and Contact Section */}
            <div className='lg:col-span-3 space-y-8'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='space-y-3'>
                  <h2 className='text-white font-bold text-lg'>Policies</h2>
                  <div className='space-y-2'>
                    <h2 className='text-white text-sm hover:text-gray-300 cursor-pointer'>Privacy Policy</h2>
                    <h2 className='text-white text-sm hover:text-gray-300 cursor-pointer'>Refund Policy</h2>
                    <h2 className='text-white text-sm hover:text-gray-300 cursor-pointer'>Terms & Conditions</h2>
                  </div>
                </div>
                <div className='space-y-3'>
                  <h2 className='text-white font-bold text-lg'>Contact Us</h2>
                  <div className='space-y-2'>
                    <a href="mailto:contact@cybernaut.co.in" className='block text-white text-sm hover:text-gray-300'>
                      contact@cybernaut.co.in
                    </a>
                    <a href="tel:+916382055035" className='block text-white text-sm hover:text-gray-300'>
                      +91 63820 55035
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button - Mobile Only */}
              <div className='block lg:hidden'>
                <h1 className='text-white font-bold text-lg mb-3'>Have any questions?</h1>
                <a 
                  href="https://wa.me/916382055035"
                  className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors text-sm font-medium"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className='border-t border-white/20 overflow-hidden py-4 mt-8'>
            <p className='text-gray-400 text-sm text-center'>
              &copy; 2024 Cybernaut edu tech. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
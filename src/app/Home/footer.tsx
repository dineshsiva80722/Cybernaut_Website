// import React from 'react'
// import Logo from './assets/footerlogo.png'
// import Image from "next/image";

// const footer = () => {
//   return (
//     <section>
//     <div className='bg-[#2A2A2A] relative min-h-[25rem] md:w-full p-2  mx-auto xl:container'>
//       <div className='md:flex justify-around gap-5 py-4 p-10 mt-5 '>
//         <div className='min-h-40 min-w-60 space-y-10'>
//           <Image src={Logo} alt="Cybernaut Logo" className='w-60 h-16' />

//           <h3 className='text-white w-full'>43/a, Nehru Nagar, Rayanur,<br className='hidden md:block' />Thoronakkalpatti, Karur,<br className='hidden md:block' />Tamil Nadu 639003</h3>

//           <div className=' flex gap-2 justify-start'>
//             <span className='Facebook bg-[#F6F6F6] w-7 h-7 flex justify-center items-center   rounded-full'>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2A254D" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
//             </span>
//             <span className='Linked In bg-[#F6F6F6] w-7 h-7 flex justify-center items-center   rounded-full'>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#2A254D"><path fill-rule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" clip-rule="evenodd" /><path d="M7.2 8.809H4V19.5h3.2z" /></g></svg>
//             </span>
//             <span className='Twitter bg-[#F6F6F6] w-7 h-7 flex justify-center items-center   rounded-full'>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2A254D" d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12" /></svg>
//             </span>
//             <span className='Facebook bg-[#F6F6F6] w-7 h-7 flex justify-center items-center   rounded-full'>
//               <svg xmlns="http://www.w3.org/0001/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2A254D" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" /><path fill="currentColor" fill-rule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clip-rule="evenodd" /></svg>
//             </span>
//           </div>
//         </div>
//         <div className=' flex gap-10 w-2/3 min-h-40  '>
//           <div className='w-full flex justify-center gap-10'>
//             <div className='about-us px-5 space-y-4' >
//               <h2 className='text-white font-bold text-lg '>About Us</h2>
//               <h2 className='text-white text-sm'>Programs we offer</h2>
//               <h2 className='text-white text-sm '>For Colleges</h2>
//               <h2 className='text-white text-sm '>For companies</h2>
//               <h2 className='text-white text-sm '>Why partner with us</h2>
//             </div>
//             <div className='Programs px-5 space-y-4'>
//               <h2 className='text-white font-bold text-lg '>Programs</h2>
//               <h2 className='text-white text-sm'>Tech Trio</h2>
//               <h2 className='text-white text-sm '>UI/UX Design</h2>
//               <h2 className='text-white text-sm '>Full Stack</h2>
//               <h2 className='text-white text-sm '>Data Analytics</h2>
//             </div>
//             <div className='Products space-y-4 px-5'>
//               <h2 className='text-white font-bold text-lg '>Products</h2>
//               <h2 className='text-white text-sm'>Resume Crafts</h2>
//             </div>
//             <div className='Events px-5 space-y-4'>
//               <h2 className='text-white font-bold text-lg '>Events</h2>
//               <h2 className='text-white text-sm'>Workshops</h2>
//               <h2 className='text-white text-sm '>Webinars</h2>
//               <h2 className='text-white text-sm '>Bootcamps</h2>
//               <h2 className='text-white text-sm '>Contests</h2>
//               <h2 className='text-white text-sm '>Competitions</h2>
//             </div>
//           </div>
//         </div>
//         <div className=' gap-10 w-1/3 min-h-40 '>
//           <div className=' flex gap-10  min-h-40'>
//             <div className='w-full flex justify-center gap-10 px-10'>
//               <div className='about-us space-y-4' >
//                 <h2 className='text-white font-bold text-lg '>Policies</h2>
//                 <h2 className='text-white text-sm'>Privacy Policy</h2>
//                 <h2 className='text-white text-sm '>Refund Policy</h2>
//                 <h2 className='text-white text-sm '>Terms & Conditions</h2>
//               </div>
//               <div className='Programs space-y-4 '>
//                 <h2 className='text-white font-bold text-lg '>Contact Us</h2>
//                 <h2 className='text-white text-sm'>contact@cybernaut.co.in</h2>
//                 <h2 className='text-white text-sm '>+91 63820 55035</h2>
//               </div>
//             </div>
//           </div>
//           <div className='flex  flex-col items-center relative -top-24 justify-center p-5 float-end '>
//         <div className='flex flex-col space-y-3'>
//             <h1 className='text-white font-bold text-lg'>Have any questions?</h1>
//             <button className="overflow-hidden w-28 md:w-40 p-2   md:px-6 py-3 bg-sky-100 text-black border-none rounded-full text-base md:text-lg font-medium cursor-pointer relative z-10 group">
//                Book a Call
//                <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
//                <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
//                <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
//                <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute text-white top-3 left-6 z-10 text-lg">Book a Call</span>
//             </button>    
//          </div>
//       </div>
//         </div>

  
//     </div>

//       <div className='border-t border-white items-center justify-center flex  h-10  '>
//         <h2 className='text-gray-400 flex text-sm justify-center'>&copy;2024 Cybernaut edu tech. All Right Reserved</h2>
//       </div>
//     </div>
//     </section>
//   )
// }

// export default footer

'use client';

import React from 'react';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const footerData = {
  address: {
    line1: "43/a, Nehru Nagar, Rayanur,",
    line2: "Thoronakkalpatti, Karur,",
    line3: "Tamil Nadu 639003"
  },
  socialLinks: [
    // { icon: <Facebook size={20} className='text-blue-500' />, href: "https://www.instagram.com/cybernautofficial" },
    { icon: <Linkedin size={20} className='text-blue-500' />, href: "https://www.linkedin.com/company/cybernautedu-tech/" },
    // { icon: <Twitter size={20} className='text-blue-500' />, href: "https://twitter.com/cybernaut" },
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
    <section>
      <div className='bg-[#2A2A2A] relative min-h-[25rem] md:w-full p-2 mx-auto xl:container'>
        <div className='md:flex justify-around gap-5 py-4 p-10 mt-5'>
          <div className='min-h-40 min-w-60 space-y-10'>
            <Image 
             width={100}
             height={100}
             src="https://res.cloudinary.com/dn60aovto/image/upload/v1742450216/footerlogo_qrovod.png"
             alt="Cybernaut Logo"
             className='w-60 h-16' />

            <h3 className='text-white w-full'>
              {footerData.address.line1}<br className='hidden md:block' />
              {footerData.address.line2}<br className='hidden md:block' />
              {footerData.address.line3}
            </h3>
            <div className='flex gap-2 justify-start'>
              {footerData.socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className='bg-[#F6F6F6] w-7 h-7 flex justify-center items-center rounded-full'>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className='flex relative left-10 w-[47rem]  min-h-40'>
            <div className='w-full flex justify-center gap-3'>
              {footerData.sections.map((section, index) => (
                <div key={index} className='about-us px-5 space-y-2'>
                  <h2 className='text-white font-bold text-lg'>{section.title}</h2>
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
              ))}
            </div>
          </div>

          <div className='gap-5 w-80 mx-10 min-h-40'>
            <div className='flex gap-10 min-h-40'>
              <div className='w-full flex justify-center ' >
                <div className='about-us  space-y-4'>
                  <h2 className='text-white font-bold text-lg'>Policies</h2>
                  <h2 className='text-white text-sm'>Privacy Policy</h2>
                  <h2 className='text-white text-sm'>Refund Policy</h2>
                  <h2 className='text-white text-sm'>Terms & Conditions</h2>
                </div>
                <div className='Programs space-y-4'>
                  <h2 className='text-white font-bold text-lg'>Contact Us</h2>
                  <h2 className='text-white text-sm'>
                    <a href="mailto:contact@cybernaut.co.in" className='hover:underline'>contact@cybernaut.co.in</a>
                  </h2>
                  <h2 className='text-white text-sm'>
                    <a href="tel:+916382055035" className='hover:underline'>+91 63820 55035</a>
                  </h2>
                </div>
              </div>
            </div>
            <div className='hidden flex-col items-center relative -top-10 justify-center p-5 float-end'>
              <div className='flex flex-col space-y-3'>
                <h1 className='text-white font-bold text-lg'>Have any questions?</h1>
                <button className="overflow-hidden w-8 md:w-40 p-2 md:px-6 py-3 bg-sky-100 text-black border-none rounded-full text-base md:text-lg font-medium cursor-pointer relative z-10 group">
                  Chat with us on whatsapp
                  <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                  <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                  <span className="absolute w-40 h-32 -top-8 left-0 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                  <a href="https://wa.me/916382055035" className='hover:underline'>
                    <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute text-white top-3 left-6 z-10 text-lg">Book a Call</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-white items-center justify-center flex absolute left-0 right-0 mx-auto bottom-0 h-10'>
          <h2 className='text-gray-400 flex text-sm justify-center'>&copy;2024 Cybernaut edu tech. All Right Reserved</h2>
        </div>
      </div>
    </section>
  );
}

export default Footer;


// "use client";

// import React from 'react';
// import Image from "next/image";
// import { useRouter } from 'next/navigation';
// import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
// import Logo from './assets/footerlogo.png'


// const footerData = {
//   address: {
//     line1: "43/a,nehru Nagar, Rayanur,",
//     line2: "Thoronakkalpatti, Karur,",
//     line3: "Tamil Nadu 639003"
//   },
//   socialLinks: [
//     { icon: Facebook, href: "https://facebook.com/cybernaut" },
//     { icon: Linkedin, href: "https://linkedin.com/company/cybernaut" },
//     { icon: Twitter, href: "https://twitter.com/cybernaut" },
//     { icon: Instagram, href: "https://instagram.com/cybernaut" }
//   ],
//   sections: [
//     {
//       title: "About Us",
//       links: [
//         { label: "What we offer", href: "/what-we-offer" },
//         { label: "For Colleges", href: "/for-colleges" },
//         { label: "For companies", href: "/for-companies" },
//         { label: "Why partner with us", href: "/why-partner" }
//       ]
//     },
//     {
//       title: "Programs",
//       links: [
//         { label: "Tech Trio", href: "/programs/tech-trio" },
//         { label: "UI/UX Design", href: "/programs/ui-ux-design" },
//         { label: "Full Stack", href: "/programs/full-stack" },
//         { label: "Data Analytics", href: "/programs/data-analytics" }
//       ]
//     },
//     {
//       title: "Products",
//       links: [
//         { label: "Resume Crafts", href: "/products/resume-crafts" }
//       ]
//     },
//     {
//       title: "Events",
//       links: [
//         { label: "Workshops", href: "/events/workshops" },
//         { label: "Webinars", href: "/events/webinars" },
//         { label: "Bootcamps", href: "/events/bootcamps" },
//         { label: "Contests", href: "/events/contests" },
//         { label: "Competitions", href: "/events/competitions" }
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
//     <footer className="bg-[#2A2A2A] relative md:h-[25rem] w-full p-2 mt-10 mx-auto xl:container">
//       <div className="md:flex justify-between gap-5 p-5">
//         {/* Company Info */}
//         <div className="min-h-40 min-w-60 space-y-10">
//           <Image 
//             src={Logo} 
//             alt="Cybernaut Logo" 
//             width={240}
//             height={64}
//             className="w-60 h-16"
//           />

//           <address className="text-white not-italic">
//             {footerData.address.line1}<br className="hidden md:block" />
//             {footerData.address.line2}<br className="hidden md:block" />
//             {footerData.address.line3}
//           </address>

//           <div className="flex gap-3">
//             {footerData.socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[#F6F6F6] w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors"
//               >
//                 {React.createElement(social.icon, {
//                   size: 20,
//                   className: "text-[#2A254D]"
//                 })}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Sections */}
//         <div className="grid md:grid-cols-4 gap-8 w-2/3">
//           {footerData.sections.map((section, index) => (
//             <div key={index} className="space-y-4">
//               <h2 className="text-white font-bold text-lg">{section.title}</h2>
//               {section.links.map((link, linkIndex) => (
//                 <button
//                   key={linkIndex}
//                   onClick={() => handleNavigation(link.href)}
//                   className="block text-white text-sm hover:text-gray-300 transition-colors"
//                 >
//                   {link.label}
//                 </button>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Copyright */}
//       <div className="border-t border-white h-10 py-6 my-2 absolute bottom-0 left-0 right-0">
//         <p className="text-white text-sm text-center">
//           &copy;{new Date().getFullYear()} Cybernaut edu tech. All Rights Reserved
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
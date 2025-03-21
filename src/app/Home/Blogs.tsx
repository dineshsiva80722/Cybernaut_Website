
// 'use client'
// import React from 'react';
// import { Calendar, ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Imageslider from '@/app/Home/Mobile-Components/boldMobile';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { ChevronRight, Search } from 'lucide-react';
// import Nav from '@/app/Home/nav';
// import Footer from '@/app/Home/footer';
// import { motion } from "framer-motion";
// import { LampContainer } from "@/components/ui/lamp";

// // Blog card component
// interface BlogCardProps {
//     title: string;
//     date: string;
//     imageUrl: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({ title, date, imageUrl }) => {
//     return (
//         <div className="group rounded-xl  overflow-hidden shadow-[0px_26px_40px_rgba(43,_45,_54,_0.05)]  transition-all duration-300 hover:shadow-xl">
//             <div className="relative h-64 overflow-hidden">
//                 <img
//                     src={imageUrl}
//                     alt={title}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//             </div>
//             <div className="p-6 relative h-36  ">
//                 <h3 className="text-xl font-semibold mb-4 text-gray-800 ">{title}</h3>
//                 <div className=' pb-5 flex justify-around gap-10 absolute bottom-0 left-0 right-0 mx-auto w-full' >
//                     <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
//                         Read more
//                         <ArrowRight className="w-4 h-4 ml-2 mt-1 transition-transform group-hover:translate-x-1" />
//                     </div>
//                     <div className="flex items-center text-gray-500 ">
//                         <Calendar className="w-4 h-4 mr-2" />
//                         <span className="text-sm">{date}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Blog post data

// const images = [
//     "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200",
//     "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200",
//     "https://images.unsplash.com/photo-1603052873022-3c1b2a0c5c8d?w=1200"
// ];

// // Main App component
// function Blogs() {


//     const [blogs, setBlogs] = useState([]);
//     const [filteredBlogs, setFilteredBlogs] = useState([]);
//     const [activeCategory, setActiveCategory] = useState('All');
//     const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() => {
//         fetch("https://medium-postscraper-api.onrender.com/scrape?url=https://cybernautblogs.medium.com/")
//             .then(response => response.json())
//             .then(data => {
//                 const categorizedBlogs = data.map(blog => ({
//                     ...blog,
//                     category: categorizeBlog(blog)
//                 }));
//                 setBlogs(categorizedBlogs);
//                 setFilteredBlogs(categorizedBlogs);
//             })
//             .catch(error => console.error("Error fetching blogs:", error));
//     }, []);

//     const categorizeBlog = (blog) => {
//         const lowerTitle = blog.title.toLowerCase();
//         if (lowerTitle.includes("business") || lowerTitle.includes("entrepreneur")) return "Business";
//         if (lowerTitle.includes("tech") || lowerTitle.includes("software") || lowerTitle.includes("ai")) return "Technology";
//         if (lowerTitle.includes("marketing") || lowerTitle.includes("advertising")) return "Marketing";
//         return "Other";
//     };

//     const handleFilterChange = (category) => {
//         setActiveCategory(category);
//         filterBlogs(category, searchQuery);
//     };

//     const handleSearchChange = (event) => {
//         const query = event.target.value;
//         setSearchQuery(query);
//         filterBlogs(activeCategory, query);
//     };

//     const filterBlogs = (category, query) => {
//         let filtered = blogs;
//         if (category !== 'All') {
//             filtered = filtered.filter(blog => blog.category === category);
//         }
//         if (query) {
//             filtered = filtered.filter(blog =>
//                 blog.title.toLowerCase().includes(query.toLowerCase()) ||
//                 blog.description.toLowerCase().includes(query.toLowerCase())
//             );
//         }
//         setFilteredBlogs(filtered);
//     };
//     return (
//         <div className="items-center  py-32 px-4 md:px-10 mx-auto xl:container">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
//                 <div className="text-center gap-20">
//                     <h1 className="lg:text-4xl text-xl font-bold text-gray-900 my-4">
//                         Explore the blog
//                     </h1>
//                     <p className="lg:text-lg text-sm text-gray-600 max-w-2xl mx-auto my-6 tracking-wide">
//                         Discover the latest handpicked blog entries to get started
//                     </p>
//                 </div>
//                 <div className='lg:flex hidden justify-center my-10'>
//                     <Link href='/Blogs'>
//                         <Button className='flex relative bg-gradient-to-r from-[#13D8FB] to-[#00A3FF] p-6  rounded-full hover:bg-gradient-to-r hover:from-[#00A3FF] hover:to-[#13D8FB]'>Check our blogs</Button>
//                     </Link>
//                 </div>
                
//                 <div className="min-h-screen mt-10 bg-white">
//                     <section className="container mx-auto px-4 md:py-16">
//                         {filteredBlogs.length === 0 ? (
//                             <p className="text-center text-gray-500 text-lg mt-10">No posts found under this topic.</p>
//                         ) : (
//                             <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10">
//                                 {filteredBlogs.map((blog, index) => (
//                                     <div
//                                         key={index}
//                                         className="rounded-lg overflow-hidden  bg-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300 border border-gray-200 p-6"
//                                     >
//                                         <div className="flex flex-col h-full">
//                                             <span className="text-xs font-semibold text-white bg-blue-500 px-2 py-1 rounded-full self-start mb-2">
//                                                 {blog.category}
//                                             </span>
//                                             <h3 className="font-bold text-2xl text-gray-900 mb-3">{blog.title}</h3>
//                                             <p className="text-gray-600 flex-grow">{blog.description}</p>
//                                             <a
//                                                 href={blog.url}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="text-blue-500 flex items-center gap-2 hover:gap-3 transition-all mt-4 font-semibold"
//                                             >
//                                                 Read Post <ChevronRight size={16} />
//                                             </a>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </section>
//                 </div>
             
//                 <div className='lg:hidden block'>
//                     <Imageslider images={images} />
//                     <button className='w-full mt-5 h-10 text-sm border bg-sky-500 text-white border-sky-500 rounded-sm py-2'>
//                         Become a member
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Blogs;

'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Define the Blog type
interface Blog {
    title: string;
    description: string;
    url: string;
}

const Blogs: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]); // State for blogs
    const [error, setError] = useState<string | null>(null); // State for error messages

    useEffect(() => {
        fetch("https://medium-postscraper-api.onrender.com/scrape?url=https://cybernautblogs.medium.com/")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setBlogs(data.slice(0, 3)); // Limit to 3 blogs
                } else {
                    setError("No posts found.");
                }
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
                setError("Failed to load blogs. Please try again later.");
            });
    }, []);

    return (
        <div className="py-32 px-4 md:px-10 mx-auto xl:container">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="lg:text-4xl text-xl font-bold text-gray-900 my-4">Explore the Blog</h1>
                <p className="lg:text-lg text-sm text-gray-600 max-w-2xl mx-auto my-6 tracking-wide">
                    Discover the latest handpicked blog entries to get started
                </p>
            </div>

            <div className="flex justify-center my-10">
                <Link href="/Blogs">
                    <Button className="bg-gradient-to-r from-[#13D8FB] to-[#00A3FF] p-6 rounded-full hover:from-[#00A3FF] hover:to-[#13D8FB]">
                        Check our Blogs
                    </Button>
                </Link>
            </div>

            <section className="w-11/12 mx-auto px-4 ">
                {error ? (
                    <p className="text-center text-red-500 text-lg mt-10">{error}</p>
                ) : blogs.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg mt-10">No posts found.</p>
                ) : (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 md:gap-12 mt-10">
                        {blogs.map((blog, index) => (
                            <div key={index} className="rounded-lg overflow-hidden bg-white hover:shadow-md shadow-lg -transition-transform hover:scale-105 duration-300 p-6">
                                <h3 className="font-bold text-2xl text-gray-900 mb-3">{blog.title}</h3>
                                <p className="text-gray-600">{blog.description}</p>
                                <a href={blog.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center gap-2 hover:gap-3 transition-all mt-4 font-semibold">
                                    Read Post <ChevronRight size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Blogs;
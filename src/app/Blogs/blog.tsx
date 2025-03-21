// 'use client';
// import React, { useState, useEffect } from 'react';
// import { ChevronRight, Search } from 'lucide-react';
// import Nav from '@/app/Home/nav';
// import Footer from '@/app/Home/footer';
// import { motion } from "framer-motion";
// import { LampContainer } from "@/components/ui/lamp";
// import { Button } from '@/components/ui/button';

// function App() {
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
//         <div className="min-h-screen mt-10 bg-white">
//             <Nav />
//             <section className="container mx-auto px-4 text-center">
//                 <div className="mx-auto">
//                     <LampContainer>
//                         <motion.h1
//                             initial={{ opacity: 0.5, y: 100 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
//                             className="bg-gradient-to-br from-slate-300 fixed to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
//                         >
//                             <h1 className='uppercase font-extrabold text-[#fff]'>Blog</h1> <br />
//                             <h1 className="w-[50rem] -mt-10 place-self-center text-center text-5xl mx-auto">
//                                 Our Mission is to make <span className="text-blue-500">Knowledge</span> and{' '}
//                                 <span className="text-blue-500">News accessible</span> for <span className="text-blue-500">Everyone.</span>
//                             </h1>
//                             <br />
//                             <p className="text-sm -mt-10 tracking-wide">
//                                 Stay informed with the latest insights, trends, and updates. Explore expert opinions, industry news, and valuable knowledge—all in one place.
//                             </p>
//                         </motion.h1>
//                     </LampContainer>
//                 </div>
//             </section>

//             {/* Filter Buttons */}
//             <div className="flex justify-center gap-4 mt-4">
//                 {['All', 'Business', 'Technology', 'Marketing', 'Other'].map(category => (
//                     <Button
//                         key={category}
//                         onClick={() => handleFilterChange(category)}
//                         className={`border px-4 py-2 rounded-md ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
//                     >
//                         {category}
//                     </Button>
//                 ))}
//             </div>

//             {/* Search Bar (Moved Below Categories) */}
//             <div className="flex justify-center mt-6 relative max-w-md mx-auto">
//                 <div className="relative w-full">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
//                     <input 
//                         type="text" 
//                         placeholder="Search by title or description..." 
//                         value={searchQuery} 
//                         onChange={handleSearchChange} 
//                         className="border p-3 pl-10 w-full rounded-md text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     />
//                 </div>
//             </div>

//             <section className="container mx-auto px-4 md:py-16">
//                 {filteredBlogs.length === 0 ? (
//                     <p className="text-center text-gray-500 text-lg mt-10">No posts found under this topic.</p>
//                 ) : (
//                     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10">
//                         {filteredBlogs.map((blog, index) => (
//                             <div
//                                 key={index}
//                                 className="rounded-lg overflow-hidden  bg-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300 border border-gray-200 p-6"
//                             >
//                                 <div className="flex flex-col h-full">
//                                     <span className="text-xs font-semibold text-white bg-blue-500 px-2 py-1 rounded-full self-start mb-2">
//                                         {blog.category}
//                                     </span>
//                                     <h3 className="font-bold text-2xl text-gray-900 mb-3">{blog.title}</h3>
//                                     <p className="text-gray-600 flex-grow">{blog.description}</p>
//                                     <a 
//                                         href={blog.url} 
//                                         target="_blank" 
//                                         rel="noopener noreferrer" 
//                                         className="text-blue-500 flex items-center gap-2 hover:gap-3 transition-all mt-4 font-semibold"
//                                     >
//                                         Read Post <ChevronRight size={16} />
//                                     </a>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </section>
//             <Footer />
//         </div>
//     );
// }

// export default App;



'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Search } from 'lucide-react';
import Nav from '@/app/Home/nav';
import Contact from '../Home/contact';
import Footer from '@/app/Home/footer';
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';

import { Dancing_Script } from 'next/font/google';
const dancingScript = Dancing_Script({ subsets: ['latin'] });

function App() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [filteredBlogs, setFilteredBlogs] = useState<any[]>([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch("https://medium-postscraper-api.onrender.com/scrape?url=https://cybernautblogs.medium.com/")
            .then(response => response.json())
            .then(data => {
                const categorizedBlogs = data.map((blog: any) => ({
                    ...blog,
                    category: categorizeBlog(blog)
                }));
                setBlogs(categorizedBlogs);
                setFilteredBlogs(categorizedBlogs);
            })
            .catch(error => console.error("Error fetching blogs:", error));
    }, []);

    const categorizeBlog = (blog: { title: string }) => {
        const lowerTitle = blog.title.toLowerCase();
        if (lowerTitle.includes("business") || lowerTitle.includes("entrepreneur")) return "Business";
        if (lowerTitle.includes("tech") || lowerTitle.includes("software") || lowerTitle.includes("ai")) return "Technology";
        if (lowerTitle.includes("marketing") || lowerTitle.includes("advertising")) return "Marketing";
        return "Other";
    };

    const handleFilterChange = (category: string) => {
        setActiveCategory(category);
        filterBlogs(category, searchQuery);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        filterBlogs(activeCategory, query);
    };

    const filterBlogs = (category: string, query: string) => {
        let filtered = blogs;
        if (category !== 'All') {
            filtered = filtered.filter(blog => blog.category === category);
        }
        if (query) {
            filtered = filtered.filter(blog =>
                blog.title.toLowerCase().includes(query.toLowerCase()) ||
                blog.description.toLowerCase().includes(query.toLowerCase())
            );
        }
        setFilteredBlogs(filtered);
    };


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


    return (
        <div className="min-h-screen mt-10 bg-white">
            <Nav />
            <section className="container mx-auto px-4 text-center">
                <div className="mx-auto">
                    <LampContainer>
                        <motion.h1
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                            className="bg-gradient-to-br from-slate-300 fixed to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                        >
                            <h1 className='uppercase font-extrabold text-[#fff]'>Blog</h1> <br />
                            <h1 className="w-[50rem] -mt-10 place-self-center text-center text-5xl mx-auto">
                                Our Mission is to make <span className="text-blue-500">Knowledge</span> and{' '}
                                <span className="text-blue-500">News accessible</span> for <span className="text-blue-500">Everyone.</span>
                            </h1>
                            <br />
                            <p className="text-sm -mt-10 tracking-wide">
                                Stay informed with the latest insights, trends, and updates. Explore expert opinions, industry news, and valuable knowledge—all in one place.
                            </p>
                        </motion.h1>
                    </LampContainer>
                </div>
            </section>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mt-4">
                {['All', 'Business', 'Technology', 'Marketing', 'Other'].map(category => (
                    <Button
                        key={category}
                        onClick={() => handleFilterChange(category)}
                        className={`shadow-none bg-transparent  px-4 py-2 hover:bg-transparent rounded-md ${activeCategory === category ? ' text-blue-500' : ' text-black '}`}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Search Bar (Moved Below Categories) */}
            <div className="flex justify-center mt-6 relative max-w-md mx-auto">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search by title or description..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="border p-3 pl-10 w-full rounded-md text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>

            <section className="container mx-auto px-4 md:py-16">
                {filteredBlogs.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg mt-10">No posts found under this topic.</p>
                ) : (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10">
                        {filteredBlogs.map((blog, index) => (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300 border border-gray-200 p-6"
                            >
                                <div className="flex flex-col h-full">
                                    <span className="text-xs font-semibold text-white bg-blue-500 px-2 py-1 rounded-full self-start mb-2">
                                        {blog.category}
                                    </span>
                                    <h3 className="font-bold text-2xl text-gray-900 mb-3">{blog.title}</h3>
                                    <p className="text-gray-600 flex-grow">{blog.description}</p>
                                    <a
                                        href={blog.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 flex items-center gap-2 hover:gap-3 transition-all mt-4 font-semibold"
                                    >
                                        Read Post <ChevronRight size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <section>
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
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Email Us</h3>
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
            </section>
            <Footer />
        </div>
    );
}

export default App;
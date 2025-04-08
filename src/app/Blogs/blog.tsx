'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Search } from 'lucide-react';
import Nav from '@/app/Home/nav';
import Footer from '@/app/Home/footer';
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from '@/components/ui/button';
import Contact from '../Home/contact';


interface Blog {
    title: string;
    content: string;
    url: string;
    category: string;
    description: string;
}

function App() {
    const [blogs, setBlogs] = useState<Blog[]>([]); // Use the Blog type
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]); // Use the Blog type
    const [activeCategory, setActiveCategory] = useState<string>('All'); // Specify the type
    const [searchQuery, setSearchQuery] = useState<string>(''); // Specify the type

    useEffect(() => {
        fetch("https://medium-postscraper-api.onrender.com/scrape?url=https://cybernautblogs.medium.com/")
            .then(response => response.json())
            .then(data => {
                const categorizedBlogs = data.map((blog: Blog) => ({
                    ...blog,
                    category: categorizeBlog(blog)
                }));
                setBlogs(categorizedBlogs);
                setFilteredBlogs(categorizedBlogs);
            })
            .catch(error => console.error(`Error fetching blogs: ${error}`));
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


    return (
        <div className="min-h-screen mt-10 bg-white">
            <Nav />
            <section className="container mx-auto px-4 text-center">
                <div className="mx-auto">
                    <LampContainer>
                        <motion.h1
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: -20 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                            className="bg-gradient-to-br from-slate-300 fixed to-slate-500 hidden lg:block bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                        >
                            <h1 className='uppercase font-extrabold text-[#fff] text-2xl md:text-4xl'>Blog</h1>
                            <br />
                            <h1 className="lg:w-[50rem] w-full -mt-8 place-self-center text-center lg:text-5xl md:text-2xl text-base mx-auto px-4">
                                Our Mission is to make <span className="text-blue-500">Knowledge</span> and{' '}
                                <span className="text-blue-500">News accessible</span> for <span className="text-blue-500">Everyone.</span>
                            </h1>
                            <br />
                            <p className="text-sm -mt-8 tracking-wide px-4">
                                Stay informed with the latest insights, trends, and updates. Explore expert opinions, industry news, and valuable knowledge—all in one place.
                            </p>
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0.5, y: 200 }}
                            whileInView={{ opacity: 1, y: 130 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                            className="bg-gradient-to-br from-slate-300 to-slate-500 mt-20 block lg:hidden bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                        >
                            <h1 className='uppercase font-extrabold text-[#fff] text-2xl md:text-4xl'>Blog</h1>
                            <br />
                            <h1 className="lg:w-[50rem] w-full -mt-8 place-self-center text-center lg:text-5xl md:text-2xl text-base mx-auto px-4">
                                Our Mission is to make <span className="text-blue-500">Knowledge</span> and{' '}
                                <span className="text-blue-500">News accessible</span> for <span className="text-blue-500">Everyone.</span>
                            </h1>
                            <br />
                            <p className="text-sm -mt-8 tracking-wide px-4">
                                Stay informed with the latest insights, trends, and updates. Explore expert opinions, industry news, and valuable knowledge—all in one place.
                            </p>
                        </motion.h1>
                    </LampContainer>
                </div>
            </section>

            {/* Filter Buttons */}
            <div className="flex justify-center w-11/12 mx-auto lg:ap-4 mt-4">
                {['All', 'Business', 'Technology', 'Marketing', 'Other'].map(category => (
                    <Button
                        key={category}
                        onClick={() => handleFilterChange(category)}
                        className={`shadow-none bg-transparent  lg:px-4 lg:py-2 hover:bg-transparent rounded-md ${activeCategory === category ? ' text-blue-500' : ' text-black '}`}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Search Bar (Moved Below Categories) */}
            <div className="flex justify-center mt-6 relative lg:max-w-md mx-auto">
                <div className="relative lg:w-full w-11/12">
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
                <Contact />
            </section>
            <Footer />
        </div>
    );
}

export default App;
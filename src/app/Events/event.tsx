'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Star, Users, ArrowRight, MapPin, ChevronDown, X } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'webinars', name: 'Webinars' },
    { id: 'bootcamps', name: 'Bootcamps' },
    { id: 'contest', name: 'Contest' },
    { id: 'competitions', name: 'Competitions' }
  ];
  
  const sliderImages = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80'
  ];
  
  const events = [
    {
      id: 1,
      title: 'The Future of Artificial Intelligence',
      description: 'Come with us to explore, discover, and your passion for the latest in educational technology. Come with us to explore, discover, and your passion for the latest in educational technology.',
      date: '05 May 2025',
      time: '9:00 am',
      category: 'webinars',
      attendees: 1200,
      rating: 4.8,
      featured: true,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: 'Step into the world of Cybernaut',
      description: 'Come together with us to explore, discover, and your passion for the latest advancements in educational technology.',
      date: '12 May 2025',
      time: '10:00 AM',
      category: 'webinars',
      location: 'Cybernaut Exp Tech, Keystone, Ketur - 638023',
      attendees: 1500,
      rating: 4.9,
      featured: true,
      image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'The Future of Artificial Intelligence',
      description: 'Come with us to explore, discover, and your passion for the latest in educational technology. Come with us to explore, discover, and your passion for the latest in educational technology.',
      date: '10 May 2025',
      time: '9:00 am',
      category: 'webinars',
      attendees: 1200,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 4,
      title: 'The Future of Artificial Intelligence',
      description: 'Come with us to explore, discover, and your passion for the latest in educational technology. Come with us to explore, discover, and your passion for the latest in educational technology.',
      date: '15 May 2025',
      time: '9:00 am',
      category: 'webinars',
      attendees: 1200,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 5,
      title: 'The Future of Artificial Intelligence',
      description: 'Come with us to explore, discover, and your passion for the latest in educational technology. Come with us to explore, discover, and your passion for the latest in educational technology.',
      date: '20 May 2025',
      time: '9:00 am',
      category: 'webinars',
      attendees: 1200,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 6,
      title: 'Advanced Web Development',
      description: 'Intensive bootcamp covering modern web development frameworks and best practices.',
      date: '01 Jun 2025',
      time: '10:00 am',
      category: 'bootcamps',
      attendees: 800,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  useEffect(() => {
    const selectedIndex = categories.findIndex(cat => cat.id === activeCategory);
    if (buttonsRef.current[selectedIndex]) {
      const button = buttonsRef.current[selectedIndex];
      if (button) {
        setUnderlineStyle({
          left: button.offsetLeft,
          width: button.offsetWidth,
        });
      }
    }
  }, [activeCategory, categories]);

  const handleCategoryClick = (categoryId: string, index: number) => {
    setActiveCategory(categoryId);
    setIsMenuOpen(false);
  };

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);
  
  const featuredEvents = filteredEvents.filter(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  return (
    <div className="min-h-screen mt-[70px] bg-gray-50">
      {/* Hero Slider */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gray-200 h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden relative">
          {sliderImages.map((image, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Slider Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white w-16 sm:w-24' 
                    : 'bg-gray-400 w-5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Upcoming Events</h1>
        
        {/* Desktop Category Navigation */}
        <div className="hidden md:block relative mb-8 border-b border-gray-200">
          <div className="flex gap-8">
            {categories.map((category, index) => (
              <button
                key={category.id}
                ref={(el) => { buttonsRef.current[index] = el; }}
                onClick={() => handleCategoryClick(category.id, index)}
                className={`px-1 py-4 text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                    ? 'text-blue-500' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div
            className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </div>

        {/* Mobile Category Navigation */}
        <div className="md:hidden mb-6">
          <div className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm">
            <span className="text-lg font-semibold text-gray-900">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-1 px-4 py-2 space-y-1 bg-white rounded-lg shadow-sm">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id, index)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeCategory === category.id
                      ? 'text-blue-500 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Section Title */}
        {activeCategory !== 'all' && (
          <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
            {categories.find(cat => cat.id === activeCategory)?.name}
          </h2>
        )}

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6 mb-12">
            {featuredEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-2 text-blue-700" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500">
                      <Star className="w-4 h-4 mr-2 text-yellow-400" />
                      <span className="text-sm">{event.rating}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500">
                      <Users className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-sm">{event.attendees} students</span>
                    </div>
                  </div>
                  
                  {event.location && (
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  )}
                  
                  <button className="flex items-center text-white bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 rounded-full text-sm font-medium">
                    More Info
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                
                <div className="md:w-2/5 h-48 md:h-auto">
                  {event.image ? (
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Regular Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                {event.image && (
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2 text-blue-700" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm">{event.rating}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-sm">{event.attendees} students</span>
                  </div>
                </div>
                
                <button className="flex items-center text-white bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 rounded-full text-sm font-medium">
                  More Info
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="mt-8 text-center py-12 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No events found</h3>
            <p className="text-gray-600">Check back soon for upcoming events.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
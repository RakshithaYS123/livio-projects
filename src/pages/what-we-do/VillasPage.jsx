import React, { useState, useEffect } from 'react';
import { ChevronRight, Bed, Utensils, BookOpen, Tv, Sparkles, Wine, Users, Archive, Package, Bath, DoorOpen } from 'lucide-react';

const VillasPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const interiorCategories = [
    {
      title: 'Bedroom',
      description: 'Luxurious bedroom designs that blend comfort with elegance',
      image: '/images/Villas/bedroom.png',
      icon: Bed,
      color: '#B84A2B',
      featured: true,
      category: 'living'
    },
    {
      title: 'Master Bedroom',
      description: 'Opulent master suites designed for ultimate relaxation and privacy',
      image: '/images/Villas/master-bedroom.png',
      icon: Bed,
      color: '#8B4513',
      featured: true,
      category: 'living'
    },
    {
      title: 'Dining',
      description: 'Sophisticated dining spaces perfect for hosting memorable gatherings',
      image: '/images/Villas/dining.png',
      icon: Utensils,
      color: '#A0522D',
      category: 'social'
    },
    {
      title: 'Study Room',
      description: 'Inspiring workspaces that foster creativity and productivity',
      image: '/images/Villas/study-room.png',
      icon: BookOpen,
      color: '#CD853F',
      category: 'functional'
    },
    {
      title: 'TV Units',
      description: 'State-of-the-art entertainment centers with premium aesthetics',
      image: '/images/Villas/tv-units.png',
      icon: Tv,
      color: '#D2691E',
      featured: true,
      category: 'entertainment'
    },
    {
      title: 'Home Spa',
      description: 'Private wellness sanctuaries for rejuvenation and relaxation',
      image: '/images/Villas/home-spa.png',
      icon: Sparkles,
      color: '#8B6914',
      category: 'luxury'
    },
    {
      title: 'Home Bar',
      description: 'Elegant bar designs for sophisticated entertaining',
      image: '/images/Villas/home-bar.png',
      icon: Wine,
      color: '#B8860B',
      category: 'entertainment'
    },
    {
      title: 'Walking Wardrobe',
      description: 'Spacious walk-in closets with premium organization systems',
      image: '/images/Villas/walking-wardrobe.png',
      icon: Users,
      color: '#DAA520',
      category: 'storage'
    },
    {
      title: 'Crockery Unit',
      description: 'Stylish display units for your finest dinnerware collection',
      image: '/images/Villas/crockery-unit.png',
      icon: Package,
      color: '#C19A6B',
      featured: true,
      category: 'storage'
    },
    {
      title: 'Utility',
      description: 'Functional utility spaces with smart design solutions',
      image: '/images/Villas/utility.png',
      icon: Bath,
      color: '#9C6B4E',
      category: 'functional'
    },
    {
      title: 'Shoe Unit',
      description: 'Organized shoe storage with elegant display options',
      image: '/images/Villas/shoe-unit.png',
      icon: Archive,
      color: '#8B7355',
      category: 'storage'
    },
    {
      title: 'Kitchen',
      description: 'Gourmet kitchens equipped with modern amenities and timeless design',
      image: '/images/Villas/kitchen.png',
      icon: DoorOpen,
      color: '#A0826D',
      featured: true,
      category: 'functional'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Spaces' },
    { id: 'living', label: 'Living Spaces' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'storage', label: 'Storage' },
    { id: 'functional', label: 'Functional' },
    { id: 'luxury', label: 'Luxury' }
  ];

  const filteredCategories = activeFilter === 'all' 
    ? interiorCategories 
    : interiorCategories.filter(cat => cat.category === activeFilter);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{
            backgroundColor: '#B84A2B',
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`
          }}
        />
        <div 
          className="absolute top-1/3 right-10 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{
            backgroundColor: '#8B4513',
            transform: `translateY(${-scrollY * 0.2}px) rotate(${-scrollY * 0.15}deg)`
          }}
        />
        <div 
          className="absolute bottom-20 -right-20 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{
            backgroundColor: '#CD853F',
            transform: `translateY(${-scrollY * 0.25}px) rotate(${scrollY * 0.12}deg)`
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 md:py-40 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 rounded-full opacity-20 animate-float" style={{backgroundColor: '#B84A2B'}} />
        <div className="absolute top-20 right-20 w-16 h-16 md:w-24 md:h-24 rounded-full opacity-15 animate-float-delayed" style={{backgroundColor: '#CD853F'}} />
        <div className="absolute bottom-10 right-10 md:right-20 w-24 h-24 md:w-40 md:h-40 rounded-full opacity-20 animate-float-slow" style={{backgroundColor: '#B84A2B'}} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rotate-45 opacity-10 animate-spin-slow" style={{backgroundColor: '#B84A2B'}} />
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-15 animate-pulse-slow" style={{backgroundColor: '#8B4513'}} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block animate-fade-in-up">
              <div className="w-16 md:w-24 h-1.5 mx-auto mb-6 md:mb-8 animate-expand rounded-full" style={{backgroundColor: '#B84A2B', boxShadow: '0 0 20px rgba(184, 74, 43, 0.5)'}} />
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 tracking-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Villa Interiors
              </h1>
              <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto px-4 animate-fade-in-up leading-relaxed" style={{animationDelay: '0.4s'}}>
                Crafting Extraordinary Living Experiences with Unparalleled Luxury & Sophistication
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Luxury Villa Interiors
          </h2>
          <div className="w-20 md:w-24 h-1.5 mx-auto mb-8 animate-expand rounded-full" style={{backgroundColor: '#B84A2B', boxShadow: '0 0 15px rgba(184, 74, 43, 0.4)'}} />
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fade-in-up leading-relaxed" style={{animationDelay: '0.2s'}}>
            Transform your villa into a masterpiece with our bespoke interior design solutions that reflect your unique lifestyle and taste
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4">
          {filters.map((filter, idx) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-500 transform hover:scale-105"
              style={{
                backgroundColor: activeFilter === filter.id ? '#B84A2B' : 'white',
                color: activeFilter === filter.id ? 'white' : '#374151',
                boxShadow: activeFilter === filter.id 
                  ? '0 10px 30px rgba(184, 74, 43, 0.3)' 
                  : '0 4px 12px rgba(0, 0, 0, 0.1)',
                animation: `slideUpFade 0.6s ease-out ${idx * 0.1}s both`
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            
            // Define grid spans for masonry layout
            let gridClass = 'lg:col-span-4';
            if (index === 0) gridClass = 'lg:col-span-8 lg:row-span-2'; // Hero
            if (index === 1) gridClass = 'lg:col-span-4 lg:row-span-2'; // Tall
            if (index === 4) gridClass = 'lg:col-span-7';
            if (index === 5) gridClass = 'lg:col-span-5';
            if (index === 8) gridClass = 'lg:col-span-6 lg:row-span-2';
            if (index === 11) gridClass = 'lg:col-span-6';
            
            return (
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer ${gridClass}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animation: `slideUpFade 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                <div className={`relative overflow-hidden ${
                  index === 0 ? 'h-96 md:h-full min-h-[500px]' : 
                  index === 1 || index === 8 ? 'h-96 md:h-full' : 
                  'h-80 md:h-96'
                }`}>
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:brightness-110"
                      style={{
                        objectPosition: 'center',
                        transform: hoveredIndex === index ? 'scale(1.25) rotate(2deg)' : 'scale(1)',
                        filter: hoveredIndex === index ? 'brightness(1.1) contrast(1.1)' : 'brightness(1)'
                      }}
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80`;
                      }}
                    />
                  </div>
                  
                  {/* Gradient Overlay with Animation */}
                  <div 
                    className="absolute inset-0 transition-all duration-700"
                    style={{
                      background: hoveredIndex === index 
                        ? `linear-gradient(135deg, ${category.color}95 0%, ${category.color}50 50%, transparent 100%)`
                        : 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.95) 100%)'
                    }}
                  />

                  {/* Decorative Geometric Corners */}
                  <div 
                    className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 opacity-30 transition-all duration-700 group-hover:opacity-60 group-hover:scale-110"
                    style={{
                      backgroundColor: category.color,
                      clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                      transform: hoveredIndex === index ? 'rotate(20deg) scale(1.2)' : 'rotate(0deg) scale(1)',
                      boxShadow: hoveredIndex === index ? `0 0 40px ${category.color}` : 'none'
                    }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-20 md:w-28 h-20 md:h-28 opacity-20 transition-all duration-700 group-hover:opacity-50 group-hover:scale-110"
                    style={{
                      backgroundColor: category.color,
                      clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
                      transform: hoveredIndex === index ? 'rotate(-20deg) scale(1.2)' : 'rotate(0deg) scale(1)',
                      boxShadow: hoveredIndex === index ? `0 0 40px ${category.color}` : 'none'
                    }}
                  />
                  
                  {/* Animated Icon */}
                  <div 
                    className="absolute top-6 right-6 w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-700 backdrop-blur-sm"
                    style={{
                      backgroundColor: `${category.color}dd`,
                      transform: hoveredIndex === index ? 'scale(1.3) rotate(360deg)' : 'scale(1) rotate(0deg)',
                      boxShadow: hoveredIndex === index ? `0 20px 60px ${category.color}80` : '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                  >
                    <Icon 
                      size={index === 0 ? 36 : 28} 
                      className="transition-transform duration-700"
                      style={{
                        transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Featured Badge */}
                    {category.featured && (
                      <div 
                        className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full z-10 flex items-center gap-1.5 animate-pulse-slow"
                        style={{ 
                          boxShadow: '0 4px 20px rgba(255,215,0,0.6)',
                          animation: 'pulse-glow 2s ease-in-out infinite'
                        }}
                      >
                        <span className="text-sm">★</span> Premium
                      </div>
                    )}

                    {/* Animated Accent Line */}
                    <div 
                      className="h-1.5 mb-4 md:mb-6 transition-all duration-700 rounded-full"
                      style={{
                        backgroundColor: category.color,
                        width: hoveredIndex === index ? '100px' : '50px',
                        boxShadow: hoveredIndex === index ? `0 0 30px ${category.color}` : 'none'
                      }}
                    />
                    
                    <h3 className={`font-bold text-white mb-2 md:mb-3 transition-all duration-500 ${
                      index === 0 ? 'text-3xl md:text-5xl' : 'text-xl md:text-3xl'
                    }`}>
                      {category.title}
                    </h3>
                    
                    <p 
                      className="text-gray-100 text-sm md:text-lg mb-4 md:mb-6 transition-all duration-700 leading-relaxed"
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(20px)',
                        maxHeight: hoveredIndex === index ? '200px' : '0px'
                      }}
                    >
                      {category.description}
                    </p>
                    
                    <button 
                      className="flex items-center gap-2 text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-700 backdrop-blur-md w-fit"
                      style={{
                        backgroundColor: hoveredIndex === index ? `${category.color}ee` : 'transparent',
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform: hoveredIndex === index ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                        boxShadow: hoveredIndex === index ? `0 15px 40px ${category.color}60` : 'none'
                      }}
                    >
                      View Details 
                      <ChevronRight 
                        size={20} 
                        className="transition-transform duration-300"
                        style={{
                          transform: hoveredIndex === index ? 'translateX(8px)' : 'translateX(0)'
                        }}
                      />
                    </button>
                  </div>

                  {/* Animated Border */}
                  <div 
                    className="absolute inset-0 border-4 rounded-3xl transition-all duration-700 pointer-events-none"
                    style={{
                      borderColor: category.color,
                      opacity: hoveredIndex === index ? 1 : 0,
                      transform: hoveredIndex === index ? 'scale(0.95)' : 'scale(1)',
                      boxShadow: hoveredIndex === index ? `inset 0 0 60px ${category.color}40` : 'none'
                    }}
                  />

                  {/* Shine Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
                      backgroundSize: '200% 200%',
                      animation: hoveredIndex === index ? 'shine 2s ease-in-out infinite' : 'none'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 md:mt-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)`,
              backgroundSize: '40px 40px',
              animation: 'patternMove 20s linear infinite'
            }} />
          </div>
          
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{backgroundColor: '#B84A2B'}} />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse-delayed" style={{backgroundColor: '#CD853F'}} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse-slower" style={{backgroundColor: '#8B4513', transform: 'translate(-50%, -50%)'}} />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 animate-fade-in-up">
              Ready to Create Your Dream Villa?
            </h3>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-10 md:mb-14 max-w-3xl mx-auto px-4 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Let our expert designers transform your villa into an extraordinary living masterpiece
            </p>
            <button 
              className="px-10 md:px-14 py-4 md:py-6 rounded-2xl text-white font-bold text-base md:text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{
                backgroundColor: '#B84A2B',
                boxShadow: '0 20px 60px rgba(184, 74, 43, 0.5)',
                animationDelay: '0.4s'
              }}
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Animations */}
      <style jsx>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(80px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fade-in-up { 
          from { opacity: 0; transform: translateY(40px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes expand { 
          from { width: 0; opacity: 0; } 
          to { width: 100%; opacity: 1; } 
        }
        @keyframes float { 
          0%, 100% { transform: translateY(0) rotate(0deg); } 
          50% { transform: translateY(-30px) rotate(10deg); } 
        }
        @keyframes float-delayed { 
          0%, 100% { transform: translateY(0) rotate(0deg); } 
          50% { transform: translateY(-40px) rotate(-10deg); } 
        }
        @keyframes float-slow { 
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); } 
          50% { transform: translateY(-25px) rotate(5deg) scale(1.05); } 
        }
        @keyframes spin-slow { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        @keyframes shine { 
          0% { background-position: -200% 0; } 
          100% { background-position: 200% 0; } 
        }
        @keyframes gridMove { 
          0% { transform: translate(0, 0); } 
          100% { transform: translate(50px, 50px); } 
        }
        @keyframes patternMove { 
          0% { transform: translate(0, 0); } 
          100% { transform: translate(40px, 40px); } 
        }
        @keyframes pulse-slow { 
          0%, 100% { opacity: 0.15; transform: scale(1); } 
          50% { opacity: 0.25; transform: scale(1.1); } 
        }
        @keyframes pulse-delayed { 
          0%, 100% { opacity: 0.2; transform: scale(1); } 
          50% { opacity: 0.35; transform: scale(1.15); } 
        }
        @keyframes pulse-slower { 
          0%, 100% { opacity: 0.1; transform: scale(1); } 
          50% { opacity: 0.2; transform: scale(1.08); } 
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(255,215,0,0.6); }
          50% { box-shadow: 0 4px 30px rgba(255,215,0,0.9); }
        }

        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }
        .animate-expand { animation: expand 1.2s ease-out 0.5s both; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-delayed { animation: pulse-delayed 3s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default VillasPage;
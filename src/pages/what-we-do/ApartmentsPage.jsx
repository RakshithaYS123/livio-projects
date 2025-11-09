// src/pages/what-we-do/ApartmentsPage.jsx
import React, { useState, useEffect } from 'react';
import { ChevronRight, Home, Bed, Utensils, Lightbulb, Tv, Bath, Wind, Archive, Package, Wallpaper } from 'lucide-react';

const ApartmentsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const interiorCategories = [
    {
      title: 'Living Room Design',
      description: 'Elegant & comfortable living spaces that reflect your lifestyle',
      image: '/images/apartments/living-room.png',
      icon: Home,
      color: '#B84A2B',
      featured: true
    },
    {
      title: 'Bedroom Interiors',
      description: 'Serene & personalized bedroom designs for perfect relaxation',
      image: '/images/apartments/bedroom.png',
      icon: Bed,
      color: '#8B4513'
    },
    {
      title: 'Kitchen Design',
      description: 'Modern & functional kitchens that inspire culinary creativity',
      image: '/images/apartments/kitchen.png',
      icon: Utensils,
      color: '#A0522D'
    },
    {
      title: 'False Ceiling & Lighting',
      description: 'Innovative ceiling designs with ambient lighting solutions',
      image: '/images/apartments/ceiling.png',
      icon: Lightbulb,
      color: '#CD853F'
    },
    {
      title: 'TV & Entertainment Units',
      description: 'Stylish entertainment centers for modern living',
      image: '/images/apartments/tv-unit.png',
      icon: Tv,
      color: '#D2691E',
      featured: true
    },
    {
      title: 'Utility',
      description: 'Luxurious Utility designs with premium fixtures',
      image: '/images/apartments/Utility.png',
      icon: Bath,
      color: '#8B6914'
    },
    {
      title: 'Balcony & Utility Design',
      description: 'Transform your balcony into a beautiful outdoor retreat',
      image: '/images/apartments/balcony.png',
      icon: Wind,
      color: '#B8860B'
    },
    {
      title: 'Wardrobe & Storage Solutions',
      description: 'Smart storage solutions that maximize space & organization',
      image: '/images/apartments/wardrobe.png',
      icon: Archive,
      color: '#DAA520'
    },
    {
      title: 'Storage Space & Crockery Units',
      description: 'Elegant storage solutions for your kitchen and dining essentials',
      image: '/images/apartments/crockery.png',
      icon: Package,
      color: '#C19A6B',
      featured: true
    },
    {
      title: 'Wall Paneling & Design',
      description: 'Stunning wall treatments that add character and depth',
      image: '/images/apartments/wall.png',
      icon: Wallpaper,
      color: '#9C6B4E'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{
            backgroundColor: '#B84A2B',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div 
          className="absolute bottom-20 -right-20 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{
            backgroundColor: '#8B4513',
            transform: `translateY(${-scrollY * 0.2}px)`
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
        
        <div className="absolute top-10 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 rounded-full opacity-20 animate-float" style={{backgroundColor: '#B84A2B'}} />
        <div className="absolute bottom-10 right-10 md:right-20 w-24 h-24 md:w-40 md:h-40 rounded-full opacity-20 animate-float-delayed" style={{backgroundColor: '#B84A2B'}} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rotate-45 opacity-10 animate-spin-slow" style={{backgroundColor: '#B84A2B'}} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block animate-fade-in-up">
              <div className="w-16 md:w-20 h-1 mx-auto mb-4 md:mb-6 animate-expand" style={{backgroundColor: '#B84A2B'}} />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Apartment Interiors
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto px-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Transforming spaces into stunning homes with expert craftsmanship
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            What We Do
          </h2>
          <div className="w-20 md:w-24 h-1 mx-auto mb-6 animate-expand" style={{backgroundColor: '#B84A2B'}} />
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            We specialize in creating beautiful, functional apartment interiors that perfectly balance aesthetics and practicality
          </p>
        </div>

        {/* Masonry-style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {interiorCategories.map((category, index) => {
            const Icon = category.icon;
            // ✅ FIXED: Removed unused `isFeatured` assignment
            // Instead, use `category.featured` directly in JSX below
            
            // Define grid spans for desktop masonry layout
            let gridClass = 'lg:col-span-4';
            if (index === 0) gridClass = 'lg:col-span-8 lg:row-span-2'; // Large hero
            if (index === 4) gridClass = 'lg:col-span-8';
            if (index === 8) gridClass = 'lg:col-span-6 lg:row-span-2';
            
            return (
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer ${gridClass}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animation: `slideUpFade 0.8s ease-out ${index * 0.15}s both`
                }}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'h-96 md:h-full min-h-[500px]' : index === 8 ? 'h-96 md:h-full' : 'h-80 md:h-96'}`}>
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:brightness-110"
                      style={{
                        objectPosition: 'center',
                        transform: hoveredIndex === index ? 'scale(1.25) rotate(2deg)' : 'scale(1)'
                      }}
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1200&q=80`;
                      }}
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 transition-all duration-700"
                    style={{
                      background: hoveredIndex === index 
                        ? `linear-gradient(135deg, ${category.color}95 0%, ${category.color}50 50%, transparent 100%)`
                        : 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.95) 100%)'
                    }}
                  />

                  {/* Decorative Corners */}
                  <div 
                    className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 opacity-30 transition-all duration-700 group-hover:opacity-50 group-hover:scale-110"
                    style={{
                      backgroundColor: category.color,
                      clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                      transform: hoveredIndex === index ? 'rotate(10deg)' : 'rotate(0deg)'
                    }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-20 md:w-28 h-20 md:h-28 opacity-20 transition-all duration-700 group-hover:opacity-40 group-hover:scale-110"
                    style={{
                      backgroundColor: category.color,
                      clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
                      transform: hoveredIndex === index ? 'rotate(-10deg)' : 'rotate(0deg)'
                    }}
                  />
                  
                  {/* Floating Icon */}
                  <div 
                    className="absolute top-6 right-6 w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-700 backdrop-blur-sm"
                    style={{
                      backgroundColor: `${category.color}dd`,
                      transform: hoveredIndex === index ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0deg)',
                      boxShadow: hoveredIndex === index ? `0 20px 60px ${category.color}80` : '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                  >
                    <Icon size={index === 0 ? 36 : 28} className="transition-transform duration-700 group-hover:scale-110" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Featured Badge ✅ Now using `category.featured` */}
                    {category.featured && (
                      <div 
                        className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full z-10 flex items-center gap-1"
                        style={{ boxShadow: '0 4px 12px rgba(255,215,0,0.5)' }}
                      >
                        <span>★</span> Featured
                      </div>
                    )}

                    <div 
                      className="h-1 mb-4 md:mb-6 transition-all duration-700 rounded-full"
                      style={{
                        backgroundColor: category.color,
                        width: hoveredIndex === index ? '80px' : '40px',
                        boxShadow: hoveredIndex === index ? `0 0 20px ${category.color}` : 'none'
                      }}
                    />
                    
                    <h3 className={`font-bold text-white mb-2 md:mb-3 transition-all duration-500 ${index === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                      {category.title}
                    </h3>
                    
                    <p 
                      className="text-gray-100 text-sm md:text-base mb-4 md:mb-6 transition-all duration-700 leading-relaxed"
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(20px)',
                        maxHeight: hoveredIndex === index ? '200px' : '0px'
                      }}
                    >
                      {category.description}
                    </p>
                    
                    <button 
                      className="flex items-center gap-2 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-xl transition-all duration-700 backdrop-blur-md w-fit"
                      style={{
                        backgroundColor: hoveredIndex === index ? `${category.color}ee` : 'transparent',
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform: hoveredIndex === index ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                        boxShadow: hoveredIndex === index ? `0 10px 30px ${category.color}60` : 'none'
                      }}
                    >
                      Explore Now 
                      <ChevronRight 
                        size={20} 
                        className="transition-transform duration-300"
                        style={{
                          transform: hoveredIndex === index ? 'translateX(5px)' : 'translateX(0)'
                        }}
                      />
                    </button>
                  </div>

                  <div 
                    className="absolute inset-0 border-4 rounded-3xl transition-all duration-700 pointer-events-none"
                    style={{
                      borderColor: category.color,
                      opacity: hoveredIndex === index ? 1 : 0,
                      transform: hoveredIndex === index ? 'scale(0.95)' : 'scale(1)'
                    }}
                  />

                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                      backgroundSize: '200% 200%',
                      animation: hoveredIndex === index ? 'shine 2s ease-in-out infinite' : 'none'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-24 pt-12 md:pt-16 border-t-2 border-gray-200">
          {[
            { number: '50+', label: 'Completed Projects' },
            { number: '15+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center group cursor-pointer"
              style={{animation: `slideUpFade 0.8s ease-out ${1 + idx * 0.2}s both`}}
            >
              <div 
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 transition-all duration-500 group-hover:scale-110"
                style={{color: '#B84A2B'}}
              >
                {stat.number}
              </div>
              <div className="text-xs md:text-base text-gray-600 font-medium px-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)`,
              backgroundSize: '40px 40px',
              animation: 'patternMove 20s linear infinite'
            }} />
          </div>
          
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl animate-pulse" style={{backgroundColor: '#B84A2B'}} />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl animate-pulse-delayed" style={{backgroundColor: '#B84A2B'}} />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Ready to Transform Your Apartment?
            </h3>
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              Let's discuss your dream interior design project and bring your vision to life
            </p>
            <button 
              className="px-8 md:px-12 py-4 md:py-5 rounded-2xl text-white font-bold text-base md:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 hover:-translate-y-2"
              style={{
                backgroundColor: '#B84A2B',
                boxShadow: '0 20px 60px rgba(184, 74, 43, 0.4)'
              }}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(60px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes expand { from { width: 0; opacity: 0; } to { width: 100%; opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(10deg); } }
        @keyframes float-delayed { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-30px) rotate(-10deg); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shine { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes gridMove { 0% { transform: translate(0, 0); } 100% { transform: translate(50px, 50px); } }
        @keyframes patternMove { 0% { transform: translate(0, 0); } 100% { transform: translate(40px, 40px); } }
        @keyframes pulse-delayed { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.1); } }

        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }
        .animate-expand { animation: expand 1s ease-out 0.5s both; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-pulse-delayed { animation: pulse-delayed 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ApartmentsPage;
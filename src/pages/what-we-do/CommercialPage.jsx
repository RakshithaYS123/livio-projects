import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Coffee, DoorOpen, Sparkles, Trophy, Store, UtensilsCrossed, ChevronDown } from 'lucide-react';

const CommercialPage = () => {
  const [activeSection,setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      // Determine active section
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(index);
          }
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const commercialSpaces = [
    {
      title: 'Pantry',
      subtitle: 'Modern Workplace Refreshment Zones',
      description: 'Functional and stylish pantry designs that boost employee morale and productivity with smart storage and contemporary aesthetics.',
      image: '/images/Commerical/pantry.png',
      icon: Coffee,
      color: '#B84A2B',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      title: 'Entry Lobby',
      subtitle: 'First Impressions That Last',
      description: 'Grand entrance lobbies designed to make powerful first impressions, combining elegance with functionality for seamless visitor experiences.',
      image: '/images/Commerical/entry-lobby.png',
      icon: DoorOpen,
      color: '#8B4513',
      gradient: 'from-amber-700 to-orange-700'
    },
    {
      title: 'Reception',
      subtitle: 'Professional Welcome Areas',
      description: 'Sophisticated reception areas that reflect your brand identity while providing comfort and efficiency for visitors and staff.',
      image: '/images/Commerical/reception.png',
      icon: Store,
      color: '#A0522D',
      gradient: 'from-yellow-700 to-amber-800'
    },
    {
      title: 'Spa',
      subtitle: 'Luxury Wellness Sanctuaries',
      description: 'Tranquil spa environments designed to deliver ultimate relaxation experiences with premium finishes and calming aesthetics.',
      image: '/images/Commerical/spa.png',
      icon: Sparkles,
      color: '#CD853F',
      gradient: 'from-teal-600 to-cyan-700'
    },
    {
      title: 'Sports Lobby',
      subtitle: 'Dynamic Athletic Spaces',
      description: 'Energetic sports facility lobbies that inspire fitness and wellness, featuring modern design with durable, high-performance materials.',
      image: '/images/Commerical/sports-lobby.png',
      icon: Trophy,
      color: '#D2691E',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      title: 'Restaurant',
      subtitle: 'Culinary Experience Environments',
      description: 'Inviting restaurant interiors that enhance dining experiences through thoughtful design, perfect ambiance, and functional layouts.',
      image: '/images/Commerical/restaurant.png',
      icon: UtensilsCrossed,
      color: '#8B6914',
      gradient: 'from-rose-600 to-pink-700'
    },
    {
      title: 'Cafes',
      subtitle: 'Cozy Social Gathering Spots',
      description: 'Charming cafe designs that create welcoming atmospheres for casual meetings and relaxation, blending comfort with contemporary style.',
      image: '/images/Commerical/cafes.png',
      icon: Coffee,
      color: '#B8860B',
      gradient: 'from-purple-600 to-violet-700'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Custom Cursor Follower */}
      <div 
        className="fixed w-6 h-6 rounded-full border-2 border-orange-500 pointer-events-none z-50 mix-blend-difference transition-transform duration-200"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Hero Section with Parallax */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(184, 74, 43, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(184, 74, 43, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              animation: 'gridSlide 20s linear infinite'
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl">
          <div className="overflow-hidden mb-6">
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
              style={{
                animation: 'slideUp 1s ease-out',
                background: 'linear-gradient(135deg, #fff 0%, #B84A2B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              COMMERCIAL
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-400"
              style={{ animation: 'slideUp 1s ease-out 0.2s both' }}
            >
              Interior Design Excellence
            </h2>
          </div>
          <p 
            className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ animation: 'fadeIn 1s ease-out 0.4s both' }}
          >
            Transforming commercial spaces into exceptional environments that elevate brands, inspire teams, and delight customers
          </p>
          
          {/* Scroll Indicator */}
          <div 
            className="flex flex-col items-center gap-2"
            style={{ animation: 'fadeIn 1s ease-out 0.6s both' }}
          >
            <span className="text-sm text-gray-600">Scroll to Explore</span>
            <ChevronDown 
              size={32} 
              className="animate-bounce text-orange-500"
            />
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Spaces Grid Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{
                background: 'linear-gradient(135deg, #fff 0%, #B84A2B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Our Expertise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto" />
          </div>

          {/* Staggered Grid Layout */}
          <div className="space-y-32">
            {commercialSpaces.map((space, index) => {
              const Icon = space.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                  style={{
                    opacity: 0,
                    animation: `fadeInUp 1s ease-out ${index * 0.2}s forwards`
                  }}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative group">
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                      {/* Image */}
                      <img
                        src={space.image}
                        alt={space.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80';
                        }}
                      />
                      
                      {/* Overlay */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${space.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-700`}
                      />

                      {/* Floating Number */}
                      <div 
                        className="absolute top-8 right-8 text-9xl font-black opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                        style={{ color: space.color }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Corner Accent */}
                      <div 
                        className="absolute bottom-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-all duration-700"
                        style={{
                          background: `linear-gradient(135deg, ${space.color} 0%, transparent 100%)`,
                          clipPath: 'polygon(0 100%, 0 0, 100% 100%)'
                        }}
                      />
                    </div>

                    {/* Floating Icon */}
                    <div 
                      className="absolute -bottom-8 -right-8 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700"
                      style={{
                        backgroundColor: space.color,
                        boxShadow: `0 20px 60px ${space.color}60`
                      }}
                    >
                      <Icon size={40} className="text-white" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="space-y-6">
                      {/* Category Number */}
                      <div 
  className="text-8xl md:text-9xl font-black transition-opacity duration-300"
  style={{ 
    color: space.color,
    opacity: activeSection === index ? 1 : 0.1
  }}
>
  {String(index + 1).padStart(2, '0')}
</div>

                      {/* Title */}
                      <div>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                          {space.title}
                        </h3>
                        <div 
                          className="w-24 h-1 rounded-full"
                          style={{ backgroundColor: space.color }}
                        />
                      </div>

                      {/* Subtitle */}
                      <h4 
                        className="text-xl md:text-2xl font-semibold"
                        style={{ color: space.color }}
                      >
                        {space.subtitle}
                      </h4>

                      {/* Description */}
                      <p className="text-lg text-gray-400 leading-relaxed">
                        {space.description}
                      </p>

                      {/* CTA Button */}
                      <button 
                        className="group/btn flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                        style={{
                          backgroundColor: space.color,
                          boxShadow: `0 10px 30px ${space.color}40`
                        }}
                      >
                        <span>Explore Design</span>
                        <ArrowRight 
                          size={20} 
                          className="transform group-hover/btn:translate-x-2 transition-transform duration-300"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
      {/* Final CTA Section */}
      <div className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="mb-12"
            style={{ animation: 'fadeInUp 1s ease-out both' }}
          >
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Let's Build Something
              <br />
              <span 
                style={{
                  background: 'linear-gradient(135deg, #B84A2B 0%, #fff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Extraordinary
              </span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Partner with us to create commercial spaces that leave lasting impressions
            </p>
          </div>

          <button 
            className="group relative px-12 py-6 rounded-2xl text-xl font-bold text-white overflow-hidden transition-all duration-500 hover:scale-105"
            style={{
              animation: 'fadeInUp 1s ease-out 0.2s both',
              backgroundColor: '#B84A2B',
              boxShadow: '0 20px 60px rgba(184, 74, 43, 0.4)'
            }}
          >
            <span className="relative z-10">Start Your Project Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>

      {/* Advanced CSS Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes gridSlide {
          from { transform: translate(0, 0); }
          to { transform: translate(100px, 100px); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default CommercialPage;
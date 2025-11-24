import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Home, Sparkles, ChevronDown, Eye } from 'lucide-react';

const PenthousePage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

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

  const penthouseSpaces = [
    {
      title: 'Dry Kitchen',
      subtitle: 'Culinary Excellence Redefined',
      description: 'A masterpiece of modern design where functionality meets sophistication. Premium finishes and intelligent layouts create the perfect space for culinary artistry.',
      image: '/images/Penthouse/dry-kitchen.png',
      color: '#C9A05C',
      gradient: 'from-amber-600 via-yellow-600 to-amber-700',
      pattern: 'diagonal-lines'
    },
    {
      title: 'Dress Room',
      subtitle: 'Your Personal Fashion Sanctuary',
      description: 'An opulent dressing room designed for the connoisseur. Custom storage solutions and elegant lighting showcase your wardrobe in ultimate luxury.',
      image: '/images/Penthouse/dress-room.png',
      color: '#B8860B',
      gradient: 'from-purple-600 via-pink-600 to-rose-600',
      pattern: 'dots'
    },
    {
      title: 'Bedroom',
      subtitle: 'Tranquil Luxury Retreat',
      description: 'A serene haven where contemporary elegance meets comfort. Every detail crafted to provide the ultimate relaxation experience.',
      image: '/images/Penthouse/bedroom.png',
      color: '#8B7355',
      gradient: 'from-blue-600 via-indigo-600 to-purple-700',
      pattern: 'waves'
    },
    {
      title: 'Pantry',
      subtitle: 'Sophisticated Storage Solutions',
      description: 'Smart organization meets premium aesthetics. A perfectly designed pantry that combines accessibility with visual appeal.',
      image: '/images/Penthouse/pantry.png',
      color: '#D4AF37',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
      pattern: 'grid'
    },
    {
      title: 'Kitchen',
      subtitle: 'The Heart of Your Home',
      description: 'State-of-the-art culinary workspace featuring premium appliances and exquisite finishes. Where gourmet dreams come to life.',
      image: '/images/Penthouse/kitchen.png',
      color: '#CD7F32',
      gradient: 'from-orange-600 via-red-600 to-pink-700',
      pattern: 'hexagons'
    },
    {
      title: 'Washroom',
      subtitle: 'Spa-Inspired Sanctuaries',
      description: 'Luxurious bathrooms that transform daily routines into indulgent experiences. Premium materials and thoughtful design create your private spa.',
      image: '/images/Penthouse/washroom.png',
      color: '#B87333',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-700',
      pattern: 'circles'
    },
    {
      title: 'Home Theatre',
      subtitle: 'Cinematic Excellence at Home',
      description: 'Experience entertainment like never before. Acoustically optimized with luxury seating and cutting-edge technology for the ultimate viewing experience.',
      image: '/images/Penthouse/home-theatre.png',
      color: '#967969',
      gradient: 'from-slate-700 via-gray-800 to-zinc-900',
      pattern: 'diagonal-lines'
    },
    {
      title: 'TV Cabinets',
      subtitle: 'Entertainment with Elegance',
      description: 'Custom-designed entertainment centers that seamlessly blend technology with sophisticated design. Storage and style in perfect harmony.',
      image: '/images/Penthouse/tv-cabinets.png',
      color: '#A0826D',
      gradient: 'from-amber-700 via-orange-700 to-red-700',
      pattern: 'dots'
    },
    {
      title: 'Walking Wardrobe',
      subtitle: 'Step into Luxury',
      description: 'Expansive walk-in closets designed to showcase and organize your collection. Every inch optimized for elegance and functionality.',
      image: '/images/Penthouse/walking-wardrobe.png',
      color: '#C19A6B',
      gradient: 'from-rose-600 via-pink-600 to-fuchsia-700',
      pattern: 'waves'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white overflow-x-hidden">
      {/* Luxury Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-lg shadow-amber-500/50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Elegant Cursor Follower */}
      <div 
        className="fixed w-8 h-8 rounded-full border-2 border-amber-400/60 pointer-events-none z-50 mix-blend-screen transition-all duration-200"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)'
        }}
      >
        <div className="absolute inset-1 rounded-full bg-amber-400/20" />
      </div>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(184, 134, 11, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(205, 127, 50, 0.2) 0%, transparent 50%)
              `
            }}
          />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              animation: 'meshMove 30s linear infinite'
            }}
          />
        </div>

        {/* Floating Luxury Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${i % 3 === 0 ? '#D4AF37' : i % 3 === 1 ? '#B8860B' : '#CD7F32'}, transparent)`,
                opacity: Math.random() * 0.4 + 0.1,
                animation: `luxuryFloat ${8 + Math.random() * 12}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(212, 175, 55, 0.3)`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl">
          <div className="mb-8">
            <div className="inline-block mb-6 px-6 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm">
              <span className="text-amber-400 text-sm font-semibold tracking-widest">LUXURY LIVING</span>
            </div>
          </div>
          
          <div className="overflow-hidden mb-6">
            <h1 
              className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none"
              style={{
                animation: 'heroSlideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                background: 'linear-gradient(135deg, #FFD700 0%, #FDB931 25%, #D4AF37 50%, #C9A05C 75%, #B8860B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 80px rgba(212, 175, 55, 0.5)'
              }}
            >
              PENTHOUSE
            </h1>
          </div>
          
          <div className="overflow-hidden mb-10">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 tracking-wide"
              style={{ 
                animation: 'heroSlideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
                textShadow: '0 2px 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              Elevated Living Spaces
            </h2>
          </div>
          
          <p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed"
            style={{ animation: 'fadeIn 1.2s ease-out 0.5s both' }}
          >
            Where architectural brilliance meets uncompromising luxury. Each space meticulously crafted to elevate your lifestyle to extraordinary heights.
          </p>
          
          <div 
            className="flex flex-col items-center gap-3"
            style={{ animation: 'fadeIn 1.2s ease-out 0.8s both' }}
          >
            <span className="text-sm text-gray-500 tracking-widest">DISCOVER EXCELLENCE</span>
            <ChevronDown 
              size={36} 
              className="text-amber-400 animate-bounce"
              style={{ filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))' }}
            />
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-luxuryBlob" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-luxuryBlob" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-luxuryBlob" style={{ animationDelay: '6s' }} />
      </div>

      {/* Spaces Showcase */}
      <div className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <Sparkles className="mx-auto mb-4 text-amber-400" size={48} />
            </div>
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Penthouse Perfection
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <Sparkles className="text-amber-400" size={16} />
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore meticulously designed spaces that define luxury living
            </p>
          </div>

          {/* Spaces Grid */}
          <div className="space-y-24">
            {penthouseSpaces.map((space, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                  style={{
                    opacity: 0,
                    animation: `luxuryFadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s forwards`
                  }}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative group">
                    <div className="relative">
                      {/* Main Image Container */}
                      <div className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900">
                        <img
                          src={space.image}
                          alt={space.title}
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80';
                          }}
                        />
                        
                        {/* Overlay Gradient */}
                        <div 
                          className={`absolute inset-0 bg-gradient-to-br ${space.gradient} opacity-0 group-hover:opacity-30 transition-all duration-1000`}
                        />

                        {/* Decorative Corner Frame */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-amber-400" />
                          <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-amber-400" />
                          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-amber-400" />
                          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-amber-400" />
                        </div>

                        {/* View Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <button 
                            onClick={() => setSelectedImage(space)}
                            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl flex items-center gap-3 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                          >
                            <Eye size={24} />
                            <span>View Gallery</span>
                          </button>
                        </div>

                        {/* Floating Number Badge */}
                        <div 
                          className="absolute top-8 right-8 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white transform -rotate-12 group-hover:rotate-0 transition-all duration-700 shadow-2xl"
                          style={{
                            backgroundColor: space.color,
                            boxShadow: `0 20px 60px ${space.color}80`
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Decorative Element Below Image */}
                      <div 
                        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-8 rounded-full filter blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                        style={{ backgroundColor: space.color }}
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="space-y-5">
                      {/* Large Background Number */}
                      <div 
                        className="text-[10rem] md:text-[11rem] font-black leading-none opacity-5 select-none"
                        style={{ color: space.color }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Title Section */}
                      <div className="-mt-24">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
                          {space.title}
                        </h3>
                        <div className="flex items-center gap-3 mb-4">
                          <div 
                            className="w-16 h-1 rounded-full"
                            style={{ backgroundColor: space.color }}
                          />
                          <Sparkles size={20} style={{ color: space.color }} />
                        </div>
                      </div>

                      {/* Subtitle */}
                      <h4 
                        className="text-xl md:text-2xl font-semibold tracking-wide"
                        style={{ color: space.color }}
                      >
                        {space.subtitle}
                      </h4>

                      {/* Description */}
                      <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                        {space.description}
                      </p>

                      {/* Features List */}
                      <div className="flex flex-wrap gap-3">
                        {['Premium Finishes', 'Custom Design', 'Smart Solutions'].map((feature, i) => (
                          <span 
                            key={i}
                            className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
                            style={{
                              borderColor: `${space.color}40`,
                              color: space.color,
                              backgroundColor: `${space.color}10`
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button 
                        className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-base transition-all duration-500 hover:scale-105 shadow-2xl relative overflow-hidden"
                        style={{
                          backgroundColor: space.color,
                          boxShadow: `0 20px 60px ${space.color}50`
                        }}
                      >
                        <span className="relative z-10">Explore Design</span>
                        <ArrowRight 
                          size={20} 
                          className="relative z-10 transform group-hover/btn:translate-x-2 transition-transform duration-300"
                        />
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
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

      {/* Final CTA */}
      <div className="relative py-24 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl opacity-20 animate-luxuryBlob" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl opacity-20 animate-luxuryBlob" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-10">
            <Home className="mx-auto mb-6 text-amber-400" size={56} />
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Experience
              <br />
              <span 
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Penthouse Living?
              </span>
            </h3>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Let us transform your vision into an extraordinary reality
            </p>
          </div>

          <button 
            className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-xl text-lg font-bold text-black overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl"
            style={{
              backgroundColor: '#D4AF37',
              boxShadow: '0 30px 80px rgba(212, 175, 55, 0.5)'
            }}
          >
            <span className="relative z-10">Begin Your Journey</span>
            <ArrowRight size={28} className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors duration-300"
            >
              <span className="text-4xl">×</span>
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h4 className="text-3xl font-bold mb-2">{selectedImage.title}</h4>
              <p className="text-amber-400 text-xl">{selectedImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      {/* Advanced CSS Animations */}
      <style jsx>{`
        @keyframes heroSlideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes luxuryFadeInUp {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes luxuryFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          25% { transform: translate(20px, -30px) rotate(90deg); opacity: 0.6; }
          50% { transform: translate(-15px, -50px) rotate(180deg); opacity: 0.4; }
          75% { transform: translate(30px, -20px) rotate(270deg); opacity: 0.5; }
        }
        @keyframes meshMove {
          from { transform: translate(0, 0); }
          to { transform: translate(80px, 80px); }
        }
        @keyframes luxuryBlob {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(40px, -60px) scale(1.2) rotate(120deg); }
          66% { transform: translate(-30px, 40px) scale(0.85) rotate(240deg); }
        }
        .animate-luxuryBlob {
          animation: luxuryBlob 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PenthousePage;
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // All 5 carousel images
  const carouselImages = [
    {
      url: "/images/img1.jpg",
      title: "THE GREATEST CHAPTER OF YOUR LIFE.",
      subtitle: "3 & 4 BED ECO-LUXE HOMES",
      price: "STARTING AT ₹3.25 CR.",
      project: "",
      location: ""
    },
    {
      url: "/images/img2.jpg",
      title: "Elegant Kitchen Design",
      subtitle: "PREMIUM MODULAR SOLUTIONS"
    },
    {
      url: "/images/img3.jpg",
      title: "Luxury Living Spaces",
      subtitle: "CONTEMPORARY INTERIORS"
    },
    {
      url: "/images/img4.jpg",
      title: "Modern Comfort",
      subtitle: "SOPHISTICATED DESIGN"
    },
    {
      url: "/images/img5.jpg",
      title: "Timeless Elegance",
      subtitle: "CRAFTED WITH PRECISION"
    }
  ];

  // Categories section with 16 images
  const categories = [
    { 
      title: "Prosperous", 
      image: "/images/Hero/img1.png",
      description: "₹84,390/-"
    },
    { 
      title: "FIEN", 
      image: "/images/Hero/img2.png",
      description: "₹85,990/-"
    },
    { 
      title: "ASAGI", 
      image: "/images/Hero/img3.png", 
      large: true,
      description: "₹45,980/-"
    },
    { 
      title: "IONIk", 
      image: "/images/Hero/img4.png",
      description: "₹40,990/-"
    },
    { 
      title: "LOES", 
      image: "/images/Hero/img5.png",
      description: "₹84,390/-"
    },
    { 
      title: "ANICA", 
      image: "/images/Hero/img6.png",
      description: "₹19,000/-"
    },
    { 
      title: "MANDEN", 
      image: "/images/Hero/img7.png",
      description: "₹24,190/-"
    },
    { 
      title: "MASAVA", 
      image: "/images/Hero/img8.png",
      description: "₹37,390/-"
    },
    { 
      title: "LOIS", 
      image: "/images/Hero/img9.png",
      description: "₹23,123/-"
    },
    { 
      title: "ECRIN", 
      image: "/images/Hero/img10.png",
      description: "₹23,000/-"
    },
    { 
      title: "WIMK", 
      image: "/images/Hero/img11.png",
      description: "₹29,000/-"
    },
    { 
      title: "MORITA", 
      image: "/images/Hero/img12.png",
      description: "₹1,119/- Floor cushion"
    },
    { 
      title: "TETITO", 
      image: "/images/Hero/img13.png",
      description: "₹1,150/- Floor Cushion"
    },
    { 
      title: "BART", 
      image: "/images/Hero/img14.png",
      description: "₹19,000/- Coffee table"
    },
    { 
      title: "SEDLO", 
      image: "/images/Hero/img15.png",
      description: "₹4,999/- Coffee table"
    },
    { 
      title: "LUGE", 
      image: "/images/Hero/img16.png",
      description: "₹6,500/- Coffee table"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden bg-black border-b-4 md:border-b-8 border-[#B84A2B]">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/images/Hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            width: '100%',
            height: '100%'
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pb-24 md:pb-32 z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 max-w-4xl leading-tight drop-shadow-2xl">
            Crafted for Comfort. Designed with Soul. Built with Quality that Lasts.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-2xl text-white drop-shadow-lg font-light">
            Welcome to LIVIO — Crafted with Quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-xl text-base sm:text-lg hover:scale-105 transform">
              Explore Projects
            </button>
            <a
              href={`mailto:Info@livioprojects.com?subject=${encodeURIComponent(
                "Enquiry Regarding Civil / Interior Work"
              )}&body=${encodeURIComponent(
                `Hello Livio Team,

I hope you're doing well.

I'm interested in learning more about your civil and interior design services. Could you please share details about your offerings, estimated timelines, and pricing for residential projects?

Project Type: (e.g., Apartment / Villa / Commercial Space)
Location: 
Preferred Timeline: 
Additional Details: 

Looking forward to your response.

Best regards,
[Your Full Name]
[Your Contact Number]`
              )}`}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-[#B84A2B] text-white rounded-lg hover:bg-[#a03d22] transition-all duration-300 font-semibold text-center shadow-xl text-base sm:text-lg hover:scale-105 transform"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Purpose
            </h2>
            <div className="w-24 h-1.5 bg-[#B84A2B] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-gray-100 hover:border-[#B84A2B] transition-all duration-500 hover:shadow-2xl hover:transform hover:scale-[1.02]">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#B84A2B] rounded-2xl flex items-center justify-center mr-4 sm:mr-5 shadow-lg">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                To be India's most trusted interior brand recognized for uncompromising quality, refined design, and timeless craftsmanship that enhances the way people live.
              </p>
            </div>
            
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-gray-100 hover:border-[#B84A2B] transition-all duration-500 hover:shadow-2xl hover:transform hover:scale-[1.02]">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#B84A2B] rounded-2xl flex items-center justify-center mr-4 sm:mr-5 shadow-lg">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Mission</h3>
              </div>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                    To create living spaces where quality meets emotion — blending innovation with precision.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                    To uphold quality at every touchpoint — from design thinking to on-site execution.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                    To build trust through transparent processes, ethical practices, and lasting results.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                    To continually innovate in materials, techniques, and aesthetics without ever compromising quality.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full h-screen bg-gray-900 overflow-hidden px-0 sm:px-4 md:px-8 lg:px-16 py-0 sm:py-6 md:py-10">
        <div className="relative w-full h-full sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
          {carouselImages.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              
              <div className="relative h-full flex items-center px-6 sm:px-8 md:px-16 lg:px-24">
                <div className="max-w-2xl text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-2xl">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 font-light drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.price && (
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 font-semibold drop-shadow-lg text-[#B84A2B]">
                      {slide.price}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-2 sm:left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-[#B84A2B] backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-full transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </button>
        
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-2 sm:right-6 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-[#B84A2B] backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-full transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-[#B84A2B] w-8 sm:w-10 md:w-12"
                  : "bg-white/50 hover:bg-white/75 w-2 md:w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section - All 16 Categories */}
      <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-14 md:mb-20 text-gray-900">
            Explore Our Collections
          </h2>
          
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-5 xl:gap-6">
            {/* First 2 items */}
            {categories.slice(0, 2).map((category, index) => (
              <div
                key={index}
                className="relative h-80 xl:h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl xl:text-3xl font-bold mb-2 drop-shadow-lg">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-base xl:text-lg font-medium">{category.description}</p>
                </div>
              </div>
            ))}
            
            {/* Large Featured Item (ASAGI) - Spans 2 columns x 2 rows */}
            <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
              <img
                src={categories[2].image}
                alt={categories[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <h3 className="text-white text-5xl xl:text-6xl font-bold mb-4 drop-shadow-lg">
                  {categories[2].title}
                </h3>
                <p className="text-white/95 text-2xl xl:text-3xl font-semibold">{categories[2].description}</p>
              </div>
            </div>
            
            {/* Items 4-6 (IONIk, LOES, ANICA) */}
            {categories.slice(3, 6).map((category, index) => (
              <div
                key={index + 3}
                className="relative h-80 xl:h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl xl:text-3xl font-bold mb-2 drop-shadow-lg">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-base xl:text-lg font-medium">{category.description}</p>
                </div>
              </div>
            ))}

            {/* Remaining Categories (7-16) in 4-column grid */}
            {categories.slice(6, 16).map((category, index) => (
              <div
                key={index + 6}
                className="relative h-80 xl:h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl xl:text-3xl font-bold mb-2 drop-shadow-lg">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-base xl:text-lg font-medium">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tablet Grid (md to lg) */}
          <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-5">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`relative ${
                  index === 2 || index === 5 ? 'md:col-span-3 h-80' : 'h-80'
                } rounded-2xl overflow-hidden shadow-lg group cursor-pointer`}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`text-white ${
                    index === 2 || index === 5 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                  } font-bold mb-2 drop-shadow-lg`}>
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-base md:text-lg font-medium">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Grid */}
          <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`relative ${
                  index === 2 || index === 5 ? 'sm:col-span-2 h-80' : 'h-72'
                } rounded-2xl overflow-hidden shadow-lg group cursor-pointer`}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className={`text-white ${
                    index === 2 || index === 5 ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                  } font-bold mb-2 drop-shadow-lg`}>
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base font-medium">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
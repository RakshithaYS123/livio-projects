import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden bg-black border-b-4 md:border-b-8 border-white">
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
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pb-24 md:pb-32 z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 max-w-3xl leading-tight drop-shadow-lg">
            Crafted for Comfort. Designed with Soul. Built with Quality that Lasts.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl drop-shadow-md" style={{ color: "#fff" }}>
            Welcome to LIVIO — Crafted with Quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <button className="px-6 sm:px-8 py-3 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors font-medium shadow-lg">
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
              className="px-6 sm:px-8 py-3 bg-[#B84A2B] text-white rounded hover:bg-[#a24328] transition-colors font-medium text-center shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full h-screen bg-white overflow-hidden px-0 sm:px-4 md:px-8 lg:px-16 py-0 sm:py-6 md:py-10">
        {/* Carousel Images */}
        <div className="relative w-full h-full sm:rounded-lg md:rounded-2xl overflow-hidden shadow-2xl">
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
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Slide Content */}
              <div className="relative h-full flex items-center px-4 sm:px-6 md:px-16 lg:px-24">
                <div className="max-w-2xl text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 font-light drop-shadow-md">
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.price && (
                    <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 font-medium drop-shadow-md">
                      {slide.price}
                    </p>
                  )}
                  {slide.project && (
                    <div className="mt-6 sm:mt-8">
                      <p className="text-xs sm:text-sm mb-2 tracking-widest">PRE-LAUNCHING</p>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2">
                        {slide.project}
                      </h3>
                      {slide.location && (
                        <p className="text-base sm:text-lg tracking-wider">{slide.location}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Hidden on small mobile, visible on larger screens */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-2 sm:left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-full transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </button>
        
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-2 sm:right-6 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-full transition-all z-10"
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
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-6 sm:w-8 md:w-10"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
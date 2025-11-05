import React from "react";
import { Leaf } from "lucide-react";

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] bg-gradient-to-r from-gray-900 to-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/images/sustainability-hero.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#B84A2B]/20 backdrop-blur-sm rounded-full mb-6">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Sustainability
            </h1>
            <div className="w-24 h-1 bg-[#B84A2B] mx-auto mt-6"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p className="text-xl md:text-2xl font-medium text-gray-900">
            At Livio, <span className="text-[#B84A2B] font-semibold">sustainability begins with quality.</span>
          </p>
          
          <p className="text-lg md:text-xl">
            We believe lasting design is the most sustainable choice — <span className="font-semibold">built to endure, crafted responsibly, and designed with care for both people and the planet.</span>
          </p>
          
          <p className="text-lg md:text-xl">
            From mindful material selection to energy-efficient practices, we ensure every project reflects our commitment to a better, greener future.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's create spaces that are built to last
          </p>
          <a
            href={`mailto:Info@livioprojects.com?subject=${encodeURIComponent(
              "Enquiry Regarding Civil / Interior Work"
            )}`}
            className="inline-block px-8 py-3 bg-[#B84A2B] text-white rounded hover:bg-[#a24328] transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;
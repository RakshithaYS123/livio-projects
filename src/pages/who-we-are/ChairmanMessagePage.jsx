import React from "react";

const ChairmanMessagePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Chairman's Message
            </h1>
            <div className="w-24 h-1 bg-[#B84A2B] mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-6">
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-900 leading-relaxed">
              At Livio Interiors, our foundation rests on one principle — 
              <span className="text-[#B84A2B] font-semibold"> do it once, but do it right.</span>
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#B84A2B]">Quality is not an option; it's our promise.</span>
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Every project we deliver must meet the same standards we set for ourselves — 
              <span className="font-medium"> perfection in design, precision in execution, and satisfaction in experience.</span>
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              We believe our success lies not in the number of projects completed, 
              but in the <span className="font-semibold text-[#B84A2B]">quality of trust we build with every client.</span>
            </p>
          </div>

          {/* Signature */}
          <div className="pt-6 md:pt-8 border-t-2 border-gray-200">
            <div className="border-t-2 border-[#B84A2B] w-32 sm:w-48 mb-4"></div>
            <p className="font-semibold text-gray-900 text-base sm:text-lg">Chairman</p>
            <p className="text-sm sm:text-base text-gray-600">LIVIO Projects</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Experience Quality That Lasts
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
            Let us transform your space with our commitment to excellence
          </p>
          <a
            href={`mailto:Info@livioprojects.com?subject=${encodeURIComponent(
              "Enquiry Regarding Civil / Interior Work"
            )}`}
            className="inline-block px-6 sm:px-8 py-3 bg-[#B84A2B] text-white text-sm sm:text-base rounded hover:bg-[#a24328] transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessagePage;
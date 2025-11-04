import React from "react";
import { Quote } from "lucide-react";

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
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Chairman Image */}
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-400 rounded-full mx-auto mb-4"></div>
                  <p className="text-lg font-medium">Chairman Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Message Content */}
          <div className="space-y-6">
            <div className="relative">
              <Quote className="absolute -top-4 -left-2 w-12 h-12 text-[#B84A2B] opacity-20" />
              <div className="relative z-10 space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg md:text-xl font-medium text-gray-900">
                  At Livio Interiors, our foundation rests on one principle — 
                  <span className="text-[#B84A2B] font-semibold"> do it once, but do it right.</span>
                </p>

                <p className="text-base md:text-lg">
                  <span className="font-semibold text-[#B84A2B]">Quality is not an option; it's our promise.</span>
                </p>

                <p className="text-base md:text-lg">
                  Every project we deliver must meet the same standards we set for ourselves — 
                  <span className="font-medium"> perfection in design, precision in execution, and satisfaction in experience.</span>
                </p>

                <p className="text-base md:text-lg">
                  We believe our success lies not in the number of projects completed, 
                  but in the <span className="font-semibold text-[#B84A2B]">quality of trust we build with every client.</span>
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-8">
              <div className="border-t-2 border-[#B84A2B] w-48 mb-4"></div>
              <p className="font-semibold text-gray-900 text-lg">Chairman</p>
              <p className="text-gray-600">LIVIO Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Experience Quality That Lasts
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let us transform your space with our commitment to excellence
          </p>
          <a
            href={`mailto:rakshithays986@gmail.com?subject=${encodeURIComponent(
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

export default ChairmanMessagePage;
import React from "react";
import { Quote, Award, Target, Lightbulb } from "lucide-react";

const AboutFounderPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About Our Founder
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              The Vision Behind Livio
            </p>
            <div className="w-24 h-1 bg-[#B84A2B] mx-auto mt-4"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Founder Image/Info */}
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual founder image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-400 rounded-full mx-auto mb-4"></div>
                  <p className="text-lg font-medium">Founder Photo</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#B84A2B] to-[#a24328] p-6 rounded-lg text-white shadow-lg">
              <h3 className="text-xl font-bold mb-2">The Livio Philosophy</h3>
              <p className="text-white/90 italic">
                "Quality is not just a standard — it's a mindset."
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Award className="w-5 h-5 text-[#B84A2B] flex-shrink-0" />
                <p className="text-sm text-gray-700">Years of Multinational Experience</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Target className="w-5 h-5 text-[#B84A2B] flex-shrink-0" />
                <p className="text-sm text-gray-700">Global Perspective & Technical Expertise</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Lightbulb className="w-5 h-5 text-[#B84A2B] flex-shrink-0" />
                <p className="text-sm text-gray-700">Commitment to Sustainable Design</p>
              </div>
            </div>
          </div>

          {/* Right Column - Message Content */}
          <div className="space-y-8">
            <div className="relative">
              <Quote className="absolute -top-4 -left-2 w-16 h-16 text-[#B84A2B] opacity-10" />
              <div className="relative z-10 space-y-6">
                {/* Journey Section */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-1 h-8 bg-[#B84A2B]"></div>
                    The Journey
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    With years of experience in a leading multinational company, our founder brought a 
                    <span className="font-semibold text-[#B84A2B]"> global perspective</span> and 
                    <span className="font-semibold text-[#B84A2B]"> deep technical expertise</span> into the world of interiors.
                  </p>
                </div>

                {/* Vision Section */}
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#B84A2B]">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Guided by that experience, <span className="font-bold text-[#B84A2B]">Livio was born</span> with a single purpose — 
                    to deliver <span className="font-semibold">uncompromising quality</span> and 
                    <span className="font-semibold"> sustainable design</span> in every project.
                  </p>
                </div>

                {/* Quote Section */}
                <div className="pt-6">
                  <p className="text-lg md:text-xl text-gray-600 mb-6 italic">
                    In his words:
                  </p>
                  
                  <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#B84A2B]/20">
                    <div className="space-y-4">
                      <p className="text-xl md:text-2xl font-bold text-[#B84A2B]">
                        "Quality is not just a standard — it's a mindset.
                      </p>
                      
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Every material we choose, every finish we perfect, and every promise we make must reflect 
                        <span className="font-semibold"> quality in its truest form.</span>
                      </p>
                      
                      <p className="text-base md:text-lg text-gray-900 font-semibold">
                        That's the foundation on which Livio stands."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Principles */}
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Core Principles</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Every material chosen with care and purpose</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Every finish perfected to the highest standard</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Every promise reflecting quality in its truest form</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-8 border-t-2 border-gray-200">
              <div className="border-t-2 border-[#B84A2B] w-48 mb-4"></div>
              <p className="font-semibold text-gray-900 text-lg">Founder</p>
              <p className="text-gray-600">LIVIO Interiors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats/Impact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#B84A2B] mb-2">Global</div>
              <p className="text-gray-700 font-medium">Perspective</p>
              <p className="text-sm text-gray-600 mt-2">Bringing international standards to every project</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#B84A2B] mb-2">Technical</div>
              <p className="text-gray-700 font-medium">Expertise</p>
              <p className="text-sm text-gray-600 mt-2">Deep industry knowledge and precision</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#B84A2B] mb-2">Sustainable</div>
              <p className="text-gray-700 font-medium">Design</p>
              <p className="text-sm text-gray-600 mt-2">Quality that lasts for generations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience the Livio Difference?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's bring quality and sustainability to your next project
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

export default AboutFounderPage;
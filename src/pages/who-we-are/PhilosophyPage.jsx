import React from "react";

const PhilosophyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Philosophy
            </h1>
            <div className="w-24 h-1 bg-[#B84A2B] mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Crafted with Quality Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Crafted with Quality
          </h2>
          <div className="w-16 h-1 bg-[#B84A2B] mx-auto mb-8"></div>
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            At Livio, <span className="font-semibold text-[#B84A2B]">quality is the foundation of everything we create.</span>
          </p>
          
          <p>
            From concept to completion, each project is guided by meticulous attention to detail and the highest standards of craftsmanship.
          </p>
          
          <p>
            We select only the finest materials, partner with skilled artisans, and implement precise execution techniques to ensure 
            <span className="font-semibold"> durability, beauty, and functionality.</span>
          </p>

          <p className="text-xl font-medium text-gray-900 pt-4">
            Every edge polished, every joint aligned, every texture perfected — because for us, 
            <span className="text-[#B84A2B] font-semibold"> quality is not an act; it's a habit.</span>
          </p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vision & Mission
            </h2>
            <div className="w-16 h-1 bg-[#B84A2B] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#B84A2B]">
              <h3 className="text-2xl font-bold text-[#B84A2B] mb-4">Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be India's most trusted interior brand recognized for uncompromising quality, refined design, 
                and timeless craftsmanship that enhances the way people live.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#B84A2B]">
              <h3 className="text-2xl font-bold text-[#B84A2B] mb-4">Mission</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2 flex-shrink-0"></div>
                  <p>To create living spaces where quality meets emotion — blending innovation with precision.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2 flex-shrink-0"></div>
                  <p>To uphold quality at every touchpoint — from design thinking to on-site execution.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2 flex-shrink-0"></div>
                  <p>To build trust through transparent processes, ethical practices, and lasting results.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2 flex-shrink-0"></div>
                  <p>To continually innovate in materials, techniques, and aesthetics without ever compromising quality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Livio Way Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Livio Way
          </h2>
          <div className="w-16 h-1 bg-[#B84A2B] mx-auto mb-8"></div>
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            The Livio Way is built on three pillars — 
            <span className="font-semibold text-[#B84A2B]"> quality, craftsmanship, and sustainability.</span>
          </p>
          
          <p>
            Every design begins with purpose and ends in precision.
          </p>
          
          <p>
            We select durable, responsible materials and craft spaces that last — in 
            <span className="font-semibold"> beauty, function, and conscience.</span>
          </p>

          <p className="text-xl font-medium text-gray-900 pt-4">
            Because for us, <span className="text-[#B84A2B] font-semibold">true luxury lies in quality that's sustainably made and beautifully lived.</span>
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Experience the Livio Philosophy
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's bring quality, craftsmanship, and sustainability to your space
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

export default PhilosophyPage;
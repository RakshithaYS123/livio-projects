import React from "react";
import { Users, Award, Target, TrendingUp, Scale } from "lucide-react";

const LeadershipTeamPage = () => {
  const teamMembers = [
    {
      name: "Mr. Shashank C R",
      position: "Founder",
      description: "A visionary leader who drives Livio's mission with passion and precision. He oversees every aspect of the company's growth — from concept to completion — ensuring innovation, quality, and customer trust remain at the heart of every project.",
      icon: Award
    },
    {
      name: "Mr. Ronith",
      position: "Head of Sales, Marketing & Operations",
      description: "Brings strategic vision and operational excellence, ensuring every project meets client expectations efficiently.",
      icon: TrendingUp
    },
    {
      name: "Mr. Dhanraj",
      position: "Head of Quality",
      description: "The guardian of our standards, overseeing every detail to ensure uncompromising quality in materials, design, and execution.",
      icon: Award
    },
    {
      name: "Ms. Sowprathi",
      position: "Head of Design & Finance",
      description: "Balances creativity with financial insight, shaping innovative designs while ensuring sustainable and cost-effective solutions.",
      icon: Target
    },
    {
      name: "Mr. Tajamul Rasool",
      position: "Head of Execution & Legal",
      description: "Ensures smooth project delivery and compliance, translating designs into flawless, legally sound, and timely execution.",
      icon: Scale
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-72 md:h-96 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#B84A2B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B84A2B] rounded-full blur-3xl"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <div className="text-center">
            <div className="inline-block p-3 bg-[#B84A2B]/20 rounded-full mb-4">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-[#B84A2B]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Leadership Team
            </h1>
            <div className="w-24 h-1 bg-[#B84A2B] mx-auto mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced professionals united by excellence
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-[#B84A2B]/10 rounded-full mb-6">
            <span className="text-sm sm:text-base font-semibold text-[#B84A2B]">WHO WE ARE</span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Our leadership team brings together seasoned professionals with experience in India's largest market giants, 
            combining <span className="font-semibold text-[#B84A2B]">industry expertise</span> with a shared passion for 
            <span className="font-semibold text-gray-900"> quality, innovation, and excellence.</span>
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid gap-6 md:gap-8 mb-12 md:mb-16">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div 
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-[#B84A2B] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#B84A2B] to-[#a24328] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#B84A2B] transition-colors">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      <div className="h-px flex-grow bg-gradient-to-r from-[#B84A2B] to-transparent max-w-xs"></div>
                    </div>
                    <p className="text-[#B84A2B] font-semibold text-base sm:text-lg md:text-xl mb-3 md:mb-4">
                      {member.position}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 sm:p-10 md:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#B84A2B] rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#B84A2B] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#B84A2B] rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed max-w-3xl mx-auto">
              Together, our Board of Directors embodies the Livio promise: 
              <span className="text-[#B84A2B] font-bold"> excellence in design, precision in execution, and quality in every decision.</span>
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Work With Our Expert Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-10">
            Experience the difference of working with industry leaders
          </p>
          <a
            href={`mailto:Info@livioprojects.com?subject=${encodeURIComponent(
              "Enquiry Regarding Civil / Interior Work"
            )}`}
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#B84A2B] text-white text-base sm:text-lg rounded-lg hover:bg-[#a24328] transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeamPage;
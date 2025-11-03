import React from "react";
import { Users, Award, Lightbulb, Target, CheckCircle } from "lucide-react";

const BoardOfDirectorsPage = () => {
  // Sample board members - replace with actual data
  const boardMembers = [
    {
      name: "Director Name",
      position: "Chief Executive Officer",
      expertise: "Strategic Leadership & Business Development",
      image: null
    },
    {
      name: "Director Name",
      position: "Chief Design Officer",
      expertise: "Interior Design & Space Planning",
      image: null
    },
    {
      name: "Director Name",
      position: "Chief Technical Officer",
      expertise: "Engineering & Project Execution",
      image: null
    },
    {
      name: "Director Name",
      position: "Director of Operations",
      expertise: "Quality Control & Operations Management",
      image: null
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Board of Directors
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Leadership United by Quality
            </p>
            <div className="w-24 h-1 bg-[#B84A2B] mx-auto mt-4"></div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B84A2B]/10 rounded-full mb-6">
            <Users className="w-8 h-8 text-[#B84A2B]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Livio Leadership Team
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              The Livio Leadership Team is a collective of <span className="font-semibold text-[#B84A2B]">designers, engineers, and innovators</span> who share one common value — an <span className="font-semibold">obsession with quality.</span>
            </p>
            <p>
              Their expertise ensures that every Livio space reflects <span className="font-semibold">superior craftsmanship, functionality, and aesthetic brilliance.</span>
            </p>
            <p className="text-xl font-medium text-gray-900 pt-4">
              From concept to handover, the team ensures that quality remains the constant — in every detail, decision, and delivery.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:border-[#B84A2B] transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-[#B84A2B]/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#B84A2B]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Superior Craftsmanship</h3>
            <p className="text-gray-600">Excellence in execution, precision in every detail</p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:border-[#B84A2B] transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-[#B84A2B]/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[#B84A2B]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Functional Excellence</h3>
            <p className="text-gray-600">Spaces designed for optimal functionality and flow</p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:border-[#B84A2B] transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-[#B84A2B]/10 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-[#B84A2B]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aesthetic Brilliance</h3>
            <p className="text-gray-600">Design that inspires and transforms</p>
          </div>
        </div>

        {/* Board Members Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Directors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all group"
              >
                {/* Member Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-3"></div>
                      <p className="text-sm font-medium">Director Photo</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#B84A2B] font-semibold mb-3">
                    {member.position}
                  </p>
                  <div className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#B84A2B] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{member.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Commitment Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border-2 border-[#B84A2B]/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Commitment to Quality
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex items-start gap-4 text-left">
                <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2 flex-shrink-0"></div>
                <p><span className="font-semibold">Every Detail:</span> Meticulous attention from design to execution</p>
              </div>
              <div className="flex items-start gap-4 text-left">
                <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2 flex-shrink-0"></div>
                <p><span className="font-semibold">Every Decision:</span> Guided by expertise and commitment to excellence</p>
              </div>
              <div className="flex items-start gap-4 text-left">
                <div className="w-2 h-2 bg-[#B84A2B] rounded-full mt-2 flex-shrink-0"></div>
                <p><span className="font-semibold">Every Delivery:</span> Quality that exceeds expectations</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xl font-semibold text-[#B84A2B] italic">
                "Quality remains the constant — in every detail, decision, and delivery."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Stats Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-5xl font-bold text-[#B84A2B] mb-2">Designers</div>
              <p className="text-gray-300 text-lg">Creative Visionaries</p>
              <p className="text-sm text-gray-400 mt-2">Bringing spaces to life with aesthetic brilliance</p>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold text-[#B84A2B] mb-2">Engineers</div>
              <p className="text-gray-300 text-lg">Technical Experts</p>
              <p className="text-sm text-gray-400 mt-2">Ensuring precision and structural excellence</p>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold text-[#B84A2B] mb-2">Innovators</div>
              <p className="text-gray-300 text-lg">Problem Solvers</p>
              <p className="text-sm text-gray-400 mt-2">Pushing boundaries with creative solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Work With Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the difference of working with leaders obsessed with quality
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

export default BoardOfDirectorsPage;